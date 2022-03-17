import React from "react";
import { Link } from "react-router-dom";
import "./Map.css";

const MapPopup = ({ popupInfo }) => {
    return (
        <div className="popup">
            <h3 className="route-name">{popupInfo.title}</h3>

            <p className="route-city">
                {popupInfo.city}, {popupInfo.country}
            </p>

            <img
                alt="map"
                src={popupInfo.image}
                // className="max-h-40 w-full object-cover"
            />
            <Link to={`/destinations/${popupInfo.id}`}>
                <button>View</button>
            </Link>
        </div>
    );
};

export default MapPopup;
