let price = 5
let fullPrice =


window.addEventListener('submit', event => {
    event.preventDefault()
})


document.addEventListener('click', validate)

form.addEventListener('click', validate)


function validate(event) {
    
    parkingformIsValid = true
    confirmValidForm()
}

function confirmValidForm() {
    // if (formIsValid && form.checkValidity()) {
        if (true) {
            const validMsgEl = document.querySelector('#total')
            //creating variable to hold the selector for id total
            validMsgEl.innterText = totalExpense()
            //creating a variable to hold the selector for price variable
        }
    }


function totalExpense () {
    const totalDays = document.querySelector('#days').Value// const totaldays = document.querySelector('#days'
    let fullprice = totaldays * price
    return "Total Cost: $"+ fullprice
}


//line 11 