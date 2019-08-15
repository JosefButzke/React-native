import Reactotro from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotro.configure({ host: '192.168.0.4' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
