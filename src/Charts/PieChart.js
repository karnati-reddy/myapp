import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import "chart.js/auto";

const PieChart = () => {
    const [chartData, setChartData] = useState({
        labels: ['Sandwiches', 'Salads', 'Soup', 'Beverages', 'Desserts'], // Replace with your labels
        datasets: [
            {
                label: 'Pie Dataset',
                data: [15, 21, 15, 90, 40], // Replace with your data values
                backgroundColor: [
                    '#00C853', // Green
                    '#FF9500', // Orange
                    '#C70039', // Red
                    '#fd6b19', // Dark orange
                    '#36a2eb', // Blue
                ],
                borderColor: 'rgba(255, 99, 132, 1)', // Grey border
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.2)', // Transparent hover background
                hoverBorderColor: 'rgba(255, 99, 132, 1)', // Grey border on hover
            },
        ],
    });

    const chartOptions = {
        // responsive: true, // Responsive layout
        // maintainAspectRatio: false, // Allow customization for different sizes
        plugins: {
            // Add center text plugin for the pie chart
            datalabels: {
                // display: true, // Display labels
                // color: 'black', // Label color
                font: {
                    weight: 'bold', // Bold font
                },
            },
        },
    };

    return (
        <div>
            <h2>Pie Chart</h2>
            <Pie data={chartData} options={chartOptions} />
        </div>
    );
};

export default PieChart;