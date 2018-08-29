// Listen for submit
document.querySelector('#loan-form').addEventListener('submit', function(e) {
  //Hide results
  document.querySelector('#loading').style.display = 'none';

  //Hide loader
  document.querySelector('#loading').style.display = 'block';

  setTimeout(calculateResults, 2000);
  e.preventDefault();
});

//Calculate resault
function calculateResults() {
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

  //Calculate monthly payment
  //math.pow(4, 3) innebar "upphojt i" 4*4*4
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);
  //isFinite() checks if number is infinite
  if (isFinite(monthly)) {
    ELmonthlyPayment.value = monthly.toFixed(2);
    ELtotalPayment.value = (monthly * calculatedPayments).toFixed(2);
    ELtotalInterest.value = (monthly * calculatedPayments - principal).toFixed(
      2
    );

    //Hide loader
    document.querySelector('#loading').style.display = 'none';

    //Show results
    document.querySelector('#results').style.display = 'block';
  } else {
    showError('Pleas check your number');
  }
}

//Show Error
function showError(error) {
  //Create a div
  const errorDiv = document.createElement('div');

  //Get elements from html
  const ELcard = document.querySelector('.card');
  const ELheading = document.querySelector('.heading');

  //Add bootstrap classes to div
  errorDiv.className = 'alert alert-danger';

  //Create text nod and append do div
  errorDiv.appendChild(document.createTextNode(error));

  //Insert error above heading, must be Before a parent element
  ELcard.insertBefore(errorDiv, ELheading);

  //Clear error message after 2 sec
  setTimeout(clearError, 2000);
}

//Clear Error
function clearError() {
  document.querySelector('.alert').remove();
}
