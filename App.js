/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

const Spoke = ({index}) => {
  let deg;
  const DISTANCE = 15;
  switch (index) {
    case '0':
      deg = `${DISTANCE * index}deg`;
      break;
    case '1':
      deg = `${DISTANCE * index}deg`;
      break;
    case '2':
      deg = `${DISTANCE * index}deg`;
      break;
    case '3':
      deg = `${DISTANCE * index}deg`;
      break;
    case '4':
      deg = `${DISTANCE * index}deg`;
      break;
    case '5':
      deg = `${DISTANCE * index}deg`;
      break;
    case '6':
      deg = `${DISTANCE * index}deg`;
      break;
    case '7':
      deg = `${DISTANCE * index}deg`;
      break;
    case '8':
      deg = `${DISTANCE * index}deg`;
      break;
    case '9':
      deg = `${DISTANCE * index}deg`;
      break;
    case '10':
      deg = `${DISTANCE * index}deg`;
      break;
    case '11':
      deg = `${DISTANCE * index}deg`;
      break;
    default:
      deg = '0deg';
  }

  const position = {
    position: 'absolute',
    transform: [{rotate: deg}],
  };
  return <View style={[styles.spoke, position]} />;
};

const Center = () => {
  return (
    <View style={styles.center}>
      <Spoke index="0" />
      <Spoke index="1" />
      <Spoke index="2" />
      <Spoke index="3" />
      <Spoke index="4" />
      <Spoke index="5" />
      <Spoke index="6" />
      <Spoke index="7" />
      <Spoke index="8" />
      <Spoke index="9" />
      <Spoke index="10" />
      <Spoke index="11" />
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <View style={StyleSheet.flatten([styles.flagPart, styles.saffron])} />
      <View style={StyleSheet.flatten([styles.flagPart, styles.white])}>
        <Center />
      </View>
      <View style={StyleSheet.flatten([styles.flagPart, styles.green])} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingT`op: StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
  flagPart: {
    flex: 0.3333,
  },
  spoke: {
    height: 180,
    width: 10,
    backgroundColor: '#000080',
  },
  saffron: {
    backgroundColor: '#FF9933',
  },
  white: {
    backgroundColor: '#FFFFFF',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  green: {
    backgroundColor: '#138808',
  },
});

export default App;
