import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import withLogging from '../components/withLogging';
import ButtonComponent from '../components/ButtonComponent';

const ButtonWithLogging = withLogging(ButtonComponent);

const HOCScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ButtonWithLogging />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default HOCScreen;
