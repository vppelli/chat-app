
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useState } from 'react';
import { getAuth, signInAnonymously } from "firebase/auth";

const Start = ({ navigation }) => {
    const auth = getAuth();

    const signInUser = () => {
        signInAnonymously(auth)
            .then(result => {
                navigation.navigate("Chat", { name: name, background: background, userID: result.user.uid });
                Alert.alert("Signed in Successfully!");
            })
            .catch((error) => {
                Alert.alert("Unable to sign in, try later again.");
            })
    }

    const [name, setName] = useState('');
    const [background, setBackground] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../assets/background-image.png')} resizeMode='cover'>
                <Text style={styles.title}>Chat App</Text>
                <View style={styles.box}>
                    <View style={[styles.innerBox, styles.inputArea]}>
                        <Image source={require('../assets/user-icon.png')} style={styles.inputIcon} />
                        <TextInput
                            style={styles.textInput}
                            value={name}
                            onChangeText={setName}
                            placeholder='Your Name'
                        />
                    </View>
                    <View style={styles.innerBox}>
                        <Text style={styles.textDisplay}>Choose Background Color:</Text>
                    </View>
                    <View style={styles.innerBox}>
                        <TouchableOpacity style={styles.circle1} accessible={true} accessibilityLabel="Black" accessibilityHint="Changes color to Black" accessibilityRole="button" onPress={() => setBackground('#090C08')} />
                        <TouchableOpacity style={[styles.circle1, styles.circle2]} accessible={true} accessibilityLabel="Very dark grayish violet" accessibilityHint="Changes color to Very dark grayish violet" accessibilityRole="button" onPress={() => setBackground('#474056')} />
                        <TouchableOpacity style={[styles.circle1, styles.circle3]} accessible={true} accessibilityLabel="Dark grayish blue" accessibilityHint="Changes color to Dark grayish blue" accessibilityRole="button" onPress={() => setBackground('#8A95A5')} />
                        <TouchableOpacity style={[styles.circle1, styles.circle4]} accessible={true} accessibilityLabel="Grayish green" accessibilityHint="Changes color to Grayish green" accessibilityRole="button" onPress={() => setBackground('#B9C6AE')} />
                    </View>
                    <View style={styles.innerBox}>
                        <TouchableOpacity
                            style={styles.button}
                            accessible={true}
                            accessibilityLabel="Start Chatting"
                            accessibilityHint="Press to start chatting"
                            accessibilityRole="button"
                            onPress={signInUser}
                        >
                            <Text style={styles.textButton}>Start Chatting</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            {Platform.OS === "ios" ? <KeyboardAvoidingView behavior="padding" /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    box: {
        height: '44%',
        width: '88%',
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        backgroundColor: '#ffffffCC',
        borderRadius: 2,
        bottom: '4%'
    },
    innerBox: {
        flexGrow: 1,
        width: '88%',
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        textAlign: 'center',
        width: '88%',
        color: 'white',
        top: '10%',
        fontSize: 45,
        fontWeight: '600',
    },
    circle1: {
        width: 48,
        height: 48,
        borderRadius: 50,
        marginRight: 10,
        borderColor: '#1f1f1f',
        backgroundColor: '#090C08'
    },
    circle2: {
        backgroundColor: '#474056'
    },
    circle3: {
        backgroundColor: '#8A95A5'
    },
    circle4: {
        backgroundColor: '#B9C6AE'
    },
    inputArea: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#757083',
        borderRadius: 2,
        width: '88%',
        maxHeight: 60,
        margin: 'auto'
    },
    inputIcon: {
        padding: 10,
        margin: 5,
        height: 24,
        width: 15,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    textInput: {
        width: '88%',
        padding: 10,
    },
    textDisplay: {
        marginTop: 30
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxHeight: 60,
        backgroundColor: '#757083',
        borderRadius: 2,
    },
    textButton: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    }
});

export default Start;