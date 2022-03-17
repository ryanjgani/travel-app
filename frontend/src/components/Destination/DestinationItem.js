import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import DestinationMap from "./map/DestinationMap.tsx";
import { destinationContext } from "../../context/destination/destination-context";
import BlogPostWithImage from "../UI/Card";

const DestinationItem = () => {
    const [isLoading, setIsLoading] = useState(true);

    const { error, destinationItem, getSingleDestination } =
        useContext(destinationContext);

    const { destId } = useParams();

    useEffect(() => {
        try {
            (async () => {
                await getSingleDestination(destId);
                setIsLoading(false);
            })();
        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }
    }, [destId]);

    if (error) {
        return (
            <div>
                <h1>Destination not found...</h1>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="content-center">
                <SyncLoader color="#005CC5" loading={isLoading} size={20} />
            </div>
        );
    }

    return (
        <div>
            <BlogPostWithImage destination={destinationItem} />
            <DestinationMap destination={destinationItem} />
        </div>
    );
};

export default DestinationItem;
