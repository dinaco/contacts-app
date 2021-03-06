import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// functional component example
const Header = props => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{props.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#6ca2f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: '#fff',
  },
});

export default Header;
