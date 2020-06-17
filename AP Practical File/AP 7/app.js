document.getElementById('results').style.display = 'none';
document.getElementById('loading').style.display = 'none';

//Listening to Submit button
document.querySelector('#loan-form').addEventListener('submit',function(event) {
    //Hide the results
    document.getElementById('results').style.display = 'none';
    
    //Show Loader
    document.getElementById('loading').style.display = 'block';
    
    setTimeout(calculation, 2000);
    event.preventDefault();
});

//Calculating Results
function calculation() {
    
    //UI Variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    
    //Compute Monthly Payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
    
    //Hide Loader
    document.getElementById('loading').style.display = 'none';
    
    if(isFinite(monthly)) {
        monthlyPayment.value = '$ ' + monthly.toFixed(2);
        totalPayment.value = '$ ' +  (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = '$ ' +  ((monthly * calculatedPayments) - principal).toFixed(2);
        
        //Show the results
        document.getElementById('results').style.display = 'block';
    } else {
        showError('Please check the numbers');
    }
}

//Error function
function showError(error) {
    
    //Create a div
    errorDiv = document.createElement('div');
    
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    
    //Adding classes to our div
    errorDiv.className = 'alert alert-danger';
    
    //Create text-node and append it to the div
    errorDiv.appendChild(document.createTextNode(error));
    
    //Insert it before heading
    card.insertBefore(errorDiv, heading);
    
    //Clear error after 3seconds
    setTimeout(clearError, 3000);
}

//Clear Error
function clearError() {
    document.querySelector('.alert').remove();
}