import { SectionList, View, Text, SafeAreaView } from "react-native";
import data from "../../services/data";
import { router, Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/ui/Header";
import { useActionSheet } from '@expo/react-native-action-sheet';


export default function Cars() {
    const { showActionSheetWithOptions } = useActionSheet();

    const options = () => {
        const options = ['Sobre', 'Logout'];
        const destructiveButtonIndex = 1;

        showActionSheetWithOptions({
            options,
            destructiveButtonIndex
        }, (selectedIndex: number) => {
            switch (selectedIndex) {
                case 0:
                    router.replace('/about')
                    break;

                case destructiveButtonIndex:
                    router.replace('/')
                    break;
            }
        });
    }

    const organizeDataIntoSections = (data, property) => {

        const sections = data.reduce((acc, item) => {
            const value = item[property];
            acc[value] = acc[value] || [];
            acc[value].push(item);
            return acc;
        }, {});

        // Mapear o objeto resultante para o formato desejado
        const sectionsArray = Object.keys(sections).map((key) => ({
            title: key,
            data: sections[key],
        }));

        return sectionsArray;
    };

    const sections = organizeDataIntoSections(data, 'brand');


    return (

        <SafeAreaView className="bg-black">
            <StatusBar />
            <Header onPress={options} />
            <Stack.Screen options={{ headerShown: false }} />
            <View className="my-4">
                <Text className="text-white text-center text-2xl font-bold uppercase">Carros Disponíveis</Text>
            </View>
            <View className="mx-8">
                <SectionList
                    sections={sections}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderSectionHeader={({ section: { title } }) => (
                        <View className="w-full bg-red-500 rounded flex p-2" >
                            <Text className="text-white text-center text-lg font-bold">{title}</Text>
                        </View>
                    )}
                    renderItem={({ item, index }) => (
                        <View>
                            <View
                                className={`flex flex-row justify-around w-full py-2 bg-white border-2 border-black`}>
                                <View className="w-2/12">
                                    <Text className="pl-4">{item.id}</Text>
                                </View>
                                <View className="w-6/12">
                                    <Text>{item.model}</Text>
                                </View>
                                <View className="w-4/12 ">
                                    <Text className="text-center">{item.year}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>

        </SafeAreaView>
    )
}