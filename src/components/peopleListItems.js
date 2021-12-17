import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {CapitalLetter} from '../util';

const PeopleListItems = props => {
  const {peopley, navigateToPeopleScreen} = props;
  const {
    name: {title, first, last},
    picture: {thumbnail},
  } = peopley;
  return (
    // using ({peopley}) is the same as using (peopley:peopley)
    <TouchableOpacity onPress={() => navigateToPeopleScreen({peopley})}>
      <View style={styles.line}>
        <Image style={styles.avatar} source={{uri: thumbnail}} />
        <Text style={styles.lineText}>{`${CapitalLetter(title)} ${CapitalLetter(
          first,
        )} ${CapitalLetter(last)}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    /* using flexdirection as 'row' the alignitens property aligns the item in the row instead of center it in the column */
    flexDirection: 'row',
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 7,
  },
  avatar: {
    /* aspectRatio keeps the image from getting distorted */
    aspectRatio: 1,
    width: 40,
    flex: 1,
    marginLeft: 15,
    borderRadius: 50,
  },
});

export default PeopleListItems;
