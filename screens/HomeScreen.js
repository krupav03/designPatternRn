import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View,Text,StyleSheet, TouchableOpacity,Dimensions} from 'react-native';


const {height,width} = Dimensions.get('window')
const buttonNames = {
    ContainerPresenter: 'Container Presenter',
    HOC : 'Higher Order Component',
    Singleton:'Singleton Pattern',
    Factory:'Factory Pattern',
    Observer:'Observer Pattern',
    Module:'Module Pattern',

}

function HomeScreen () {
    const navigation = useNavigation();
    return(
            <View style={styles.HomeScreen}>
                <TouchableOpacity style={styles.cpbutton} onPress={() => navigation.navigate('Container Presenter')}>
                    <Text style={styles.buttonText}>{buttonNames?.ContainerPresenter}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.hocButton} onPress={() => navigation.navigate('Higher Order Component')}>
                    <Text style={styles.buttonText}>{buttonNames?.HOC}</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.fpButton} onPress={() => navigation.navigate('Atom')}>
                    <Text style={styles.buttonText}>{'Atom'}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.fpButton} onPress={() => navigation.navigate('Component Position')}>
                    <Text style={styles.buttonText}>{'Component Position'}</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.singletonButton} onPress={() => navigation.navigate('Singleton')}>
                    <Text style={styles.buttonText}>{buttonNames?.Singleton}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.fpButton}>
                    <Text style={styles.buttonText}>{buttonNames?.Factory}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.opButton}>
                    <Text style={styles.buttonText}>{buttonNames?.Observer}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.mpButton}>
                    <Text style={styles.buttonText}>{buttonNames?.Module}</Text>
                </TouchableOpacity>
            </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    HomeScreen:{
        flex:1,
        backgroundColor:'#F0F0F0',
        alignItems:'center',
        paddingVertical:height/35,
        justifyContent:'space-evenly'

    },
    cpbutton:{
        height:height/15,
        width:width/2,
        borderRadius:height/9,
        backgroundColor:'#FF6F61',
        justifyContent:'center',
        marginBottom:height/40
    },
    buttonText:{
        fontFamily:'Roboto',
        fontSize:18,
        alignSelf:'center'

    },
    hocButton:{
        height:height/15,
        width:width/2,
        borderRadius:height/9,
        backgroundColor:'#6B5B95',
        justifyContent:'center',
        marginBottom:height/40
    },
    rpButton:{
        height:height/15,
        width:width/2,
        borderRadius:height/9,
        backgroundColor:'#88B04B',
        justifyContent:'center',
        marginBottom:height/40
    },
    singletonButton:{
        height:height/15,
        width:width/2,
        borderRadius:height/9,
        backgroundColor:'#F7CAC9',
        justifyContent:'center',
        marginBottom:height/40
    },
    fpButton:{
        height:height/15,
        width:width/2,
        borderRadius:height/9,
        backgroundColor:'#92A8D1',
        justifyContent:'center',
        marginBottom:height/40
    },
    opButton:{
        height:height/15,
        width:width/2,
        borderRadius:height/9,
        backgroundColor:'#F7786B',
        justifyContent:'center',
        marginBottom:height/40
    },
    mpButton:{
        height:height/15,
        width:width/2,
        borderRadius:height/9,
        backgroundColor:'#034F84',
        justifyContent:'center',
        marginBottom:height/40
    }

})