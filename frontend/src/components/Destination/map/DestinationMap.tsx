import React, { useEffect, useRef, useState } from "react";
import { Map, Source, Layer, Marker, Popup } from "react-map-gl";
import "./Map.css";

import {
    clusterLayer,
    clusterCountLayer,
    unclusteredPointLayer,
} from "./layers.tsx";

import { MapRef } from "react-map-gl";
import { GeoJSONSource } from "react-map-gl";
import MapPopup from "./MapPopup";

const MAPBOX_TOKEN =
    "pk.eyJ1IjoicnlhbmpnYW5pIiwiYSI6ImNrcHl2ZTA4YjBsdmIyb3BwbjR2aGI1bDgifQ.fK4RJdiCDMG6t7SOG3-KYQ";

const DestinationMap = ({ destination, mapData }) => {
    const [popupInfo, setPopupInfo] = useState(null);
    const mapRef = useRef<MapRef>(null);

    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [focus, setFocus] = useState(9);

    useEffect(() => {
        if (!mapRef.current) return; // wait for mapRef to initialize
        mapRef.current.on("move", () => {
            setLng(parseInt(mapRef.current.getCenter().lng.toFixed(4)));
            setLat(parseInt(mapRef.current.getCenter().lat.toFixed(4)));
            setFocus(parseInt(mapRef.current.getZoom().toFixed(2)));
        });
    });

    let longitude = 114.1694;
    let latitude = 22.3193;
    let zoom = 3;
    if (destination) {
        longitude = destination.geometry.coordinates[0];
        latitude = destination.geometry.coordinates[1];
        zoom = 10;

        return (
            <>
                <Map
                    initialViewState={{
                        latitude,
                        longitude,
                        zoom,
                    }}
                    style={{
                        width: "100%",
                        height: "100%",
                        padding: 50,
                    }}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    mapboxAccessToken={MAPBOX_TOKEN}
                >
                    <Marker
                        longitude={longitude}
                        latitude={latitude}
                        color="blue"
                    />
                </Map>
            </>
        );
    }

    mapData.features.forEach((data) => {
        data.properties = {
            title: data.title,
            city: data.location.city,
            country: data.location.country,
            image: data.image,
            link: `http://localhost:3000/destinations/${data._id}`,
            id: data._id,
            longitude: data.geometry.coordinates[0],
            latitude: data.geometry.coordinates[1],
        };
    });

    const onClick = (event) => {
        const feature = event.features[0];
        if (feature.layer.id === "clusters") {
            const clusterId = feature.properties.cluster_id;

            const mapboxSource = mapRef.current.getSource(
                "destinations"
            ) as GeoJSONSource;

            mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
                if (err) {
                    return;
                }

                mapRef.current.easeTo({
                    center: feature.geometry.coordinates,
                    zoom,
                    duration: 1000,
                });
            });
        } else {
            mapRef.current.flyTo({
                center: feature.geometry.coordinates,
                zoom: 8,
                duration: 1000,
            });
            setPopupInfo(feature.properties);
        }
    };

    return (
        <>
            <Map
                initialViewState={{
                    latitude,
                    longitude,
                    zoom,
                }}
                style={{ width: 800, height: 600 }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={MAPBOX_TOKEN}
                interactiveLayerIds={[
                    clusterLayer.id,
                    unclusteredPointLayer.id,
                ]}
                onClick={onClick}
                ref={mapRef}
            >
                <Source
                    id="destinations"
                    type="geojson"
                    data={mapData}
                    cluster={true}
                    clusterMaxZoom={14}
                    clusterRadius={50}
                >
                    <Layer {...clusterLayer} />
                    <Layer {...clusterCountLayer} />
                    <Layer {...unclusteredPointLayer} />
                </Source>

                {/* <div className="sidebar">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {focus}
                </div> */}

                {popupInfo && (
                    <Popup
                        anchor="top"
                        longitude={Number(popupInfo.longitude)}
                        latitude={Number(popupInfo.latitude)}
                        closeButton={false}
                        onClose={() => setPopupInfo(null)}
                    >
                        <MapPopup popupInfo={popupInfo} />
                    </Popup>
                )}
            </Map>
        </>
    );
};

export default DestinationMap;
