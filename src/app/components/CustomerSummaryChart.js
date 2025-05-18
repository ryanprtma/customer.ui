'use client';

import { useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const CustomerSummaryChart = ({ apiUrl, chartTitle }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                const transformedData = data.data.summaries.map(item => ({
                    name: item.name,
                    customers: item.total,
                }));
                setData(transformedData);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                setLoading(false);
            });
    }, [apiUrl]);

    if (loading) return <p>Loading chart...</p>;

    return (
        <div className="w-full h-80 bg-white shadow rounded p-4 mb-8">
            <h2 className="text-xl font-semibold mb-4">{chartTitle}</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="customers" fill="#4f46e5" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomerSummaryChart;
