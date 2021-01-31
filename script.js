//allows the entire form to be selected through JS
const form = document.querySelector('#parking-form')
//declares price
price = 5

//declaring variables for step 5, where we'll need the starting date
// let day, month, year;


//declaring variable formIsValid for later use in function
let formIsValid

//adds event listener when user submits; triggers the event that prevents 
//default behavior before validation
window.addEventListener('submit', event => {
    event.preventDefault()
    validate()
})

//adds an event listener when user clicks form, runs the validate function
// form.addEventListener('click', validate)

//declares validate function;  formIsValid equals true, run confirmValidForm function
function validate() {
    console.log('validate just ran');
    formIsValid = true;
    confirmValidForm()
}

//
function confirmValidForm() {
    console.log('confirmValidForm just ran')
    if (formIsValid  && form.checkValidity()){
        const validMsgEl = document.querySelector('#total')
        validMsgEl.innerText = totalExpense()
    } else {
        console.log('Problem with form')
    }
}

function totalExpense() {
    console.log('totalExpense just ran')
    const totalDays = document.querySelector('#days').value
    console.log('totaldays: ', totalDays)
    //pulling date for rest of function
    let startDate = document.querySelector('#start-date').value
    console.log("startDate should be ", startDate)

    let fullPrice = totalDays * price;
    return `Total cost: ${fullPrice}`;
}



const d = startDate
const year = d.getFullYear()
console.log(year)
const date = d.getDate()
console.log(date)

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const monthIndex = d.getMonth()
const monthName = months[monthIndex]
console.log(monthName)

const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
]

const dayIndex = d.getDay()
const dayName = days[dayIndex]
console.log(dayName)

const formatted = `${dayName}, ${date} ${monthName} ${year}`
console.log(formatted)


// 1. pull original date of parking
// 2. apply it to array of days?
// 3. if array falls over indexes 0(sun) or 6(sat), tack on two dollars. else, leave it as 5 a day.
//  **price will need to be set as equal to the result of this function

