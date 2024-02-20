import { validateCurrentMoneyColor } from "./js/validateCurrentMoneyColor.js";
import { handleTransaction } from "./js/handleTransaction.js";

if (localStorage.getItem("money") != null) {
  document.querySelector("#money").innerText = localStorage.getItem("money");
}

const executeFunctions = (type) => {
  handleTransaction(type);
  validateCurrentMoneyColor();
};

document
  .querySelector("#pay")
  .addEventListener("click", () => executeFunctions("pay"));
document
  .querySelector("#receive")
  .addEventListener("click", () => executeFunctions("receive"));

validateCurrentMoneyColor();
