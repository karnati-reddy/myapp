import React from 'react'
import { Bar, Chart } from 'react-chartjs-2'

const AChart = () => {
    const data = {
        labels: ['Category 1', 'Category 2', 'Category 3'],
        datasets: [
            {
                label: 'Fulfilled',
                stack: 'stack1', // Stack identifier for 'Fulfilled' bars
                data: [957, 243, 229], // Fulfilled values for each category
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Fulfilled bar color
                borderColor: 'rgba(255, 99, 132, 1)',
            },
            {
                label: 'Not Due',
                stack: 'stack1', // Stack identifier for 'Not Due' bars (shared with 'Fulfilled')
                data: [606, 236, 129], // Not Due values for each category
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Not Due bar color
                borderColor: 'rgba(54, 162, 235, 1)',

            },
            {
                label: 'Overdue',
                stack: 'stack1', // Stack identifier for 'Overdue' bars
                data: [480, 194, 152], // Overdue values for each category
                backgroundColor: 'rgba(255, 206, 86, 0.2)', // Overdue bar color
                borderColor: 'rgba(255, 206, 86, 1)'
            },
        ],
    };

    const options = {
        // Additional chart options here
    };

    return (
        <React.Fragment>
            <div>
                <Bar data={data} options={options} />
            </div>
        </React.Fragment>
    )
}

export default AChart
