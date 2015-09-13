import React, {
    Text,
    View
} from 'react-native';

export default function(styles){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello World!!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
};
