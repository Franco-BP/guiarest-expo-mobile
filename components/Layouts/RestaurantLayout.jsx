import React, { useContext, useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel';
import MapView from 'react-native-maps';
import { Dimensions, ScrollView, StyleSheet, View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
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

const RestaurantLayout = ({restaurantId, showClicked}) => {
  const dimensionsWidth = Dimensions.get('window').width;
  const dimensionsHeight = Dimensions.get('window').height;

  const [store, dispatch] = useContext(storeContext);
  const [restaurant, setRestaurant] = useState(null);
  const [shows, setShows] = useState(null);
  const mainAds = store.mainAds;

  const [section, setSection] = useState(showClicked ? types.shows : types.menu);
  const [menuColor, setMenuColour] = useState('grey');
  const [showsColor, setShowsColour] = useState('white');

  const renderShow = ({show}) => {
    return (
      <View style={styles.showContainer} >
        <Image style={styles.showIcon} source={{uri: show.imageLink}}/>
        <View style={styles.showTextContainer}>
          <Text style={styles.showText} >{show.title}</Text>
          <Text style={styles.showText} >{show.description}</Text>
        </View>
      </View>
    )
  }

  // Search and save of the restaurant and its shows.
  useEffect(() => {
    // Search and save of the restaurant
    // with the id passed in the props.
    let indexOfRestaurant = -1;

    store.restaurants.map(element => {
      if (element.title === restaurantId) {
        indexOfRestaurant = store.restaurants.indexOf(element);
      };
    });
    let tempRestaurant = indexOfRestaurant > -1 ? store.restaurants.at(indexOfRestaurant) : HARDCODED_REST;

    // Search and save of the shows
    // that contains the restaurant.
    let showsIdList = tempRestaurant.showsIdList;
    let tempShows = [];

    if (showsIdList.length > 0 ) {
      store.shows.map(element => {
        if (showsIdList.includes(element.id)) {
          tempShows.push(element);
        };
      });
    }

    // Assignment of the saved information.
    setRestaurant( tempRestaurant );
    setShows(tempShows);
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
    logo: {
      height: dimensionsWidth/5,
      width: dimensionsWidth/5,
      justifyContent: 'flex-end',
      borderRadius: 10,
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
    showContainer: {
      width: dimensionsWidth/2.5,
      height: dimensionsWidth/1,
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    showIcon: {
      height: dimensionsWidth/2.8,
      width: dimensionsWidth/5,
      borderRadius: 10,
    },
    showTextContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    showText: {
      color: 'black',
      fontSize: 20,
      textAlign: 'left',
      paddingLeft: 10,
      paddingTop: 5,
      fontWeight: '600',
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
        <View style={{
          flexDirection: 'column',
          alignItems: 'center',
          }}
        >
          <Image
            style={styles.logo}
            source={{uri: restaurant?.imageLink}}
          />
          <Text style={{ marginTop: 4, textAlign: 'center', fontWeight: '600', fontSize: 20, }} >
            {restaurant?.title}
          </Text>
          <Text style={{ marginTop: 10, textAlign: 'center', fontSize: 15, }}>
            {restaurant?.description}
          </Text>
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
        {section === types.menu && (
          // Menu Section
          <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 15, }} >
            {restaurant?.menu}
          </Text>
        )}
        {section === types.shows && shows?.length > 0 && (
          // Shows Available Section
          <FlatList
            data={shows}
            keyExtractor={(item) => item.id}
            renderItem={(object) => renderShow(object)}
            horizontal={true}
          />
        )}
        {section === types.shows && shows?.length == 0 && (
          // Shows Empty Section
          <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 15, }} >
            Este restaurante no tiene shows disponibles.
          </Text>
        )}
      </View>
    </ScrollView>
  )
}

export default RestaurantLayout