import React, { useEffect, useState } from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import getCounterService from "../components/CounterService";

function SingleTonScreen () {
    const counter = getCounterService();
    const [count,setCount] = useState(counter.getCount());
    useEffect(() => {
        setCount(counter.getCount())  
      },[count])

      const increment = () => {
        counter.increment();
        setCount(counter.getCount())
      }

      const decrement = () => {
        counter.decrement();
        setCount(counter.getCount())
      }

      const reset = () => {
        counter.reset();
        setCount(counter.getCount())
      }
    return(

    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>

      <TouchableOpacity onPress={increment}>
        <Text style={styles.Text}>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decrement}>
        <Text style={styles.Text}>Decrement</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={reset}>
        <Text style={styles.Text}>Reset</Text>
      </TouchableOpacity>

    </View>

    )
}
export default SingleTonScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    counterText: {
      fontSize: 24,
      marginBottom: 20,
    },
    Text:{
        fontFamily:'Roboto',
        fontSize:18,
        alignSelf:'center'

    }
  });