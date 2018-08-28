// Listen for submit
document
  .querySelector('#loan-form')
  .addEventListener('submit', calculateResults);

//Calculate resault
function calculateResults(e) {
  //Get element from html
  const ELamount = document.querySelector('#amount');
  const ELinterest = document.querySelector('#interest');
  const ELyears = document.querySelector('#years');
  const ELmonthlyPayment = document.querySelector('#monthly-payment');
  const ELtotalPayment = document.querySelector('#total-payment');
  const ELtotalInterest = document.querySelector('#total-interest');
  //parseFloat(ELamount.value) takes input and make it into decimals
  const principal = parseFloat(ELamount.value);
  const calculatedInterest = parseFloat(ELinterest.value) / 100 / 12;
  const calculatedPayments = parseFloat(ELyears.value) * 12;

  e.preventDefault();
}
