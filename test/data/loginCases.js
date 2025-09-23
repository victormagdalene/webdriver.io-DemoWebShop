export default [
    {
        path: "https://demowebshop.tricentis.com/",
        case: "Empty fields",
        firstName: { "warningKey": "requiredFirstName" },
        lastName: { "warningKey": "requiredLastName" },
        email: { "warningKey": "requiredEmail" }, //o warning key é verificado e mapeado pelo getWarningByKey em register.page.js
        password: { "warningKey": "requiredPassword" },
        confirmPassword: { "warningKey": "requiredConfirmPassword" }
    }
];
