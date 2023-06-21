var pinForm = document.getElementById('pinForm');
var actionContainer = document.getElementById('actionContainer');
var addMoneyBtn = document.getElementById('addMoneyBtn');
var withdrawMoneyBtn = document.getElementById('withdrawMoneyBtn');
var resultContainer = document.getElementById('resultContainer');
var resultMessage = document.getElementById('resultMessage');
var resetBtn = document.getElementById('resetBtn');
var currentBalance = 5000;

pinForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var pinInput = document.getElementById('pinInput').value;
  if (pinInput === '2004') {
    pinForm.style.display = 'none';
    actionContainer.style.display = 'block';
  } else {
    alert('Invalid PIN code. Please try again.');
    pinForm.reset();
  }
});

addMoneyBtn.addEventListener('click', function () {
  var amount = parseInt(prompt('Enter the amount to add:'));
  if (!isNaN(amount)) {
    currentBalance += amount;
    showResult('Successfully added $' + amount + '. New balance: $' + currentBalance + '.');
  } else {
    showResult('Invalid amount. Please try again.');
  }
});

withdrawMoneyBtn.addEventListener('click', function () {
  var amount = parseInt(prompt('Enter the amount to withdraw:'));
  if (!isNaN(amount) && amount <= currentBalance) {
    currentBalance -= amount;
    showResult('Successfully withdrew $' + amount + '. New balance: $' + currentBalance + '.');
  } else {
    showResult('Insufficient funds or invalid amount. Please try again.');
  }
});

resetBtn.addEventListener('click', function () {
  pinForm.style.display = 'block';
  actionContainer.style.display = 'none';
  resultContainer.style.display = 'none';
  pinForm.reset();
});

function showResult(message) {
  actionContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  resultMessage.textContent = message;
}