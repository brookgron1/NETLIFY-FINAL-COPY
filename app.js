// ===== CRYPT-TIC website config (edit these) =====
const SITE_LINKS = {
  tel: "tel:+84393690550",
  sms: "sms:+84393690550",
  whatsapp: "https://wa.me/84393690550",
  facebook: "https://www.facebook.com/profile.php?id=61588050163602",
  zalo: "https://zalo.me/0393690550",
  kakao: "http://dn.kakao.com",
  maps: "https://share.google/l7ahE6OOe49xkXY6g"
};

// Booking web app (Google Apps Script web app URL)
const BOOKING_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbyoLQIGRFqKzcytlqkVG4kmV5N6RdCGXUOnNffSXr_eLm0dLYjz9nJ1HPw2J9GAujq2WA/exec"; // your booking web app

// Pay by card (PayPal)
const PAYPAL_ME_URL = "https://paypal.me/NhatrangEscapeRoom";

// VietQR image (hosted image URL or relative path)
const VIETQR_IMAGE_URL = "vietqr.png"; // replace with your QR image URL if hosted
const FOOTER_LOGO_URL = "signnochainlogo.png";

if (typeof window !== "undefined" && typeof window.frame === "undefined"){
  window.frame = null;
}

const i18n = {
  en: {
    tagline:"Escape Room",
    nav_home:"Home", nav_details:"Details", nav_pricing:"Pricing", nav_booking:"Booking", nav_contact:"Contact",
    pill:"By appointment only • 60 minutes • Up to 8 players",
    hero_title:"Nha Trang Escape Room",
    hero_lead:"Locked in together, your team searches for clues and solves puzzles to escape within 60 minutes. FUN - FOR ALL AGES AND LANGUAGES!",
    cta_book:"Book / Ask", cta_learn:"See how it works",
    quick_hours_label:"Hours", quick_hours_value:"By appointment only • 11am–12am daily",
    quick_phone_label:"Fast contact",
    side_title:"Bring your friends. Beat the clock.",
    b1:"Search the room for hidden clues",
    b2:"Solve puzzles and unlock the next steps",
    b3:"A fully immersive, mentally challenging experience",
    side_note:"Great for friends, dates, birthdays, work events — or a boring Wednesday. Think you can escape? Prove it. Book a slot and beat the room.",
    challenge_title:"Think you can escape?",
    challenge_text:"Prove it. Book a slot and beat the room.",
    details_title:"How it works",
    d1_title:"Arrive & get briefed", d1_text:"We explain rules, safety, and your mission. Then the timer starts.",
    d2_title:"Explore & solve", d2_text:"Find clues, connect patterns, and unlock progress as a team.",
    d3_title:"Escape in 60 minutes", d3_text:"Race against time. Communicate. Think fast. Escape.",
    pricing_title:"Pricing",
    price_prebook_sub:"per person • pre-book",
    price_min_charge:"Minimum charge: 4 people (2–3 players still pay 4×350k ~ $56)",
    price_max:"Max 8 people (8 players = 8×350k ~ $112)",
    price_deposit:"Deposit minimum: 350.000đ (~$14) to hold any booking",
    price_save:"Save 50k/person (~$2) vs paying on arrival",
    price_walkin_sub:"per person • pay on arrival",
    price_walkin_rule1:"No deposit • subject to availability",
    price_walkin_rule2:"Recommended: book ahead to lock your time",
    price_hours:"Hours: 11:00–00:00 daily (last start 23:00)",
    cta_booknow:"Book now",
    cta_textcall:"Text / Call",
    booking_title:"Booking",
    booking_calendar_title:"Choose a time",
    booking_calendar_text:"Pick a slot (11:00–00:00). Last start 23:00. Request pending until confirmed.",
    booking_hint:"Calendar not loading? Use the contact buttons to reserve.",
    booking_open:"Open booking form",
    booking_embed_toggle:"Show booking form here",
    booking_deposit_title:"Deposit (VietQR)",
    booking_deposit_text:"Minimum deposit 350.000đ (~$14) to hold. Full prepay optional.",
    booking_open_vietqr:"Open VietQR",
    pay_note:"Open your banking app → Scan to pay",
    pay_name_label:"Name",
    pay_account_label:"Account",
    pay_tip:"Tip: after paying, send a screenshot on Facebook, Zalo, or WhatsApp so we can approve your booking.",
    copy_btn:"Copy",
    booking_step1:"Scan QR → pay deposit",
    booking_step2:"Send screenshot (Facebook/Zalo/WhatsApp)",
    booking_step3:"We confirm your time",
    booking_email_note:"Optional: add email in the booking form to receive approval updates.",
    screenshot_note:"After booking, send a screenshot of your payment on Facebook, Zalo, or WhatsApp to approve your time.",
    contact_title:"Contact",
    contact_book:"Contact & reservations",
    contact_text:"Message on Facebook or call/text to reserve. After paying deposit, send a screenshot to confirm.",
    btn_call:"Call", btn_text:"Text", btn_facebook:"Facebook", btn_maps:"Maps",
    contact_hours:"By appointment • 11:00–00:00 daily",
    contact_location_title:"Location",
    contact_location_text:"Escape Room Nha Trang",
    contact_note:"Send deposit screenshot after booking to confirm.",
    map_eyebrow:"Find Us",
    map_title:"Easy to find, easy to share",
    map_text:"Use the map below for directions or send the exact address to your group before the booking starts.",
    map_cta:"Get directions"
  },
  vi: {
    tagline:"Phòng Thoát Hiểm",
    nav_home:"Trang chủ", nav_details:"Chi tiết", nav_pricing:"Giá", nav_booking:"Đặt lịch", nav_contact:"Liên hệ",
    pill:"Đặt lịch riêng • 60 phút • Tối đa 8 người",
    hero_title:"Nha Trang Escape Room",
    hero_lead:"Cả nhóm cùng bị “khóa” trong phòng — tìm manh mối, giải câu đố và thoát ra trong 60 phút.",
    cta_book:"Đặt lịch / Hỏi", cta_learn:"Cách chơi",
    quick_hours_label:"Giờ", quick_hours_value:"Theo lịch hẹn • 11:00–00:00 hằng ngày",
    quick_phone_label:"Liên hệ nhanh",
    side_title:"Rủ bạn bè. Đua với thời gian.",
    b1:"Tìm manh mối ẩn trong phòng",
    b2:"Giải đố và mở khóa từng bước",
    b3:"Trải nghiệm nhập vai, thử thách trí não",
    side_note:"Hợp đi bạn bè, hẹn hò, sinh nhật, team building — hoặc một ngày thường nhàm chán. Bạn thoát được không? Chứng minh đi. Đặt lịch và phá đảo căn phòng.",
    challenge_title:"Bạn thoát được không?",
    challenge_text:"Chứng minh đi. Đặt lịch và phá đảo căn phòng.",
    details_title:"Cách hoạt động",
    d1_title:"Đến & nghe hướng dẫn", d1_text:"Giới thiệu luật chơi, an toàn và nhiệm vụ. Sau đó bắt đầu tính giờ.",
    d2_title:"Khám phá & giải đố", d2_text:"Tìm manh mối, liên kết dữ kiện và mở khóa tiến trình theo nhóm.",
    d3_title:"Thoát trong 60 phút", d3_text:"Đua với thời gian. Giao tiếp. Nghĩ nhanh. Thoát ra.",
    pricing_title:"Giá",
    price_prebook_sub:"/ người • đặt trước",
    price_min_charge:"Tính tối thiểu: 4 người (2–3 người vẫn tính 4×350k)",
    price_max:"Tối đa 8 người (8 người = 8×350k)",
    price_deposit:"Đặt cọc tối thiểu: 350.000đ (~$14) để giữ chỗ",
    price_save:"Tiết kiệm 50k/người so với thanh toán tại chỗ",
    price_walkin_sub:"/ người • thanh toán tại chỗ",
    price_walkin_rule1:"Không đặt cọc • tùy tình trạng chỗ trống",
    price_walkin_rule2:"Khuyến nghị: đặt trước để giữ giờ",
    price_hours:"Giờ: 11:00–00:00 (giờ bắt đầu cuối 23:00)",
    cta_booknow:"Đặt lịch ngay",
    cta_textcall:"Nhắn / Gọi",
    booking_title:"Đặt lịch",
    booking_calendar_title:"Chọn giờ",
    booking_calendar_text:"Chọn giờ (11:00–00:00). Giờ bắt đầu cuối 23:00. Yêu cầu sẽ chờ duyệt.",
    booking_hint:"Không thấy lịch? Dùng nút liên hệ để giữ chỗ.",
    booking_open:"Mở form đặt lịch",
    booking_embed_toggle:"Xem form ngay tại đây",
    booking_deposit_title:"Đặt cọc (VietQR)",
    booking_deposit_text:"Đặt cọc tối thiểu 350.000đ (~$14) để giữ chỗ. Có thể thanh toán đủ.",
    booking_open_vietqr:"Mở VietQR",
    pay_note:"Mở app ngân hàng → Quét để thanh toán",
    pay_name_label:"Tên",
    pay_account_label:"Số TK",
    pay_tip:"Mẹo: sau khi thanh toán, gửi ảnh chụp màn hình qua Facebook, Zalo hoặc WhatsApp để tụi mình duyệt lịch.",
    copy_btn:"Copy",
    booking_step1:"Quét QR → chuyển khoản đặt cọc",
    booking_step2:"Gửi ảnh chụp (Facebook/Zalo/WhatsApp)",
    booking_step3:"Chúng tôi xác nhận giờ của bạn",
    booking_email_note:"Tuỳ chọn: nhập email trong form để nhận cập nhật duyệt.",
    screenshot_note:"Sau khi đặt lịch, hãy gửi ảnh chụp thanh toán qua Facebook, Zalo hoặc WhatsApp để được duyệt giờ.",
    contact_title:"Liên hệ",
    contact_book:"Liên hệ & đặt chỗ",
    contact_text:"Nhắn Facebook hoặc gọi/nhắn tin để đặt. Sau khi chuyển khoản đặt cọc, gửi ảnh chụp để xác nhận.",
    btn_call:"Gọi", btn_text:"Nhắn tin", btn_facebook:"Facebook", btn_maps:"Bản đồ",
    contact_hours:"Theo lịch hẹn • 11:00–00:00 hằng ngày",
    contact_location_title:"Địa điểm",
    contact_location_text:"Escape Room Nha Trang",
    contact_note:"Gửi ảnh chụp đặt cọc sau khi đặt lịch để xác nhận.",
    map_eyebrow:"T\u00ecm ch\u00fang t\u00f4i",
    map_title:"D\u1ec5 t\u00ecm, d\u1ec5 chia s\u1ebb",
    map_text:"D\u00f9ng b\u1ea3n \u0111\u1ed3 b\u00ean d\u01b0\u1edbi \u0111\u1ec3 t\u00ecm \u0111\u01b0\u1eddng ho\u1eb7c g\u1eedi \u0111\u1ecba ch\u1ec9 ch\u00ednh x\u00e1c cho nh\u00f3m c\u1ee7a b\u1ea1n tr\u01b0\u1edbc gi\u1edd \u0111\u1eb7t ch\u1ed7.",
    map_cta:"Ch\u1ec9 \u0111\u01b0\u1eddng"
  },
  ru: {
    tagline:"Квест-комната",
    nav_home:"Главная", nav_details:"Детали", nav_pricing:"Цены", nav_booking:"Бронь", nav_contact:"Контакты",
    pill:"Частные брони • 60 минут • До 8 игроков",
    hero_title:"Nha Trang Escape Room",
    hero_lead:"Вместе заперты в комнате — находите подсказки, решайте головоломки и сбегайте за 60 минут.",
    cta_book:"Забронировать", cta_learn:"Как это работает",
    quick_hours_label:"Время", quick_hours_value:"По записи • 11:00–00:00 ежедневно",
    quick_phone_label:"Быстрый контакт",
    side_title:"Соберите друзей. Обгоните время.",
    b1:"Ищите скрытые подсказки",
    b2:"Решайте загадки и открывайте следующий шаг",
    b3:"Полное погружение и умственный вызов",
    side_note:"Для друзей, свиданий, дней рождения, тимбилдинга — или скучной среды. Думаете, сможете выбраться? Докажите — бронируйте слот и проходите комнату.",
    challenge_title:"Думаете, сбежите?",
    challenge_text:"Докажите. Забронируйте слот и пройдите комнату.",
    details_title:"Как это работает",
    d1_title:"Приходите и слушайте инструктаж", d1_text:"Правила, безопасность и миссия. Затем стартует таймер.",
    d2_title:"Исследуйте и решайте", d2_text:"Находите подсказки, связывайте факты и продвигайтесь командой.",
    d3_title:"Сбегите за 60 минут", d3_text:"Гонка со временем. Общайтесь. Думайте быстро. Побеждайте.",
    pricing_title:"Цены",
    price_prebook_sub:"с человека • предбронь",
    price_min_charge:"Минимальный чек: 4 человека (2–3 всё равно 4×350k)",
    price_max:"Максимум 8 (8 человек = 8×350k)",
    price_deposit:"Депозит минимум: 350.000đ (~$14) для удержания брони",
    price_save:"Экономия 50k/чел по сравнению с оплатой на месте",
    price_walkin_sub:"с человека • на месте",
    price_walkin_rule1:"Без депозита • зависит от наличия",
    price_walkin_rule2:"Лучше бронировать заранее, чтобы закрепить время",
    price_hours:"Время: 11:00–00:00 (последний старт 23:00)",
    cta_booknow:"Забронировать",
    cta_textcall:"Написать / Позвонить",
    booking_title:"Бронирование",
    booking_calendar_title:"Выберите время",
    booking_calendar_text:"Слот 11:00–00:00 (последний старт 23:00). Заявка ожидает подтверждения.",
    booking_hint:"Календарь не грузится? Используйте кнопки контакта.",
    booking_open:"Открыть форму брони",
    booking_embed_toggle:"Показать форму здесь",
    booking_deposit_title:"Депозит (VietQR)",
    booking_deposit_text:"Минимум 350.000đ (~$14) для удержания. Можно оплатить полностью.",
    booking_open_vietqr:"Открыть VietQR",
    booking_step1:"Скан QR → оплатите депозит",
    booking_step2:"Отправьте скрин (Facebook/Zalo/WhatsApp)",
    booking_step3:"Мы подтвердим ваше время",
    booking_email_note:"Опционально: укажите email в форме для уведомлений.",
    screenshot_note:"После брони отправьте скрин оплаты в Facebook, Zalo или WhatsApp, чтобы мы подтвердили время.",
    contact_title:"Контакты",
    contact_book:"Контакт и бронь",
    contact_text:"Напишите в Facebook или позвоните/напишите. После оплаты депозита отправьте скрин для подтверждения.",
    btn_call:"Звонок", btn_text:"Сообщение", btn_facebook:"Facebook", btn_maps:"Карта",
    contact_hours:"По записи • 11:00–00:00 ежедневно",
    contact_location_title:"Локация",
    contact_location_text:"Escape Room Nha Trang",
    contact_note:"После брони отправьте скрин депозита для подтверждения.",
    map_eyebrow:"\u041a\u0430\u043a \u043d\u0430\u0441 \u043d\u0430\u0439\u0442\u0438",
    map_title:"\u041b\u0435\u0433\u043a\u043e \u043d\u0430\u0439\u0442\u0438, \u043b\u0435\u0433\u043a\u043e \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f",
    map_text:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u0430\u0440\u0442\u0443 \u043d\u0438\u0436\u0435 \u0434\u043b\u044f \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430 \u0438\u043b\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0442\u043e\u0447\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u0441\u0432\u043e\u0435\u0439 \u0433\u0440\u0443\u043f\u043f\u0435 \u0434\u043e \u043d\u0430\u0447\u0430\u043b\u0430 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.",
    map_cta:"\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043c\u0430\u0440\u0448\u0440\u0443\u0442"
  },
  ko: {
    tagline:"방탈출",
    nav_home:"홈", nav_details:"상세", nav_pricing:"요금", nav_booking:"예약", nav_contact:"문의",
    pill:"프라이빗 예약 • 60분 • 최대 8명",
    hero_title:"Nha Trang Escape Room",
    hero_lead:"팀과 함께 단서를 찾고 퍼즐을 풀어 60분 안에 탈출하세요.",
    cta_book:"예약 / 문의", cta_learn:"진행 방식",
    quick_hours_label:"운영 시간", quick_hours_value:"예약제 • 11:00–00:00",
    quick_phone_label:"빠른 연락",
    side_title:"친구들과 함께. 시간과의 레이스.",
    b1:"숨은 단서를 찾아요",
    b2:"퍼즐을 풀고 다음 단계를 열어요",
    b3:"몰입감 있는 두뇌 챌린지",
    side_note:"친구/데이트/생일/팀빌딩 — 혹은 심심한 날에도 딱! 탈출할 수 있나요? 증명해 보세요. 시간 예약하고 도전!",
    challenge_title:"탈출할 수 있나요?",
    challenge_text:"증명해 보세요. 시간 예약하고 도전!",
    details_title:"어떻게 진행되나요?",
    d1_title:"도착 & 브리핑", d1_text:"룰/안전/미션 안내 후 타이머 시작.",
    d2_title:"탐색 & 해결", d2_text:"단서를 찾고 연결해 팀으로 진행합니다.",
    d3_title:"60분 안에 탈출", d3_text:"소통하고 빠르게 판단해서 탈출!",
    pricing_title:"요금",
    price_prebook_sub:"1인 • 사전 예약",
    price_min_charge:"최소 결제: 4명 (2–3명도 4×350k)",
    price_max:"최대 8명 (8명 = 8×350k)",
    price_deposit:"예약금 최소 350.000đ (~$14, 시간 확보)",
    price_save:"현장 결제보다 1인 50k 절약",
    price_walkin_sub:"1인 • 현장 결제",
    price_walkin_rule1:"예약금 없음 • 자리 상황에 따라",
    price_walkin_rule2:"미리 예약 추천 (시간 확보)",
    price_hours:"시간: 11:00–00:00 (마지막 시작 23:00)",
    cta_booknow:"지금 예약",
    cta_textcall:"문자 / 전화",
    booking_title:"예약",
    booking_calendar_title:"시간 선택",
    booking_calendar_text:"11:00–00:00 (마지막 시작 23:00). 확인 전까지 대기입니다.",
    booking_hint:"캘린더가 안 보이면 연락 버튼을 사용하세요.",
    booking_open:"예약 폼 열기",
    booking_embed_toggle:"여기서 폼 보기",
    booking_deposit_title:"예약금 (VietQR)",
    booking_deposit_text:"최소 350.000đ (~$14) 예약금. 전액 결제도 가능.",
    booking_open_vietqr:"VietQR 열기",
    booking_step1:"QR 스캔 → 예약금 결제",
    booking_step2:"스크린샷 전송 (Facebook/Zalo/WhatsApp)",
    booking_step3:"시간을 확인해 드립니다",
    booking_email_note:"선택: 이메일을 입력하면 승인 업데이트를 받을 수 있어요.",
    screenshot_note:"예약 후 Facebook, Zalo 또는 WhatsApp으로 결제 스크린샷을 보내면 승인됩니다.",
    contact_title:"문의",
    contact_book:"문의 & 예약",
    contact_text:"Facebook 메시지 또는 문자/전화로 예약하세요. 예약금 결제 후 스크린샷을 보내주세요.",
    btn_call:"전화", btn_text:"문자", btn_facebook:"Facebook", btn_maps:"지도",
    contact_hours:"예약제 • 11:00–00:00",
    contact_location_title:"위치",
    contact_location_text:"Escape Room Nha Trang",
    contact_note:"예약 후 예약금 스크린샷을 보내면 확정됩니다.",
    map_eyebrow:"\ucc3e\uc544\uc624\uc2dc\ub294 \uae38",
    map_title:"\ucc3e\uae30 \uc27d\uace0 \uacf5\uc720\ub3c4 \uc26c\uc6cc\uc694",
    map_text:"\uc544\ub798 \uc9c0\ub3c4\ub85c \uae38\uc744 \ud655\uc778\ud558\uac70\ub098 \uc608\uc57d \uc2dc\uc791 \uc804\uc5d0 \ud300\uc6d0\ub4e4\uc5d0\uac8c \uc815\ud655\ud55c \uc8fc\uc18c\ub97c \ubcf4\ub0b4\uc138\uc694.",
    map_cta:"\uae38\ucc3e\uae30"
  }
};

