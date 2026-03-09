import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home";
import About from "../../screens/About";
import LoadingScreen from "../../screens/LoadingScreen";

export type RootStackParamList = {
    Home: undefined;
    About: undefined;
};


const { Navigator, Screen } = createStackNavigator();

export default function AppNavigator() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            {isLoading ? (
                <Screen name="Loading" component={LoadingScreen} />
            ) : (
                <>
                    <Screen name="Home" component={Home} />
                    <Screen name="About" component={About} />
                </>
            )}
        </Navigator>
    );
}