import React from 'react';
import { Image, View } from 'react-native';

export default function Logo() {
    return (
        <Image className="h-48 w-48" source={require("../../assets/images/Logo.png")} />
    );
}
