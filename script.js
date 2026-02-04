// Khởi tạo cấu hình
const config = window.VALENTINE_CONFIG;

// Kiểm tra và xác thực cấu hình
function validateConfig() {
  const warnings = [];

  // Kiểm tra các trường bắt buộc
  if (!config.valentineName) {
    warnings.push("Chưa đặt tên người yêu! Đang dùng tên mặc định.");
    config.valentineName = "Người anh yêu";
  }

  // Kiểm tra màu sắc
  const isValidHex = (hex) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
  Object.entries(config.colors).forEach(([key, value]) => {
    if (!isValidHex(value)) {
      warnings.push(`Màu cho ${key} không hợp lệ! Đang dùng màu mặc định.`);
      config.colors[key] = getDefaultColor(key);
    }
  });

  // Kiểm tra giá trị animation
  if (parseFloat(config.animations.floatDuration) < 5) {
    warnings.push("Thời gian animation bay quá ngắn! Đặt tối thiểu là 5s.");
    config.animations.floatDuration = "5s";
  }

  if (
    config.animations.heartExplosionSize < 1 ||
    config.animations.heartExplosionSize > 3
  ) {
    warnings.push(
      "Kích thước hiệu ứng nổ tim nên nằm trong khoảng 1–3! Đang dùng giá trị mặc định.",
    );
    config.animations.heartExplosionSize = 1.5;
  }

  // In cảnh báo nếu có
  if (warnings.length > 0) {
    console.warn("⚠️ Cảnh báo cấu hình:");
    warnings.forEach((warning) => console.warn("- " + warning));
  }
}

// Giá trị màu mặc định
function getDefaultColor(key) {
  const defaults = {
    backgroundStart: "#ffafbd",
    backgroundEnd: "#ffc3a0",
    buttonBackground: "#ff6b6b",
    buttonHover: "#ff8787",
    textColor: "#ff4757",
  };
  return defaults[key];
}

// Đặt tiêu đề trang
document.title = config.pageTitle;

// Khởi tạo nội dung trang khi DOM load xong
window.addEventListener("DOMContentLoaded", () => {
  // Kiểm tra cấu hình trước
  validateConfig();

  // Gán tiêu đề chính
  document.getElementById("valentineTitle").textContent =
    `${config.valentineName}, tình yêu của anh...`;

  // Câu hỏi đầu tiên
  document.getElementById("question1Text").textContent =
    config.questions.first.text;
  document.getElementById("yesBtn1").textContent =
    config.questions.first.yesBtn;
  document.getElementById("noBtn1").textContent = config.questions.first.noBtn;
  document.getElementById("secretAnswerBtn").textContent =
    config.questions.first.secretAnswer;

  // Câu hỏi thứ hai
  document.getElementById("question2Text").textContent =
    config.questions.second.text;
  document.getElementById("startText").textContent =
    config.questions.second.startText;
  document.getElementById("nextBtn").textContent =
    config.questions.second.nextBtn;

  // Câu hỏi thứ ba
  document.getElementById("question3Text").textContent =
    config.questions.third.text;
  document.getElementById("yesBtn3").textContent =
    config.questions.third.yesBtn;
  document.getElementById("noBtn3").textContent = config.questions.third.noBtn;

  // Tạo emoji bay ban đầu
  createFloatingElements();

  // Thiết lập trình phát nhạc
  setupMusicPlayer();
});

// Tạo trái tim và gấu bay
function createFloatingElements() {
  const container = document.querySelector(".floating-elements");

  // Tạo trái tim
  config.floatingEmojis.hearts.forEach((heart) => {
    const div = document.createElement("div");
    div.className = "heart";
    div.innerHTML = heart;
    setRandomPosition(div);
    container.appendChild(div);
  });

  // Tạo gấu
  config.floatingEmojis.bears.forEach((bear) => {
    const div = document.createElement("div");
    div.className = "bear";
    div.innerHTML = bear;
    setRandomPosition(div);
    container.appendChild(div);
  });
}

// Đặt vị trí ngẫu nhiên cho emoji bay
function setRandomPosition(element) {
  element.style.left = Math.random() * 100 + "vw";
  element.style.animationDelay = Math.random() * 5 + "s";
  element.style.animationDuration = 10 + Math.random() * 20 + "s";
}

