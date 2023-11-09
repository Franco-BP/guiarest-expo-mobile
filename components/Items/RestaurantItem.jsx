import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const RestaurantItem = ({title, imageLink}) => {
  const dimensionsWidth = Dimensions.get('window').width;

  const styles = StyleSheet.create({
    item: {
      backgroundColor: 'transparent',
      padding: dimensionsWidth/20,
      paddingRight: 0,
      marginVertical: 8,
    },
    logo: {
      width: dimensionsWidth/4,
      height: dimensionsWidth/4,
      justifyContent: 'flex-end',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    titleBackground: {
      height: 25,
      width: '100%',
      backgroundColor: 'white',
      justifyContent: 'center',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginBottom: -1,
    },  
    title: {
      color: 'black',
      fontSize: 15,
      textAlign: 'center',
      fontWeight: '600',
    },
  })

  return (
    <Link href={'/restaurant/' + title} asChild>
      <TouchableOpacity style={styles.item}>
        <Image style={styles.logo} source={{uri: imageLink}} />
        <View style={styles.titleBackground}>
            <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default RestaurantItem;