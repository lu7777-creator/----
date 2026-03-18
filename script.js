window.addEventListener("scroll", function() {
  const header = document.querySelector(".header");
  if (header) {
    header.style.boxShadow =
      window.scrollY > 50
        ? "0 5px 20px rgba(0,0,0,0.15)"
        : "0 5px 15px rgba(0,0,0,0.05)";
  }
});

const form = document.getElementById("diagnoseForm");
const result = document.getElementById("result");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const tone = document.querySelector('input[name="tone"]:checked');
    const bright = document.querySelector('input[name="bright"]:checked');

    if (!tone || !bright) {
      result.textContent = "すべて選択してください。";
      return;
    }

    let diagnosis = "";

    if (tone.value === "warm" && bright.value === "bright") {
      diagnosis = "あなたは Springタイプ 🌸";
    } else if (tone.value === "warm" && bright.value === "soft") {
      diagnosis = "あなたは Autumnタイプ 🍁";
    } else if (tone.value === "cool" && bright.value === "bright") {
      diagnosis = "あなたは Summerタイプ 🌷";
    } else {
      diagnosis = "あなたは Winterタイプ ❄️";
    }

    result.textContent = diagnosis;
  });
}