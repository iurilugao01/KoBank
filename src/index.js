import { verification, isNumber } from "./myFunctions.js";
let transactions = [];

if (localStorage.getItem("money") != null) {
  document.querySelector("#money").innerText = localStorage.getItem("money");
}

const transaction = (type) => {
  transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  event.preventDefault();

  const money = document.querySelector("#money");
  const valueDig = document.querySelector("#value");

  let newMoney;

  if (type === "pay") {
    newMoney = parseFloat(money.innerText) - parseFloat(valueDig.value);
    transactions.push("pagou " + valueDig.value);
  }

  if (type === "receive") {
    newMoney = parseFloat(money.innerText) + parseFloat(valueDig.value);
    transactions.push("recebeu " + valueDig.value);
  }

  if (isNumber(newMoney)) {
    money.innerText = newMoney;
    valueDig.value = null;

    localStorage.setItem("money", money.innerText);
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }

  console.log(transactions);
  verification();
};

document
  .querySelector("#pay")
  .addEventListener("click", () => transaction("pay"));
document
  .querySelector("#receive")
  .addEventListener("click", () => transaction("receive"));

verification();
