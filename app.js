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

Object.assign(i18n.en, {
  hero_lead:"Locked in together, your team searches for clues and solves puzzles to escape within 60 minutes. FUN - FOR ALL AGES AND LANGUAGES! MULTIPLE THEMES AVAILABLE!",
  nav_location:"Location",
  theme_label:"Theme",
  theme_classic:"Classic",
  theme_noir:"Noir",
  theme_neon:"Neon",
  fb_eyebrow:"Latest on Facebook",
  fb_title:"See our newest updates",
  fb_text:"This window loads the latest public posts from our Facebook page when the website opens.",
  fb_cta:"Open Facebook",
  pay_card:"Pay by card (PayPal)",
  open_maps:"Open in Google Maps",
  calc_title:"Players & price",
  calc_players_label:"Players",
  calc_prepay:"Prepay (VietQR)",
  calc_arrival:"Pay on arrival",
  calc_deposit:"Deposit only",
  calc_option_deposit:"Deposit only",
  calc_option_players_min:"{players} players (min charge {minPlayers})",
  calc_option_players:"{players} players",
  calc_note_deposit:"Deposit holds your slot. Final amount is paid on arrival.",
  calc_note_min:"Minimum charge applies ({minPlayers} players). VietQR prepay is cheaper.",
  calc_note_prepay:"VietQR prepay is cheaper."
});

Object.assign(i18n.vi, {
  hero_lead:"C\u1ea3 nh\u00f3m c\u00f9ng b\u1ecb \"kh\u00f3a\" trong ph\u00f2ng \u2014 t\u00ecm manh m\u1ed1i, gi\u1ea3i c\u00e2u \u0111\u1ed1 v\u00e0 tho\u00e1t ra trong 60 ph\u00fat. VUI CHO M\u1ECCI \u0110\u1ED8 TU\u1ED4I V\u00C0 M\u1ECCI NG\u00D4N NG\u1EEE! NHI\u1EC0U CH\u1EE6 \u0110\u1EC0 KH\u00C1C NHAU!",
  nav_location:"V\u1ecb tr\u00ed",
  theme_label:"Giao di\u1ec7n",
  theme_classic:"C\u1ed5 \u0111i\u1ec3n",
  theme_noir:"Noir",
  theme_neon:"Neon",
  fb_eyebrow:"Facebook m\u1edbi nh\u1ea5t",
  fb_title:"Xem c\u1eadp nh\u1eadt m\u1edbi nh\u1ea5t c\u1ee7a ch\u00fang t\u00f4i",
  fb_text:"Khung n\u00e0y t\u1ea3i c\u00e1c b\u00e0i \u0111\u0103ng c\u00f4ng khai m\u1edbi nh\u1ea5t t\u1eeb trang Facebook c\u1ee7a ch\u00fang t\u00f4i khi website m\u1edf ra.",
  fb_cta:"M\u1edf Facebook",
  pay_card:"Thanh to\u00e1n b\u1eb1ng th\u1ebb (PayPal)",
  open_maps:"M\u1edf Google Maps",
  calc_title:"S\u1ed1 ng\u01b0\u1eddi & gi\u00e1",
  calc_players_label:"S\u1ed1 ng\u01b0\u1eddi",
  calc_prepay:"Tr\u1ea3 tr\u01b0\u1edbc (VietQR)",
  calc_arrival:"Tr\u1ea3 khi \u0111\u1ebfn",
  calc_deposit:"Ch\u1ec9 \u0111\u1eb7t c\u1ecdc",
  calc_option_deposit:"Ch\u1ec9 \u0111\u1eb7t c\u1ecdc",
  calc_option_players_min:"{players} ng\u01b0\u1eddi (t\u00ednh t\u1ed1i thi\u1ec3u {minPlayers})",
  calc_option_players:"{players} ng\u01b0\u1eddi",
  calc_note_deposit:"\u0110\u1eb7t c\u1ecdc gi\u1eef ch\u1ed7. Ph\u1ea7n c\u00f2n l\u1ea1i thanh to\u00e1n khi \u0111\u1ebfn.",
  calc_note_min:"\u00c1p d\u1ee5ng m\u1ee9c t\u1ed1i thi\u1ec3u ({minPlayers} ng\u01b0\u1eddi). Tr\u1ea3 tr\u01b0\u1edbc VietQR r\u1ebb h\u01a1n.",
  calc_note_prepay:"Tr\u1ea3 tr\u01b0\u1edbc VietQR r\u1ebb h\u01a1n."
});

