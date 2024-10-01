import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const service = useLoaderData();
    const { _id, title, img, description, price } = service;
    const { user } = useContext(AuthContext);
    const handleCheckout = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const message = form.message.value;
        const booking = {
            img,
            customerName: name,
            email: email,
            date: date,
            service: title,
            service_id: _id,
            price: price,
            message: message
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Great",
                        text: "Complete you order",
                        footer: '<a href="#">Thanks for your order</a>'
                    });
                }
            })
    }
    return (
        <div>
            <div className='container mx-auto p-5 mt-24 mb-24'>
                <h1 className="text-xl">Book Service: {title}</h1>
                <img className='mt-4 mb-4' src={img} alt="" />
                <p>{description}</p>
                <p className='mt-4'>Price: ${price}</p>

                <div className='mt-10'>
                    <form onSubmit={handleCheckout} className='p-4 md:p-20 rounded-lg bg-[#F3F3F3]'>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input className='border-none p-4 rounded-lg' type="text" name="name" defaultValue={user?.displayName} placeholder="First Name" required />
                            <input className='border-none p-4 rounded-lg' type="date" name="date" required/>
                            <input className='border-none p-4 rounded-lg' type="email" name="email" defaultValue={user?.email} placeholder="Your email" required/>
                            <input className='border-none p-4 rounded-lg' type="text" name="price" defaultValue={'$' + price} required/>
                        </div>
                        <textarea className='mt-6 mb-6 w-full p-4 rounded-lg' cols={50} rows={8} name="message" id="" placeholder="Your Message"></textarea>
                        <input className='w-full bg-[#FF3811] text-white py-4 rounded-lg text-xl font-semibold cursor-pointer' type="submit" value="Order Confirm" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;