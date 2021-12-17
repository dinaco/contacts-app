import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CapitalLetter} from '../util';

/* const Line = props => {
  const {label, content} = props;
};
You can destruct the props items straight out of the arrow funciton parameters as bellow

In addition you can use a default value for the parameter using {label ="-", content="-"} 
this prevents the app from crashing if someone doenst pass any parameter to the component
*/

const Line = ({label = '-', content = '-'}) => {
  return (
    <View style={styles.line}>
      <Text
        style={[
          styles.cell,
          styles.label,
          label.length > 8 ? styles.longLabel : null,
        ]}>
        {label}
      </Text>
      <Text style={[styles.cell, styles.content]}>
        {CapitalLetter(content)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    paddinTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: '#C5C5C5',
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5,
  },
  label: {
    fontWeight: 'bold',
    flex: 1,
  },
  longLabel: {
    fontSize: 12,
  },
  content: {
    flex: 4,
  },
});

export default Line;
