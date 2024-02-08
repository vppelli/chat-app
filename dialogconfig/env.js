// env.js
export const dialogflowConfig = {
    type: `${process.env.DIALOGFLOW_TYPE}`,
    project_id: `${process.env.DIALOGFLOW_PROJECT_ID}`,
    private_key_id: `${process.env.DIALOGFLOW_PRIVATE_KEY_ID}`,
    private_key: `${process.env.DIALOGFLOW_PRIVATE_KEY}`,
    client_email: `${process.env.DIALOGFLOW_CLIENT_EMAIL}`,
    client_id: `${process.env.DIALOGFLOW_CLIENT_ID}`,
    auth_uri: `${process.env.DIALOGFLOW_AUTH_URI}`,
    token_uri: `${process.env.DIALOGFLOW_TOKEN_URI}`,
    auth_provider_x509_cert_url: `${process.env.DIALOGFLOW_AUTH_PROVIDER_X509_CERT_URL}`,
    client_x509_cert_url: `${process.env.DIALOGFLOW_CLIENT_X509_CERT_URL}`,
    universe_domain: `${process.env.DIALOGFLOW_UNIVERSE_DOMAIN}`
};