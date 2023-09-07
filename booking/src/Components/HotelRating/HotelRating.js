import './HotelRating.css'
import useFetch from "../../hooks/useFetch";
const HotelRating = () => {
    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
    console.log(loading)
    return (

        <div className="hr">
            {loading ? (
                <h3>Loading Please wait</h3>
            ) : (
                <>
                    {data.length !== 0 && (
                        data.map((item) => (
                            <div className="hrItem" key={item._id}>
                                <img src={item.photos[0]} alt="" className="hrimg" />
                                <span className="hrName">{item.name}</span>
                                <span className="hrcity">{item.city}</span>
                                <span className="hrprice">Starting from ${item.cheapestPrice}</span>
                                {item.rating && (
                                    <div className="rating">
                                        <button className="ratingbtn">{item.rating}</button>
                                        <span>excellent</span>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </>
            )}
        </div>)
}

export default HotelRating