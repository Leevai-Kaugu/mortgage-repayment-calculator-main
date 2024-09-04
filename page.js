let calc_button = document.querySelector('.calc_button');

calc_button.addEventListener("click",()=>{
  validate();
  if(validate() == true){
    document.querySelector('.calc_image').style.display = 'none';
    document.querySelector('.calculations').style.display = 'block'
    calculate()
  }else{
    
  }
});



//VALIDATE PAGE & STYLE PAGE
function validate(){
  const mortgageInput = document.querySelector('.amount');
  const mortgageTerm = document.querySelector('.term');
  const mortgageRate = document.querySelector('.rates');
  const amountInput = document.querySelector('.amount_input');
  const amountInput2 = document.querySelector('.amount_input2');
  const amountInput3 = document.querySelector('.amount_input3');
  const spn1 = document.querySelector('.err1');
  const spn2 = document.querySelector('.err2');
  const spn3 = document.querySelector('.err3');
  const spn4 = document.querySelector('.err4');
  const re = /^\d+(\.\d+)?$/;
  let isActive = true;
  const errorMsg = [
    {err1:'This field is required',
     err2:'Numbers only',
    }
  ];

  //STYLE TEXT INPUT VALIDATION
  if(re.test(mortgageInput.value)) {
    mortgageInput.style.border ='1px solid hsl(200, 24%, 40%)';
    amountInput.style.backgroundColor = 'hsl(200, 24%, 40%)'
    spn1.innerHTML = '';
    isActive = true;
  }else if(mortgageInput.value == ''){
    mortgageInput.style.border ='1px solid hsl(4, 69%, 50%)';
    amountInput.style.backgroundColor = 'hsl(4, 69%, 50%)';
    spn1.innerHTML = errorMsg[0].err1;
    isActive = false;
  }else{
    mortgageInput.style.border ='1px solid hsl(4, 69%, 50%)';
    amountInput.style.backgroundColor = 'hsl(4, 69%, 50%)';
    spn1.innerHTML = errorMsg[0].err2;
    isActive = false;
  };

  if(re.test(mortgageTerm.value)){
     mortgageTerm.style.border ='1px solid hsl(200, 24%, 40%)';
     amountInput2.style.backgroundColor = 'hsl(200, 24%, 40%)';
     spn2.innerHTML = '';
     isActive = true;
  }else if(mortgageTerm.value ==''){
    mortgageTerm.style.border ='1px solid hsl(4, 69%, 50%)';
    amountInput2.style.backgroundColor = 'hsl(4, 69%, 50%)';
    spn2.innerHTML = errorMsg[0].err1;
    isActive = false;
  }else{
    mortgageTerm.style.border ='1px solid hsl(4, 69%, 50%)';
    amountInput2.style.backgroundColor = 'hsl(4, 69%, 50%)'
    spn2.innerHTML = errorMsg[0].err2;
    isActive = false;
  };

  if(re.test(mortgageRate.value)){
    mortgageRate.style.border ='1px solid hsl(200, 24%, 40%)';
    amountInput3.style.backgroundColor = 'hsl(200, 24%, 40%)';
    spn3.innerHTML = '';
    isActive = true;
 }else if(mortgageRate==''){
  mortgageRate.style.border ='1px solid hsl(4, 69%, 50%)';
   amountInput3.style.backgroundColor = 'hsl(4, 69%, 50%)';
   spn3.innerHTML = errorMsg[0].err1;
   isActive = false;
 }else{
   mortgageRate.style.border ='1px solid hsl(4, 69%, 50%)';
   amountInput3.style.backgroundColor = 'hsl(4, 69%, 50%)';
   spn3.innerHTML = errorMsg[0].err2;
   isActive = false;
 };
 //STYLE TEXT INPUT VALIDATION
 //STYLE RADIO INPUT VALIDATION
  const radioInputs = document.querySelector('.radio_inputs').querySelectorAll('input');
  if(radioInputs[0].checked||radioInputs[1].checked){
    spn4.innerHTML = '';
  }else{
    spn4.innerHTML = errorMsg[0].err1
  }
 //STYLE RADIO INPUT VALIDATION
 return isActive;
}
//VALIDATE PAGE & STYLE PAGE


function calculate(){
  const resultsDiv = document.querySelector('.results');
  const principal = document.querySelector('.amount').value
  const years = document.querySelector('.term').value
  const mortgageRate = document.querySelector('.rates').value
  
    
  function calculateMonthlyPayment(){
    // Convert annual interest rate to monthly and percentage to decimal
    const monthlyInterestRate = mortgageRate / 100 / 12;
    // Calculate total number of payments
    const numberOfPayments = years * 12;

    // Calculate monthly payment using the mortgage formula
    const monthlyPayment = (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    return monthlyPayment;
  };
 
  function calculateTotalPayment(){
    const total = calculateMonthlyPayment()*12*years;
    return total
  }
  
  function formatNumber(num) {
    let str = num.toString();
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

let totalAmount = formatNumber(calculateTotalPayment().toFixed(2));
let totalMonthly = formatNumber(calculateMonthlyPayment().toFixed(2));

  if(document.querySelector('#repayment').checked){
    resultsDiv.querySelector('.calculations').innerHTML = `
      <div>
            <h1>Your results</h1>
            <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
          <div>
          <div class="results_div">
          <div class="monthly_repayments">
            <p>Your monthly repayments</p>
            <p>£${totalMonthly}</p>
          </div>
          <div class="total_over_time">
            <p>Total you'll repay over the term</p>
            <p>£${totalAmount}</p>
          </div>
       </div>
    `
  }else{
    resultsDiv.querySelector('.calculations').innerHTML = `
      <div>
            <h1>Your results</h1>
            <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
          <div>
          <div class="results_div">
          <div class="monthly_repayments">
            <p>Your monthly repayments</p>
            <p>£${calculateMonthlyPayment().toFixed(2).toLocaleString()}</p>
          </div>
       </div>
  `
  }
}