function applyLang(lang){
  const dict = i18n[lang] || i18n.en;
  document.documentElement.lang = (lang === "en") ? "en" : lang;

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  history.replaceState({}, "", url.toString());
  postToEmbeddedFrame({type:"setLang", lang});
}

function getInitialLang(){
  const url = new URL(window.location.href);
  const fromUrl = url.searchParams.get("lang");
  if (fromUrl && i18n[fromUrl]) return fromUrl;
  const saved = localStorage.getItem("lang");
  if (saved && i18n[saved]) return saved;
  return "en";
}

function setContactLinks(){
  document.querySelectorAll('[data-link="tel"]').forEach(a=> a.href = SITE_LINKS.tel || "#");
  document.querySelectorAll('[data-link="sms"]').forEach(a=> a.href = SITE_LINKS.sms || "#");
  document.querySelectorAll('[data-link="whatsapp"]').forEach(a=> a.href = SITE_LINKS.whatsapp || "#");
  document.querySelectorAll('[data-link="facebook"]').forEach(a=> a.href = SITE_LINKS.facebook || "#");
  document.querySelectorAll('[data-link="zalo"]').forEach(a=> a.href = SITE_LINKS.zalo || "#");
  document.querySelectorAll('[data-link="maps"]').forEach(a=> a.href = SITE_LINKS.maps || "#");
  document.querySelectorAll('[data-link="kakao"]').forEach(a=> a.href = SITE_LINKS.kakao || "#");
}

