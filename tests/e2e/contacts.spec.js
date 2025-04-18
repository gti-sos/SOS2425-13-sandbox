// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('localhost:16078');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Contact Manager/);
});




test('get contacts link', async ({ page }) => {
  await page.goto('http://localhost:16078'); // Update to the correct URL for the contact manager

  // Click the link to view contacts.
  await page.getByRole('link', { name: 'Contacts' }).click(); // Assuming there's a link to view contacts

  // Expects page to have a heading with the name of Contact List.
  await expect(page).toHaveTitle(/Contact list/);
});


test('create and delete contacts', async ({ page }) => {

  const testName = "__TEST_NAME__";
  const testPhone = "123456789";


  await page.goto('http://localhost:16078'); 

  
  await page.getByRole('link', { name: 'Contacts' }).click(); 

  
  await page.getByRole('textbox').nth(0).fill(testName); // Assuming the first textbox is for the name
  await page.getByRole('textbox').nth(1).fill(testPhone); // Assuming the second textbox is for the phone number
  await page.getByRole('button', { name: 'Create contact' }).click(); // Assuming there's a button to create the contact

  // Wait for the contact to be created and visible in the list
  const contactRow = page.locator('tr', { hasText: testName });
  await expect(contactRow).toContainText(testPhone);

  // Delete the contact
  const deleteButton = contactRow.getByRole('button', { name: 'Delete' });
  await deleteButton.click();
  await expect(contactRow).toHaveCount(0); // Ensure the contact is deleted

});
