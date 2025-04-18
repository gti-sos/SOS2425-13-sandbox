<svelte:head>
	<title>Contact list</title>
</svelte:head>

<script>
	//@ts-nocheck
	//@ts-ignore
	import { onMount } from 'svelte';
	import { Button, Table } from '@sveltestrap/sveltestrap';
	import { dev } from '$app/environment'; // Importing the dev variable to check the environment

	let DEVEL_HOST = 'http://localhost:16078';

	let API = '/api/v1/contacts'; // Default API URL
	if (dev) {
		API = DEVEL_HOST + API; // Use development host if in development mode
	}
	let contacts = [];
	let result = '';
	let resultStatus = '';
	let newContactName; // Variable to hold the new contact name
	let newContactPhone; // Variable to hold the new contact phone

	async function getContacts() {
		resultStatus = result = '';

		try {
			const res = await fetch(API, { method: 'GET' });
			const data = await res.json();
			result = JSON.stringify(data, null, 2);

			contacts = data; // Assigning the fetched data to contacts
			console.log(`Response received: \n${JSON.stringify(contacts, null, 2)}`);
		} catch (error) {
			console.log(`ERROR getting data from ${API}: ${error}`);
		}
	}

	async function deleteContact(name) {
		resultStatus = result = '';

		try {
			const res = await fetch(API + '/' + name, { method: 'DELETE' });

			const status = await res.status;
			resultStatus = status;
			if (status == 200) {
				console.log(`Contact ${name} deleted successfully`);
				getContacts(); // Refresh the contact list after deleting a contact
			} else {
				console.log(`Failed to delete contact ${name}: status received\n${status}`);
			}
		} catch (error) {
			console.log(`ERROR getting data from ${API}: ${error}`);
		}
	}

	async function createContact() {
		resultStatus = result = '';

		try {
			const res = await fetch(API, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: newContactName,
					phone: newContactPhone
				})
			});
			const status = await res.status;
			resultStatus = status;
			if (status == 201) {
				console.log(`Contact created successfully`);
				getContacts(); // Refresh the contact list after creating a new contact
			} else {
				console.log(`Failed to create contact: \n${status}`);
			}
		} catch (error) {
			console.log(`ERROR getting data from ${API}: ${error}`);
		}
	}

	onMount(async () => {
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
		<tr>
			<td>
				<input bind:value={newContactName} />
			</td>
			<td>
				<input bind:value={newContactPhone} />
			</td>
			<td>
				<Button color="primary" on:click={createContact}>Create contact</Button>
			</td>
		</tr>
		{#each contacts as contact}
			<tr>
				<td><a href="/contacts/{contact.name}">{contact.name}</a></td>
				<td>{contact.phone}</td>
				<td>
					<Button
						color="danger"
						on:click={() => {
							deleteContact(contact.name);
						}}>Delete</Button
					>
				</td>
			</tr>
		{/each}
	</tbody>
</Table>

<Button color="primary" on:click={getContacts}>Get contacts</Button>
