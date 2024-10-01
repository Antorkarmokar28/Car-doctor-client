
const BookingsRow = ({ booking }) => {
    const { img, customerName, email, date, price } = booking || {};
    return (
        <>
            {/* row 1 */}
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
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
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </>
    );
};

export default BookingsRow;