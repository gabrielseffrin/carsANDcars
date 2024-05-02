import { Alert, Text, TextInput, View } from 'react-native';
import { useState } from "react";
import FullScreen from "../components/containers/FullScreen";
import Logo from "../components/ui/Logo";
import ButtonEntrar from "../components/ui/ButtonEntrar";
import { router } from "expo-router";
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

export default function index() {
    const [forms, setForms] = useState({
        username: '',
        password: ''
    })

    const login = () => {
        if (forms.username === 'teste' && forms.password === '123') {
            router.replace('/cars')
        } else {
            Alert.alert('Usuário ou senha inválidos')
        }
    };

    return (
        <ActionSheetProvider>
            <FullScreen>
                <View className="items-center justify-center h-full">
                    <Logo />
                    <View className="w-full px-8">
                        <Text className="text-white text-lg">Usuário</Text>
                        <TextInput className="text-white border-4 border-b-red-600 p-4 w-full rounded-lg"
                            placeholder="Digite o de usuário"
                            placeholderTextColor="#FFFFFF"
                            onChangeText={(text) => setForms({ ...forms, username: text })}
                        />
                    </View>
                    <View className=" w-full px-8 mt-8">
                        <Text className="text-white text-lg">Senha</Text>
                        <TextInput className="text-white border-2 border-b-red-600 p-4 w-full rounded-lg"
                            placeholder="Digite a senha"
                            placeholderTextColor="#FFFFFF"
                            secureTextEntry={true}
                            onChangeText={(text) => setForms({ ...forms, password: text })}
                        />
                    </View>
                    <View className="mt-12">
                        <ButtonEntrar onPress={login} />
                    </View>

                </View>


            </FullScreen>
        </ActionSheetProvider>
    )
}