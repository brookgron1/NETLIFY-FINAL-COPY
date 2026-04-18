function doGet(e) {
  var view = String((e && e.parameter && e.parameter.view) || "").toLowerCase();
  var page = view === "admin" ? "Admin" : "Index";
  var title = view === "admin"
    ? "Nha Trang Escape Room - Admin"
    : "Nha Trang Escape Room - Booking";

  return HtmlService.createTemplateFromFile(page)
    .evaluate()
    .setTitle(title)
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// Booking config.
var SPREADSHEET_ID = "1vHuPgM4QSc78tTHD_iXLn8Yr7Nom0DhnhfakDph7TCs";
var BOOKINGS_SHEET_NAME = "Bookings";
var AVAILABILITY_SHEET_NAME = "Availability";

var SLOT_MINUTES = 60;
var BUFFER_MINUTES = 30;
var LEAD_MINUTES = 15;
var TZ = "Asia/Ho_Chi_Minh";

var VND_PER_USD = 25000;

// Calendar sync.
var SYNC_TO_CALENDAR = true;
var CALENDAR_ID = "primary";

// Pricing rules.
var PRICE_ARRIVAL_PER_PERSON = 400000;
var PRICE_VIETQR_PREPAID_PER_PERSON = 350000;
var DEPOSIT_ONLY_AMOUNT_VND = 350000;
var MIN_CHARGE_PLAYERS = 4;

// Card payments.
var PAYPAL_ME_URL = "https://paypal.me/NhatrangEscapeRoom";
var CARD_DEPOSIT_USD = 16;
var CARD_PREPAID_PER_PERSON_USD = 16;

// Contact links.
var CONTACT_LINKS = {
  tel: "tel:+84393690550",
  sms: "sms:+84393690550",
  whatsapp: "https://wa.me/84393690550",
  zalo: "https://zalo.me/0393690550",
  kakao: "http://dn.kakao.com",
  facebook: "https://www.facebook.com/profile.php?id=61588050163602",
  maps: "https://www.google.com/maps/search/?api=1&query=Escape%20Room%20Nha%20Trang%2C%20STH32B.15%2C%20%C4%91%C6%B0%E1%BB%9Dng%2035%2C%20khu%20%C4%91%C3%B4%20th%E1%BB%8B%20L%C3%AA%2C%20Nam%20Nha%20Trang%2C%20Kh%C3%A1nh%20H%C3%B2a%2057136%2C%20Nha%20Trang%2C%20Kh%C3%A1nh%20H%C3%B2a%20650000%2C%2065HH%2B4V%20Nam%20Nha%20Trang%2C%20Khanh%20Hoa%2C%20Vietnam"
};
var VENUE_ADDRESS = "Escape Room Nha Trang, STH32B.15, đường 35, khu đô thị Lê, Nam Nha Trang, Khánh Hòa 57136, Nha Trang, Khánh Hòa 650000 (65HH+4V Nam Nha Trang, Khanh Hoa, Vietnam)";

// Hours.
var OPEN_HOUR = 11;
var CLOSE_HOUR = 23;

// Admin access.
var ADMIN_ACCESS_CODE = "2711";
var ADMIN_ALERT_EMAIL = "brook.gron1@gmail.com";
var SEND_ADMIN_BOOKING_ALERTS = true;
// Optional: set this to your deployed admin page URL to change the link in booking alert emails.
var ADMIN_ALERT_BOOKINGS_URL = "";

var VALID_BOOKING_STATUSES = {
  PENDING: true,
  APPROVED: true,
  DENIED: true
};

var BOOKING_COLUMN_COUNT = 14;
var BOOKING_STATUS_COLUMN = 12;
var BOOKING_EVENT_ID_COLUMN = 13;
var BOOKING_DENIED_AT_COLUMN = 14;
var DENIED_RETENTION_HOURS = 24;

function getSpreadsheet_() {
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

function getBookingsSheet_() {
  var ss = getSpreadsheet_();
  var sh = ss.getSheetByName(BOOKINGS_SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(BOOKINGS_SHEET_NAME);
  }

  if (sh.getLastRow() === 0) {
    sh.appendRow([
      "CreatedAt",
      "BookingId",
      "StartISO",
      "Date",
      "Time",
      "Players",
      "Name",
      "Phone",
      "Email",
      "Note",
      "Lang",
      "Status",
      "EventId",
      "DeniedAt"
    ]);
  }

  var headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].map(String);
  if (headers.indexOf("EventId") === -1) {
    sh.getRange(1, sh.getLastColumn() + 1).setValue("EventId");
  }
  headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].map(String);
  if (headers.indexOf("DeniedAt") === -1) {
    sh.getRange(1, sh.getLastColumn() + 1).setValue("DeniedAt");
  }

  return sh;
}

function getAvailabilitySheet_() {
  var ss = getSpreadsheet_();
  var sh = ss.getSheetByName(AVAILABILITY_SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(AVAILABILITY_SHEET_NAME);
  }

  if (sh.getLastRow() === 0) {
    sh.appendRow([
      "Date",
      "Time",
      "IsBlocked",
      "UpdatedAt",
      "Note"
    ]);
  }

  return sh;
}

function getTodayVN_() {
  return Utilities.formatDate(new Date(), TZ, "yyyy-MM-dd");
}

function isDateObject_(value) {
  return Object.prototype.toString.call(value) === "[object Date]" && !isNaN(value.getTime());
}

