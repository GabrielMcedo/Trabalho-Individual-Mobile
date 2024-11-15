import React from 'react';
import { TextInput } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

interface InputProps {
  placeholder: string;
  secureTextEntry?: boolean;
}

const InputComponent: React.FC<InputProps> = ({ placeholder, secureTextEntry = false }) => (
  <TextInput
    style={GlobalStyles.input}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
  />
);

export default InputComponent;
