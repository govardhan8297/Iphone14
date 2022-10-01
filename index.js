function onmouseclick() {
  const notch = document.querySelector(".notch");
  notch.style.height = "60px";
  notch.style.transition = "all 0.3s";
  const answer = document.querySelector(".answer");
  answer.style.transition = "all 0.5s";
  // answer.style.fontSize = "25px";
  // answer.style.transform = "translateY(-25px)";
  answer.style.top = "0px";
  answer.style.right = "55px";
  // var ctx = answer.getContext("2d");
  // ctx.rotate((20 * Math.PI) / 180);
  // answer.style.transform = "rotate(-270deg)";
  // answer.style.transform = "translateX(-80px)";
  answer.style.position = "relative";
  answer.style.color = "white";
  answer.style.zInder = "1000";
  const end = document.querySelector(".end");
  end.style.transition = "all 0.5s";
  // end.style.fontSize = "25px";
  end.style.transform = "translate(-11px)";
  end.style.backgroundColor = "red";
  end.style.color = "white";
  const caller = document.querySelector(".caller");
  caller.style.transition = "all 1s";
  caller.style.fontSize = "20px";
  caller.style.height = "60px";
  caller.style.paddingTop = "10px";
  caller.style.marginLeft = "20px";
  answer.style.width = "40px";
  answer.style.height = "40px";
  answer.style.backgroundColor = "green";
  answer.style.borderRadius = "50%";
  end.style.rotate = "135deg";
  end.style.position = "relative";
  end.style.top = "18px";
  end.style.left = "40px";
  end.style.width = "40px";
  end.style.height = "40px";
  end.style.backgroundColor = "red";
  end.style.borderRadius = "50%";
  // end.style.position = "absolute";
  // end.style.marginTop = "10px";
  end.style.paddingTop = "10px";
  end.style.marginTop = "";
  end.style.marginRight = "10px";

  end.style.paddingLeft = "10px";
  answer.style.marginTop = "10px";
  //   answer.style.marginRight = "-5px";

  answer.style.paddingTop = "10px";
  answer.style.paddingLeft = "10px";
}
function call() {
  location.href = "tel:+918297297845";
}

function cut() {
  const notch = document.querySelector(".notch");
  notch.style.height = "30px";
}

function leave() {
  const notch = document.querySelector(".notch");
  notch.style.height = "30px";
  const answer = document.querySelector(".answer");
  answer.style.fontSize = "20px";
  const end = document.querySelector(".end");
  end.style.fontSize = "20px";
  const caller = document.querySelector(".caller");
  caller.style.fontSize = "16px";
  caller.style.height = "30px";
  caller.style.paddingTop = "0px";
  answer.style.color = "green";
  end.style.color = "red";
  answer.style.marginTop = "-4px";
  end.style.marginTop = "-14px";
  end.style.left = "50px";
  answer.style.top = "0px";
  answer.style.backgroundColor = "";
  end.style.backgroundColor = "";
}
