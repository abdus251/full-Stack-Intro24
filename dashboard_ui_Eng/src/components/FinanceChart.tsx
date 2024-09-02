'use client'

import Image from "next/image"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 30000,
        expense: 15000,
    },
    {
        name: 'Feb',
        income: 1000,
        expense: 6000,
    },
    {
        name: 'Mar',
        income: 3000,
        expense: 4000,
    },
    {
        name: 'Apr',
        income: 10000,
        expense: 2400,
    },
    {
        name: 'May',
        income: 2000,
        expense: 5000,
    },
    {
        name: 'Jun',
        income: 0,
        expense: 2400,
    },
    {
        name: 'Jul',
        income: 30000,
        expense: 5000,
    },
    {
        name: 'Aug',
        income: 1000,
        expense: 4000,
    },
    {
        name: 'Sep',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'Oct',
        income: 4000,
        expense: 20000,
    },
    {
        name: 'Nov',
        income: 2000,
        expense: 5000,
    },
    {
        name: 'Dec',
        income: 4000,
        expense: 2400,
    }
];

const FinanceChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tick={{ fill: "#d1d5db" }}
                        tickLine={false}
                    />
                    <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={20} />
                    <Tooltip />
                    <Legend
                        align='center'
                        verticalAlign='top'
                        wrapperStyle={{ paddingTop: "10px", paddingBottom: '30px' }}
                    />
                    <Line
                        type="monotone"
                        dataKey="income"
                        stroke="#C3EBFA"
strokeWidth={5}
                    />
                    <Line
                        type="monotone"
                        dataKey="expense"
                        stroke="#CFCEFF" strokeWidth={5} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default FinanceChart