function postToEmbeddedFrame(message){
  if (typeof frame !== "undefined" && frame && frame.contentWindow){
    frame.contentWindow.postMessage(message, "*");
  }
}

function syncFooterLogo(){
  const headerLogo = document.querySelector(".brand .logo");
  const footerLogo = document.getElementById("footerLogo");
  const footerFallback = document.getElementById("footerLogoFallback");
  if (headerLogo && FOOTER_LOGO_URL){
    headerLogo.src = FOOTER_LOGO_URL;
  }
  if (!footerLogo) return;

  const src = FOOTER_LOGO_URL || (headerLogo ? headerLogo.getAttribute("src") : "");
  if (!src) return;

  footerLogo.src = src;
  footerLogo.style.display = "block";
  if (footerFallback){
    footerFallback.style.display = "none";
  }
}

function setBookingAndQR(){
  const bookNow = document.getElementById("book-now");
  if (bookNow){
    bookNow.href = BOOKING_WEBAPP_URL || "#";
    bookNow.target = "_blank";
    bookNow.rel = "noopener";
    bookNow.style.pointerEvents = BOOKING_WEBAPP_URL ? "auto" : "none";
    bookNow.style.opacity = BOOKING_WEBAPP_URL ? "1" : ".55";
  }

  // Main booking button in the Booking section (top button)
  const openBookingBtn = document.getElementById("openBookingBtn");
  if (openBookingBtn){
    openBookingBtn.href = BOOKING_WEBAPP_URL || "#";
    openBookingBtn.target = "_blank";
    openBookingBtn.rel = "noopener";
    openBookingBtn.style.pointerEvents = BOOKING_WEBAPP_URL ? "auto" : "none";
    openBookingBtn.style.opacity = BOOKING_WEBAPP_URL ? "1" : ".55";
  }

  const qr = document.getElementById("vietqr");
  const openQR = document.getElementById("open-vietqr");
  const payCard = document.getElementById("pay-card");
  if (qr){
    qr.src = VIETQR_IMAGE_URL || "";
    qr.style.display = VIETQR_IMAGE_URL ? "block" : "none";
  }
  if (openQR){
    openQR.href = VIETQR_IMAGE_URL || "#";
    openQR.style.pointerEvents = VIETQR_IMAGE_URL ? "auto" : "none";
    openQR.style.opacity = VIETQR_IMAGE_URL ? "1" : ".55";
  }
  if (payCard){
    payCard.href = PAYPAL_ME_URL || "#";
    payCard.style.pointerEvents = PAYPAL_ME_URL ? "auto" : "none";
    payCard.style.opacity = PAYPAL_ME_URL ? "1" : ".55";
  }
}