function pad2_(value) {
  return ("0" + Number(value)).slice(-2);
}

function normalizeDate_(dateStr) {
  if (isDateObject_(dateStr)) {
    return Utilities.formatDate(dateStr, TZ, "yyyy-MM-dd");
  }

  var normalized = String(dateStr || "").trim();
  var ymdMatch = normalized.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);
  if (!ymdMatch) {
    throw new Error("Bad date");
  }

  return ymdMatch[1] + "-" + pad2_(ymdMatch[2]) + "-" + pad2_(ymdMatch[3]);
}

function normalizeTime_(timeStr) {
  if (isDateObject_(timeStr)) {
    return Utilities.formatDate(timeStr, TZ, "HH:mm");
  }

  var normalized = String(timeStr || "").trim();
  var match24 = normalized.match(/^(\d{1,2}):(\d{2})(?::\d{2})?$/);
  if (match24) {
    var hour24 = Number(match24[1]);
    var minute24 = Number(match24[2]);
    if (hour24 < 0 || hour24 > 23 || minute24 < 0 || minute24 > 59) {
      throw new Error("Bad time");
    }
    return pad2_(hour24) + ":" + pad2_(minute24);
  }

  var compact = normalized.toUpperCase().replace(/\s+/g, "");
  var match12 = compact.match(/^(\d{1,2})(?::(\d{2}))?(AM|PM)$/);
  if (match12) {
    var hour12 = Number(match12[1]);
    var minute12 = Number(match12[2] || "00");
    if (hour12 < 1 || hour12 > 12 || minute12 < 0 || minute12 > 59) {
      throw new Error("Bad time");
    }
    var convertedHour = hour12 % 12;
    if (match12[3] === "PM") {
      convertedHour += 12;
    }
    return pad2_(convertedHour) + ":" + pad2_(minute12);
  }

  throw new Error("Bad time");
}

function timeStringToMinutes_(timeStr) {
  var parts = normalizeTime_(timeStr).split(":");
  return Number(parts[0]) * 60 + Number(parts[1]);
}

function minutesToTimeString_(totalMinutes) {
  var minutesInDay = 24 * 60;
  var normalized = ((Number(totalMinutes) % minutesInDay) + minutesInDay) % minutesInDay;
  var hh = Math.floor(normalized / 60);
  var mm = normalized % 60;
  return ("0" + hh).slice(-2) + ":" + ("0" + mm).slice(-2);
}

function formatDisplayTime_(timeStr) {
  var parts = normalizeTime_(timeStr).split(":");
  var hour24 = Number(parts[0]);
  var minute = Number(parts[1]);
  var suffix = hour24 >= 12 ? "PM" : "AM";
  var hour12 = hour24 % 12 || 12;
  return hour12 + ":" + ("0" + minute).slice(-2) + " " + suffix;
}

function buildSlotInfo_(timeStr) {
  var startTime = normalizeTime_(timeStr);
  var endTime = minutesToTimeString_(timeStringToMinutes_(startTime) + SLOT_MINUTES);
  return {
    time: startTime,
    endTime: endTime,
    label: formatDisplayTime_(startTime) + " - " + formatDisplayTime_(endTime)
  };
}

function getSlotDefinitions_() {
  var slots = [];
  var spacingMinutes = SLOT_MINUTES + BUFFER_MINUTES;
  var startMinutes = OPEN_HOUR * 60;
  var endMinutes = CLOSE_HOUR * 60;

  for (var current = startMinutes; current <= endMinutes; current += spacingMinutes) {
    slots.push(buildSlotInfo_(minutesToTimeString_(current)));
  }

  return slots;
}

function getSlotInfoByTime_(timeStr) {
  var targetTime = normalizeTime_(timeStr);
  var slots = getSlotDefinitions_();

  for (var i = 0; i < slots.length; i++) {
    if (slots[i].time === targetTime) {
      return slots[i];
    }
  }

  return buildSlotInfo_(targetTime);
}

function isConfiguredSlotTime_(timeStr) {
  var targetTime = normalizeTime_(timeStr);
  var slots = getSlotDefinitions_();

  for (var i = 0; i < slots.length; i++) {
    if (slots[i].time === targetTime) {
      return true;
    }
  }

  return false;
}

function assertWithinHours_(timeStr) {
  if (!isConfiguredSlotTime_(timeStr)) {
    throw new Error("Outside booking hours");
  }
}

function parseStart_(dateStr, timeStr) {
  return new Date(normalizeDate_(dateStr) + "T" + normalizeTime_(timeStr) + ":00+07:00");
}

function generateId_() {
  return "VN-" + Utilities.getUuid().slice(0, 8).toUpperCase();
}

function isSameDayVN_(dateStr) {
  return normalizeDate_(dateStr) === getTodayVN_();
}

function slotKey_(dateStr, timeStr) {
  return normalizeDate_(dateStr) + " " + normalizeTime_(timeStr);
}

function normalizeStatus_(status) {
  var normalized = String(status || "").trim().toUpperCase();
  return VALID_BOOKING_STATUSES[normalized] ? normalized : "";
}

function normalizeBoolean_(value) {
  return value === true || String(value).toUpperCase() === "TRUE" || String(value) === "1";
}

function normalizeDateTimeValue_(value) {
  if (!value) {
    return "";
  }
  if (isDateObject_(value)) {
    return Utilities.formatDate(value, TZ, "yyyy-MM-dd HH:mm:ss");
  }
  return String(value || "").trim();
}

