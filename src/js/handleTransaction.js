import { getFormatedDate } from "./getFormatedDate.js";
let transactions = [];

export const handleTransaction = (type) => {
  transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  const money = document.querySelector("#money");
  const valueDig = document.querySelector("#value");

  let newMoney;

  if (type === "pay") {
    newMoney = parseFloat(money.innerText) - parseFloat(valueDig.value);
    transactions.push(
      "pagou " + valueDig.value + " reais" + " na " + getFormatedDate()
    );
  }

  if (type === "receive") {
    newMoney = parseFloat(money.innerText) + parseFloat(valueDig.value);
    transactions.push(
      "recebeu " + valueDig.value + " reais" + " na " + getFormatedDate()
    );
  }

  if (typeof newMoney === "number") {
    money.innerText = newMoney;
    valueDig.value = null;

    localStorage.setItem("money", money.innerText);
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }
};
