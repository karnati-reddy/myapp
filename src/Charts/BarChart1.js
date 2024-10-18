import React from 'react'
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart1 = () => {
    const [chartData, setChartData] = useState({
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Engineering',
                data: [100, 50, 80, 60],
                backgroundColor: '#00C853', // Green
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.2)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
                stacked: true, // Enable stacking for bars
            },
            {
                label: 'Sales',
                data: [20, 30, 10, 20],
                backgroundColor: '#FF9500', // Orange
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.2)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
                stacked: true, // Enable stacking for bars
            },
            {
                label: 'Marketing',
                data: [80, 50, 70, 40],
                backgroundColor: '#C70039', // Red
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.2)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
                stacked: true, // Enable stacking for bars
            },
        ],
    });

    const chartOptions = {
        // responsive: true,
        // maintainAspectRatio: false, // Allow customization for different sizes
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true, // Start y-axis at 0
                    },
                },
            ],
            // xAxes: [
            //     {
            //     },
            // ],
        },
        legend: {
            display: true,
            position: 'bottom',
        },
    };

    return (
        <div>
            <h2>Stacked Bar Chart</h2>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default BarChart1
