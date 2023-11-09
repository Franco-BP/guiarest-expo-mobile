import React from 'react';
import { View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import StoreProvider from '../components/Context/StoreProvider';
import SearchLayout from '../components/Layouts/SearchLayout';

const Search = () => {

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
          <SearchLayout/>
        </StoreProvider>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
};

export default Search;