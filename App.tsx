import React from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Beranda from './screens/Beranda';
import Loading from './components/Loading';
import Routes from './routes/routes';
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';

interface IProps {
}

interface IState {
  isReady?: Boolean;
}

export default class App extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Loading/>;
    }

    return (
      <Routes/>
    );
  }
}

AppRegistry.registerComponent('App', () => App);