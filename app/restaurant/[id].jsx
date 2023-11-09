import { React, SafeAreaView, StyleSheet, StatusBar, View } from 'react-native'
import StoreProvider from '../../components/Context/StoreProvider';
import RestaurantLayout from '../../components/Layouts/RestaurantLayout';
import { useLocalSearchParams } from 'expo-router';

export default function restaurantId() {

  const { id } = useLocalSearchParams();

  const MAIN_ADS = [
    {
      title: 'Delicious Burgers',
      imageLink: 'https://www.tastingtable.com/img/gallery/the-ideal-way-to-cook-an-egg-for-a-delicious-burger-topping/l-intro-1682610344.jpg'
    },
    {
      title: 'The Best Salads',
      imageLink: 'https://img.freepik.com/free-photo/horizontal-view-delicious-salad-with-many-fresh-ingredients-spices-oil-bottle-garlics-cutlery-set-wooden-cutting-board_179666-19952.jpg?w=2000'
    },
    {
      title: 'Delicious Pizza Restaruants',
      imageLink: 'https://i.pinimg.com/originals/31/f8/48/31f8487f3ac2eb1e93d7eb334248ed0a.jpg'
    }
  ];

  const RESTAURANT_INFO = {
    description: "Horario: de 12 a 22 horas.\nSolo retiro en el local.",
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      backgroundColor: '#f3f6f4',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: StatusBar.currentHeight || 0,
    },
  })

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <StoreProvider>
          <RestaurantLayout restaurant={RESTAURANT_INFO} mainAds={MAIN_ADS}/>
        </StoreProvider>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
};