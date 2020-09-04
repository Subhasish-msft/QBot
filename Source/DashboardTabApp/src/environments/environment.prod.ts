export const environment = {
    production: false,
    apiBaseUrl: "https://qbotdeploymentchaturthasp.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "da47b64e-6c7b-47df-85bb-28e857716611",
        clientId: "b3fc183c-8d00-41eb-b0a8-5d24cefe8b51",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
