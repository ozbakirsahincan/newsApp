import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

export default function NewsCard({news}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: news.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.description}> {news.description} </Text>
        <Text style={styles.author}> {news.author} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {marginTop: 3},
  inner_container: {padding: 5},
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
