// dialogConfig.js

export const dialogflowConfig = {
    type: "service_account",
    project_id: "chat-app-36570",
    private_key_id: process.env.EXPO_PUBLIC_DIALOGFLOW_PRIVATE_KEY_ID,
    private_key: process.env.EXPO_PUBLIC_DIALOGFLOW_PRIVATE_KEY,
    client_email: process.env.EXPO_PUBLIC_DIALOGFLOW_CLIENT_EMAIL,
    client_id: process.env.EXPO_PUBLIC_DIALOGFLOW_CLIENT_ID,
    auth_uri: process.env.EXPO_PUBLIC_DIALOGFLOW_AUTH_URI,
    token_uri: process.env.EXPO_PUBLIC_DIALOGFLOW_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.EXPO_PUBLIC_DIALOGFLOW_AUTH_PX509_CERT_URL,
    client_x509_cert_url: process.env.EXPO_PUBLIC_DIALOGFLOW_CLIENT_X509_CERT_URL,
    universe_domain: "googleapis.com"
};