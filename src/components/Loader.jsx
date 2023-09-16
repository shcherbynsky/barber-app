import React from "react"
import loaderImage from '../preLoader.gif'



const Loader = () => {

    return (
        <div className="loader">
            <img src={loaderImage} alt="" className="loader__img" />
        </div>
    )
}

export default Loader