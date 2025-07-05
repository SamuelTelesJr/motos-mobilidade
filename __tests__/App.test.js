jest.mock('react-native', () => ({
  SafeAreaView: 'SafeAreaView',
  Text: 'Text',
  StyleSheet: { create: x => x },
}));

const App = require('../App');

test('App is a function', () => {
  expect(typeof App).toBe('function');
});
