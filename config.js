// ============================================
// 💝 TÙY CHỈNH WEBSITE VALENTINE TẠI ĐÂY 💝
// ============================================

const CONFIG = {
  // Tên người yêu sẽ hiển thị trong tiêu đề
  // Ví dụ: "Jade", "Sarah", "Mike"
  valentineName: "Em bé Thảo",

  // Tiêu đề hiển thị trên tab trình duyệt
  // Có thể dùng emoji! 💝 💖 💗 💓 💞 💕
  pageTitle: "Em sẽ làm một nửa của anh trong ngày Valentine nha? 💝",

  // Emoji bay lơ lửng trong nền
  // Xem thêm emoji tại: https://emojipedia.org
  floatingEmojis: {
    hearts: ["❤️", "💖", "💝", "💗", "💓"], // Emoji trái tim
    bears: ["🧸", "🐻"], // Emoji gấu dễ thương
  },

  // Câu hỏi và câu trả lời
  // Tùy chỉnh từng câu hỏi và phản hồi
  questions: {
    first: {
      text: "Em có yêu anh hông?", // Câu hỏi đầu tiên
      yesBtn: "Có", // Nút "Có"
      noBtn: "Không", // Nút "Không"
      secretAnswer: "Em không thích anh, em yêu anhh! ❤️", // Câu trả lời bí mật khi hover
    },
    second: {
      text: "Em yêu anh nhiều hông?", // Dành cho thước đo tình yêu
      startText: "Rất nhiều!", // Text trước phần trăm
      nextBtn: "Tiếp theo ❤️", // Nút tiếp theo
    },
    third: {
      text: `Em có đồng ý làm một nửa của anh vào ngày 14/2, ${
        new Date() > new Date(new Date().getFullYear(), 1, 14)
          ? new Date().getFullYear() + 1
          : new Date().getFullYear()
      } hông? 🌹`, // Câu hỏi quan trọng nhất!
      yesBtn: "Có!", // Nút "Có"
      noBtn: "Không", // Nút "Không"
    },
  },

  // Thông điệp của thước đo tình yêu
  // Hiển thị tùy theo mức độ kéo
  loveMessages: {
    extreme: "TRỜI ƠIII Em yêu anh nhiều vậy luôn hả?? 🥰🚀💝", // Khi vượt 5000%
    high: "Yêu anh tới vô cực luôn! 🚀💝", // Khi vượt 1000%
    normal: "Và còn hơn thế nữa! 🥰", // Khi vượt 100%
  },

  // Thông điệp hiển thị sau khi bấm "Có!"
  celebration: {
    title: "Yay! Anh là người hạnh phúc nhất trên đời! 🎉💝💖💝💓",
    message:
      "Giờ thì lại đây nhận quà nè: một cái ôm thật chặt và một nụ hôn to bự!",
    emojis: "🎁💖🤗💝💋❤️💕", // Emoji sẽ nhảy tung tăng
  },

  // Bảng màu cho website
  // Có thể tham khảo tại https://colorhunt.co hoặc https://coolors.co
  colors: {
    backgroundStart: "#ffafbd", // Màu bắt đầu của nền gradient (nên dùng màu pastel cho dịu)
    backgroundEnd: "#ffc3a0", // Màu kết thúc gradient (nên hài hòa với backgroundStart)
    buttonBackground: "#ff6b6b", // Màu nút bấm (nên nổi bật trên nền)
    buttonHover: "#ff8787", // Màu khi hover nút (nhạt hơn một chút)
    textColor: "#ff4757", // Màu chữ (đảm bảo dễ đọc)
  },

  // Cài đặt animation
  // Điều chỉnh nếu muốn hiệu ứng nhanh hoặc chậm hơn
  animations: {
    floatDuration: "15s", // Thời gian trái tim bay lên (khuyến nghị 10–20s)
    floatDistance: "50px", // Khoảng cách lắc ngang (khuyến nghị 30–70px)
    bounceSpeed: "0.5s", // Tốc độ nhún nhảy (khuyến nghị 0.3–0.7s)
    heartExplosionSize: 1.5, // Kích thước hiệu ứng nổ trái tim (khuyến nghị 1.2–2.0)
  },

  // Nhạc nền (Không bắt buộc)
  // Thêm link nhạc của bạn (nhớ chú ý bản quyền)
  music: {
    enabled: true, // Bật tính năng nhạc
    autoplay: true, // Tự động phát (một số trình duyệt có thể chặn)
    musicUrl:
      "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Link nhạc
    startText: "🎵 Phát nhạc", // Nút bật nhạc
    stopText: "🔇 Tắt nhạc", // Nút tắt nhạc
    volume: 0.5, // Âm lượng (từ 0.0 đến 1.0)
  },
};

// Đừng chỉnh sửa phần bên dưới nếu bạn không chắc mình đang làm gì
window.VALENTINE_CONFIG = CONFIG;
