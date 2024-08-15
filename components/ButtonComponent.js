import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const ButtonComponent = ({ logInteraction, displayMessage, onClearMessage }) => {
  const handlePress = () => {
    logInteraction("Button was pressed!");
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{displayMessage}</Text>
      </View>
      <TouchableOpacity style={styles.messageContainer} onPress={onClearMessage}>
        <Text style={styles.messageText}>Clear message</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  messageContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 18,
    color: '#333',
  },
});

export default ButtonComponent;
