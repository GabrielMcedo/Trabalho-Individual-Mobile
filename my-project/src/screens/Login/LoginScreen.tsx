// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { LoginStyles } from '../../styles/LoginStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={LoginStyles.container}>
      {/* Logo do Facebook */}
      <Image
        source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/018/930/476/small_2x/facebook-logo-facebook-icon-transparent-free-png.png' }}
        style={LoginStyles.logo}
      />

      {/* Campo de E-mail ou Telefone */}
      <TextInput
        style={LoginStyles.input}
        placeholder="Email ou telefone"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Campo de Senha */}
      <TextInput
        style={LoginStyles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Botão de Login */}
      <TouchableOpacity style={LoginStyles.loginButton} onPress={handleLogin}>
        <Text style={LoginStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Link para "Esqueci minha senha" */}
      <TouchableOpacity>
        <Text style={LoginStyles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      {/* Criar Conta */}
      <View style={LoginStyles.createAccountContainer}>
        <Text style={LoginStyles.createAccountText}>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={LoginStyles.createAccountButton}>Criar nova conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
