import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const ShowItem = ({title, imageLink, restaurantTitle}) => {
  const dimensionsWidth = Dimensions.get('window').width;

  const styles = StyleSheet.create({
    item: {
      backgroundColor: 'transparent',
      paddingLeft: dimensionsWidth/20,
      marginVertical: 8,
    },
    logo: {
      height: 250,
      width: 141,
      justifyContent: 'flex-end',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
    titleBackground: {
      height: 50,
      backgroundColor: 'white',
      justifyContent: 'center',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },  
    title: {
      color: 'black',
      fontSize: 25,
      fontWeight: '600',
      textAlign: 'center'
    },
  })

  return (
    <Link href={'/restaurant/' + restaurantTitle} asChild>
      <TouchableOpacity style={styles.item}>
        <Image style={styles.logo} source={{uri: imageLink}} />
        <View style={styles.titleBackground}>
            <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default ShowItem;