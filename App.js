/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import getDegree from './util';

const Spoke = ({index}) => {
  const deg = getDegree(index);

  return (
    <View
      style={{
        position: 'absolute',
        height: 0,
        width: 0,
        transform: [{rotate: deg}],
      }}>
      <View style={styles.head} />
      <View style={styles.tail} />
    </View>
  );
};

const Circle = ({children}) => {
  return <View style={styles.circle}>{children}</View>;
};

const Saffron = () => {
  return <View style={StyleSheet.flatten([styles.flagPart, styles.saffron])} />;
};

const Green = () => {
  return <View style={StyleSheet.flatten([styles.flagPart, styles.green])} />;
};

const White = ({children}) => {
  return (
    <View style={StyleSheet.flatten([styles.flagPart, styles.white])}>
      {children}
    </View>
  );
};

const TriColor = () => {
  return (
    <View style={styles.container}>
      <Saffron />
      <White>
        <Chakra />
      </White>
      <Green />
    </View>
  );
};

const Chakra = () => {
  return (
    <View style={styles.center}>
      <Circle>
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
        <Spoke index="12" />
        <Spoke index="13" />
        <Spoke index="14" />
        <Spoke index="15" />
        <Spoke index="16" />
        <Spoke index="17" />
        <Spoke index="18" />
        <Spoke index="19" />
        <Spoke index="20" />
        <Spoke index="21" />
        <Spoke index="22" />
        <Spoke index="23" />
      </Circle>
    </View>
  );
};

const App = () => {
  return <TriColor />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flagPart: {
    flex: 0.3333,
  },
  head: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomWidth: 8 * 2,
    borderBottomColor: '#000080',
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
  circle: {
    height: 180,
    width: 180,
    borderRadius: 180 / 2,
    backgroundColor: 'transparent',
    borderWidth: 8,
    borderColor: '#000080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tail: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomWidth: 16 * 4,
    borderBottomColor: '#000080',
    transform: [{rotate: '180deg'}],
  },
});

export default App;
