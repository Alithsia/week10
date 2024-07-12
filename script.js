const showMessage = () => "Я учу JavaScript!";
console.log(showMessage());

const next = document.getElementById("next");
const previous = document.getElementById("previous");
const image = document.getElementById("image");

const showImageN = () => {
  image.src = "clickN.png";
  previous.style.backgroundColor = "#afafb3";
  next.style.backgroundColor = "#5a5cf1";
};

const showImageP = () => {
  image.src = "clickP.png";
  next.style.backgroundColor = "#afafb3";
  previous.style.backgroundColor = "#5a5cf1";
};

const calculateTotalPrice = (quantity = 2, price = 15000000) => {
  let sum = quantity * price;
  return `Стоимость покупки: ${sum.toLocaleString("ru-RU")} рублей.`;
};

const cost = document.getElementById("cost");

const showPriceOnPage = () => {
  cost.textContent = calculateTotalPrice();
};

const clearField = () => {
  cost.textContent = "???";
};
