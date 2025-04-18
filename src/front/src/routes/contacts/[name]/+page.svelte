<script>
	//@ts-nocheck

	import { onMount } from 'svelte';
	import { Button, Table } from '@sveltestrap/sveltestrap';
	import { dev } from '$app/environment'; // Importing the dev variable to check the environment
	import { page } from '$app/stores'; // Importing the page store to access route parameters
    import { goto } from '$app/navigation'; // Importing goto for navigation
    

	let DEVEL_HOST = 'http://localhost:16078';

	let API = '/api/v1/contacts/' + $page.params.name; // Default API URL
	if (dev) {
		API = DEVEL_HOST + API; // Use development host if in development mode
	}
	let contact = {}; // Initialize contact object
	let result = '';
	let resultStatus = '';

	async function getContact() {
		resultStatus = result = '';

		try {
			const res = await fetch(API, { method: 'GET' });
			const data = await res.json();
			result = JSON.stringify(data, null, 2);

			contact = data;
			console.log(`Response received: \n${JSON.stringify(contact, null, 2)}`);
		} catch (error) {
			console.log(`ERROR getting data from ${API}: ${error}`);
		}
	}

    
    // Función para actualizar el contacto (se llama al hacer clic en el botón "Update")
    async function createContact() {
        resultStatus = result = ''; // Resetea los mensajes de estado
        console.log(`Actualizando contacto: ${JSON.stringify(contact)}`);
        try {
            const res = await fetch(API, {
                method: 'PUT', // Usa el método PUT para actualizar
                headers: {
                    'Content-Type': 'application/json' // Indica que el cuerpo es JSON
                },
                body: JSON.stringify(contact) // Envía los datos del contacto (vinculados a los inputs) en el cuerpo
            });

            if (res.ok) { // Comprueba si la actualización fue exitosa
                resultStatus = 'Success';
                result = 'Contacto actualizado correctamente.';
                console.log('Contacto actualizado correctamente');
                // Opcional: podrías volver a cargar el contacto para confirmar
                // await getContact();
            } else {
                resultStatus = 'Error';
                result = `Error actualizando el contacto: ${res.status} ${res.statusText}`;
                console.error(`Error actualizando el contacto: ${res.status} ${res.statusText}`);
            }
        } catch (error) { // Captura errores de red u otros
            resultStatus = 'Error';
            result = `Error actualizando el contacto: ${error}`;
            console.error(`ERROR enviando datos a ${API}: ${error}`);
        }
    }


	onMount(async () => {
		getContact();
	});
</script>

<h2>Contact {contact.name}</h2>

<Table hover>
	<thead>
		<tr>
			<th>Name</th>
			<th>Phone</th>
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				{contact.name} 
			</td>
			<td>
				<input bind:value={contact.phone} />
			</td>
			<td>
				<Button color="secondary" on:click={createContact}>Update</Button>
			</td>
		</tr>
	</tbody>
</Table>


<Button outline color="primary" on:click={() => goto("/contacts")}>Back to contacts</Button>
