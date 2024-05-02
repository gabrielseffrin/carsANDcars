import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import LogoMenu from "./LogoMenu";
import MenuHamburguer from "./MenuHamburguer";

export default function Header({ onPress }) {
    return (
        <View className="h-20 pt-8 bg-black pl-4">
            <LogoMenu></LogoMenu>
            <MenuHamburguer onPress={onPress}></MenuHamburguer>
        </View>
    );
}