Object.assign(i18n.ru, {
  hero_lead:"\u0412\u043c\u0435\u0441\u0442\u0435 \u0437\u0430\u043f\u0435\u0440\u0442\u044b \u0432 \u043a\u043e\u043c\u043d\u0430\u0442\u0435 \u2014 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438, \u0440\u0435\u0448\u0430\u0439\u0442\u0435 \u0433\u043e\u043b\u043e\u0432\u043e\u043b\u043e\u043c\u043a\u0438 \u0438 \u0441\u0431\u0435\u0433\u0430\u0439\u0442\u0435 \u0437\u0430 60 \u043c\u0438\u043d\u0443\u0442. \u0412\u0415\u0421\u0415\u041b\u041e \u0414\u041b\u042f \u0412\u0421\u0415\u0425 \u0412\u041e\u0417\u0420\u0410\u0421\u0422\u041e\u0412 \u0418 \u042f\u0417\u042b\u041a\u041e\u0412!",
  nav_location:"\u041b\u043e\u043a\u0430\u0446\u0438\u044f",
  theme_label:"\u0422\u0435\u043c\u0430",
  theme_classic:"\u041a\u043b\u0430\u0441\u0441\u0438\u043a\u0430",
  theme_noir:"\u041d\u0443\u0430\u0440",
  theme_neon:"\u041d\u0435\u043e\u043d",
  fb_eyebrow:"\u041d\u043e\u0432\u043e\u0435 \u0432 Facebook",
  fb_title:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430\u0448\u0438 \u0441\u0432\u0435\u0436\u0438\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f",
  fb_text:"\u042d\u0442\u043e \u043e\u043a\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u043d\u0430\u0448\u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0435 \u043f\u043e\u0441\u0442\u044b \u0438\u0437 Facebook \u043f\u0440\u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0438 \u0441\u0430\u0439\u0442\u0430.",
  fb_cta:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c Facebook",
  pay_card:"\u041e\u043f\u043b\u0430\u0442\u0430 \u043a\u0430\u0440\u0442\u043e\u0439 (PayPal)",
  open_maps:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c Google Maps",
  calc_title:"\u0418\u0433\u0440\u043e\u043a\u0438 \u0438 \u0446\u0435\u043d\u0430",
  calc_players_label:"\u0418\u0433\u0440\u043e\u043a\u0438",
  calc_prepay:"\u041f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430 (VietQR)",
  calc_arrival:"\u041e\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u043c\u0435\u0441\u0442\u0435",
  calc_deposit:"\u0422\u043e\u043b\u044c\u043a\u043e \u0434\u0435\u043f\u043e\u0437\u0438\u0442",
  calc_option_deposit:"\u0422\u043e\u043b\u044c\u043a\u043e \u0434\u0435\u043f\u043e\u0437\u0438\u0442",
  calc_option_players_min:"{players} \u0438\u0433\u0440\u043e\u043a\u043e\u0432 (\u043c\u0438\u043d\u0438\u043c\u0443\u043c {minPlayers})",
  calc_option_players:"{players} \u0438\u0433\u0440\u043e\u043a\u043e\u0432",
  calc_note_deposit:"\u0414\u0435\u043f\u043e\u0437\u0438\u0442 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0430\u0448 \u0441\u043b\u043e\u0442. \u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043e\u043f\u043b\u0430\u0442\u044b \u043d\u0430 \u043c\u0435\u0441\u0442\u0435.",
  calc_note_min:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u043e\u043f\u043b\u0430\u0442\u0430 ({minPlayers} \u0438\u0433\u0440\u043e\u043a\u0430). VietQR \u0434\u0435\u0448\u0435\u0432\u043b\u0435.",
  calc_note_prepay:"\u041f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430 VietQR \u0434\u0435\u0448\u0435\u0432\u043b\u0435."
});

