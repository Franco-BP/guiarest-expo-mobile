import React, { useContext } from 'react';
import { 
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import Carousel from '../Carousel/Carousel';
import RestaurantItem from '../Items/RestaurantItem';
import SearchBarButton from '../SearchBarButton';
import ShowItem from '../Items/ShowItem';
import { storeContext } from '../Context/StoreProvider';

const HomeLayout = () => {
  const [store, dispatch] = useContext(storeContext);
  const mainAds = store.mainAds;
  const restaurants = store.restaurants;
  const shows = store.shows;

  const dimensionsWidth = Dimensions.get('window').width;
  const dimensionsHeight = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: '#f3f6f4',
    },
  });

  return (
    <ScrollView style={styles.scrollView}>
      <Carousel carouselData={mainAds} />
      <SearchBarButton/>
      <FlatList
        style={{backgroundColor: 'transparent'}}
        data={restaurants}
        renderItem={({item}) => <RestaurantItem title={item.title} imageLink={item.imageLink} />}
        keyExtractor={item => item.imageLink}
        horizontal={true}
      />
      <FlatList
        data={shows}
        renderItem={({item}) => <ShowItem title={item.title} imageLink={item.imageLink} restaurantTitle={item.restaurantTitle} />}
        keyExtractor={item => item.title}
        horizontal={true}
      />
    </ScrollView>
  )
  
}

export default HomeLayout;