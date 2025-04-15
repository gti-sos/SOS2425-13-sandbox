<script>
    //@ts-nocheck
    //@ts-ignore
    import { onMount } from 'svelte';
    import { Button, Table } from '@sveltestrap/sveltestrap'; 
    import { dev } from '$app/environment'; // Importing the dev variable to check the environment

    let DEVEL_HOST = 'http://localhost:16078';
    let PROD_HOST = 'https://api.example.com/contacts'; // Replace with your production API URL
    let API = "/api/v1/contacts"; // Default API URL
    if(dev) {
        API = DEVEL_HOST + API; // Use development host if in development mode
    } else {
        API = PROD_HOST; // Use production host if not in development mode
    }

    let contacts = [];
    let result = "";
    let resultStatus = "";

    async function getContacts() {
        resultStatus = result = "";
        

        try {
            const res = await fetch(API, {method: 'GET'});  
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            
            
            contacts = data; // Assigning the fetched data to contacts
            console.log(`Response received: \n${JSON.stringify(contacts, null, 2)}`);
            
            

        } catch (error) {
            console.log(`ERROR getting data from ${API}: ${error}`);
        }
        }
    onMount(async() => {
        getContacts();
    });
</script>

<h2>Contact List</h2>

<Table hover>
    <thead>
        <tr>
            
            <th>Name</th>
            <th>Phone</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {#each contacts as contact}
            <tr>
                
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td></td>
            </tr>
        {/each}
    </tbody>
</Table>

<Button color="primary">Primary</Button>