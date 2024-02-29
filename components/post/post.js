import { StyleSheet, Text, View, Image } from 'react-native';

export default function Post({ username, text, date, img }) {
    
    return (
        <View style={styles.container}>
            <Image source={img} style={styles.profilePicture} />
            <View style={styles.subContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.usernameText}>{username}</Text>
                    <Text style={styles.dateText}>{date}</Text>
                </View>
                <View>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        flexDirection: "row"
    },
    subContainer: {
        flex: 1,
    },
    titleContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    profilePicture: {
        width: 50,
        height: 50
    },
    text: {
        color: "#111111"
    },
    dateText: {
        color: "#BBBBBB"
    },
    usernameText: {
        color: "#000000",
        fontWeight: "bold"
    },
})