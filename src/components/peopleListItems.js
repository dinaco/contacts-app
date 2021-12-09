import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PeopleListItems = props => {
  const {peopley} = props;
  const {first} = peopley.name;
  return (
    <View style={styles.line}>
      <Text style={styles.lineText}>{first}</Text>
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
  },
});

export default PeopleListItems;