Object.assign(i18n.ko, {
  hero_lead:"\ud300\uacfc \ud568\uaed8 \ub2e8\uc11c\ub97c \ucc3e\uace0 \ud37c\uc990\uc744 \ud480\uc5b4 60\ubd84 \uc548\uc5d0 \ud0c8\ucd9c\ud558\uc138\uc694. \ubaa8\ub4e0 \uc5f0\ub839\uacfc \uc5b8\uc5b4\ub97c \uc704\ud55c FUN!",
  nav_location:"\uc704\uce58",
  theme_label:"\ud14c\ub9c8",
  theme_classic:"\uae30\ubcf8",
  theme_noir:"\ub290\uc640\ub974",
  theme_neon:"\ub124\uc628",
  fb_eyebrow:"Facebook \ucd5c\uc2e0 \uc18c\uc2dd",
  fb_title:"\ucd5c\uc2e0 \uc5c5\ub370\uc774\ud2b8\ub97c \ubcf4\uc138\uc694",
  fb_text:"\uc774 \ucc3d\uc740 \uc6f9\uc0ac\uc774\ud2b8\uac00 \uc5f4\ub9b4 \ub54c Facebook \ud398\uc774\uc9c0\uc758 \ucd5c\uc2e0 \uacf5\uac1c \uac8c\uc2dc\ubb3c\uc744 \ubd88\ub7ec\uc635\ub2c8\ub2e4.",
  fb_cta:"Facebook \uc5f4\uae30",
  pay_card:"\uce74\ub4dc \uacb0\uc81c (PayPal)",
  open_maps:"Google Maps \uc5f4\uae30",
  calc_title:"\uc778\uc6d0 & \uac00\uaca9",
  calc_players_label:"\uc778\uc6d0",
  calc_prepay:"\uc120\uacb0\uc81c (VietQR)",
  calc_arrival:"\ud604\uc7a5 \uacb0\uc81c",
  calc_deposit:"\uc608\uc57d\uae08\ub9cc",
  calc_option_deposit:"\uc608\uc57d\uae08\ub9cc",
  calc_option_players_min:"{players}\uba85 (\ucd5c\uc18c {minPlayers}\uba85 \uc694\uae08)",
  calc_option_players:"{players}\uba85",
  calc_note_deposit:"\uc608\uc57d\uae08\uc73c\ub85c \uc2ac\ub86f\uc744 \uc7a1\uc544\ub461\ub2c8\ub2e4. \ub098\uba38\uc9c0\ub294 \ud604\uc7a5\uc5d0\uc11c \uacb0\uc81c\ud569\ub2c8\ub2e4.",
  calc_note_min:"\ucd5c\uc18c \uc694\uae08\uc774 \uc801\uc6a9\ub429\ub2c8\ub2e4 ({minPlayers}\uba85). VietQR \uc120\uacb0\uc81c\uac00 \ub354 \uc800\ub834\ud569\ub2c8\ub2e4.",
  calc_note_prepay:"VietQR \uc120\uacb0\uc81c\uac00 \ub354 \uc800\ub834\ud569\ub2c8\ub2e4."
});

Object.assign(i18n.en, {
  hero_lead:"Locked in together, your team searches for clues and solves puzzles to escape within 60 minutes. FUN - FOR ALL AGES AND LANGUAGES! MULTIPLE THEMES AVAILABLE!"
});

Object.assign(i18n.vi, {
  hero_lead:"C\u1ea3 nh\u00f3m c\u00f9ng b\u1ecb \"kh\u00f3a\" trong ph\u00f2ng \u2014 t\u00ecm manh m\u1ed1i, gi\u1ea3i c\u00e2u \u0111\u1ed1 v\u00e0 tho\u00e1t ra trong 60 ph\u00fat. VUI CHO M\u1ECCI \u0110\u1ED8 TU\u1ED4I V\u00C0 M\u1ECCI NG\u00D4N NG\u1EEE! NHI\u1EC0U CH\u1EE6 \u0110\u1EC0 KH\u00C1C NHAU!"
});

Object.assign(i18n.ru, {
  hero_lead:"\u0412\u043c\u0435\u0441\u0442\u0435 \u0437\u0430\u043f\u0435\u0440\u0442\u044b \u0432 \u043a\u043e\u043c\u043d\u0430\u0442\u0435 \u2014 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438, \u0440\u0435\u0448\u0430\u0439\u0442\u0435 \u0433\u043e\u043b\u043e\u0432\u043e\u043b\u043e\u043c\u043a\u0438 \u0438 \u0441\u0431\u0435\u0433\u0430\u0439\u0442\u0435 \u0437\u0430 60 \u043c\u0438\u043d\u0443\u0442. \u0412\u0415\u0421\u0415\u041B\u041E \u0414\u041B\u042F \u0412\u0421\u0415\u0425 \u0412\u041E\u0417\u0420\u0410\u0421\u0422\u041E\u0412 \u0418 \u042F\u0417\u042B\u041A\u041E\u0412! \u041D\u0415\u0421\u041A\u041E\u041B\u042C\u041A\u041E \u0422\u0415\u041C \u041D\u0410 \u0412\u042B\u0411\u041E\u0420!"
});

