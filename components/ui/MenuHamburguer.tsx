import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

export default function MenuHamburguer({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} className="absolute top-8 right-8 space-y-1">
            <View className="h-2 w-12 rounded-full bg-white">
            </View>
            <View className="h-2 w-12 rounded-full bg-white">
            </View>
            <View className="h-2 w-12 rounded-full bg-white">
            </View>
        </TouchableOpacity>
    );
}
