import { Text, View, StyleSheet, SafeAreaView, StatusBar, Platform, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'

export default class HomeScreen extends Component {
  render() {
    return (
      <View 
        style = {styles.container}>
        <SafeAreaView style = {styles.droidSafeArea} />
        <View style = {styles.titleBar}>
          <Text style={styles.titleText}>Aplicación Rastreador de la EEI </Text>
        </View>
        <TouchableOpacity style = {styles.routeCard}>
          <Text style = {styles.routeText}>localización de la EEI</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.routeCard}>
          <Text style = {styles.routeText}>localización de Meteors</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText : {
    fontSize : 28,
    fontWeight : "bold",
    color : "white",
  },
  droidSafeArea : { 
    marginTop : Platform.OS === "android" ? StatusBar.currentHeight : 0

  },
  routeCard:{
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: "white"
  },
  routeText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    marginTop: 75,
    paddingLeft: 30
  }
})