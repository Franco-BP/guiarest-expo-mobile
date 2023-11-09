import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel';
import MapView from 'react-native-maps';
import { Dimensions, ScrollView, StyleSheet, View, Text, Button } from 'react-native';

const RestaurantLayout = ({restaurant, mainAds}) => {
  const dimensionsWidth = Dimensions.get('window').width;
  const dimensionsHeight = Dimensions.get('window').height;

  const [section, setSection] = useState('menu');
  const [menuColor, setMenuColour] = useState('grey');
  const [showsColor, setShowsColour] = useState('white');

  useEffect(() => {
    switch (section) {
      case 'menu':
        setMenuColour('beige');
        setShowsColour('white');
        break;
      case 'shows':
        setMenuColour('white');
        setShowsColour('beige');
        break;
    }
  }, [section]);

  const styles = StyleSheet.create({
    header: {
      width: dimensionsWidth,
      height: dimensionsHeight/4,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    headerSeparator: {
      width: 1,
      height: dimensionsHeight/4.5,
      backgroundColor: 'grey',
      alignSelf: 'center',
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
      borderWidth: 1,
      borderColor: 'grey',
    },
    buttonsSeparator: {
      width: 1,
      height: '100%',
      backgroundColor: 'grey',
      alignSelf: 'center',
    },
    menuButton: {
      width: dimensionsWidth/2,
      fontSize: 20,
      color: 'black',
      backgroundColor: menuColor,
    },
    showsButton: {
      width: dimensionsWidth/2,
      fontSize: 20,
      color: 'black',
      backgroundColor: showsColor,
    },
  });

  return (
    <ScrollView>
      <Carousel carouselData={mainAds} />
      <View style={styles.header}>
        <Text>{restaurant.description}</Text>
        <View style={styles.headerSeparator}></View>
        <MapView style={styles.map} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button style={styles.menuButton} onPress={() => setSection('menu')} title="Menu"/>
        <View style={styles.buttonsSeparator}></View>
        <Button style={styles.showsButton} onPress={() => setSection('shows')} title="Shows"/>
      </View>
      <View style={styles.genericSection}>
        {/* {section === 'menu' ? 
          <View></View>
          :
          <View></View>
        } */}
      </View>
    </ScrollView>
  )
}

export default RestaurantLayout