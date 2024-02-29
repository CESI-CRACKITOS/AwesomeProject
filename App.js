import {StyleSheet, View, FlatList } from 'react-native';
import Navbar from './components/navigation/navbar';
import Post from './components/post/post';
import {data} from './data/posts';



export default function App() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <FlatList
          data={data}
          renderItem={({ item }) => <Post username={item.username} text={item.text} date={item.date} img={item.img} />}
          keyExtractor={(item, index) => index.toString()}
          style={styles.feed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25
  }
});
