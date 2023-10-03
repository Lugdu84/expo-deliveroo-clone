import { Text } from 'react-native'
import { forwardRef, useMemo } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { View } from './Themed'

export type Ref = BottomSheetModal

const BottomSheet = forwardRef<Ref>((props, ref) => {
    const snapPoints = useMemo(() => ['50%'], [])
  return (
      <BottomSheetModal ref={ref} snapPoints={snapPoints}>
          <View>
                <Text>BottomSheet</Text>    
          </View>
    </BottomSheetModal>
  )
})

export default BottomSheet
