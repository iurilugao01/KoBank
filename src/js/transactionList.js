transactions = [];

const updateTransactionsList = () => {
  transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  const ul = document.querySelector("#transactionsList");
  ul.innerHTML = "";

  transactions.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = JSON.stringify(element);

    ul.appendChild(li);
  });
};

const cleanTransactionList = () => {
  transactions = [];

  document.querySelector("#transactionsList").innerHTML = "";
  localStorage.removeItem("transactions");
};

document
  .querySelector("#refreshBtn")
  .addEventListener("click", updateTransactionsList);
document
  .querySelector("#cleanBtn")
  .addEventListener("click", cleanTransactionList);

updateTransactionsList;
