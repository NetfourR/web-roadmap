

const changeArmColor = (robotClass) => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.querySelector(`.${robotClass} #arm-left`).style.backgroundColor =
  randomColor;
  document.querySelector(`.${robotClass} #arm-right`).style.backgroundColor =
  randomColor;
  };

  const changeLegColor = (robotClass) => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.querySelector(`.${robotClass} #leg-left`).style.backgroundColor =
  randomColor;
  document.querySelector(`.${robotClass} #leg-right`).style.backgroundColor =
  randomColor;
  };

  const changeEyeColor = (robotClass) => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.querySelector(`.${robotClass} #eye-left`).style.backgroundColor =
  randomColor;
  document.querySelector(`.${robotClass} #eye-right`).style.backgroundColor =
  randomColor;
  };

  const changeFaceColor = (robotClass) => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.querySelector(`.${robotClass} #eyes`).style.backgroundColor =
  randomColor;
};

document.addEventListener("keydown", function (event) {
    if (event.key === "e")  {
      changeArmColor("first-robot");
    }
    if (event.key === "r") {
        changeLegColor("first-robot");
      }
      if (event.key === "t") {
        changeEyeColor("first-robot");
      }
      if (event.key === "y") {
        changeFaceColor("first-robot");
      }
    if (event.key === "d" ) {
      changeArmColor("second-robot");
    }
    if (event.key === "f" ) {
        changeLegColor("second-robot");
      }
      if (event.key === "g" ) {
        changeEyeColor("second-robot");
      }
      if (event.key === "h" ) {
        changeFaceColor("second-robot");
      }
    if (event.key === "c") {
      changeArmColor("third-robot");
    }
    if (event.key === "v") {
        changeLegColor("third-robot");
      }
      if (event.key === "b") {
        changeEyeColor("third-robot");
      }
      if (event.key === "n") {
        changeFaceColor("third-robot");
      }
  });