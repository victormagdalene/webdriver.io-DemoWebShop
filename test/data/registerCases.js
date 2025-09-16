export default [
    {
        path: "https://demowebshop.tricentis.com/",
        case: "Incorrect email",
        gender: "male",
        firstName: "Victor",
        lastName: "Rico",
        email: { "data": "email@", "warningKey": "invalidEmail" }, //o warning key é verificado e mapeado pelo getWarningByKey em register.page.js
        password: "123456",
        confirmPassword: "123456"
    },
    {
        path: "https://demowebshop.tricentis.com/",
        case: "Empty email",
        gender: "male",
        firstName: "Victor",
        lastName: "Rico",
        email: { "data": "", "warningKey": "requiredEmail" }, //o warning key é verificado e mapeado pelo getWarningByKey em register.page.js
        password: "123456",
        confirmPassword: "123456"
    },
    {
        path: "https://demowebshop.tricentis.com/",
        case: "ConfirmPassword <> Password",
        gender: "male",
        firstName: "Victor",
        lastName: "Rico",
        email: { "data": "email@email.com", "warningKey": "matchConfirmPassword" }, //o warning key é verificado e mapeado pelo getWarningByKey em register.page.js
        password: "123456",
        confirmPassword: "123457"
    }
];
