import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    marginBottom: 5,
    paddingBottom: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 3,
  },
  author: {
    fontSize: 12,
    color: '#939393',
  },
});

const Post = ({ postData }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>{postData.title}</Text>
      <Text style={styles.author}>{postData.author}</Text>
    </View>
    <Text>{postData.content}</Text>
  </View>
);

Post.propTypes = {
  postData: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
