import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BgAbout from "../../components/BgAbout";
import CustomButton from "../../components/CustomButton";
import CustomOutline from "../../components/CustomOutline";
import SubTextLink from "../Home/SubTextLink";

const About: React.FC = () => {
    const navigation = useNavigation();

    return (
        <BgAbout>
            <View style={styles.container}>
                <Text style={styles.title}>Quem Somos</Text>
                <Text style={styles.description}>
                    A ReUse é uma iniciativa que incentiva a troca de objetos, reduz o
                    desperdício e promove um consumo mais consciente. A ideia é dar uma
                    nova vida ao que já existe, conectando pessoas e fortalecendo a
                    sustentabilidade.
                </Text>
                <CustomButton title="Voltar" onPress={() => navigation.goBack()} />
                <CustomOutline title='Login' onPress={(undefined)} />
                <SubTextLink></SubTextLink>
            </View>
        </BgAbout>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "rgba(0,0,0,0.5)"


    },
    title: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 30,
        textShadowRadius: 8,
        textShadowColor: '#000',
        textAlign: "center",
    },
    description: {
        color: '#FFF',
        fontWeight: '600',
        textAlign: 'center',
        textShadowRadius: 8,
        textShadowColor: '#000',
        fontSize: 20,
        marginBottom: 50,
        lineHeight: 30,
    },
});