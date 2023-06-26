const slider = document.getElementById("slider");
let isDragging = false;

slider.addEventListener("mousedown", () => {
  isDragging = true;
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    const volume = calculateVolume();
    if (volume > 100) {
      slider.classList.add("fall-off");
      // Generate random volume string
      const randomVolume = generateRandomVolume();
      console.log("Volume:", randomVolume);
    } else {
      slider.classList.remove("fall-off");
      console.log("Volume:", volume + "%");
    }
    isDragging = false;
  }
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const sliderWidth = document.querySelector(".slider-container").offsetWidth;
    const newPosition = event.clientX - sliderWidth / 2;
    slider.style.left = `${Math.min(Math.max(0, newPosition), sliderWidth - 10)}px`;
  }
});

function calculateVolume() {
  const sliderWidth = document.querySelector(".slider-container").offsetWidth;
  const sliderPosition = parseFloat(slider.style.left);
  return Math.round((sliderPosition / (sliderWidth - 10)) * 100);
}

function generateRandomVolume() {
  const randomVolume = Math.random().toString(36).substring(2, 5);
  return randomVolume;
}
