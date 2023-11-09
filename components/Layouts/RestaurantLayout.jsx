import React, { useContext, useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel';
import MapView from 'react-native-maps';
import { Dimensions, ScrollView, StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { storeContext } from '../Context/StoreProvider';
import { Link } from 'expo-router';

const HARDCODED_REST = {
  description: "Horario: de 12 a 22 horas.\nSolo retiro en el local.\nESTE ES EL OBJETO HARDCODEADO",
}

const GO_BACK_ICON = 'https://cdn-icons-png.flaticon.com/512/54/54321.png';

const types = {
  menu: 'menu',
  shows: 'shows',
};

const RestaurantLayout = ({restaurantId}) => {
  const dimensionsWidth = Dimensions.get('window').width;
  const dimensionsHeight = Dimensions.get('window').height;

  const [store, dispatch] = useContext(storeContext);
  const [restaurant, setRestaurant] = useState(null);
  const mainAds = store.mainAds;

  const [section, setSection] = useState(types.menu);
  const [menuColor, setMenuColour] = useState('grey');
  const [showsColor, setShowsColour] = useState('white');

  useEffect(() => {
    let indexOfRestaurant = -1;
    store.restaurants.map(element => {
      if (element.title === restaurantId) {
        indexOfRestaurant = store.restaurants.indexOf(element);
      };
    })
    let tempRestaurant = indexOfRestaurant > -1 ? store.restaurants.at(indexOfRestaurant) : HARDCODED_REST;
    setRestaurant( tempRestaurant );
  }, [])

  useEffect(() => {
    switch (section) {
      case types.menu:
        setMenuColour('white');
        setShowsColour('#f3f6f4');
        break;
      case types.shows:
        setMenuColour('#f3f6f4');
        setShowsColour('white');
        break;
    }
  }, [section]);

  const styles = StyleSheet.create({
    topBar: {
      height: dimensionsHeight/18,
      width: dimensionsWidth,
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchIcon: {
      height: 25,
      width: 30,
      marginLeft: 10,
    },
    header: {
      width: dimensionsWidth,
      height: dimensionsHeight/4,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      backgroundColor: '#f3f6f4',
    },
    headerInfo: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    logo: {
      height: dimensionsWidth/5,
      width: dimensionsWidth/5,
      justifyContent: 'flex-end',
      borderRadius: 10,
    },
    map: {
      width: dimensionsWidth/2.5,
    },
    buttonsContainer: {
      marginTop: 15,
      width: dimensionsWidth,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    genericButton: {
      width: dimensionsWidth/2.2,
      fontSize: 20,
      color: 'black',
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'grey',
    },
  });

  return (
    <ScrollView>
      <View style={styles.topBar}>
        <Link href="/" asChild>
          <TouchableOpacity>
            <Image style={styles.searchIcon} source={{uri: GO_BACK_ICON}} />
          </TouchableOpacity>
        </Link>
        <Text style={{ marginLeft: 15, fontSize: 20, fontWeight: '700', }} >{restaurant?.title}</Text>
      </View>
      <Carousel carouselData={mainAds} />
      <View style={styles.header}>
        <View style={styles.headerInfo}>
          <Image
            style={styles.logo}
            source={{uri: restaurant?.imageLink}}
          />
          <Text style={{ marginTop: 4, textAlign: 'center', fontWeight: '600', fontSize: 20, }} >{restaurant?.title}</Text>
          <Text style={{ marginTop: 10, textAlign: 'center', fontSize: 15, }}>{restaurant?.description}</Text>
        </View>
        <MapView style={{ width: dimensionsWidth/2.5, }} />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={{...styles.genericButton, backgroundColor: menuColor}}>
          <Button onPress={() => setSection(types.menu)} title="Menu"/>
        </View>
        <View style={{...styles.genericButton, backgroundColor: showsColor}}>
          <Button onPress={() => setSection(types.shows)} title="Shows"/>
        </View>
      </View>
      <View style={styles.genericSection}>
        <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 20, fontWeight:'600', }} >
        {section === types.menu ? 'Menu:' : 'Shows:'}
        </Text>
        <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 15, }} >
          {section === types.menu ? restaurant?.menu : restaurant?.shows}
        </Text>
      </View>
    </ScrollView>
  )
}

export default RestaurantLayout