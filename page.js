let calc_button = document.querySelector('.calc_button');

calc_button.addEventListener("click",()=>{
  validate();

  calculate();
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
  const errorMsg = [
    {err1:'This field is required',
     err2:'Numbers only' 
    }
  ];

  //STYLE TEXT INPUT VALIDATION
  if(re.test(mortgageInput.value)) {
    mortgageInput.style.border ='1px solid hsl(200, 24%, 40%)';
    amountInput.style.backgroundColor = 'hsl(200, 24%, 40%)'
    spn1.innerHTML = '';
  }else if(mortgageInput.value == ''){
    mortgageInput.style.border ='1px solid hsl(4, 69%, 50%)';
    amountInput.style.backgroundColor = 'hsl(4, 69%, 50%)';
    spn1.innerHTML = errorMsg[0].err1;
    
  }else{
    mortgageInput.style.border ='1px solid hsl(4, 69%, 50%)';
    amountInput.style.backgroundColor = 'hsl(4, 69%, 50%)';
    spn1.innerHTML = errorMsg[0].err2;
  };

  if(re.test(mortgageTerm.value)){
     mortgageTerm.style.border ='1px solid hsl(200, 24%, 40%)';
     amountInput2.style.backgroundColor = 'hsl(200, 24%, 40%)';
     spn2.innerHTML = '';
  }else if(mortgageTerm.value ==''){
    mortgageTerm.style.border ='1px solid hsl(4, 69%, 50%)';
    amountInput2.style.backgroundColor = 'hsl(4, 69%, 50%)';
    spn2.innerHTML = errorMsg[0].err1
  }else{
    mortgageTerm.style.border ='1px solid hsl(4, 69%, 50%)';
    amountInput2.style.backgroundColor = 'hsl(4, 69%, 50%)'
    spn2.innerHTML = errorMsg[0].err2
  };

  if(re.test(mortgageRate.value)){
    mortgageRate.style.border ='1px solid hsl(200, 24%, 40%)';
    amountInput3.style.backgroundColor = 'hsl(200, 24%, 40%)';
    spn3.innerHTML = '';
 }else if(mortgageRate==''){
  mortgageRate.style.border ='1px solid hsl(4, 69%, 50%)';
   amountInput3.style.backgroundColor = 'hsl(4, 69%, 50%)'
   spn3.innerHTML = errorMsg[0].err1
 }else{
   mortgageRate.style.border ='1px solid hsl(4, 69%, 50%)';
   amountInput3.style.backgroundColor = 'hsl(4, 69%, 50%)'
   spn3.innerHTML = errorMsg[0].err2
 };
 //STYLE TEXT INPUT VALIDATION
 //STYLE RADIO INPUT VALIDATION
  const radioInputs = document.querySelector('.radio_inputs').querySelectorAll('input');
  if(radioInputs[0].checked||radioInputs[1].checked){
    console.log('checked')
  }else{
    console.log('not yet')
    spn4.innerHTML = errorMsg[0].err1
  }
 //STYLE RADIO INPUT VALIDATION
}
//VALIDATE PAGE & STYLE PAGE


