import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Text, Image } from 'react-native';
import { Link } from 'expo-router';

const SearchBarButton = () => {
  const dimensionsWidth = Dimensions.get('window').width;
  const SEARCH_ICON = 'https://cdn2.iconfinder.com/data/icons/minimal-set-five/32/minimal-48-512.png';

  const styles = StyleSheet.create({
    searchBarContainer: {
      minHeight: 40,
      marginTop: 12,
      paddingTop: 10,
      paddingHorizontal: 20,
      zIndex: 100,
    },
    touchable: {
      height: 20,
      width: dimensionsWidth-40,
    },
    input: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 10,
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'flex-start'
    },
    searchIcon: {
      height: 15,
      width: 18,
    },
    placeHolder: {
      color: 'grey',
      marginLeft: 10,
    },
  });

  return (
    <View style={styles.searchBarContainer}>
      <Link href="/search" asChild>
        <TouchableOpacity style={styles.touchable}>
          <View style={styles.input}>
            <Image style={styles.searchIcon} source={{uri: SEARCH_ICON}} />
            <Text style={styles.placeHolder}>Buscar por nombre...</Text>
          </View>
          {/* <TextInput
            style={styles.input}
            placeholder="Buscar por nombre..."
            keyboardType="default"
            editable={false}
          /> */}
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export default SearchBarButton;