import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

function UserPresenter({ users }) {
  // Function to render each item in the FlatList
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}> City Name : {item.address?.city}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()} // Extracts unique key from each item
      renderItem={renderItem} // Render each item using the renderItem function
      contentContainerStyle={styles.listContainer} // Style for FlatList container
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#FF6F61', // Red background color for items
    padding: 10, // Add padding inside the item
    marginVertical: 5, // Space between items
    borderRadius: 5, // Rounded corners
  },
  itemText: {
    color: '#FFF', // White text color
    fontSize: 16, // Font size
  },
  listContainer: {
    padding: 10, // Padding around the FlatList
  },
});

export default UserPresenter;
