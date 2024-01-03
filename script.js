//colored balloons


const coloredBalloons = document.getElementById("balloonDiv");
function random(numbers) {
    return Math.floor(Math.random() * numbers);
}
function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(50);
    var dur = random(5) + 5;

    return `

     background-color: rgba(${r},${g},${b},0.7);
     color: rgba(${r},${g},${b},0.7);
    box-shadow: inset -7px -3px 10px
    rgba(${r - 10},${g - 10},${b - 10}, 0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
    `;

}
function createBalloons(numbers) {
    for (var i = numbers; i > 0; i--) {
        var balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.cssText = getRandomStyles();
        coloredBalloons.append(balloon);
    }
}


/*

function removeBallons() {
    balloonContainers.style.opacity = 0;
    setTimeout(() => {
        balloonContainers.remove()

    }, 500)
}
*/
window.addEventListener('load', () => {
    createBalloons(30)
});
//window.addEventListener('click', () => {
//removeBallons();
//});
//grades codes below

function calculateGrade() {
    const marks = parseInt(document.getElementById("marks").value);
    let grade;

    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60 && marks <= 79) {
        grade = "B";
    } else if (marks >= 50 && marks <= 59) {
        grade = "C";
    } else if (marks >= 40 && marks <= 49) {
        grade = "D";
    } else {
        grade = "E";
    }

    document.getElementById("grade").textContent = `Grade: ${grade}`;
}

//speed detector calculator

function calculateSpeed() {
    // grab speed element in input field using the id speed from the html file
    const speed = document.getElementById('speed').value;
    let totals = 0;
    //use if statement to check if speed is less than 70 then return s "ok"
    if (speed < 70) {
        document.getElementById("result").textContent = "Ok"
        // every 5km/h  over the speed limit of 70km/h driver recceiver 1  total point
    } else {
        totals = Math.floor((speed - 70) / 5);
        //if points exceed 12 textContent  will be "License suspended"
        //maximum is 135 -70/5 for the license to be suspended
        if (totals > 12) {
            document.getElementById('result').textContent = "License suspended";
        } else {
            document.getElementById('result').textContent = "total" + totals;
        }

    }
}

//salary
function netIncome() {
    const incomeElement = parseFloat(document.getElementById('income').value);
    ;
    const benefitsElements = parseFloat(document.getElementById('benefit').value);

    //compute for Tax
    let tax = Math.floor((incomeElement + benefitsElements) * .25);
    //N.H.I.F
    let nhif = Math.floor(incomeElement * .02);
    //nssf
    let nssf = Math.floor(incomeElement * .12);
    let netSalary = incomeElement
        - (tax + nhif + nssf);
    //display salary
    let totalSalary = document.getElementById('salary').innerHTML =
        `  <p>payee/tax is: ${tax}</p>
        <p>nhif deductions: ${nhif}</p>
        <p>nssf deductions: ${nssf}</p>
        <p>netsalary: ${netSalary}</p>
    `
    let button = document.getElementById('btn');
    button.addEventListener('click', netIncome);

}