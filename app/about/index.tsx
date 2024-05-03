import { SectionList, View, Text, SafeAreaView, TouchableOpacity, Linking } from "react-native";
import data from "../../services/data";
import { router, Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/ui/Header";
import { useActionSheet } from '@expo/react-native-action-sheet';
import FullScreen from "../../components/containers/FullScreen";


export default function Cars() {
    const { showActionSheetWithOptions } = useActionSheet();

    const options = () => {
        const options = ['Logout'];
        const destructiveButtonIndex = 0;

        showActionSheetWithOptions({
            options,
            destructiveButtonIndex
        }, (selectedIndex: number) => {
            switch (selectedIndex) {

                case destructiveButtonIndex:
                    router.replace('/')
                    break;
            }
        });
    }

    return (

        <FullScreen>
            <StatusBar />
            <Header onPress={options} />
            <View className="items-center">
                <View className="mt-48">
                    <Text className="text-white text-center text-4xl font-bold">carsANDcars</Text>
                    <Text className="text-white text-center text-xl">Versão 1.0</Text>
                </View>
                <View className="mt-16">
                    <Text className="text-white text-center text-xl">desenvolvido por</Text>
                    <Text className="text-white text-center text-2xl font-bold uppercase">Gabriel Fernando Seffrin</Text>
                </View>
                <View className="mt-24">
                    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/gabrielseffrin/carsANDcars')}>
                        <Text className="text-red-600">Projeto Github</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </FullScreen>
    )
}
