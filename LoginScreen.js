const React = require('react');
const { useState } = React;
const { SafeAreaView, View, TextInput, Button, Text, StyleSheet } = require('react-native');

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // In a real app, you would authenticate here
    if (username && password) {
      setLoggedIn(true);
    }
  };

  if (loggedIn) {
    return (
      React.createElement(
        SafeAreaView,
        { style: styles.container },
        React.createElement(Text, { style: styles.welcome }, 'Bem-vindo ao Motos Mobilidade!')
      )
    );
  }

  return (
    React.createElement(
      SafeAreaView,
      { style: styles.container },
      React.createElement(
        View,
        { style: styles.form },
        React.createElement(TextInput, {
          style: styles.input,
          placeholder: 'Usu\u00e1rio',
          value: username,
          onChangeText: setUsername,
        }),
        React.createElement(TextInput, {
          style: styles.input,
          placeholder: 'Senha',
          secureTextEntry: true,
          value: password,
          onChangeText: setPassword,
        }),
        React.createElement(Button, { title: 'Entrar', onPress: handleLogin })
      )
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  form: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  welcome: {
    fontSize: 20,
    color: '#333',
  },
});

module.exports = LoginScreen;
