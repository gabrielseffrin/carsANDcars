import React from 'react';
import { Image } from 'react-native';

export default function LogoMenu() {
    return (
        <Image className="h-12 w-32" source={require("../../assets/images/MiniLogo.png")} />
    );
}
