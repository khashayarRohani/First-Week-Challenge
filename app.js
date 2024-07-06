const shadow = document.querySelector(".shadow");

document.addEventListener("mousemove", (e) => {
  let x = e.clientX - document.documentElement.clientWidth * 1.5;
  let y = e.clientY - document.documentElement.clientHeight * 1.5;
  shadow.style.transform = "translate(" + x + "px, " + y + "px)";
});

function openLoginWindow() {
  const width = 1080;
  const height = 720;
  const left = (screen.width - width) / 2;
  const top = (screen.height - height) / 2;
  window.open(
    "login.html", // URL of the login page
    "Login", // Window name
    `width=${width},height=${height},top=${top},left=${left}`
  );
}
