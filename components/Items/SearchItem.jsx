import React from 'react'
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native'

const SearchItem = ({ item }) => {
  const dimensionsHeight = Dimensions.get('window').height;
  const dimensionsWidth = Dimensions.get('window').width;

  const styles = StyleSheet.create({
    container: {
      width: dimensionsWidth,
      height: dimensionsHeight/10,
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      paddingLeft: 20,
      marginTop: 10,
    },
    icon: {
      width: dimensionsHeight/10,
      height: dimensionsHeight/10,
      borderRadius: 10,
    },
    textContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    itemText: {
      color: 'black',
      fontSize: 20,
      textAlign: 'left',
      paddingLeft: 10,
      paddingTop: 5,
      fontWeight: '600',
    },
  })

  return (
    <View style={styles.container} >
      <Image style={styles.icon} source={{uri: item.imageLink}}/>
      <View style={styles.textContainer}>
        <Text style={styles.itemText} >{item.title}</Text>
      </View>
    </View>
  )
}

export default SearchItem