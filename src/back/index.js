const BASE_API = "/api/v1";
import dataStore from "nedb";


let db = new dataStore();


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

//para que te devuelva todos los datos
db.find({});

//para devolver todos los objetos que tengan el atributo name igual a pablo
db.find({name: "pablo"});

db.find({},(err, contacts)=>{
    if(contacts.length < 1){ //Cero contactos, db vacia
         db.insert(initialContacts);

    }
}
    );



function loadBackend(app){
    app.get(BASE_API+"/contacts",(request,response)=>{
        console.log("New GET to /contacts");
        response.send(JSON.stringify(contacts,null,2));

        db.find({},(err, contacts)=>{
           response.send(JSON.stringify(contacts.map((c)=> delete c._id),null,2));
            
        });
    });
    
    app.post(BASE_API+"/contacts",(request,response)=>{
    
        console.log("POST to /contacts");
        console.log(`<${request.body}>`);
    
        let newContact = request.body;
        
        contacts.push(newContact);
    
        response.sendStatus(201);
    });
        
}


app.delete(BASE_API+"/contacts/:name",(request,response)=>{
    let name = request.params.name;
    console.log(`DELETE to /contacts/${name}`);
    
    db.remove({name:name},{},(err,numRemoved)=>{    
        /*ese {} del medio es para una config especial de borrado (a buscar)
            err = apunta a cualquier error que se puede dar

        */
       if(err){
           console.error("Error removing contact",err);
           response.sendStatus(500).send("Internal server error");
       }else{
           if(numRemoved >= 1){
            response.sendStatus(200).send("Contact removed");
           }else{
               response.sendStatus(404).send("Contact not found");
           }
       }    
    }); 
});
    


app.get("/docs",(request,response)=>{
    response.redirect("https://documenter.getpostman.com/view/15596441/TzJx9G5N"); //TODO: Cambiar a la URL de la documentación
});



export { loadBackend };
    