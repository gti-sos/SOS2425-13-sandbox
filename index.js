
const express = require('express');
const app = express();
const PORT = process.env.PORT || 16078;
const BASE_API = "/api/v1";

app.use("/", express.static("./public"));
app.use(express.json()); //Para que pueda interpretar el body de las peticiones POST

let contacts = [
    { name: "Peter",
        phone: "123456789"
    },
    { name: "Mary",
        phone: "987654321"
    }
];


app.get(BASE_API + "/contacts", (request, response) => {
    console.log("New GET to /contacts");
    
    response.send(JSON.stringify(contacts,null,2));
});

app.post(BASE_API + "/contacts", (request, response) => {
    console.log("POST to /contacts");
    let newContact = request.body;
    contacts.push(newContact);
    response.sendStatus(201);
});




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


