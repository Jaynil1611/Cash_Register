const currencies = [1, 5, 10, 20, 100, 500, 2000];

const billInput = document.querySelector("#bill");

const cashInput = document.querySelector("#cash");

const inputForm = document.querySelector("form");

const outputDiv = document.querySelector("#output");

const displayOutput = document.querySelector("#output-list");

function calculateCurrencies(bill, cash) {
  const returnAmount = {};
  let amount = cash - bill;
  if (amount === 0) {
    returnAmount[0] = 0;
  }
  let i = currencies.length - 1;
  while (amount > 0) {
    if (amount >= currencies[i]) {
      returnAmount[currencies[i]] = Math.floor(amount / currencies[i]);
      amount = Math.floor(amount % currencies[i]);
    }
    i -= 1;
  }
  console.log(returnAmount);
  displayResults(returnAmount);
}

function displayResults(currencyRequired) {
  const currency = Object.keys(currencyRequired);
  outputDiv.innerHTML = currency
    .map((curr) => {
      return (
        "<li class='list-item'>" +
        "<span>" +
        curr +
        "</span>" +
        "<span>" +
        " X " +
        "</span>" +
        "<span>" +
        currencyRequired[curr] +
        "</span>" +
        "</li>"
      );
    })
    .join("");
}

function handleSubmit(e) {
  e.preventDefault();
  if (billInput && cashInput && cashInput.value >= billInput.value) {
    displayOutput.style.display = "block";
    calculateCurrencies(billInput.value, cashInput.value);
  } else {
    alert("Please enter cash amount higher than bill");
    console.log("error");
  }
}

function toggleDisabled(e) {
  if (billInput.value) cashInput.disabled = false;
  else cashInput.disabled = true;
}

inputForm.addEventListener("submit", handleSubmit);
billInput.addEventListener("change", toggleDisabled);
