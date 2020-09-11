export const environment = {
    production: false,
    apiBaseUrl: "https://qbotdeploymentpanchamsp.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "da47b64e-6c7b-47df-85bb-28e857716611",
        clientId: "b3736df7-92ad-4209-8b0e-98b9d272a0c2",
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
