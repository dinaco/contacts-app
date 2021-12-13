import React from 'react';
import {View, StyleSheet} from 'react-native';
import PeopleListItems from './peopleListItems';

const PeopleList = props => {
  const {peoplex} = props;
  // creating elemnent array
  // if i only had the text element, the key should be in it,
  // but as I have the view element, the key stays in it
  // the key is supposed to be placed in the higher element
  // creating elemnent array
  const items = peoplex.map(peoplex => {
    return <PeopleListItems key={peoplex.name.first} peopley={peoplex} />;
  });
  return <View style={styles.container}>{items}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff',
  },
});

export default PeopleList;
