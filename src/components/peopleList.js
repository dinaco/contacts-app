import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import PeopleListItems from './peopleListItems';

const PeopleList = props => {
  const {peoplex, onPressItem} = props;
  // creating elemnent array
  // if i only had the text element, the key should be in it,
  // but as I have the view element, the key stays in it
  // the key is supposed to be placed in the higher element
  // creating elemnent array

  /*  const items = peoplex.map(peoplex => {
    return (
      <PeopleListItems
        key={peoplex.name.first}
        peopley={peoplex}
        navigateToPeopleScreen={onPressItem}
      />
    );
  }); */
  /*
As I implemented the flatlist method, map function is not needed anymore, as flatlist can handle it byitself now
*/

  return (
    <FlatList
      style={styles.container}
      data={peoplex}
      renderItem={({item}) => (
        <PeopleListItems peopley={item} navigateToPeopleScreen={onPressItem} />
      )}
      keyExtractor={item => item.login.uuid}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff',
  },
});

export default PeopleList;