Object.assign(i18n.ko, {
  hero_lead:"\ud300\uacfc \ud568\uaed8 \ub2e8\uc11c\ub97c \ucc3e\uace0 \ud37c\uc990\uc744 \ud480\uc5b4 60\ubd84 \uc548\uc5d0 \ud0c8\ucd9c\ud558\uc138\uc694. \ubaa8\ub4e0 \uc5f0\ub839\uacfc \uc5b8\uc5b4\ub97c \uc704\ud55c FUN! \uc5ec\ub7ec \ud14c\ub9c8 \uc774\uc6a9 \uac00\ub2a5!"
});

let CURRENT_LANG = "en";

function formatTemplate(text, vars){
  return String(text || "").replace(/\{(\w+)\}/g, (_, key) => (
    vars && vars[key] !== undefined ? String(vars[key]) : ""
  ));
}

function t(key, vars){
  const dict = i18n[CURRENT_LANG] || i18n.en;
  const fallback = i18n.en[key] !== undefined ? i18n.en[key] : key;
  const value = dict[key] !== undefined ? dict[key] : fallback;
  return formatTemplate(value, vars);
}

function applyLang(lang){
  const dict = i18n[lang] || i18n.en;
  CURRENT_LANG = i18n[lang] ? lang : "en";
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
  syncPriceCalculatorText();
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

function syncFacebookPageEmbed(){
  const facebookFrame = document.getElementById("facebookPageFrame");
  if (!facebookFrame) return;

  const pageUrl = SITE_LINKS.facebook || "";
  if (!pageUrl){
    facebookFrame.src = "about:blank";
    facebookFrame.style.display = "none";
    return;
  }

  const height = window.innerWidth <= 640 ? "540" : "620";
  const params = new URLSearchParams({
    href: pageUrl,
    tabs: "timeline",
    width: "500",
    height,
    small_header: "false",
    adapt_container_width: "true",
    hide_cover: "false",
    show_facepile: "false"
  });
  const nextSrc = `https://www.facebook.com/plugins/page.php?${params.toString()}`;

  facebookFrame.style.display = "block";
  if (facebookFrame.getAttribute("src") !== nextSrc){
    facebookFrame.setAttribute("src", nextSrc);
  }
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
  document.body.dataset.theme = on ? "noir" : "classic";
  localStorage.setItem("dark", on ? "true" : "false");
  localStorage.setItem("theme", on ? "noir" : "classic");
  const darkToggleButton = document.getElementById("dark-toggle");
  if (darkToggleButton){
    darkToggleButton.textContent = on ? "☀️" : "🌙";
  }
  if (darkToggleButton){
    darkToggleButton.textContent = on ? "Light" : "Dark";
    darkToggleButton.setAttribute("aria-pressed", on ? "true" : "false");
  }
  postToEmbeddedFrame({type:"setTheme", theme:on ? "noir" : "classic"});
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

const THEMES = {
  classic: true,
  noir: true,
  neon: true
};

function applyTheme(theme){
  const next = THEMES[theme] ? theme : "classic";
  document.body.dataset.theme = next;
  document.body.classList.toggle("dark", next !== "classic");

  const themeSelect = document.getElementById("theme-select");
  if (themeSelect && themeSelect.value !== next){
    themeSelect.value = next;
  }

  localStorage.setItem("theme", next);
  localStorage.setItem("dark", next === "classic" ? "false" : "true");
  postToEmbeddedFrame({type:"setTheme", theme:next});
}

function getInitialTheme(){
  const saved = localStorage.getItem("theme");
  if (saved && THEMES[saved]) return saved;
  if (localStorage.getItem("dark") === "true") return "noir";
  return "classic";
}

function formatVND(n){
  const amount = safeNumber(n);
  try{
    return new Intl.NumberFormat("vi-VN").format(amount) + "\u0111";
  }catch(e){
    return String(amount) + "\u0111";
  }
}

const sitePriceCalc = {};

function buildPriceCalculatorOptions(){
  const sel = sitePriceCalc.sel;
  if (!sel) return;

  const selected = sel.value || "4";
  sel.innerHTML = "";

  {
    const option = document.createElement("option");
    option.value = "deposit";
    option.textContent = t("calc_option_deposit");
    sel.appendChild(option);
  }

  for (let i = 2; i <= 8; i++){
    const option = document.createElement("option");
    option.value = String(i);
    option.textContent = i < MIN_CHARGE_PLAYERS
      ? t("calc_option_players_min", { players: i, minPlayers: MIN_CHARGE_PLAYERS })
      : t("calc_option_players", { players: i });
    sel.appendChild(option);
  }

  if ([...sel.options].some(option => option.value === selected)){
    sel.value = selected;
  } else {
    sel.value = "4";
  }
}

function renderPriceCalculator(){
  const sel = sitePriceCalc.sel;
  const prepayEl = sitePriceCalc.prepayEl;
  const arrivalEl = sitePriceCalc.arrivalEl;
  const depEl = sitePriceCalc.depEl;
  const noteEl = sitePriceCalc.noteEl;
  if (!sel || !prepayEl || !arrivalEl || !depEl) return;

  const value = String(sel.value || "");

  if (value === "deposit"){
    prepayEl.textContent = formatMoney(DEPOSIT_ONLY_VND);
    arrivalEl.textContent = formatMoney(PRICE_ARRIVAL_PER_PERSON * MIN_CHARGE_PLAYERS);
    depEl.textContent = formatMoney(DEPOSIT_ONLY_VND);
    if (noteEl) noteEl.textContent = t("calc_note_deposit");
    return;
  }

  const players = Math.max(0, safeNumber(parseInt(value, 10)));
  const charged = Math.max(players, MIN_CHARGE_PLAYERS);
  prepayEl.textContent = formatMoney(PRICE_VIETQR_PREPAY_PER_PERSON * charged);
  arrivalEl.textContent = formatMoney(PRICE_ARRIVAL_PER_PERSON * charged);
  depEl.textContent = formatMoney(DEPOSIT_ONLY_VND);
  if (noteEl){
    noteEl.textContent = players < MIN_CHARGE_PLAYERS
      ? t("calc_note_min", { minPlayers: MIN_CHARGE_PLAYERS })
      : t("calc_note_prepay");
  }
}

function syncPriceCalculatorText(){
  if (!sitePriceCalc.sel) return;

  const titleEl = document.getElementById("calcTitle");
  const playersLabelEl = document.getElementById("calcPlayersLabel");
  const prepayLabelEl = document.getElementById("calcPrepayLabel");
  const arrivalLabelEl = document.getElementById("calcArrivalLabel");
  const depositLabelEl = document.getElementById("calcDepositLabel");

  if (titleEl) titleEl.textContent = t("calc_title");
  if (playersLabelEl) playersLabelEl.textContent = t("calc_players_label");
  if (prepayLabelEl) prepayLabelEl.textContent = t("calc_prepay");
  if (arrivalLabelEl) arrivalLabelEl.textContent = t("calc_arrival");
  if (depositLabelEl) depositLabelEl.textContent = t("calc_deposit");
  sitePriceCalc.sel.setAttribute("aria-label", t("calc_players_label"));

  buildPriceCalculatorOptions();
  renderPriceCalculator();
}

function initPriceCalculator(){
  sitePriceCalc.sel = document.getElementById("calcPlayers");
  sitePriceCalc.prepayEl = document.getElementById("calcPrepay");
  sitePriceCalc.arrivalEl = document.getElementById("calcArrival");
  sitePriceCalc.depEl = document.getElementById("calcDeposit");
  sitePriceCalc.noteEl = document.getElementById("calcNote");
  if (!sitePriceCalc.sel || !sitePriceCalc.prepayEl || !sitePriceCalc.arrivalEl || !sitePriceCalc.depEl) return;

  sitePriceCalc.sel.addEventListener("change", renderPriceCalculator);
  syncPriceCalculatorText();
}

if (document.getElementById("year")){
  document.getElementById("year").textContent = new Date().getFullYear();
}
document.querySelectorAll(".lang-btn").forEach(btn=> btn.addEventListener("click", ()=> applyLang(btn.dataset.lang)));
if (document.getElementById("dark-toggle")){
  document.getElementById("dark-toggle").addEventListener("click", toggleDark);
}

setContactLinks();
syncFacebookPageEmbed();
setBookingAndQR();
initPriceCalculator();
syncFooterLogo();
applyLang(getInitialLang());
if (
  localStorage.getItem("dark") === "true" ||
  localStorage.getItem("theme") === "noir" ||
  localStorage.getItem("theme") === "neon"
){
  toggleDark();
}


// Mobile nav toggle
const __navToggle = document.getElementById('nav-toggle');
if (__navToggle){
  __navToggle.addEventListener('click', ()=> document.body.classList.toggle('nav-open'));
  document.querySelectorAll('.nav a').forEach(a=> a.addEventListener('click', ()=> document.body.classList.remove('nav-open')));
}
