import React from 'react';
import {View, Text} from 'react-native';
import Header from './src/components/Header';
import axios from 'axios';

export default class App extends React.Component {
  renderList() {
    axios({
      method: 'get',
      url: `https://randomuser.me/api/?nat=br&results=5`,
    }).then(response => {
      const {results} = response.data;
      const names = results.map(people => people.name.first);
      return <Text key={names}>{names}</Text>;
    });
  }
  render() {
    return (
      <View>
        <Header title="People!" />
        {this.renderList()}
      </View>
    );
  }
}
