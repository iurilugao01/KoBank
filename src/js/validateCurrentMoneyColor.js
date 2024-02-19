export const validateCurrentMoneyColor = () => {
  const currentMoney = document.querySelector("#money");
  const isNegative = parseFloat(currentMoney.innerText) < 0;
  const color = isNegative ? "red" : "white";

  currentMoney.style.color = color;
};
