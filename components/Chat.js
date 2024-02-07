import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat, Bubble, InputToolbar } from "react-native-gifted-chat";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dialogflow_V2 } from 'react-native-dialogflow';


import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";

const Chat = ({ db, route, navigation, isConnected }) => {

    const { name, background, userID } = route.params;
    const [messages, setMessages] = useState([]);

    const onSend = (newMessages) => {
        addDoc(collection(db, "messages"), newMessages[0])
        const userMessage = newMessages[0].text;
        Dialogflow_V2.requestQuery(
            userMessage,
            result => {
                // Handle chatbot response
                const chatbotResponse = result.queryResult.fulfillmentText;
                // Add the chatbot's response to the chat interface
                const botMessage = {
                    _id: Math.random().toString(36).substring(7),
                    text: chatbotResponse,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'Chatbot',
                        avatar: "https://cdn3.vectorstock.com/i/1000x1000/31/67/robot-icon-bot-sign-design-chatbot-symbol-vector-27973167.jpg"
                    },
                };
                setMessages(previousMessages => GiftedChat.append(previousMessages, [botMessage]));
            }
        );
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