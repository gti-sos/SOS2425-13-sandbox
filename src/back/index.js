const BASE_API = "/api/v1";
import dataStore from "nedb";


let db = new dataStore();

//En lenguaje de base de datos: objeto = documento = cosa entre llaves
let initialContacts = [
    {
        name: "peter",
        phone: 123456
    },
    {
        name: "pablo",
        phone: 789654
    }
];

 
// Nota importante: 
/*
para devolver todos los objetos que tengan el atributo name igual a pablo
Pero, esto así no funciona. El metodo .find() necesita obligatoriamente una funcion callback 
Esto es ilustrativo solamente
*/
//db.find({name: "pablo"});

//Si no hay errores y si no hay datos dentro, mete el array de arriba (tambien puedes meter un objeto solo)
db.find({},(err, contacts)=>{
    if(contacts.length < 1){ //Cero contactos, db vacia
         db.insert(initialContacts);

    }
});



function loadBackend(app){
    app.get(BASE_API+"/contacts",(request,response)=>{
        console.log("New GET to /contacts");

       

        db.find({},(err, contacts)=>{
           response.send(JSON.stringify(contacts.map((c)=> {
            delete c._id;
            return c;
           }),null,2));
            
        });
    });
    
    app.post(BASE_API+"/contacts",(request,response)=>{
    
        console.log("POST to /contacts");
        console.log(`<${request.body}>`);
    
        let newContact = request.body;
        
       db.insert(newContact);
    
        response.sendStatus(201);
    });
        

    app.get(BASE_API+"/contacts/:name",(request,response)=>{
        let name = request.params.name;
        console.log(`GET to /contacts/${name}`);
       
        db.find({name},(err, contacts)=>{
           let contact = contacts[0];
            delete contact._id;
            response.json(contact);
            
        });
    });


    app.delete(BASE_API+"/contacts/:name",(request,response)=>{
        
        
        let name = request.params.name;
        console.log(`DELETE to /contacts/ ${name}`);

       db.remove( {"name": name}, {}, (err, numRemoved) => {
            if (err){
                response.status(500).send("Error code 01: "+err); //Puedo concatenar el mensaje de error
            }else{
                if(numRemoved > 0){
                    response.sendStatus(200); //OK
                }else{
                    response.sendStatus(404); //No encontrado
                }
            }
            });
        });

        app.put(BASE_API + "/contacts/:name", (request, response) => {
            const name = request.params.name;
            const updatedContact = request.body;
            console.log(`PUT to /contacts/${name}`);
        
            db.update({ name: name }, { $set: updatedContact }, {}, (err, numReplaced) => {
                if (err) {
                    response.status(500).send("Error actualizando el contacto: " + err);
                } else if (numReplaced === 0) {
                    response.sendStatus(404); // No encontrado
                } else {
                    response.sendStatus(200); // OK
                }
            });
        });
        
    //Acceso a la documentacion de la API (en postman)

    app.get(BASE_API + "/docs",(request,response)=>{

    response.redirect("https://documenter.getpostman.com/view/14944672/2sAYkLoHo5");
    });
}



export { loadBackend };
    