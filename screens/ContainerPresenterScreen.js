import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import UserContainer from '../components/UserContainer';
// import UserContainer from './components/UserContainer';  /

const ContainerPresenterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserContainer/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default ContainerPresenterScreen;
