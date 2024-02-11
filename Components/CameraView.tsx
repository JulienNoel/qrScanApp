import { StyleSheet,AppState, View } from 'react-native'
import React, { useEffect } from 'react'
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera'
import { useIsFocused } from '@react-navigation/native'
import { SquareView } from './SquareView'

export const CameraView = (): JSX.Element | null => {
    const device = useCameraDevice('back')
    const { hasPermission, requestPermission } = useCameraPermission()
    const isFocused = useIsFocused()
    const appState = AppState.currentState
    const isActive = isFocused && appState === 'active'
    const codeScanner = useCodeScanner({
      codeTypes: ['qr', 'ean-13'],
      onCodeScanned: (codes) => {
        console.log(`Scanned ${codes.length} codes!`)
        console.log(codes[0]?.corners)
      }
    })

    useEffect(() => {
     if (hasPermission) return
      requestPermission()
    },[])

    if (device == null) return null
    return (
      <>
        <Camera
          style={[StyleSheet.absoluteFill, styles.container]}
          device={device}
          isActive={isActive}
          codeScanner={codeScanner}
          /> 
        <SquareView />       
      </>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    opacity: 0.5
  }
})