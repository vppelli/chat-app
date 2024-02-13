[![ChatApp](https://github.com/vppelli/Vppelli/blob/main/img/CHATAPP.png)](https://github.com/vppelli/Vppelli/blob/main/img/CHATAPP.png)

# Description
The Chat App lets users chat with others. Users can send images, take photos, send their location, and talk to a chat bot. Using Firebase to store messages, and images, while using Dialogflow for the in app chat bot.

## Objective
To build a chat app for mobile devices using React Native. The app will
provide users with a chat interface and options to share images and their
location.

## Table of Content
- [Project Setup](#setup)
- [Used](#used)
- [Dependencies](#dependencies)

# ChatApp Demo
<div aline="center">
  <img src="https://github.com/vppelli/chat-app/blob/main/img/Chatbot-talk.gif" width="250"> <img src="https://github.com/vppelli/chat-app/blob/main/img/Oranges.gif" width="250"> <img src="https://github.com/vppelli/chat-app/blob/main/img/Location.gif" width="250">
</div>

## Future Features
- The ability to record and play sounds.
- The ability to upload the audio file.
- The ability to send the audio file.

## Setup
> Step by step on how to setup and run chat app.
- Download the project or Clone this repository.
- Make sure you have **Node.js** installed on terminal
- Install **Expo** globally on terminal
- Inside the terminal navigate to project folder and install all dependencies `npm install`
- Starting up the Chat app
> Both Firebase and Dialogflow use Google
  - Create Firebase Account and setup
  - Create Dialogflow Account and setup
  - Aquire the keys for both
  - Make sure Firebase you `allow read, write:` **ture**
- Adding your Firebase and Dialogflow keys into Project
> I am using Environment variables ( .env ) file.
> **Environment variables in Node are used to store sensitive data such as passwords, API credentials, and other information that should not be written directly in code.**
> To use this create a .env file to store your Keys, **Make sure** you have it in the root of project. Use Correct Naming `EXPO_PUBLIC_` must go infront of [NAME]="SecretAPIkey"
  - Location for FirebaseConfig in [App.js](https://github.com/vppelli/chat-app/blob/main/App.js#L47)
  <img src="https://github.com/vppelli/chat-app/blob/main/img/firebaseconfig.png">
  
  - Location for DialogflowConfig in [dialogConfig.js](https://github.com/vppelli/chat-app/blob/main/dialogConfig.js#L3)
  <img src="https://github.com/vppelli/chat-app/blob/main/img/dialogflowconfig.png">
  
- Lunching Chat App
  - Download **Expo Go** on your mobile device
  - Create a Account to use
  - Make sure you are on the same network connection as the Hosted app
  - Inside the terminal navigate to project folder
  - type `npx expo start` This will start the app
  - Inside the Expo Go app you should see your app, Click it to view!
## Used
- React Native
- JavaScript
- CSS
- Gifted Chat
- Google Dialogflow
- Google Firebase
- AsyncStorage offline usage

## Dependencies
- async-storage
- netinfo
- expo
- firebase
- react
- react-native
- dialogflow
- gifted-chat
- maps

[![To The Top](https://img.shields.io/badge/To_the_Top-Clickme-white?style=for-the-badge)](https://github.com/vppelli/chat-app?tab=readme-ov-file#description)
