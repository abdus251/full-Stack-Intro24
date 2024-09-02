"use client"

import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Sun', Present: 100, Absent: 35 },
    { name: 'Mon', Present: 95, Absent: 40 },
    { name: 'Tue', Present: 97, Absent: 38 },
    { name: 'Wed', Present: 92, Absent: 43 },
    { name: 'Thu', Present: 99, Absent: 36 }
];

// Function to convert numbers to English numerals
const convertToEnglish = (num: number) => {
    return num.toString();
};

const AttendanceChart = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full">
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Attendance Chart</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart data={data} barSize={20}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tick={{ fill: "#d1d5db" }}
                        tickLine={false}
                    />
                    <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickFormatter={convertToEnglish} />
                    <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
                    <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                    <Bar dataKey="Present" fill="#FAE27C" legendType='circle' radius={[10, 10, 0, 0]} />
                    <Bar dataKey="Absent" fill="#C3EBFA" legendType='circle' radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AttendanceChart;