// Hiển thị câu hỏi tiếp theo
function showNextQuestion(questionNumber) {
  document
    .querySelectorAll(".question-section")
    .forEach((q) => q.classList.add("hidden"));

  document
    .getElementById(`question${questionNumber}`)
    .classList.remove("hidden");
}

// Di chuyển nút "Không" khi bị bấm
function moveButton(button) {
  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.position = "fixed";
  button.style.left = x + "px";
  button.style.top = y + "px";
}

// Thước đo tình yêu
const loveMeter = document.getElementById("loveMeter");
const loveValue = document.getElementById("loveValue");
const extraLove = document.getElementById("extraLove");

function setInitialPosition() {
  loveMeter.value = 100;
  loveValue.textContent = 100;
  loveMeter.style.width = "100%";
}

loveMeter.addEventListener("input", () => {
  const value = parseInt(loveMeter.value);
  loveValue.textContent = value;

  if (value > 100) {
    extraLove.classList.remove("hidden");

    const overflowPercentage = (value - 100) / 9900;
    const extraWidth = overflowPercentage * window.innerWidth * 0.8;

    loveMeter.style.width = `calc(100% + ${extraWidth}px)`;
    loveMeter.style.transition = "width 0.3s";

    // Hiển thị thông điệp theo mức độ yêu
    if (value >= 5000) {
      extraLove.classList.add("super-love");
      extraLove.textContent = config.loveMessages.extreme;
    } else if (value > 1000) {
      extraLove.classList.remove("super-love");
      extraLove.textContent = config.loveMessages.high;
    } else {
      extraLove.classList.remove("super-love");
      extraLove.textContent = config.loveMessages.normal;
    }
  } else {
    extraLove.classList.add("hidden");
    extraLove.classList.remove("super-love");
    loveMeter.style.width = "100%";
  }
});

// Khởi tạo thước đo tình yêu
window.addEventListener("DOMContentLoaded", setInitialPosition);
window.addEventListener("load", setInitialPosition);

// Hàm ăn mừng khi bấm "Có!"
function celebrate() {
  document
    .querySelectorAll(".question-section")
    .forEach((q) => q.classList.add("hidden"));

  const celebration = document.getElementById("celebration");
  celebration.classList.remove("hidden");

  // Gán nội dung ăn mừng
  document.getElementById("celebrationTitle").textContent =
    config.celebration.title;

  document.getElementById("celebrationMessage").textContent =
    config.celebration.message;

  document.getElementById("celebrationEmojis").textContent =
    config.celebration.emojis;

  // Hiệu ứng nổ trái tim
  createHeartExplosion();
}

// Tạo hiệu ứng nổ trái tim
function createHeartExplosion() {
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    const randomHeart =
      config.floatingEmojis.hearts[
        Math.floor(Math.random() * config.floatingEmojis.hearts.length)
      ];

    heart.innerHTML = randomHeart;
    heart.className = "heart";
    document.querySelector(".floating-elements").appendChild(heart);
    setRandomPosition(heart);
  }
}

// Thiết lập trình phát nhạc
function setupMusicPlayer() {
  const musicControls = document.getElementById("musicControls");
  const musicToggle = document.getElementById("musicToggle");
  const bgMusic = document.getElementById("bgMusic");
  const musicSource = document.getElementById("musicSource");

  // Ẩn điều khiển nếu tắt nhạc trong config
  if (!config.music.enabled) {
    musicControls.style.display = "none";
    return;
  }

  // Gán nguồn nhạc và âm lượng
  musicSource.src = config.music.musicUrl;
  bgMusic.volume = config.music.volume || 0.5;
  bgMusic.load();

  // Thử tự động phát nếu được bật
  if (config.music.autoplay) {
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log("Trình duyệt đã chặn tự động phát nhạc");
        musicToggle.textContent = config.music.startText;
      });
    }
  }

  // Bật / tắt nhạc khi bấm nút
  musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicToggle.textContent = config.music.stopText;
    } else {
      bgMusic.pause();
      musicToggle.textContent = config.music.startText;
    }
  });
}
