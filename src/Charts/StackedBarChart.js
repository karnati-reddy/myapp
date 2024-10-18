import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import "chart.js/auto";

const StackedBarChart = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    });

    const [options, setOptions] = useState({
        responsive: true,
        // maintainAspectRatio: false,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true, // Start y-axis at 0
                    },
                },
            ],
            xAxes: [
                {
                    // Add custom x-axis labels if needed (replace placeholders)
                },
            ],
        },
        legend: {
            display: true,
            position: 'bottom',
        },
    });

    // Sample data (replace with your actual data)
    const sampleData = [
        { category: 'Q1', categoryData: { engineering: 100, sales: 20, marketing: 80 } },
        { category: 'Q2', categoryData: { engineering: 50, sales: 30, marketing: 50 } },
        { category: 'Q3', categoryData: { engineering: 80, sales: 10, marketing: 70 } },
        { category: 'Q4', categoryData: { engineering: 60, sales: 20, marketing: 40 } },
    ];

    // Function to process the data and update the chart state
    const processChartData = (data) => {
        const labels = data.map((item) => item.category);
        const datasets = [];

        // Extract and format data for each category
        for (const category of Object.keys(data[0].categoryData)) {
            const categoryValues = data.map((item) => item.categoryData[category]);
            datasets.push({
                label: category,
                data: categoryValues,
                backgroundColor: generateRandomColor(), // Generate random colors for each category
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.2)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
                stacked: true, // Enable stacking for bars
            });
        }

        setChartData({ labels, datasets });
    };

    // Function to generate random colors (optional, can be replaced with your desired colors)
    const generateRandomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    };

    // Call the function to process the data on component mount
    useEffect(() => {
        processChartData(sampleData);
    }, []);

    return (
        <div>
            <h2>Stacked Bar Chart</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default StackedBarChart;