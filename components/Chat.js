import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat, Bubble } from "react-native-gifted-chat";

import { collection, addDoc, onSnapshot, query, where, orderBy } from "firebase/firestore";

const Chat = ({ db, route, navigation }) => {

    const { name, background, userID } = route.params;
    const [messages, setMessages] = useState([]);
    const onSend = (newMessages) => {
        addDoc(collection(db, "messages"), newMessages[0])
    }
    const renderBubble = (props) => {
        return <Bubble
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: "#0000FF"
                },
                left: {
                    backgroundColor: "#FFF"
                }
            }}
        />
    }

    useEffect(() => {
        navigation.setOptions({ title: name });
        const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
        const unsubMessages = onSnapshot(q, (documentsSnapshot) => {
            let newMsgs = [];
            documentsSnapshot.forEach(doc => {
                newMsgs.push({
                    id: doc.id, ...doc.data(),
                    createdAt: new Date(doc.data().createdAt.toMillis())
                })
            });
            setMessages(newMsgs);
        });

        return () => {
            if (unsubMessages) unsubMessages();
        }
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: background }]}>
            <GiftedChat
                messages={messages}
                renderBubble={renderBubble}
                onSend={messages => onSend(messages)}
                user={{
                    _id: userID,
                    name: name
                }}
            />
            {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Chat;

const firebaseConfig = {
    apiKey: "AIzaSyDrfYwU2cSP47v0_XDKyWwxmr9kZ8aXacs",
    authDomain: "chat-app-36570.firebaseapp.com",
    projectId: "chat-app-36570",
    storageBucket: "chat-app-36570.appspot.com",
    messagingSenderId: "1047620234027",
    appId: "1:1047620234027:web:0c7cbc89d8866a061cf36e"
};