import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DestinationItem from "./components/Destination/DestinationItem";
import Navigation from "./components/layout/Navigation";
import { authContext } from "./context/auth/auth-context";
import Destinations from "./pages/Destinations";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
    // const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { userData, getUser } = useContext(authContext);

    useEffect(() => {
        // const getUser = async () => {
        //     setIsLoading(true);
        //     try {
        //         const res = await axios.get(
        //             "http://localhost:8000/auth/login/success",
        //             { withCredentials: true }
        //         );
        //         setUser(res.data.user);
        //         setIsLoading(false);
        //     } catch (e) {
        //         setUser(undefined);
        //         setIsLoading(false);
        //     }
        // };
        // getUser();

        try {
            (async () => {
                await getUser();
                setIsLoading(false);
            })();
        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    console.log(userData);
    return (
        <div>
            <Navigation user={userData} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route
                    path="/destinations/:destId"
                    element={<DestinationItem />}
                />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
