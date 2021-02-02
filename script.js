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
    formIsValid = true;
    confirmValidForm()
}

//
function confirmValidForm() {
    console.log('confirmValidForm just ran') // confirms function runs
    if (formIsValid  && form.checkValidity()){ // if these are both true, 
        const validMsgEl = document.querySelector('#total') // set validMsgEl = '#total'
        validMsgEl.innerText = totalExpense() // populate #total with validMsgEl innerText
    } else {
        console.log('Problem with form') //and if it can't display there's a problem w/ form in console
    }
}

function totalExpense() { // declares totalExpense function
    console.log('totalExpense just ran') // confirms totalExpense function ran
    const totalDays = parseInt(document.querySelector('#days').value, 10); // declares totalDays as equal to the Integer value of #days in base 10
    console.log("total days is" , totalDays) // confirms that totalDays is what we think it is
    let startDate = document.querySelector('#start-date'); // sets startDate equal to ID start-date
    let days = [] // creates days array
    let day = new Date(startDate) // declares day as each Date

    for (let i = 1; i <= totalDays; i++) { // makes a loop on totalDays
        day = new Date(day.setDate(day.getDate() +1)) //
        days.push(day.getDay())
    }
    return days // return new array [days]
    .map(day => (day > 0 && day < 6 ? 5:7)) // perform .map() on days => days.map()
    .reduce((fullPrice, cost) => { // now perform .reduce on result reducing array down to sum for total price
        return (fullPrice += cost)

    }, 0)
}








// Rebecca's work through on Sunday
// function getParkingDates(startDate, numOfDays) {
//     let copyEndDate = new Date(Number(startDate))
//     console.log("number of days", numOfDays)
//     let dayArray = []
//     dayArray.push(startDate.getDay())
//     console.log("day array", dayArray)
//     for (let i = 1; i <= numOfDays; i++) {
//         endDate = copyEndDate.setDate(startDate.getDate() + i)
//         endDay = new Date(endDate).getDay()
//         dayArray.push(endDay)
//         console.log("the end day's number code value is: ", endDay, i)
//     }

// //     console.log("day array", dayArray)
// }

 // let startDay = startDate.getDay();
    // console.log("day of the week", startDay);
    // console.log("start date", typeof startDate, startDate);
    // getParkingDate(startDate, totalDays);
    // let fullPrice = totalDays * price;
    // return `Your total cost is $ ${fullPrice}`


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

