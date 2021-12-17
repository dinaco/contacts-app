import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import PeopleList from '../components/peopleList';
import axios from 'axios';

// export default class App extends React.Component is only needed when using state (class component),
// otherwise we could simply use a functional component like in ./src/componentsheader.js
export default class PeopleScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoplez: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    axios({
      method: 'get',
      url: `https://randomuser.me/api/?nat=br&results=150`,
    })
      .then(response => {
        const {results} = response.data;
        this.setState({
          peoplez: results,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({error: true, loading: false});
      });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator size="large" color="#6ca2f7" />
        ) : this.state.error ? (
          <Text style={styles.error}>Server Error, contact us</Text>
        ) : (
          <PeopleList
            peoplex={this.state.peoplez}
            onPressItem={pageParams => {
              this.props.navigation.navigate('Details', pageParams);
            }}
          />
        )}

        {/* you have to pass peoplez={this.state.peoplez} so we can use the props in the peopleList.js file
        otherwise peoplez will be undefined in peopleList.js file, because the state is being created in the App.js file and
        in the peopleList.js we are using this state and even changing it using setState.
        */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18,
  },
});
