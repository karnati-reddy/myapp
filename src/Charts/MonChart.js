import React from 'react'
import { Bar } from 'react-chartjs-2';

const MonChart = () => {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'lex hours',
                backgroundColor: '#2196f3',
                borderColor: '#3f51b5',
                bordwidth: 1,
                hoverBackgroundColor: '#2196f3',
                hoverBorderColor: '3f51b5',
                data: [65, 59, 80, 81, 56, 60, 80]
            },
            {
                label: 'lex hours for monthly',
                backgroundColor: '#4caf50',
                borderColor: '#ff9800',
                bordwidth: 1,
                hoverBackgroundColor: 'red',
                hoverBorderColor: '3f51b5',
                data: [12,56, 78, 90, 45, 67, 89]
            }
        ]
    };
    const options = {
        // Additional chart options here
    }

    return (
        <div>
            <h2>Lex Course Consumption</h2>
            <Bar
                data={data}
                width={100}
                height={50}
            />

        </div>
    )
}

export default MonChart
