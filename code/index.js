fetch("../data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    dataMine(data);
  });
const mainBlock = document.querySelector("#main-block");
const dataMine = (data) => {
  const matchDate = (info) => {
    const myDate = new Date();
    const dayNames = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    let toDay = dayNames[myDate.getDay() - 1];
    info.day == toDay
      ? (mainBlock.querySelector(`.${info.day}`).style.backgroundColor =
          "hsl(186, 34%, 60%)")
      : 1;
  };

  const applyingHeight = (info) => {
    const heroBlock = document.createElement("div"); //To contain chart and date
    const container = document.createElement("div"); //For chart
    const dateTag = document.createElement("h2"); //For date
    const amountCon = document.createElement("div"); //When hovering the chart this element will show
    //Adding class to element
    heroBlock.classList.add("hero-block");
    amountCon.classList.add("date-block");
    container.classList.add(`${info.day}`);
    container.classList.add("container");

    amountCon.textContent = `$${info.amount}`;
    amountCon.style.display = "none";
    dateTag.innerText = info.day;
    container.after(dateTag);
    ////////////////
    let heightx3 = info.amount * 3;
    container.style.height = `${heightx3}px`; //Applying height
    container.addEventListener("mouseover", () => {
      container.style.opacity = "0.5";
      amountCon.style.display = "block";
      // if (amountCon.style.display == "none") {
      //   amountCon.style.display = "block";
      // } else {
      //   amountCon.style.display = "none";
      // }
    });
    container.addEventListener("mouseout", () => {
      container.style.opacity = "1";
      amountCon.style.display = "none";
    });
    heroBlock.append(amountCon, container, dateTag);
    mainBlock.appendChild(heroBlock);
  };

  data.forEach((info) => {
    applyingHeight(info);
    matchDate(info);
  });
};
