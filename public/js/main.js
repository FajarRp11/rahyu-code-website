const aboutBelowBtn = () => {
  const aboutBtn = document.getElementById("about-btn");

  aboutBtn.addEventListener("click", () => {
    if (aboutBtn.innerText === "Read More") {
      aboutBtn.innerText = "Read Less";
    } else {
      aboutBtn.innerText = "Read More";
    }
  });
};

aboutBelowBtn();
