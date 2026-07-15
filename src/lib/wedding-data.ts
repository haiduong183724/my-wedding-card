export const WEDDING = {
  groom: { name: "Hải Dương", fullName: "Nguyễn Đình Hải Dương", phone: "0983922593" },
  bride: { name: "Trà My",    fullName: "Phạm Thị Trà My",       phone: "0394684606" },
  date: {
    solar:  "25 · 07 · 2026",
    lunar:  "Ngày 12 tháng 6 năm Bính Ngọ",
    iso:    "2026-07-25T09:30:00",
    full:   "Thứ Bảy, 25 tháng 07 năm 2026",
  },
  rsvpDeadline: "18 tháng 07 năm 2026",
  venues: {
    groom: {
      label: "Nhà Trai",
      name: "Gia đình Nguyễn Đình Hải Dương",
      address: "Xem chi tiết tại Google Maps",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=thon%20g%E1%BA%A7n%20T%E1%BA%A3o%20D%C6%B0%C6%A1ng%2C%20X%C3%A3%20D%C3%A2n%20H%C3%B2a%2C%20D%C3%A2n%20H%C3%B2a%2C%20H%C3%A0%20N%E1%BB%99i",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d329.6821507906559!2d105.77701097957932!3d20.794210604689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zdGhvbiBn4bqnbiBU4bqjbyBExrDGoW5nLCBYw6MgRMOibiBIw7JhLCBEw6JuIEjDsmEsIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1784086982724!5m2!1svi!2s",
    },
    bride: {
      label: "Nhà Gái",
      name: "Gia đình Phạm Thị Trà My",
      address: "Xem chi tiết tại Google Maps",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=148%20P.%20T%E1%BA%A3o%20D%C6%B0%C6%A1ng%2C%20T%E1%BA%A3o%20D%C6%B0%C6%A1ng%2C%20D%C3%A2n%20H%C3%B2a%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vi%E1%BB%87t%20Nam",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d932.4894946834266!2d105.77929686962516!3d20.792987852557452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31344b2d6e34680b%3A0x91539f7af657eac3!2zMTQ4IFAuIFThuqNvIETGsMahbmcsIFThuqNvIETGsMahbmcsIETDom4gSMOyYSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1784087242842!5m2!1svi!2s",
    },
  },
};

export const TIMELINE_GROOM = [
  { time: "09:30", desc: "Tiệc sáng bắt đầu tại nhà trai" },
  { time: "13:00", desc: "Đoàn nhà trai khởi hành đến nhà gái" },
  { time: "13:10", desc: "Có mặt tại nhà gái", sub: "Thực hiện thủ tục, cùng bái gia tiên" },
  { time: "14:30", desc: "Khởi hành về nhà trai" },
  { time: "14:45", desc: "Lễ thành hôn tại nhà trai", highlight: true },
];

export const TIMELINE_BRIDE = [
  { time: "09:30", desc: "Tiệc sáng bắt đầu tại nhà gái" },
  { time: "13:00", desc: "Chuẩn bị sẵn sàng đón đoàn nhà trai" },
  { time: "13:10", desc: "Tiếp đón đoàn nhà trai", sub: "Thực hiện thủ tục, cùng bái gia tiên" },
  { time: "14:30", desc: "Tiễn cô dâu theo đoàn nhà trai" },
  { time: "14:45", desc: "Lễ thành hôn tại nhà trai", highlight: true },
];

export const PHOTOS = [
  { src: "/resource/DSC09344.jpg", alt: "Hải Dương & Trà My", width: 1200, height: 800  },
  { src: "/resource/DSC08672.jpg", alt: "Hải Dương & Trà My", width: 900,  height: 1350 },
  { src: "/resource/DSC08749.jpg", alt: "Hải Dương & Trà My", width: 900,  height: 1350 },
  { src: "/resource/DSC09269.jpg", alt: "Hải Dương & Trà My", width: 900,  height: 1350 },
  { src: "/resource/DSC09076.jpg", alt: "Hải Dương & Trà My", width: 900,  height: 1350 },
];
