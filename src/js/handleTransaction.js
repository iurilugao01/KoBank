let transactions = [];

export const handleTransaction = (type) => {
  transactions = JSON.parse(localStorage.getItem("transactions")) || [];

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

  if (typeof newMoney === "number") {
    money.innerText = newMoney;
    valueDig.value = null;

    localStorage.setItem("money", money.innerText);
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }

  console.log(transactions);
};
