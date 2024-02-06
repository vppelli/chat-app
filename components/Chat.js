import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat, Bubble, InputToolbar } from "react-native-gifted-chat";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";

const Chat = ({ db, route, navigation, isConnected }) => {

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
    const renderInputToolbar = (props) => {
        if (isConnected === true) return <InputToolbar {...props} />;
        else return null;
    }

    const cacheMsgData = async (msgsToCache) => {
        try {
            await AsyncStorage.setItem("message_data", JSON.stringify(msgsToCache));
        } catch (error) {
            console.log(error.message);
        }
    }

    const loadCachedMsg = async () => {
        const cachedMsgs = await AsyncStorage.getItem("message_data") || [];
        setMessages(JSON.parse(cachedMsgs));
    }

    useEffect(() => {
        navigation.setOptions({ title: name });

        let unsubMessages;
        if (isConnected === true) {
            if (unsubMessages) unsubMessages();
            unsubMessages = null;

            const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
            unsubMessages = onSnapshot(q, (documentsSnapshot) => {
                let newMsgs = [];
                documentsSnapshot.forEach(doc => {
                    newMsgs.push({
                        id: doc.id, ...doc.data(),
                        createdAt: new Date(doc.data().createdAt.toMillis())
                    })
                });
                cacheMsgData(newMsgs);
                setMessages(newMsgs);
            });
        } else loadCachedMsg();

        return () => {
            if (unsubMessages) unsubMessages();
        }
    }, [isConnected]);

    return (
        <View style={[styles.container, { backgroundColor: background }]}>
            <GiftedChat
                messages={messages}
                renderBubble={renderBubble}
                renderInputToolbar={renderInputToolbar}
                onSend={messages => onSend(messages)}
                user={{
                    _id: userID,
                    name: name
                }}
            />
            {Platform.OS === "android" ? <KeyboardAvoidingView behavior="height" /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Chat;