import React, {
  StyleSheet,
} from 'react-native';

import template from './templates/main.jsx';

let TabelaApp = React.createClass({
  render: function(){
      return template(styles);
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default function (){
    return TabelaApp;
}
