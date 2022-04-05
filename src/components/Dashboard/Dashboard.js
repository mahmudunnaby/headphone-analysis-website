import React from 'react';
import BarCharts from './BarCharts';
import LineCharts from './LineCharts';


const Dashboard = () => {

    return (
        <div className='flex justify-center align-middle '>
            <LineCharts></LineCharts>
            <BarCharts></BarCharts>
        </div>
    );
};

export default Dashboard;