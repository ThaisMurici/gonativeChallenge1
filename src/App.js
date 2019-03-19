import React, { Component } from 'react';
import {
  StyleSheet, ScrollView, Text, View, Platform, StatusBar,
} from 'react-native';

import './config/ReactrotronConfig';
import Post from '~/components/Post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7e57c2',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 3,
    ...Platform.select({
      ios: {
        height: 86,
        paddingTop: 30,
      },
      android: {
        height: 56,
        paddingTop: 0,
      },
    }),
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  feed: {
    flex: 1,
    padding: 15,
  },
  status: {
    backgroundColor: '#fff',
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: 'Thais Moraes',
        title: 'Learning React Native',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tellus eu facilisis mattis. Donec quam urna, suscipit sed euismod ac, tincidunt eu erat. Nullam finibus aliquet sodales. Proin eget semper urna. Sed in tempus eros, cursus volutpat metus. Fusce placerat, lacus at finibus varius, arcu sapien lacinia mauris, facilisis tincidunt ipsum mauris sed magna. Phasellus eu tortor justo.',
      },
      {
        id: 2,
        author: 'Thais Moraes',
        title: 'Learning React Native',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tellus eu facilisis mattis. Donec quam urna, suscipit sed euismod ac, tincidunt eu erat. Nullam finibus aliquet sodales. Proin eget semper urna. Sed in tempus eros, cursus volutpat metus. Fusce placerat, lacus at finibus varius, arcu sapien lacinia mauris, facilisis tincidunt ipsum mauris sed magna. Phasellus eu tortor justo.',
      },
      {
        id: 3,
        author: 'Thais Moraes',
        title: 'Learning React Native',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tellus eu facilisis mattis. Donec quam urna, suscipit sed euismod ac, tincidunt eu erat. Nullam finibus aliquet sodales. Proin eget semper urna. Sed in tempus eros, cursus volutpat metus. Fusce placerat, lacus at finibus varius, arcu sapien lacinia mauris, facilisis tincidunt ipsum mauris sed magna. Phasellus eu tortor justo.',
      },
      {
        id: 4,
        author: 'Thais Moraes',
        title: 'Learning React Native',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tellus eu facilisis mattis. Donec quam urna, suscipit sed euismod ac, tincidunt eu erat. Nullam finibus aliquet sodales. Proin eget semper urna. Sed in tempus eros, cursus volutpat metus. Fusce placerat, lacus at finibus varius, arcu sapien lacinia mauris, facilisis tincidunt ipsum mauris sed magna. Phasellus eu tortor justo.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar style={styles.status} />
        <View style={styles.header}>
          <Text style={styles.title}>GoNative App</Text>
        </View>
        <ScrollView style={styles.feed}>
          {posts && posts.map(post => <Post key={post.id} postData={post} />)}
        </ScrollView>
      </View>
    );
  }
}
