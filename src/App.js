import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard';

export default function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}> News App</Text>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {news_banner_data.map((bannerNews, index) => (
                <TouchableOpacity onPress={() => alert('Resme Tıklandı ! ')}>
                  <Image
                    keyExtractor={bannerNews.id.toString()}
                    style={styles.banner_image}
                    source={{uri: bannerNews.imageUrl}}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
          keyExtractor={(item, index) => item.u_id.toString()}
          data={news_data}
          renderItem={renderNews}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#eceff1'},
  headerText: {fontSize: 30, fontWeight: 'bold'},
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },
});
