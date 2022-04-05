import React ,{useEffect, useState}from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    const[graph, setGraph]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setGraph(data));
    },[])
    return (
                           
                 <div className="">
                     <h2 className=" mt-8 mb-8  font-bold md:text-center text-blue-600 md:text-green-600 "> Product Sell Chart</h2>
            <div className=" md:grid grid-cols-2"> 
               <div className="ml-2"> 
                <LineChart width={730} height={250} data={graph}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend/>
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <Line type="monotone" dataKey="revenue" stroke="#efac25" />
            <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
            </LineChart>
           
                </div>
                <div className="mr-2"> 
                <BarChart width={730} height={250} data={graph}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="sell" fill="#8884d8" />
  <Bar dataKey="revenue" fill="#82ca9d" />
  <Bar dataKey="investment" fill="#efac25" />
</BarChart>
           
                </div>
            </div>
            </div>
            
    );
};

export default Dashboard;