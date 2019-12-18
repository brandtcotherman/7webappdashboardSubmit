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

var ul = document.getElementById('trafficUl');//Get the element with a class of btn__reset and save it to a variable
var items = ul.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
    console.log("for looping:"+ items[i].textContent);
    items[0].style.backgroundColor = "green";
}
items[0].addEventListener('click', (e) => { 
    console.log("Button Pressed: "+ items[0].textContent);
    items[0].style.backgroundColor = "green";
    items[1].style.backgroundColor = "white";
    items[2].style.backgroundColor = "white";
    items[3].style.backgroundColor = "white";
    chartData=hourlyData;
    updateChart();
});
items[1].addEventListener('click', (e) => { 
    console.log("Button Pressed: "+ items[1].textContent);
    items[0].style.backgroundColor = "white";
    items[1].style.backgroundColor = "green";
    items[2].style.backgroundColor = "white";
    items[3].style.backgroundColor = "white";
    chartData=dailyData1;
    updateChart();
});
items[2].addEventListener('click', (e) => { 
    console.log("Button Pressed: "+ items[2].textContent);
    items[0].style.backgroundColor = "white";
    items[1].style.backgroundColor = "white";
    items[2].style.backgroundColor = "green";
    items[3].style.backgroundColor = "white";
    chartData=weeklyData;
    updateChart();
});
items[3].addEventListener('click', (e) => { 
    console.log("Button Pressed: "+ items[3].textContent);
    items[0].style.backgroundColor = "white";
    items[1].style.backgroundColor = "white";
    items[2].style.backgroundColor = "white";
    items[3].style.backgroundColor = "green";
    chartData=monthlyData;
    updateChart();
});

function updateChart(){
    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: chartData,
        options: trafficOptions
    });
}
updateChart();

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
