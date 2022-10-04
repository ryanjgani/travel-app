import { Center, chakra } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DestinationItem from "./components/Destination/DestinationItem";
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";
import NotFound from "./components/UI/NotFound";
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

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    console.log(process.env, process.env.REACT_APP_CLIENT_URL);
    return (
        <chakra.div bgGradient="linear(to-b, #c9f6e7, #FFFFFF)" minH={"100vh"}>
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
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Center>
                <Footer />
            </Center>
        </chakra.div>
    );
}

export default App;
