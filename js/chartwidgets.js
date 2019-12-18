var trafficCanvas=document.getElementById("traffic-chart");//Store the canvas element with the id of “traffic-chart” in a variable named trafficCanvas.

let hourlyData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};
let dailyData1 = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [250, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
    1300],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};
let weeklyData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [200, 400, 1000, 3000, 2500, 2000, 100, 99, 101, 150,
    9],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};
let monthlyData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [100, 800, 900, 1000, 1500, 1200, 1250, 1700, 2000, 3000,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
    duration: 0
    },
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
};


var chartData = hourlyData;//click button that changes chartData
var btn_chart = document.querySelectorAll('.traffic-nav');//Get the element with a class of btn__reset and save it to a variable

btn_chart.addEventListener('click', (e) => { //Attach an event listener to the “Start Game” button to hide the start screen overlay.
    //document.btn_chart.style.backgroundColor = "green";

    btn_pressed=btn_chart.textContent;

    if (btn_pressed="Hourly"){chartData=monthlyData;}
    if (btn_pressed="Daily"){chartData=weeklyData;}
    if (btn_pressed="Weekly"){chartData=dailyData1;}
    if (btn_pressed="Monthly"){chartData=hourlyData;}
    
    console.log("Button Pressed: "+ btn_chart.textContent);
});

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: chartData,
    options: trafficOptions
});



const dailyCanvas = document.getElementById("daily-chart");

// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
    };
    const dailyOptions = {
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
}
   

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});



const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
    }]
};
  
const mobileOptions = {
    legend: {
    position: 'right',
    labels: {
    boxWidth: 20,
    fontStyle: 'bold'
    }
    }
}
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});
