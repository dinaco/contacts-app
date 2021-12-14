import React from 'react';
import {View, Text} from 'react-native';
import PeopleList from '../components/peopleList';
import axios from 'axios';

// export default class App extends React.Component is only needed when using state (class component),
// otherwise we could simply use a functional component like in ./src/componentsheader.js
export default class PeopleScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoplez: [],
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: `https://randomuser.me/api/?nat=br&results=5`,
    }).then(response => {
      const {results} = response.data;
      this.setState({
        peoplez: results,
      });
    });
  }

  render() {
    return (
      <View>
        {/* you have to pass peoplez={this.state.peoplez} so we can use the props in the peopleList.js file
        otherwise peoplez will be undefined in peopleList.js file, because the state is being created in the App.js file and
        in the peopleList.js we are using this state and even changing it using setState.
        */}
        <PeopleList peoplex={this.state.peoplez} />
      </View>
    );
  }
}
