let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['S&P500'];
let colorHex = ['#4c8546'];

let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [100],
      backgroundColor: colorHex
    }],
    labels: labels
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})

let ctx2 = document.getElementById('myChart2').getContext('2d');
let labels2 = ['Technology', 'Financials', 'Consumer Discretionary', 'Industrials', 'Health Care', 'Consumer Staples', 'Telecommunications', 'Energy' ];
let colorHex2 = ['#44bd32', '#e17055', '#0984e3', '#d63031', '#273c75', '#e84393', '#16a085', '#2d3436', ];

let myChart2 = new Chart(ctx2, {
  type: 'pie',
  data: {
    datasets: [{
      data: [15,15,15,15,10,10,10,10],
      backgroundColor: colorHex2
    }],
    labels: labels2
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})

let ctx3 = document.getElementById('myChart3').getContext('2d');
let labels3 = ['S&P500', 'Technology', 'Consumer Discretionary', 'Health Care', 'Energy' ];
let colorHex3 = ['#0984e3','#273c75', '#e84393', '#16a085', '#2d3436', ];

let myChart3 = new Chart(ctx3, {
  type: 'pie',
  data: {
    datasets: [{
      data: [50, 15, 20, 10, 5],
      backgroundColor: colorHex3
    }],
    labels: labels3
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})

let ctx4 = document.getElementById('myChart4').getContext('2d');
let labels4 = ['Technology', 'Consumer Discretionary', 'Health Care', 'Consumer Staples'];
let colorHex4 = ['#4b6584', '#fbc531', '#44bd32', '#e17055', '#0984e3'];

let myChart4 = new Chart(ctx4, {
  type: 'pie',
  data: {
    datasets: [{
      data: [30,30,20,20],
      backgroundColor: colorHex4
    }],
    labels: labels4
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})

