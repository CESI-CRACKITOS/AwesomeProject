import { StyleSheet, Text, View } from 'react-native';

export default function Navbar() {
    return (
        <View style={styles.container}>
            <Text>Adopt a Lego</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC'
    }
})