import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// import using destruct and index.js file in /util folder
import {capitalLetter} from '../util';

const PeopleListItems = props => {
  const {peopley} = props;
  // nested destruct
  const {
    name: {title, first, last},
    picture: {thumbnail},
  } = peopley;
  return (
    <View style={styles.line}>
      <Image style={styles.avatar} source={{uri: thumbnail}} />
      <Text style={styles.lineText}>
        {/* template string below */}
        {`${capitalLetter(title)} ${capitalLetter(first)} ${capitalLetter(
          last,
        )}`}
      </Text>
    </View>
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
    // aspectratio, doesnt let the app stretch the image
    aspectRatio: 1,
    flex: 1,
    marginLeft: 15,
    borderRadius: 50,
  },
});

export default PeopleListItems;
