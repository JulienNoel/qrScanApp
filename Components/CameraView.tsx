import { StyleSheet,AppState } from 'react-native'
import React, { useEffect } from 'react'
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera'
import { useIsFocused } from '@react-navigation/native'

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
      }
    })

    useEffect(() => {
     if (hasPermission) return
      requestPermission()
    },[])

    if (device == null) return null
    return (
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
        codeScanner={codeScanner}
      />
    )
}

const styles = StyleSheet.create({})