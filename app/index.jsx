import { React, SafeAreaView, StyleSheet, StatusBar, View } from 'react-native'
import StoreProvider from '../components/Context/StoreProvider';
import HomeLayout from '../components/Layouts/HomeLayout';

export default function Index() {

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
        </StoreProvider>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
};