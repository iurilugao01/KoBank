transactions = [];

const refresh = () => {
  transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  const ul = document.querySelector("#transactionsList");
  ul.innerHTML = "";

  transactions.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = JSON.stringify(element);

    ul.appendChild(li);
  });
};

const clean = () => {
  transactions = [];

  document.querySelector("#transactionsList").innerHTML = "";
  localStorage.removeItem("transactions");
};

document.querySelector("#refreshBtn").addEventListener("click", refresh);
document.querySelector("#cleanBtn").addEventListener("click", clean);

refresh();
