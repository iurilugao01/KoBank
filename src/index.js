import { validateCurrentMoneyColor } from "./js/validateCurrentMoneyColor.js";
import { handleTransaction } from "./js/handleTransaction.js";
import "./js/transactionList.js";

if (localStorage.getItem("money") != null) {
  document.querySelector("#money").innerText = localStorage.getItem("money");
}

document
  .querySelector("#pay")
  .addEventListener("click", () => handleTransaction("pay"));
document
  .querySelector("#receive")
  .addEventListener("click", () => handleTransaction("receive"));

validateCurrentMoneyColor();
