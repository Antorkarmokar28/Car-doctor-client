import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service || {};
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between items-center">
                    <p className="text-xl text-[#FF3811] font-semibold">
                     Price: ${price}
                    </p>
                    <Link to={`/checkout/${_id}`} className="text-xl text-[#FF3811] font-semibold"><FaArrowRightLong /></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;