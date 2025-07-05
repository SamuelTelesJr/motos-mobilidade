const React = require('react');
const { SafeAreaView, Text, StyleSheet } = require('react-native');

function App() {
  return React.createElement(
    SafeAreaView,
    { style: styles.container },
    React.createElement(Text, { style: styles.text }, 'Bem-vindo ao Motos Mobilidade!')
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

module.exports = App;
