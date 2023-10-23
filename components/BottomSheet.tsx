import { Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native'
import { forwardRef, useCallback, useMemo } from 'react'
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet'
import { View } from './Themed'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export type Ref = BottomSheetModal

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ['50%'], [])
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const renderBackdrop = useCallback((props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, [])
  const { dismiss} = useBottomSheetModal()
  return (
      <BottomSheetModal handleIndicatorStyle={{display: "none"}} backgroundStyle={{backgroundColor: isDarkMode ? Colors.dark.background : Colors.light.background}} overDragResistanceFactor={0} ref={ref} snapPoints={snapPoints} backdropComponent={renderBackdrop}>
      
      <View style={styles.container}>
          <View style={styles.toggle} >
            <TouchableOpacity style={styles.toggleActive}>
              <Text style={styles.textActive} >Delivery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toggleInactive}>
              <Text style={styles.textInactive}>Pickup</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.subHeader}>
          Your Location
        </Text>
        <Link href={'/'} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons name="location-outline" size={20} color={Colors.medium} />
              <Text style={{flex: 1}}>Current location</Text>
              <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
            </View>
          </TouchableOpacity>
        </Link>
        <Text style={styles.subHeader}>
          Arrival time
        </Text>
        <Link href={'/'} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons name="stopwatch-outline" size={20} color={Colors.medium} />
              <Text style={{flex: 1}}>Now</Text>
              <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
            </View>
          </TouchableOpacity>
        </Link>
          <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>  
    </BottomSheetModal>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 32
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 32,
  },
  toggleInactive: {
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 32,
  },
  textActive: {
    color: "#fff",
  },
  textInactive: {
    color: Colors.primary,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "bold",
    opacity: 0.6,
    margin: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    gap: 8,
    borderColor: Colors.grey,
    borderWidth: 1,
  }
})


export default BottomSheet
