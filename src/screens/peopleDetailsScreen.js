import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
// components dont work when imported with {} import {Line} from '../components/Line';
import Line from '../components/Line';

// export default class App extends React.Component is only needed when using state (class component),
// otherwise we could simply use a functional component like in ./src/componentsheader.js
export default class PeopleDetailsScreen extends React.Component {
  render() {
    const {peopley} = this.props.route.params;
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{uri: peopley.picture.large}} />
        <View style={styles.detailContainer}>
          <Line label="Email:" content={peopley.email} />
          <Line label="City:" content={peopley.location.city} />
          <Line label="State:" content={peopley.location.state} />
          <Line label="Phone:" content={peopley.phone} />
          <Line label="Mobile:" content={peopley.cell} />
          <Line label="Nationality:" content={peopley.nat} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  avatar: {
    aspectRatio: 1,
  },
  detailContainer: {
    backgroundColor: '#e2f9ff',
    marginTop: 20,
    elevation: 1,
  },
  longLabel: {
    fontSize: 12,
  },
});
