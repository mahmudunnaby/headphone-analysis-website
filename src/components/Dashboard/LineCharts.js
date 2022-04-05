import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const LineCharts = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (

        <div className='p-32 m-24 border-8 rounded'>
            <h1>Line Chart</h1>
            <LineChart width={600} height={500} data={data}>
                <Line dataKey={'investment'}></Line>
                <YAxis></YAxis>
                <XAxis dataKey={'month'}></XAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>


    );
};

export default LineCharts;