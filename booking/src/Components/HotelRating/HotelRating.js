import './HotelRating.css'
import useFetch from "../../hooks/useFetch";
const HotelRating = () => {
    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
    return (

        <div className="hr">
            {loading ? (
                "Loading"
            ) : (
                <>
                    {data.map((item) => (
                        <div className="hrItem" key={item._id}>
                            <img     src={item.photos[0]}alt="" className="hrimg" />
                            <span className="hrName">{item.name}</span>
                            <span className="hrcity">{item.city}</span>
                            <span className="hrprice">Starting from ${item.cheapestPrice}</span>
                            {item.rating &&      <div className="rating">
                                <button className="ratingbtn">{item.rating}</button>
                                <span>exellent</span>
                            </div>}
                        </div>
                    ))}

                </>
            )}
        </div>)
}

export default HotelRating