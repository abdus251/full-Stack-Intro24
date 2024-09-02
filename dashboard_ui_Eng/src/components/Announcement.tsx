const Announcement = () => {
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Notice Board</h1>
                <span className="text-sm text-gray-400">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-lamaSkyLight rounded-md p-4 ">
                    <div className="flex items-center justify-between">
                        <h2>Distribution of New Textbooks for 2025</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">January 1, 2025</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        As in every year, free new textbooks will be distributed to students in 2025. All students are requested to be present at the school to receive the new books.
                    </p>
                </div>
                <div className="bg-lamaPurpleLight rounded-md p-4 ">
                    <div className="flex items-center justify-between">
                        <h2>Ramadan Holiday</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">March 28 - April 27, 2025</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        A one-month holiday has been announced for the primary school due to Ramadan in 2025. Students are advised to continue their studies during the holiday and return to school on time after the break.
                    </p>
                </div>
                <div className="bg-lamaYellowLight rounded-md p-4 ">
                    <div className="flex items-center justify-between">
                        <h2>Summer Vacation of 2025</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">June 1 - June 30, 2025</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        The summer vacation of 2025 has been announced. During this time, the school will be closed, and students can enjoy the break. They are requested to be present at school on time after the vacation.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Announcement;
