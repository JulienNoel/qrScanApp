import { StyleSheet, View } from 'react-native'

type TProps = {
    rotate?: number
}

export const SquareView = ({
    rotate = 0}:TProps):JSX.Element => {
    
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>    
        <View style={[
            styles.main, 
            {transform: [
            {rotate: `${rotate}deg`}
        ]}]}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        width: 250,
        height: 250,
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})