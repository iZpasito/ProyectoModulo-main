import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import InputText from './elements/inputText';
import { SelectList } from 'react-native-dropdown-select-list';
import Uno from './recuadros/Uno';
import Dos from './recuadros/Dos'
import Tres from './recuadros/Tres';

export default function REBRP61COMP() {
  return (
    <View>
          <View style = {styles.Container}>
            <Uno></Uno>
          </View>
          <View style = {styles.Container}>
            <Dos></Dos>
          </View>
          <View style = {styles.Container}>
            <Tres></Tres>
          </View>
      
    </View>




  )}

  const styles = StyleSheet.create({
    Container: {
      flex:1,
    },
    containerDrop:{
      paddingLeft: 10,
    },
    
    firstContainer:{
        borderWidth:1,
        width:'97%',
        margin:"1.5%"
    },
    


    box:{
        backgroundColor:'white',
        width: '95%',


    },
    titulo: {
      fontWeight: 'bold', 
      fontSize: 17,
      paddingLeft:'1%',
      paddingBottom: 10,
      paddingRight:4,
    },

    inputOtros: {
      width: "90%",
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white',
      borderRadius:10,
      borderColor:'red',
    },
    selectList:{
      backgroundColor:'white',
      width: '95%',
    }
  });