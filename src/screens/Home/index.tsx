import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomOutline from "../../components/CustomOutline";
import Background from "../../components/Background";
import SubTextLink from "./SubTextLink";
import Logo from "./Logo";
import { RootStackParamList } from "../../routes/Stack";
import { StackNavigationProp } from "@react-navigation/stack";

type NavigationProp = StackNavigationProp<RootStackParamList, "Home">;



const Home = () => {
    const navigation = useNavigation<NavigationProp>();

    return (

        <Background>
            <SafeAreaView style={styles.container}>
                <Logo/>
                <Text style={styles.subtexto}>Troque objetos, reduza desperdício e consuma com consciência.</Text>
                <CustomButton title='Sobre a ReUse!' onPress={() => navigation.navigate("About")} />
                <CustomOutline title='Login' onPress={(undefined)} />
                <SubTextLink></SubTextLink>
            </SafeAreaView>
        </Background>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
        paddingBottom: 30,
    },
    subtexto: {
        color: '#FFF',
        fontWeight: '600',
        textAlign: 'center',
        textShadowRadius: 8,
        textShadowColor: '#000',
        fontSize: 15,
    },
});




export default Home;