function toggleDark(){
  const on = !document.body.classList.contains("dark");
  document.body.classList.toggle("dark", on);
  localStorage.setItem("dark", on ? "true" : "false");
  const darkToggleButton = document.getElementById("dark-toggle");
  if (darkToggleButton){
    darkToggleButton.textContent = on ? "☀️" : "🌙";
  }
  postToEmbeddedFrame({type:"setDark", dark:on});
}



// Pricing calculator (website)
const PRICE_ARRIVAL_PER_PERSON = 400000; // VND (cash at door)
const PRICE_VIETQR_PREPAY_PER_PERSON = 350000; // VND
const DEPOSIT_ONLY_VND = 350000; // VND
const MIN_CHARGE_PLAYERS = 4;
const USD_PER_VND = 1 / 25000;

function safeNumber(n){
  const num = Number(n);
  return Number.isFinite(num) ? num : 0;
}

function formatVND(n){
  const amount = safeNumber(n);
  try{
    return new Intl.NumberFormat('vi-VN').format(amount) + "đ";
  }catch(e){
    return String(amount) + "đ";
  }
}

function formatUSDFromVND(vnd){
  const usd = safeNumber(vnd) * USD_PER_VND;
  return `~$${usd.toFixed(2)}`;
}

function formatMoney(vnd){
  const amount = safeNumber(vnd);
  return `${formatVND(amount)} (${formatUSDFromVND(amount)})`;
}

