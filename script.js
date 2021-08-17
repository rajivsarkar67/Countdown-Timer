dateEl = document.querySelector(".date");
submitEl = document.querySelector(".submit")
countdownEl = document.querySelector(".countdown-display");
let myval;

submitEl.addEventListener("click", () => {
    // converting toBeDate to javascript date format, calculating current date
    let toBeDate = dateEl.value;
    toBeDate = new Date(toBeDate);
    let currDate = new Date();

    // Declaring essential variables
    let diff = 0;
    let days = 0;
    let remaining = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    
    if(myval !== undefined)
        clearInterval(myval);
    

    if(currDate >= toBeDate){
        countdownEl.textContent = `Please select a date from the future`;
    }
    else{
        myval = setInterval(() => {
            // getting the current date
            currDate = new Date();

            // Printing the difference
            diff = toBeDate.getTime() - currDate.getTime();
            diff = Math.floor(diff/1000);
            // console.log(diff);
            // console.log(typeof(diff));

            // Calculating the variables
            days = Math.floor(diff/86400);
            remaining = diff%86400;
            hours = Math.floor(remaining/3600);
            remaining = remaining%3600;
            minutes = Math.floor(remaining/60);
            seconds = remaining%60;

            let dayStr = days===1?`day`:`days`;
            let hourStr = hours===1?`hour`:`hours`;
            let minuteStr = minutes===1?`minute`:`minutes`;
            let secondStr = seconds===1?`second`:`seconds`;

            // console.log(days, hours, minutes, seconds);
            // console.log(myval);
            let displayStr = `${days} ${dayStr} : ${hours} ${hourStr} : ${minutes} ${minuteStr} : ${seconds} ${secondStr}`;
            countdownEl.textContent = displayStr;
            }, 1000);
        }
    
    
});

// let currDate = new Date();
// console.log(`currDate = ${currDate}`);
// console.log(typeof(currDate));


