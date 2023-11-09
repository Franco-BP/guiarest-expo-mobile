import React from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const SearchBarButton = () => {

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.input}
        placeholder="Buscar por nombre..."
        keyboardType="default"
        editable={false}
        // OnPress debería navegar a SearchLayout
        onPress={() => {}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBarContainer: {
    minHeight: 40,
    marginTop: 12,
    paddingTop: 10,
    paddingHorizontal: 20,
    zIndex: 100,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default SearchBarButton