function initPriceCalculator(){
  const sel = document.getElementById("calcPlayers");
  const prepayEl = document.getElementById("calcPrepay");
  const arrivalEl = document.getElementById("calcArrival");
  const depEl = document.getElementById("calcDeposit");
  const noteEl = document.getElementById("calcNote");
  if(!sel || !prepayEl || !arrivalEl || !depEl) return;

  sel.innerHTML = "";
  // Deposit only option
  {
    const o = document.createElement("option");
    o.value = "deposit";
    o.textContent = "Deposit only";
    sel.appendChild(o);
  }

  // Players
  for(let i=2;i<=8;i++){
    const o=document.createElement("option");
    o.value=String(i);
    if (i === 2 || i === 3) o.textContent = `${i} players (min charge ${MIN_CHARGE_PLAYERS})`;
    else o.textContent = `${i} players`;
    sel.appendChild(o);
  }
  sel.value="4";

  const render=()=>{
    const v = String(sel.value || "");

    if (v === "deposit"){
      prepayEl.textContent = formatMoney(DEPOSIT_ONLY_VND);
      arrivalEl.textContent = formatMoney(PRICE_ARRIVAL_PER_PERSON * MIN_CHARGE_PLAYERS);
      depEl.textContent = formatMoney(DEPOSIT_ONLY_VND);
      if (noteEl) noteEl.textContent = `Deposit holds your slot. Final amount paid on arrival.`;
      return;
    }

    const players = Math.max(0, safeNumber(parseInt(v,10)));
    const charged = Math.max(players, MIN_CHARGE_PLAYERS);
    prepayEl.textContent = formatMoney(PRICE_VIETQR_PREPAY_PER_PERSON * charged);
    arrivalEl.textContent = formatMoney(PRICE_ARRIVAL_PER_PERSON * charged);
    depEl.textContent = formatMoney(DEPOSIT_ONLY_VND);
    if (noteEl){
      noteEl.textContent = players < MIN_CHARGE_PLAYERS ? `Minimum charge applies (${MIN_CHARGE_PLAYERS} players). VietQR prepay is cheaper.` : `VietQR prepay is cheaper.`;
    }
  };

  sel.addEventListener("change", render);
  render();
}

if (document.getElementById("year")){
  document.getElementById("year").textContent = new Date().getFullYear();
}
document.querySelectorAll(".lang-btn").forEach(btn=> btn.addEventListener("click", ()=> applyLang(btn.dataset.lang)));
if (document.getElementById("dark-toggle")){
  document.getElementById("dark-toggle").addEventListener("click", toggleDark);
}

setContactLinks();
setBookingAndQR();
initPriceCalculator();
syncFooterLogo();
applyLang(getInitialLang());
if (localStorage.getItem("dark")==="true") toggleDark();


// Mobile nav toggle
const __navToggle = document.getElementById('nav-toggle');
if (__navToggle){
  __navToggle.addEventListener('click', ()=> document.body.classList.toggle('nav-open'));
  document.querySelectorAll('.nav a').forEach(a=> a.addEventListener('click', ()=> document.body.classList.remove('nav-open')));
}
