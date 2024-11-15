import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity style={GlobalStyles.button} onPress={onPress}>
    <Text style={GlobalStyles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default ButtonComponent;
