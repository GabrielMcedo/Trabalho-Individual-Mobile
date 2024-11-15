// src/styles/LoginStyles.ts
import { StyleSheet } from 'react-native';

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 10,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#1877F2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#1877F2',
    fontSize: 14,
    marginBottom: 20,
  },
  createAccountContainer: {
    flexDirection: 'row',
  },
  createAccountText: {
    fontSize: 14,
  },
  createAccountButton: {
    color: '#1877F2',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
