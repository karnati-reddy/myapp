import React from 'react';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
// import {CategoryScale} from 'chart.js';
// Chart.register(CategoryScale);
import "chart.js/auto";

const BarChart = () => {

    
    const [chartData, setChartData] = useState({
        
        labels: ['Fulfilled', 'Not Due', 'Overdue'],
        // labels: ['Total', 'Label 1', 'Label 2', 'Label 3],

        datasets: [
            {
                label: 'Total',
                data: [480, 229, 243],
                // backgroundColor: ['#00C853', '#FF9500', '#C70039'],
                backgroundColor: '#00C853',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                // hoverBackgroundColor: 'rgba(255, 99, 132, 0.2)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
            },
            {
                label: 'Lable 1',
                data: [187, 0, 194],
                // backgroundColor: ['#36a2eb', '#ffcd56', '#ff6384'],
                backgroundColor: '#36a2eb',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                // hoverBackgroundColor: 'rgba(255, 99, 132, 0.2)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
            },
            {
                label: 'Lable 2',
                data: [241, 129, 236],
                // backgroundColor: ['#fd6b19', '#ffcd56', '#36a2eb'],
                backgroundColor: '#fd6b19',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                // hoverBackgroundColor: 'rgba(255, 99, 132, 0.2)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
            },
            {
                label: 'Lable 3',
                data: [52, 100, 0],
                // backgroundColor: ['#ff6384', '#fd6b19', '#ffcd56'],
                backgroundColor: '#ff6384',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                // hoverBackgroundColor: 'rgba(255, 99, 132, 0.2)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    });

    const chartOptions = {
        // responsive: true,
        // maintainAspectRatio: false,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        // legend: {
        //     display: true,
        //     position: 'bottom',
        // },
    };

    return (
        <div>
            <h2>Bar Chart</h2>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};


export default BarChart;