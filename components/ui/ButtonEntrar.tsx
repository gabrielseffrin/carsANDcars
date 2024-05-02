import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

export default function ButtonEntrar({ onPress }) {
    return (
        <TouchableOpacity className="items-center" onPress={onPress}>
            <Image className=" h-24" source={require("../../assets/images/ButtonEntrar.png")} />
        </TouchableOpacity>
    );
}
