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
      mapUrl: "https://maps.app.goo.gl/HJtB3MeA1mEqV8e5A",
    },
    bride: {
      label: "Nhà Gái",
      name: "Gia đình Phạm Thị Trà My",
      address: "Xem chi tiết tại Google Maps",
      mapUrl: "https://maps.app.goo.gl/HJtB3MeA1mEqV8e5A",
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
