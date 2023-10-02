import {Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors  from '@/constants/Colors'
import { Link } from 'expo-router'
import { TextInput } from 'react-native-gesture-handler'

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleReset = () => {
    setSearchText('');
  };
  return (

    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Ionicons style={styles.searchIcon} name="ios-search" size={20} color={Colors.medium} />
          <TextInput style={styles.input} placeholder="Restaurants, groceries, dishes" onChangeText={setSearchText} value={searchText} />
          {searchText !== '' && (
            <TouchableOpacity onPress={handleReset}>
              <Ionicons name="close-circle-outline" size={20} color={Colors.medium} />
            </TouchableOpacity>
          )}
        </View>
        <Link href={'/'} asChild>
          <TouchableOpacity style={styles.optionButton}>
            <Ionicons name="options-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}


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
      <SearchBar />
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
  searchContainer: {
    height: 60,
    backgroundColor: '#fff',
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  searchField: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  optionButton: {
    padding: 10,
  },
  input: {
    fontSize: 14,
    flex: 1,
    color: Colors.mediumDark,
    textAlign: "left",
    padding: 10,
  },
  searchIcon: {
    // paddingLeft: 10,
  }
})

export default CustomHeader