const btn = document.getElementById("btn")
const day = document.querySelector('.day')
const month = document.querySelector('.month')
const year = document.querySelector('.year')
const resDays = document.querySelector('.days')
const resMonths = document.querySelector('.months')
const resYears = document.querySelector('.years')
const dayError = document.getElementById("dayError")
const monthError = document.getElementById("monthError")
const yearError = document.getElementById("yearError")
const redDay = document.getElementById("redDay")
const redMonth = document.getElementById("redMonth")
const redYear = document.getElementById("redYear")

let date = new Date()
let day2 =date.getDate()
let month2 = 1 + date.getMonth()
let year2 = date.getFullYear()
let monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const ageFinal = function () {
    if (day.value > day2) {
      day2 = day2 + monthArr[month2 - 1];
      month2 = month2 - 1;
    }
    if (month.value > month2) {
      month2 = month2 + 12;
      year2 = year2 - 1;
    }
    let calcDays = day2 - day.value;
    let calcMonths = month2 - month.value;
    let calcYear = year2 - year.value;
  
  if(day.value && month.value && year.value) {
    resDays.textContent = calcDays;
    resMonths.textContent = calcMonths;
    resYears.textContent = calcYear;
  }
    
  };
  const error = function () {
    if(day.value === ""){
        day.style.border = "1px solid hsl(0, 100%, 67%)";
        redDay.style.color = "hsl(0, 100%, 67%)";
        dayError.textContent = "This field is required";
    }else if(day.value < 1 || day.value > 31){
        dayError.textContent = "Must be a valid day";
        redDay.style.color = "hsl(0, 100%, 67%)";
        day.style.border = "1px solid hsl(0, 100%, 67%)";
        resDays.textContent = "--"
    }else{

    }
    if(month.value === ""){
        month.style.border = "1px solid hsl(0, 100%, 67%)";
        redMonth.style.color = "hsl(0, 100%, 67%)";
        monthError.textContent = "This field is required";
    }else if(month.value < 1 || month.value > 12){
        monthError.textContent = "Must be a valid month";
        redMonth.style.color = "hsl(0, 100%, 67%)";
        month.style.border = "1px solid hsl(0, 100%, 67%)";
        resMonths.textContent = "--"
    }else{
        
    }
    if(year.value === ""){
        year.style.border = "1px solid hsl(0, 100%, 67%)";
        redYear.style.color = "hsl(0, 100%, 67%)";
        yearError.textContent = "This field is required";
    }else if(year.value < 1 || year.value > 2050){
        yearError.textContent = "Must be a valid year";
        redYear.style.color = "hsl(0, 100%, 67%)";
        year.style.border = "1px solid hsl(0, 100%, 67%)";
        resYears.textContent = "--"
    }else{
        
    }
  }

btn.addEventListener("click", function(){
    ageFinal()
    error()
})
