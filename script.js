//allows the entire form to be selected through JS
const form = document.querySelector('#parking-form')
//declares price
price = 5

//declaring variables for step 5, where we'll need the starting date
// let day, month, year;

number = document.querySelector("#credit-card").value

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
    validateCardNumber(number)
    // luhnCheck(number)
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
    let startDate = document.querySelector('#start-date').valueAsDate
    let startDay = startDate.getDay()
    console.log("day of the week", startDay)
    console.log("start date", typeof startDate, startDate)
    getParkingDates(startDate, totalDays)
    //pulling date for rest of function
    startDate = document.querySelector('#start-date').value
    console.log("startDate should be ", startDate)

    let fullPrice = totalDays * price;
    return `Total cost: ${fullPrice}`;
}

function getParkingDates(startDate, numOfDays) {
    let copyEndDate = new Date(Number(startDate))
    console.log("number of days", numOfDays)
    let dayArray = []
    dayArray.push(startDate.getDay())
    console.log("day array", dayArray)
    for (let i = 1; i <= numOfDays; i++) {
        endDate = copyEndDate.setDate(startDate.getDate() + i)
        endDay = new Date(endDate).getDay()
        dayArray.push(endDay)
        console.log("the end day's number code value is: ", endDay, i)
    }

    console.log("day array", dayArray)
}

function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}


// function dynamicPrice (dayArray) {

// }

// const d = startDate
// const year = d.getFullYear()
// console.log(year)
// const date = d.getDate()
// console.log(date)

// const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December'
// ]

// const monthIndex = d.getMonth()
// const monthName = months[monthIndex]
// console.log(monthName)

// const days = [
//     'Sun',
//     'Mon',
//     'Tue',
//     'Wed',
//     'Thu',
//     'Fri',
//     'Sat'
// ]

// const dayIndex = d.getDay()
// const dayName = days[dayIndex]
// console.log(dayName)

// const formatted = `${dayName}, ${date} ${monthName} ${year}`
// console.log(formatted)


// 1. pull original date of parking
// 2. apply it to array of days?
// 3. if array falls over indexes 0(sun) or 6(sat), tack on two dollars. else, leave it as 5 a day.
//  **price will need to be set as equal to the result of this function

