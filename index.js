const cont = document.getElementById("continue");
const complete = document.getElementById("thank-div");
const hName = document.getElementById("Hname");
const cNumber = document.getElementById("Cnumber");
const carder = document.getElementById("card-no");
const dater  = document.getElementById("dater");
const namer = document.getElementById("namer");
const mm = document.getElementById("lam");
const yy = document.getElementById("dem");
const eError = document.getElementById("expError");
const cError = document.getElementById("cvcError");
const numberError = document.getElementById("numberError");
const holderError = document.getElementById("holderError");
const cvc = document.getElementById("classico");
const cvcVal = document.getElementById("cvcVal");
const submit = document.getElementById("submit");


cont.addEventListener("click", ()=>{
     complete.style.visibility = "hidden";
     location.reload();
});


 
function validateForm() { 
     let validator = true;

     function containsLetters(str) {
      return /[^0-9]/.test(str);
     }

     
     function containsNumbers(str) {
      return /[0-9]/.test(str);
     }


      if(containsNumbers(hName.value)) {
           cNumber.style.border = "1px solid hsl(0, 100%, 66%)";
          holderError.innerHTML = "wrong format, letters only";
          validator = false;
     } else {
          eError.innerHTML = "";
          mm.style.border = "1px solid  hsl(212, 12%, 71%)";
     }


     if(containsLetters(cNumber.value)) {
          cNumber.style.border = "1px solid hsl(0, 100%, 66%)";
          numberError.innerHTML = "wrong format, numbers only";
          validator = false;
     } else if(cNumber.value.length < 1) {
          cNumber.style.border = "1px solid hsl(0, 100%, 66%)";
          numberError.innerHTML = "can't be blank";
          validator = false;
     }
     
     else if(cNumber.value.length < 16 || cNumber.value.length > 16) {
          cNumber.style.border = "1px solid hsl(0, 100%, 66%)";
          numberError.innerHTML = "must be 16 digits";
          validator = false;
     }
      else {
          cNumber.style.border = "1px solid  hsl(212, 12%, 71%)";
          numberError.innerHTML = "";
     }

 if(mm.value.length === 0) {
          eError.innerHTML = "can't be blank";
          mm.style.border = "1px solid  hsl(0, 100%, 66%)";
          validator = false;
     } else if(mm.value > 12) {
           eError.innerHTML = "inavalid month";
          mm.style.border = "1px solid  hsl(0, 100%, 66%)";
          validator = false;
     } 
      else {
          eError.innerHTML = "";
          mm.style.border = "1px solid  hsl(212, 12%, 71%)";
     }

    

 if(yy.value.length === 0) {
          eError.innerHTML = "can't be blank";
          yy.style.border = "1px solid  hsl(0, 100%, 66%)";
          validator = false;
     } else {
          eError.innerHTML = "";
          yy.style.border = "1px solid  hsl(212, 12%, 71%)";
     }

     if(cvc.value.length === 0) {
          cError.innerHTML = "can't be blank";
          cvc.style.border = "1px solid  hsl(0, 100%, 66%)";
          validator = false;
     } else if(cvc.value.length > 3 || cvc.value.length < 3) {
           cError.innerHTML = "must be 3 characters";
          cvc.style.border = "1px solid  hsl(0, 100%, 66%)";
          validator = false;
     } else if(containsLetters(cvc.value)){
            cError.innerHTML = "wrong format, numbers only";
          cvc.style.border = "1px solid  hsl(0, 100%, 66%)";
          validator = false;
     }
     else {
          cError.innerHTML = "";
          cvc.style.border = "1px solid hsl(212, 12%, 71%)";
     }
     return validator;
}

 function insertVal() {
     let name = hName.value;
     let cardNum = cNumber.value;
     let date = `${mm.value} / ${yy.value}`;
     let cvcNum = cvc.value;

     if(validateForm()) {
       namer.innerHTML = name;
       carder.innerHTML = cardNum;
       dater.innerHTML = date;
       cvcVal.innerHTML = cvcNum;

       complete.style.visibility = "visible"; 

     }
 }
 
 submit.addEventListener("click", insertVal);

