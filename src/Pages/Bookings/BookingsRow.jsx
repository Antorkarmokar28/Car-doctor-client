
const BookingsRow = ({ booking, handleDelete, handleConfirmBooking }) => {
    const { _id, img, customerName, email, date, price, status } = booking || {};
    // bookings items table body
    return (
        <>
            {/* row 1 */}
            <tr>
                <th>
                    <label>
                        {/* delete bookings item block */}
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-16 w-16">
                                <img
                                    src={img}
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {customerName}
                </td>
                <td>
                    {email}
                </td>
                <td>
                    {date}
                </td>
                <td>
                    ${price}
                </td>
                <th>
                    {
                        status === 'confirm' ? <span className="font-bold text-green-500">Confirmed</span> : 
                        <button onClick={() => handleConfirmBooking(_id)} className="btn text-[#FF3811] btn-ghost btn-xs">Please Confirm</button>
                    }
                </th>
            </tr>
        </>
    );
};

export default BookingsRow;