function parseSheetDateTime_(value) {
  if (!value) {
    return null;
  }
  if (isDateObject_(value)) {
    return new Date(value.getTime());
  }

  var normalized = String(value || "").trim().replace("T", " ");
  var match = normalized.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2}) (\d{1,2}):(\d{2})(?::(\d{2}))?$/);
  if (!match) {
    return null;
  }

  return new Date(
    match[1] + "-" +
    pad2_(match[2]) + "-" +
    pad2_(match[3]) + "T" +
    pad2_(match[4]) + ":" +
    pad2_(match[5]) + ":" +
    pad2_(match[6] || 0) +
    "+07:00"
  );
}

function splitBookingNote_(rawNote) {
  var note = String(rawNote || "");
  var pricingMarker = "\nOption=";
  var markerIndex = note.indexOf(pricingMarker);

  if (markerIndex >= 0) {
    return {
      customerNote: note.slice(0, markerIndex).trim(),
      pricingMeta: note.slice(markerIndex + 1).trim()
    };
  }

  if (note.indexOf("Option=") === 0) {
    return {
      customerNote: "",
      pricingMeta: note.trim()
    };
  }

  return {
    customerNote: note.trim(),
    pricingMeta: ""
  };
}

function bookingRowToObject_(row, rowNumber) {
  var parts = splitBookingNote_(row[9]);
  var normalizedDate = "";
  var normalizedTime = "";
  var status = normalizeStatus_(row[11]) || "PENDING";
  var deniedAt = normalizeDateTimeValue_(row[13]);

  try {
    normalizedDate = row[3] ? normalizeDate_(row[3]) : "";
  } catch (err) {
    normalizedDate = "";
  }

  try {
    normalizedTime = row[4] ? normalizeTime_(row[4]) : "";
  } catch (err) {
    normalizedTime = "";
  }

  if (status === "DENIED" && !deniedAt) {
    deniedAt = normalizeDateTimeValue_(row[0]);
  }

  var slotInfo = normalizedTime
    ? getSlotInfoByTime_(normalizedTime)
    : {
        time: "",
        endTime: "",
        label: String(row[4] || "-")
      };

  return {
    rowNumber: rowNumber,
    createdAt: String(row[0] || ""),
    bookingId: String(row[1] || ""),
    startISO: String(row[2] || ""),
    date: normalizedDate || String(row[3] || ""),
    time: normalizedTime || String(row[4] || ""),
    slotEndTime: slotInfo.endTime,
    slotLabel: slotInfo.label,
    players: String(row[5] || ""),
    name: String(row[6] || ""),
    phone: String(row[7] || ""),
    email: String(row[8] || ""),
    note: parts.customerNote,
    pricingMeta: parts.pricingMeta,
    rawNote: String(row[9] || ""),
    lang: String(row[10] || ""),
    status: status,
    eventId: String(row[12] || ""),
    deniedAt: deniedAt
  };
}

function getBookingsData_() {
  var sh = getBookingsSheet_();
  var lastRow = sh.getLastRow();
  if (lastRow <= 1) {
    return [];
  }

  var values = sh.getRange(2, 1, lastRow - 1, BOOKING_COLUMN_COUNT).getValues();
  var bookings = [];
  for (var i = 0; i < values.length; i++) {
    bookings.push(bookingRowToObject_(values[i], i + 2));
  }
  return bookings;
}

function sortAdminBookings_(bookings) {
  var statusOrder = {
    PENDING: 0,
    APPROVED: 1,
    DENIED: 2
  };

  bookings.sort(function(a, b) {
    var statusDiff = statusOrder[a.status] - statusOrder[b.status];
    if (statusDiff !== 0) {
      return statusDiff;
    }

    if (a.status === "APPROVED") {
      return String(a.startISO || "").localeCompare(String(b.startISO || ""));
    }

    return b.rowNumber - a.rowNumber;
  });

  return bookings;
}

function getBlockedSlotMap_(dateStr) {
  var sh = getAvailabilitySheet_();
  var lastRow = sh.getLastRow();
  var blocked = {};

  if (lastRow <= 1) {
    return blocked;
  }

  var targetDate = dateStr ? normalizeDate_(dateStr) : "";
  var values = sh.getRange(2, 1, lastRow - 1, 5).getValues();

  for (var i = 0; i < values.length; i++) {
    var rowDate = "";
    var rowTime = "";

    if (!values[i][0] || !values[i][1]) {
      continue;
    }
    try {
      rowDate = normalizeDate_(values[i][0]);
      rowTime = normalizeTime_(values[i][1]);
    } catch (err) {
      continue;
    }
    if (targetDate && rowDate !== targetDate) {
      continue;
    }

    blocked[slotKey_(rowDate, rowTime)] = normalizeBoolean_(values[i][2]);
  }

  return blocked;
}

function isSlotBlockedByAdmin_(dateStr, timeStr) {
  var blocked = getBlockedSlotMap_(dateStr);
  return !!blocked[slotKey_(dateStr, timeStr)];
}

function findAvailabilityRow_(dateStr, timeStr) {
  var sh = getAvailabilitySheet_();
  var lastRow = sh.getLastRow();
  if (lastRow <= 1) {
    return 0;
  }

  var targetDate = normalizeDate_(dateStr);
  var targetTime = normalizeTime_(timeStr);
  var values = sh.getRange(2, 1, lastRow - 1, 2).getValues();

  for (var i = values.length - 1; i >= 0; i--) {
    var rowDate = "";
    var rowTime = "";
    try {
      rowDate = normalizeDate_(values[i][0]);
      rowTime = normalizeTime_(values[i][1]);
    } catch (err) {
      continue;
    }

    if (rowDate === targetDate && rowTime === targetTime) {
      return i + 2;
    }
  }

  return 0;
}

