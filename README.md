[<picture><source media="(prefers-color-scheme: dark)" srcset="https://github.com/vppelli/Vppelli/blob/main/img/CHATAPP.png"><source media="(prefers-color-scheme: light)" srcset="https://github.com/vppelli/Vppelli/blob/main/img/LCHATAPP.png"><img alt="ChatApp link" src="https://github.com/vppelli/Vppelli/blob/main/img/CHATAPP.png">
</picture>](https://github.com/vppelli/chat-app)

# Description
The Chat App lets users chat with others. Users can send images, take photos, send their location, and talk to a chatbot. Using Firebase to store messages, and images, while using Dialogflow for the in-app chatbot.

## Objective
To build a chat app for mobile devices using React Native. The app will
provide users with a chat interface and options to share images and their
location.

### Case Study
https://vppelli.github.io/portfolio-website/chat-app.html

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
> Step by step on how to set up and run the chat app.
- Download the project or Clone this repository.
- Make sure you have **Node.js** installed on terminal
- Install **Expo** globally on terminal
- Inside the terminal navigate to the project folder and install all dependencies `npm install`
- Starting up the Chat app
> Both Firebase and Dialogflow use Google
  - Create a Firebase Account and setup
  - Create a Dialogflow Account and setup
  - Acquire the keys to both
  - Make sure Firebase you `allow read, write:` **true**
- Adding your Firebase and Dialogflow keys into Project
> I am using the Environment variables ( .env ) file.
> **Environment variables in Node are used to store sensitive data such as passwords, API credentials, and other information that should not be written directly in code.**
> To use this create a .env file to store your Keys, **Make sure** you have it in the root of the project. Use Correct Naming `EXPO_PUBLIC_` must go in front of [NAME]="SecretAPIkey"
  - Location for FirebaseConfig in [App.js](https://github.com/vppelli/chat-app/blob/main/App.js#L47)
  <img src="https://github.com/vppelli/chat-app/blob/main/img/firebaseconfig.png">
  
  - Location for DialogflowConfig in [dialogConfig.js](https://github.com/vppelli/chat-app/blob/main/dialogConfig.js#L3)
  <img src="https://github.com/vppelli/chat-app/blob/main/img/dialogflowconfig.png">
  
- Lunching Chat App
  - Download **Expo Go** on your mobile device
  - Create an Account to use
  - Make sure you are on the same network connection as the Hosted app
  - Inside the terminal navigate to the project folder
  - type `npx expo start` This will start the app
  - Inside the Expo Go app you should see your app, Click it to view it!
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

## Links
Expo: https://expo.dev

Firebase: https://firebase.google.com

Dialogflow: https://cloud.google.com/dialogflow?hl=en

[![To The Top](https://img.shields.io/badge/To_the_Top-Clickme-white?style=for-the-badge)](https://github.com/vppelli/chat-app?tab=readme-ov-file#description)
