import {Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require('@/assets/images/bike.png')} style={styles.bike} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer}>
          <Text style={styles.title}>Delivery - Now</Text>
          <View style={styles.locationName}>
            <Text style={styles.subtitle}>San Francisco</Text>
            <Ionicons name="chevron-down" size={16} color={Colors.primary}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff"
  },
  bike: {
    height: 30,
    width: 30,
  },
  container: {
    height: 50,
    gap: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",  
    alignItems: "center",
    paddingHorizontal: 20
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: Colors.primary,
    opacity: 0.6,
  },
  subtitle: {
    fontSize: 12,
    color: Colors.primary,
    opacity: 0.6,
  },
  locationName: {
    flexDirection: "row",
    alignItems: "center"
  },
  profileButton: {
    padding: 10
  },
})

export default CustomHeader