function setSlotBlocked_(dateStr, timeStr, isBlocked, note) {
  var sh = getAvailabilitySheet_();
  var rowNumber = findAvailabilityRow_(dateStr, timeStr);
  var updatedAt = Utilities.formatDate(new Date(), TZ, "yyyy-MM-dd HH:mm:ss");
  var values = [
    normalizeDate_(dateStr),
    normalizeTime_(timeStr),
    !!isBlocked,
    updatedAt,
    String(note || "")
  ];

  if (rowNumber) {
    sh.getRange(rowNumber, 1, 1, values.length).setValues([values]);
  } else {
    sh.appendRow(values);
  }
}

function slotTaken_(start, excludeRowNumber) {
  var sh = getBookingsSheet_();
  var lastRow = sh.getLastRow();
  if (lastRow <= 1) {
    return false;
  }

  var values = sh.getRange(2, 1, lastRow - 1, 13).getValues();
  var windowMs = (SLOT_MINUTES + BUFFER_MINUTES) * 60 * 1000;
  var startMs = start.getTime();

  for (var i = 0; i < values.length; i++) {
    var rowNumber = i + 2;
    if (excludeRowNumber && rowNumber === excludeRowNumber) {
      continue;
    }

    var status = normalizeStatus_(values[i][11]);
    if (status !== "APPROVED") {
      continue;
    }

    var iso = values[i][2];
    var existing = iso ? new Date(iso) : null;
    if (!existing || isNaN(existing.getTime())) {
      try {
        existing = parseStart_(values[i][3], values[i][4]);
      } catch (err) {
        existing = null;
      }
    }
    if (!existing || isNaN(existing.getTime())) {
      continue;
    }

    if (Math.abs(existing.getTime() - startMs) < windowMs) {
      return true;
    }
  }

  return false;
}

function computePricing_(optionValue) {
  if (String(optionValue) === "deposit") {
    return {
      mode: "deposit",
      playersSelected: 0,
      chargedPlayers: 0,
      vietqrPrepaidVnd: DEPOSIT_ONLY_AMOUNT_VND,
      arrivalVnd: PRICE_ARRIVAL_PER_PERSON * MIN_CHARGE_PLAYERS,
      cardDepositUsd: CARD_DEPOSIT_USD,
      cardPrepaidUsd: CARD_PREPAID_PER_PERSON_USD * MIN_CHARGE_PLAYERS
    };
  }

  var playersSelected = Math.max(0, parseInt(optionValue, 10) || 0);
  var chargedPlayers = Math.max(playersSelected, MIN_CHARGE_PLAYERS);

  return {
    mode: "players",
    playersSelected: playersSelected,
    chargedPlayers: chargedPlayers,
    vietqrPrepaidVnd: PRICE_VIETQR_PREPAID_PER_PERSON * chargedPlayers,
    arrivalVnd: PRICE_ARRIVAL_PER_PERSON * chargedPlayers,
    cardDepositUsd: CARD_DEPOSIT_USD,
    cardPrepaidUsd: CARD_PREPAID_PER_PERSON_USD * chargedPlayers
  };
}

function spreadsheetUrl_() {
  return "https://docs.google.com/spreadsheets/d/" + SPREADSHEET_ID + "/edit";
}

function adminAlertUrl_() {
  return String(ADMIN_ALERT_BOOKINGS_URL || "").trim() || spreadsheetUrl_();
}

function formatBookingAlertText_(booking) {
  var slotLabel = booking.slotLabel || getSlotInfoByTime_(booking.time || "00:00").label;
  var lines = [
    "A new booking request was received.",
    "",
    "Booking ID: " + booking.bookingId,
    "Status: " + booking.status,
    booking.createdAt ? "Requested: " + booking.createdAt : "",
    "Booking date: " + booking.date,
    "Booked slot: " + slotLabel,
    "Players / option: " + booking.players,
    "Name: " + booking.name,
    "Phone: " + booking.phone,
    booking.email ? "Email: " + booking.email : "",
    booking.note ? "Note: " + booking.note : "",
    booking.pricingMeta ? "Pricing: " + booking.pricingMeta : "",
    "",
    "Open bookings:",
    adminAlertUrl_()
  ];

  return lines.filter(Boolean).join("\n");
}

function sendAdminBookingAlert_(booking) {
  if (!SEND_ADMIN_BOOKING_ALERTS || !ADMIN_ALERT_EMAIL) {
    return;
  }

  var subject = [
    "New Escape Room Booking",
    booking.date,
    booking.slotLabel || getSlotInfoByTime_(booking.time || "00:00").label,
    booking.name ? "- " + booking.name : ""
  ].filter(Boolean).join(" ");

  try {
    MailApp.sendEmail({
      to: ADMIN_ALERT_EMAIL,
      subject: subject,
      body: formatBookingAlertText_(booking)
    });
  } catch (err) {
    Logger.log("Admin booking alert email failed: " + err);
  }
}

function contactPhoneDisplay_() {
  return String(CONTACT_LINKS.tel || CONTACT_LINKS.sms || "")
    .replace(/^tel:/, "")
    .replace(/^sms:/, "");
}

