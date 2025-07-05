jest.mock('react-native', () => ({
  SafeAreaView: 'SafeAreaView',
  View: 'View',
  TextInput: 'TextInput',
  Button: 'Button',
  Text: 'Text',
  StyleSheet: { create: x => x },
}));

const LoginScreen = require('../LoginScreen');

test('LoginScreen is a function', () => {
  expect(typeof LoginScreen).toBe('function');
});
