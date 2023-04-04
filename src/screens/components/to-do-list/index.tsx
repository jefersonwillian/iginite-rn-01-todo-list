import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import Checkbox from 'expo-checkbox';

type Props = {
    isSelected: boolean,
    onPress: () => void;
    name: string;
    onRemove: () => void;
}
export function ToDoList({ name, isSelected, onPress, onRemove }: Props) {
    const trasnIcon = '../../../../assets/trash.png';
    
    return (
        <View style={styles.container}>
            <Checkbox
                style={[styles.checkbox]}
                value={isSelected}
                onValueChange={onPress}
                color={isSelected ? '#5E60CE' : undefined}
            />
            <Text style={[styles.name, isSelected && styles.selectedItem]}>
                {name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Image source={require(trasnIcon)} />
            </TouchableOpacity>
        </View>
    )
}