function formatNumberWithCommas_(value) {
  return String(Math.round(Number(value) || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function customerApprovedEmailSubject_(booking) {
  var slotLabel = booking.slotLabel || getSlotInfoByTime_(booking.time || "00:00").label;
  return [
    "Booking Confirmed",
    booking.date || "",
    slotLabel || ""
  ].filter(Boolean).join(" - ");
}

function formatCustomerApprovedEmailText_(booking) {
  var slotLabel = booking.slotLabel || getSlotInfoByTime_(booking.time || "00:00").label;
  var lines = [
    "Date: " + (booking.date || ""),
    "Time: " + slotLabel,
    "",
    "Your booking has been accepted.",
    "Cash on arrival: " + formatNumberWithCommas_(PRICE_ARRIVAL_PER_PERSON) + " VND per person.",
    "Location: " + VENUE_ADDRESS,
    "Facebook: " + String(CONTACT_LINKS.facebook || ""),
    "Phone: " + contactPhoneDisplay_(),
    "",
    "Booking ID: " + booking.bookingId
  ];

  return lines.filter(Boolean).join("\n");
}

function sendCustomerApprovedBookingEmail_(booking) {
  var email = String((booking && booking.email) || "").trim();
  if (!email) {
    return;
  }

  try {
    MailApp.sendEmail({
      to: email,
      subject: customerApprovedEmailSubject_(booking),
      body: formatCustomerApprovedEmailText_(booking),
      name: "Escape Room Nha Trang",
      replyTo: ADMIN_ALERT_EMAIL
    });
  } catch (err) {
    Logger.log("Customer approved booking email failed: " + err);
  }
}

function apiGetConfig() {
  return {
    ok: true,
    priceArrival: PRICE_ARRIVAL_PER_PERSON,
    priceVietqrPrepaid: PRICE_VIETQR_PREPAID_PER_PERSON,
    depositOnly: DEPOSIT_ONLY_AMOUNT_VND,
    minChargePlayers: MIN_CHARGE_PLAYERS,
    openHour: OPEN_HOUR,
    closeHour: CLOSE_HOUR,
    slotMinutes: SLOT_MINUTES,
    bufferMinutes: BUFFER_MINUTES,
    leadMinutes: LEAD_MINUTES,
    paypalUrl: PAYPAL_ME_URL,
    links: CONTACT_LINKS,
    cardDepositUsd: CARD_DEPOSIT_USD,
    cardPrepaidPerPersonUsd: CARD_PREPAID_PER_PERSON_USD,
    vndPerUsd: VND_PER_USD,
    vietQrImageUrl: VIETQR_IMAGE_DATA_URL
  };
}

function apiGetAvailability(dateStr) {
  purgeExpiredDeniedBookings_();
  var date = normalizeDate_(dateStr);
  var sameDay = isSameDayVN_(date);
  var blocked = getBlockedSlotMap_(date);
  var times = [];
  var slots = getSlotDefinitions_();

  for (var i = 0; i < slots.length; i++) {
    var slot = slots[i];
    var start = parseStart_(date, slot.time);
    var isTooSoon = false;

    if (sameDay) {
      var minStartMs = new Date().getTime() + (LEAD_MINUTES * 60 * 1000);
      isTooSoon = start.getTime() <= minStartMs;
    }

    var isBlocked = !!blocked[slotKey_(date, slot.time)];
    var available = !isTooSoon && !isBlocked && !slotTaken_(start);

    times.push({
      time: slot.time,
      endTime: slot.endTime,
      label: slot.label,
      available: available,
      blocked: isBlocked,
      tooSoon: isTooSoon
    });
  }

  return {
    ok: true,
    date: date,
    times: times,
    bufferMinutes: BUFFER_MINUTES,
    leadMinutes: LEAD_MINUTES
  };
}

function apiRequestBooking(payload) {
  purgeExpiredDeniedBookings_();
  var date = normalizeDate_(payload.date);
  var time = normalizeTime_(payload.time);
  var option = String(payload.option || "");
  var name = String(payload.name || "").trim();
  var phone = String(payload.phone || "").trim();
  var email = String(payload.email || "").trim();
  var note = String(payload.note || "").trim();
  var lang = String(payload.lang || "en");

  assertWithinHours_(time);

  if (!date || !time || !option || !name || !phone) {
    return { ok: false, error: "MISSING_FIELDS" };
  }

  var pricing = computePricing_(option);
  var start = parseStart_(date, time);
  if (isNaN(start.getTime())) {
    return { ok: false, error: "BAD_DATETIME" };
  }

  if (isSameDayVN_(date)) {
    var minStartMs = new Date().getTime() + (LEAD_MINUTES * 60 * 1000);
    if (start.getTime() <= minStartMs) {
      return { ok: false, error: "TOO_SOON", leadMinutes: LEAD_MINUTES };
    }
  }

  if (isSlotBlockedByAdmin_(date, time)) {
    return { ok: false, error: "SLOT_BLOCKED" };
  }

  if (slotTaken_(start)) {
    return { ok: false, error: "SLOT_TAKEN", bufferMinutes: BUFFER_MINUTES };
  }

  var bookingId = generateId_();
  var sh = getBookingsSheet_();
  var createdAt = Utilities.formatDate(new Date(), TZ, "yyyy-MM-dd HH:mm:ss");
  var startISO = Utilities.formatDate(start, TZ, "yyyy-MM-dd'T'HH:mm:ssXXX");
  var playersCell = pricing.mode === "deposit" ? "DEPOSIT" : pricing.playersSelected;

  var pricingNote =
    "Option=" + option + "; " +
    "ChargedPlayers=" + (pricing.mode === "deposit" ? 0 : pricing.chargedPlayers) + "; " +
    "VietQR_Prepaid_VND=" + pricing.vietqrPrepaidVnd + "; " +
    "Arrival_VND=" + pricing.arrivalVnd + "; " +
    "Card_Deposit_USD=" + pricing.cardDepositUsd + "; " +
    "Card_Prepaid_USD=" + pricing.cardPrepaidUsd;

  var finalNote = note ? note + "\n" + pricingNote : pricingNote;

  sh.appendRow([
    createdAt,
    bookingId,
    startISO,
    date,
    time,
    playersCell,
    name,
    phone,
    email,
    finalNote,
    lang,
    "PENDING",
    "",
    ""
  ]);

  sendAdminBookingAlert_({
    bookingId: bookingId,
    status: "PENDING",
    createdAt: createdAt,
    date: date,
    time: time,
    slotLabel: getSlotInfoByTime_(time).label,
    players: playersCell,
    name: name,
    phone: phone,
    email: email,
    note: note,
    pricingMeta: pricingNote
  });

  return {
    ok: true,
    bookingId: bookingId,
    status: "PENDING",
    pricing: pricing
  };
}

function assertAdmin_(adminCode) {
  if (String(adminCode || "") !== ADMIN_ACCESS_CODE) {
    throw new Error("UNAUTHORIZED");
  }
}

function getStatusCounts_(bookings) {
  var counts = {
    total: bookings.length,
    pending: 0,
    approved: 0,
    denied: 0
  };

  for (var i = 0; i < bookings.length; i++) {
    if (bookings[i].status === "PENDING") {
      counts.pending++;
    } else if (bookings[i].status === "APPROVED") {
      counts.approved++;
    } else if (bookings[i].status === "DENIED") {
      counts.denied++;
    }
  }

  return counts;
}

function splitDashboardBookings_(bookings) {
  var activeBookings = [];
  var deniedBookings = [];

  for (var i = 0; i < bookings.length; i++) {
    if (bookings[i].status === "DENIED") {
      deniedBookings.push(bookings[i]);
    } else {
      activeBookings.push(bookings[i]);
    }
  }

  return {
    activeBookings: activeBookings,
    deniedBookings: deniedBookings
  };
}

function getAdminSlotsForDate_(dateStr, bookings) {
  var date = normalizeDate_(dateStr);
  var sameDay = isSameDayVN_(date);
  var blocked = getBlockedSlotMap_(date);
  var byTime = {};
  var slots = [];
  var slotDefinitions = getSlotDefinitions_();

  for (var i = 0; i < bookings.length; i++) {
    var booking = bookings[i];
    if (booking.date !== date) {
      continue;
    }

    if (!byTime[booking.time]) {
      byTime[booking.time] = [];
    }
    byTime[booking.time].push(booking);
  }

  for (var h = 0; h < slotDefinitions.length; h++) {
    var slotInfo = slotDefinitions[h];
    var time = slotInfo.time;
    var slotBookings = byTime[time] || [];
    var approvedBooking = null;
    var pendingCount = 0;
    var deniedCount = 0;

    for (var j = 0; j < slotBookings.length; j++) {
      if (slotBookings[j].status === "APPROVED" && !approvedBooking) {
        approvedBooking = slotBookings[j];
      }
      if (slotBookings[j].status === "PENDING") {
        pendingCount++;
      }
      if (slotBookings[j].status === "DENIED") {
        deniedCount++;
      }
    }

    var start = parseStart_(date, time);
    var isTooSoon = false;
    if (sameDay) {
      var minStartMs = new Date().getTime() + (LEAD_MINUTES * 60 * 1000);
      isTooSoon = start.getTime() <= minStartMs;
    }

    var isBlocked = !!blocked[slotKey_(date, time)];
    slots.push({
      time: time,
      endTime: slotInfo.endTime,
      label: slotInfo.label,
      blocked: isBlocked,
      tooSoon: isTooSoon,
      available: !isBlocked && !isTooSoon && !approvedBooking,
      approvedBookingId: approvedBooking ? approvedBooking.bookingId : "",
      approvedName: approvedBooking ? approvedBooking.name : "",
      approvedPhone: approvedBooking ? approvedBooking.phone : "",
      pendingCount: pendingCount,
      deniedCount: deniedCount
    });
  }

  return slots;
}

function deleteCalendarEventIfNeeded_(eventId) {
  if (!SYNC_TO_CALENDAR || !eventId) {
    return;
  }

  try {
    var cal = CalendarApp.getCalendarById(CALENDAR_ID);
    if (!cal) {
      return;
    }
    var event = cal.getEventById(String(eventId || ""));
    if (event) {
      event.deleteEvent();
    }
  } catch (err) {
    Logger.log("Calendar cleanup failed: " + err);
  }
}

function purgeExpiredDeniedBookings_() {
  var sh = getBookingsSheet_();
  var lastRow = sh.getLastRow();
  if (lastRow <= 1) {
    return 0;
  }

  var values = sh.getRange(2, 1, lastRow - 1, BOOKING_COLUMN_COUNT).getValues();
  var cutoffMs = new Date().getTime() - (DENIED_RETENTION_HOURS * 60 * 60 * 1000);
  var rowsToDelete = [];

  for (var i = 0; i < values.length; i++) {
    var status = normalizeStatus_(values[i][BOOKING_STATUS_COLUMN - 1]);
    if (status !== "DENIED") {
      continue;
    }

    var deniedAt = parseSheetDateTime_(values[i][BOOKING_DENIED_AT_COLUMN - 1]) || parseSheetDateTime_(values[i][0]);
    if (!deniedAt || deniedAt.getTime() > cutoffMs) {
      continue;
    }

    rowsToDelete.push({
      rowNumber: i + 2,
      eventId: String(values[i][BOOKING_EVENT_ID_COLUMN - 1] || "")
    });
  }

  for (var j = rowsToDelete.length - 1; j >= 0; j--) {
    deleteCalendarEventIfNeeded_(rowsToDelete[j].eventId);
    sh.deleteRow(rowsToDelete[j].rowNumber);
  }

  return rowsToDelete.length;
}

function buildAdminDashboard_(dateStr) {
  var date = normalizeDate_(dateStr || getTodayVN_());
  var purgedDeniedCount = purgeExpiredDeniedBookings_();
  var bookings = sortAdminBookings_(getBookingsData_());
  var split = splitDashboardBookings_(bookings);

  return {
    selectedDate: date,
    summary: getStatusCounts_(bookings),
    slots: getAdminSlotsForDate_(date, bookings),
    bookings: split.activeBookings,
    deniedBookings: split.deniedBookings,
    purgedDeniedCount: purgedDeniedCount
  };
}

function apiAdminGetDashboard(adminCode, dateStr) {
  assertAdmin_(adminCode);
  var dashboard = buildAdminDashboard_(dateStr || getTodayVN_());
  dashboard.ok = true;
  return dashboard;
}

function findBookingRowById_(bookingId) {
  var sh = getBookingsSheet_();
  var lastRow = sh.getLastRow();
  if (lastRow <= 1) {
    return 0;
  }

  var targetId = String(bookingId || "").trim();
  var ids = sh.getRange(2, 2, lastRow - 1, 1).getValues();
  for (var i = 0; i < ids.length; i++) {
    if (String(ids[i][0] || "") === targetId) {
      return i + 2;
    }
  }

  return 0;
}

function apiAdminUpdateBookingStatus(adminCode, bookingId, nextStatus, selectedDateStr) {
  assertAdmin_(adminCode);

  var sh = getBookingsSheet_();
  var rowNumber = findBookingRowById_(bookingId);
  var status = normalizeStatus_(nextStatus);

  if (!rowNumber) {
    return { ok: false, error: "NOT_FOUND" };
  }
  if (!status) {
    return { ok: false, error: "BAD_STATUS" };
  }

  var row = sh.getRange(rowNumber, 1, 1, BOOKING_COLUMN_COUNT).getValues()[0];
  var booking = bookingRowToObject_(row, rowNumber);
  var previousStatus = booking.status;

  if (status === "APPROVED") {
    if (isSlotBlockedByAdmin_(booking.date, booking.time)) {
      return { ok: false, error: "SLOT_BLOCKED" };
    }

    var start = parseStart_(booking.date, booking.time);
    if (isNaN(start.getTime()) && booking.startISO) {
      start = new Date(booking.startISO);
    }
    if (isNaN(start.getTime())) {
      return { ok: false, error: "BAD_DATETIME" };
    }

    if (slotTaken_(start, rowNumber)) {
      return { ok: false, error: "SLOT_TAKEN" };
    }
  }

  sh.getRange(rowNumber, BOOKING_STATUS_COLUMN).setValue(status);
  sh.getRange(
    rowNumber,
    BOOKING_DENIED_AT_COLUMN
  ).setValue(status === "DENIED" ? Utilities.formatDate(new Date(), TZ, "yyyy-MM-dd HH:mm:ss") : "");
  syncRowCalendarState_(sh, rowNumber);

  var updatedRow = sh.getRange(rowNumber, 1, 1, BOOKING_COLUMN_COUNT).getValues()[0];
  var updatedBooking = bookingRowToObject_(updatedRow, rowNumber);
  if (status === "APPROVED" && previousStatus !== "APPROVED") {
    sendCustomerApprovedBookingEmail_(updatedBooking);
  }
  var dashboard = buildAdminDashboard_(selectedDateStr || booking.date);
  return {
    ok: true,
    booking: updatedBooking,
    dashboard: dashboard
  };
}

function apiAdminSetSlotBlocked(adminCode, dateStr, timeStr, shouldBlock) {
  assertAdmin_(adminCode);

  var date = normalizeDate_(dateStr);
  var time = normalizeTime_(timeStr);
  var isBlocked = !!shouldBlock;

  assertWithinHours_(time);

  if (isBlocked) {
    var start = parseStart_(date, time);
    if (slotTaken_(start)) {
      return { ok: false, error: "SLOT_HAS_APPROVED_BOOKING" };
    }
  }

  setSlotBlocked_(date, time, isBlocked, "");
  var dashboard = buildAdminDashboard_(date);
  return {
    ok: true,
    date: date,
    time: time,
    blocked: isBlocked,
    dashboard: dashboard
  };
}

function apiAdminSetDateBlocked(adminCode, dateStr, shouldBlock) {
  assertAdmin_(adminCode);

  var date = normalizeDate_(dateStr);
  var blockDay = !!shouldBlock;
  var slots = getSlotDefinitions_();
  var updatedCount = 0;
  var skippedApprovedCount = 0;

  for (var i = 0; i < slots.length; i++) {
    var time = slots[i].time;

    if (blockDay) {
      var start = parseStart_(date, time);
      if (slotTaken_(start)) {
        skippedApprovedCount++;
        continue;
      }
    }

    setSlotBlocked_(date, time, blockDay, blockDay ? "Blocked whole day" : "");
    updatedCount++;
  }

  return {
    ok: true,
    date: date,
    blocked: blockDay,
    updatedCount: updatedCount,
    skippedApprovedCount: skippedApprovedCount,
    dashboard: buildAdminDashboard_(date)
  };
}

function onEdit(e) {
  try {
    if (!SYNC_TO_CALENDAR) {
      return;
    }

    var range = e && e.range;
    if (!range) {
      return;
    }

    var sh = range.getSheet();
    if (sh.getName() !== BOOKINGS_SHEET_NAME) {
      return;
    }

    if (range.getRow() < 2 || range.getColumn() !== 12) {
      return;
    }

    syncRowCalendarState_(sh, range.getRow());
  } catch (err) {
    // Ignore trigger errors.
  }
}

function buildCalendarEventPayload_(booking) {
  var slotLabel = booking.slotLabel || getSlotInfoByTime_(booking.time || "00:00").label;
  var titleParts = [
    "Nha Trang Escape Room",
    booking.date || "",
    slotLabel,
    booking.name || ""
  ];
  var description = [
    "Confirmed booking",
    "",
    "Booking ID: " + booking.bookingId,
    booking.createdAt ? "Requested: " + booking.createdAt : "",
    "Booking date: " + booking.date,
    "Booked slot: " + slotLabel,
    "Players / option: " + booking.players,
    "Name: " + booking.name,
    "Phone: " + booking.phone,
    booking.email ? "Email: " + booking.email : "",
    booking.note ? "Note: " + booking.note : "",
    booking.pricingMeta ? "Pricing: " + booking.pricingMeta : "",
    "Buffer after game: " + BUFFER_MINUTES + " min",
    "Location: " + VENUE_ADDRESS
  ];

  return {
    title: titleParts.filter(Boolean).join(" - "),
    description: description.filter(Boolean).join("\n"),
    location: VENUE_ADDRESS
  };
}

function syncRowCalendarState_(sh, rowNumber) {
  if (!SYNC_TO_CALENDAR) {
    return;
  }

  var row = sh.getRange(rowNumber, 1, 1, BOOKING_COLUMN_COUNT).getValues()[0];
  var booking = bookingRowToObject_(row, rowNumber);
  var cal = CalendarApp.getCalendarById(CALENDAR_ID);
  if (!cal) {
    return;
  }

  if (booking.status !== "APPROVED") {
    if (booking.eventId) {
      var oldEvent = cal.getEventById(booking.eventId);
      if (oldEvent) {
        oldEvent.deleteEvent();
      }
      sh.getRange(rowNumber, BOOKING_EVENT_ID_COLUMN).setValue("");
    }
    return;
  }

  if (!booking.date || !booking.time) {
    return;
  }

  var start = parseStart_(booking.date, booking.time);
  if (isNaN(start.getTime()) && booking.startISO) {
    start = new Date(booking.startISO);
  }
  if (isNaN(start.getTime())) {
    return;
  }

  var end = new Date(start.getTime() + SLOT_MINUTES * 60 * 1000);
  var payload = buildCalendarEventPayload_(booking);

  if (booking.eventId) {
    var existing = cal.getEventById(booking.eventId);
    if (existing) {
      existing.setTitle(payload.title);
      existing.setDescription(payload.description);
      existing.setTime(start, end);
      existing.setLocation(payload.location);
      return;
    }
  }

  var event = cal.createEvent(payload.title, start, end, {
    description: payload.description,
    location: payload.location
  });
  sh.getRange(rowNumber, BOOKING_EVENT_ID_COLUMN).setValue(event.getId());
}

function syncAllApprovedToCalendar() {
  var sh = getBookingsSheet_();
  var lastRow = sh.getLastRow();
  if (lastRow <= 1) {
    return { ok: true, synced: 0 };
  }

  var synced = 0;
  for (var rowNumber = 2; rowNumber <= lastRow; rowNumber++) {
    var before = String(sh.getRange(rowNumber, BOOKING_EVENT_ID_COLUMN).getValue() || "");
    syncRowCalendarState_(sh, rowNumber);
    var after = String(sh.getRange(rowNumber, BOOKING_EVENT_ID_COLUMN).getValue() || "");
    if (!before && after) {
      synced++;
    }
  }

  return { ok: true, synced: synced };
}

function testAdminBookingAlertEmail() {
  sendAdminBookingAlert_({
    bookingId: "TEST-EMAIL",
    status: "PENDING",
    createdAt: Utilities.formatDate(new Date(), TZ, "yyyy-MM-dd HH:mm:ss"),
    date: getTodayVN_(),
    time: "18:30",
    slotLabel: getSlotInfoByTime_("18:30").label,
    players: "4",
    name: "Test Booking",
    phone: "+84393690550",
    email: "brook.gron1@gmail.com",
    note: "This is a manual test email from Apps Script.",
    pricingMeta: "Option=4; ChargedPlayers=4; VietQR_Prepaid_VND=1400000"
  });

  return {
    ok: true,
    sentTo: ADMIN_ALERT_EMAIL
  };
}
