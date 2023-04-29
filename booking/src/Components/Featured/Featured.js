import React from 'react'
import useFetch from "../../hooks/useFetch";
import "./Featured.css"
const Featured = () => {
    const { data, loading, error } = useFetch(
        "/hotels/countByCity?cities=berlin,madrid,london"
    );
    return (

        <div className="card">
            {loading ? (
                "Loading please wait"
            ) : (
                <>
                    <div className="cardItem">
                        <img src="https://images.unsplash.com/photo-1567157577867-05ccb1388e66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="cardImg" />
                        <div className="cardTitle">
                            <h1>Mumbai</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="cardItem">
                        <img src="https://plus.unsplash.com/premium_photo-1661956738380-930a35ffffee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="cardImg" />
                        <div className="cardTitle">
                            <h1>Ahemadabad</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="cardItem">
                        <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="cardImg" />
                        <div className="cardTitle">
                            <h1>Delhi</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                </>
            )
            }
        </div >


    );
};

export default Featured