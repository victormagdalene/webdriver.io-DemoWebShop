export default [
    {
        path: "https://demowebshop.tricentis.com/",
        case: "Empty fields",
        gender: "male",
        firstName: { "warningKey": "requiredFirstName" },
        lastName: { "warningKey": "requiredLastName" },
        email: { "warningKey": "requiredEmail" }, //o warning key é verificado e mapeado pelo getWarningByKey em register.page.js
        password: { "warningKey": "requiredPassword" },
        confirmPassword: { "warningKey": "requiredConfirmPassword" }
    },
    {
        path: "https://demowebshop.tricentis.com/",
        case: "Fill with incorrect email",
        gender: "male",
        firstName: {"name": "Victor"},
        lastName: {"name": "Teste"},
        email: { "data": "email@", "warningKey": "invalidEmail" }, 
        password: {"data": "123456"},
        confirmPassword: {"data": "123456"}
    },
    {
        path: "https://demowebshop.tricentis.com/",
        case: "Fill with empty email",
        gender: "male",
        firstName: { "name": "Victor" },
        lastName: { "name": "Teste" },
        email: { "warningKey": "requiredEmail" }, 
        password: { "data": "123456" },
        confirmPassword: { "data": "123456" }
    },
    {
        path: "https://demowebshop.tricentis.com/",
        case: "Password <> Confirm Password",
        gender: "male",
        firstName: { "name": "Victor" },
        lastName: { "name": "Teste" },
        email: { "data": "email@email.com"}, 
        password: { "data": "123456" },
        confirmPassword: { "data": "123457" }
    },
    {
        path: "https://demowebshop.tricentis.com/",
        case: "Short password",
        gender: "male",
        firstName: { "name": "Victor" },
        lastName: { "name": "Teste" },
        email: { "data": "email@email.com"}, 
        password: { "data": "1", "warningKey": "wrongPassword" },
        confirmPassword: {}
    }
];
