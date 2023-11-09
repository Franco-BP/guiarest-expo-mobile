import { React, SafeAreaView, StyleSheet, StatusBar, View } from 'react-native'
import StoreProvider from './components/Context/StoreProvider';
import HomeLayout from './components/Layouts/HomeLayout';
import RestaurantLayout from './components/Layouts/RestaurantLayout';
import SearchLayout from './components/Layouts/SearchLayout';

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

const RESTAURANTS = [
  {
    title: 'Mc Donald\'s',
    imageLink: 'https://www.daleeeel.com/f/res/s05/locations-photos/000/819/0081979-269-rinnoo-9f537c6de8e1478b893bd18a4185fb0e.jpg',
  },
  {
    title: 'Grill House',
    imageLink: 'https://marketplace.canva.com/EAFVq1ge0ZU/1/0/1600w/canva-logo-restaurante-circular-sencillo-negro-blanco-QEgdJHSl6GE.jpg'
  },
  {
    title: 'El Ahumado',
    imageLink: 'https://marketplace.canva.com/EADiIIVxcT4/2/0/1600w/canva-negro-la-corteza-restaurante-logo-o6NfZ-Gk69A.jpg'
  },
  {
    title: 'Dimple',
    imageLink: 'https://static.wixstatic.com/media/0784b1_c3d17c9b44d642c59490242ef3b9bc76~mv2.png/v1/fill/w_270,h_270,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Restaurant-logo-04.png'
  },
  {
    title: 'SeaFood',
    imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgk5EctTLX__7qdZLhONLYtzxO2newq69pEw&usqp=CAU'
  },
  {
    title: 'Cheff',
    imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdvFOfEWoPzmI3AyhrMbOTUYiRDNwfzdsxA&usqp=CAU'
  },
  {
    title: 'Catering',
    imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_6f-OZ_XD2lXyR6c6IQHdoB0cBksovrCpg&usqp=CAU'
  }
];

const SHOWS = [
  {
    title: 'Show 1',
    imageLink: 'https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg',
  },
  {
    title: 'Show 2',
    imageLink: 'https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg'
  },
  {
    title: 'Show 3',
    imageLink: 'https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg'
  },
  {
    title: 'Show 4',
    imageLink: 'https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg'
  },
  {
    title: 'Show 5',
    imageLink: 'https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg'
  },
  {
    title: 'Show 6',
    imageLink: 'https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg'
  },
  {
    title: 'Show 7',
    imageLink: 'https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg'
  },
];

const RESTAURANT_INFO = {
  description: "Horario: de 12 a 22 horas.\nSolo retiro en el local.",
}

export default function App() {

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
          <HomeLayout/>
          {/* <RestaurantLayout restaurant={RESTAURANT_INFO} mainAds={MAIN_ADS}/> */}
          {/* <SearchLayout/> */}
        </StoreProvider>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
};