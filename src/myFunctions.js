export const verification = () => {
  const atualMoney = document.querySelector("#money");
  const debt = parseFloat(atualMoney.innerText) < 0;

  if (debt) {
    atualMoney.style.color = "red";
  } else {
    atualMoney.style.color = "white";
  }
};

export const isNumber = (arg) => {
  if (isNaN(arg)) {
    return false;
  }
  return true;
};
