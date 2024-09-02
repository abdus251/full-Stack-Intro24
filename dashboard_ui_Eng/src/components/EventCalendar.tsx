'use client'

import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './EventCalendar.css'; 
import Image from "next/image";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];


const events = [
    {
        "id": 3,
        "title": "1st Term Assessment",
        "time": "April 20 - April 25, 2024",
        "description": "The first term exam for students."
    },
    {
        "id": 4,
        "title": "2nd Term Assessment",
        "time": "August 15 - August 20, 2024",
        "description": "The second term exam for students."
    },
    {
        "id": 5,
        "title": "Final Assessment",
        "time": "December 5 - December 15, 2024",
        "description": "The annual final exam for students."
    }
    
]
const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    const isWeekend = ({ date }: { date: Date }) => {
        const day = date.getDay();
        return day === 5 || day === 6 ? 'weekend' : null;
    };
    return (
        <div className="bg-white p-4 rounded-md">
            <Calendar onChange={onChange} value={value} tileClassName={isWeekend} locale="en-US" />
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <div className="flex flex-col gap-4">
                {events.map(event => (
                    <div 
                    className="p-5 rounded-md bottom-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple" 
                    key={event.id}
                    >
                        <div className="flex items-center justify-between ">
                            <h1 className="font-semibold text-gray-600">{event.title}</h1>
                            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
                            <span className="text-gray-300 text-xs">{event.time}</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default EventCalendar;
