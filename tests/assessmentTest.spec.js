//import data from json file
import data from './signin.json'

// @test 0
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://qa-assessment.pages.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('User Profile Creation');
});


//Successful signin

test('sucessful signin', async ({ page }) => {

  //goto thewebsite
  await page.goto('https://qa-assessment.pages.dev/');
  await page.getByLabel('First Name (mandatory):').click();
  //fill the firstname
  await page.getByLabel('First Name (mandatory):').fill(data.firstName);
  await page.getByLabel('Last Name (mandatory):').click();
  //fill the last name
  await page.getByLabel('Last Name (mandatory):').fill(data.lastname);
  await page.getByLabel('Email (mandatory):').click();
  //fill the email
  await page.getByLabel('Email (mandatory):').fill(data.email);
  await page.getByLabel('Password (mandatory):', { exact: true }).click();
  //fill the password
  await page.getByLabel('Password (mandatory):', { exact: true }).fill(data.password);
  await page.getByLabel('Confirm Password (mandatory):').click();
  //fill the confirm password
  await page.getByLabel('Confirm Password (mandatory):').fill(data.confirmPassword);
  //select the gender
  await page.getByLabel('Female').check();
  //fill the birthdate
  await page.getByLabel('Date ofBirth (optional):').fill(data.birthdate);
  await page.getByLabel('Phone Number (optional):').click();
  // fill the phone number
  await page.getByLabel('Phone Number (optional):').fill(data.phone);
  await page.getByLabel('Address (optioal):').click();
  // fill the address
  await page.getByLabel('Address (optioal):').fill(data.address);
  await page.getByLabel('LinkedIn URL (optional):').click();
  // fill the linkedIn link
  await page.getByLabel('LinkedIn URL (optional):').fill(data.linkedinUrl);
  await page.getByLabel('GitHub URL (optional):').click();
  //fill the github link
  await page.getByLabel('GitHub URL (optional):').fill(data.github);
  // click on the button to submit the form
  await page.getByRole('button', { name: 'Submit' }).click();
});

//unsucessful signin because password do not match
test('Unsucessful Sign in because passwords do not match', async ({ page }) => {
  await page.goto('https://qa-assessment.pages.dev/');
  await page.getByLabel('First Name (mandatory):').click();
  await page.getByLabel('First Name (mandatory):').fill(data.firstName);
  await page.getByLabel('Last Name (mandatory):').click();
  await page.getByLabel('Last Name (mandatory):').fill(data.lastname);
  await page.getByLabel('Email (mandatory):').click();
  await page.getByLabel('Email (mandatory):').fill(data.email);
  await page.getByLabel('Password (mandatory):', { exact: true }).click();
  await page.getByLabel('Password (mandatory):', { exact: true }).fill(data.password);
  await page.getByLabel('Confirm Password (mandatory):').click();
  await page.getByLabel('Confirm Password (mandatory):').fill('dada');
  await page.getByLabel('Female').check();
  await page.getByLabel('Date ofBirth (optional):').fill(data.birthdate);
  await page.getByLabel('Phone Number (optional):').click();
  await page.getByLabel('Phone Number (optional):').fill(data.phone);
  await page.getByLabel('Address (optioal):').click();
  await page.getByLabel('Address (optioal):').fill(data.address);
  await page.getByLabel('LinkedIn URL (optional):').click();
  await page.getByLabel('LinkedIn URL (optional):').fill(data.linkedinUrl);
  await page.getByLabel('GitHub URL (optional):').click();
  await page.getByLabel('GitHub URL (optional):').fill(data.github);
  await page.getByRole('button', { name: 'Submit' }).click();

  // Expect an error message contain "Passwords do not match"
 
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});

    expect(dialog).toHaveText('Passwords do not match');
  });
});


test('Verify if linkedin is optional', async ({ page }) => {

  //goto thewebsite
  await page.goto('https://qa-assessment.pages.dev/');
  await page.getByLabel('First Name (mandatory):').click();
  //fill the firstname
  await page.getByLabel('First Name (mandatory):').fill(data.firstName);
  await page.getByLabel('Last Name (mandatory):').click();
  //fill the last name
  await page.getByLabel('Last Name (mandatory):').fill(data.lastname);
  await page.getByLabel('Email (mandatory):').click();
  //fill the email
  await page.getByLabel('Email (mandatory):').fill(data.email);
  await page.getByLabel('Password (mandatory):', { exact: true }).click();
  //fill the password
  await page.getByLabel('Password (mandatory):', { exact: true }).fill(data.password);
  await page.getByLabel('Confirm Password (mandatory):').click();
  //fill the confirm password
  await page.getByLabel('Confirm Password (mandatory):').fill(data.confirmPassword);
  //select the gender

  // do not enter the linkedIn link and click on the button to submit the form
  await page.getByRole('button', { name: 'Submit' }).click();

  // expect the form will be submitted with success and the page reload
  await expect(page).goto('https://qa-assessment.pages.dev/');
});

/*test('Successful signin', async ({ page }) => {

await page.goto('https://qa-assessment.pages.dev/');
await page.getByTestId('#firstname').click();
await page.getByTestId('#firstname').fill(data.firstName);
await page.getByTestId('#lastName').click();
await page.getByTestId('#lastName').fill(data.lastname);
await page.getByTestId('#email').click();
await page.getByTestId('#email').fill(data.email);
await page.getByTestId('#password').click();
await page.getByTestId('#password').fill(data.password);
await page.getByTestId('#confirmPassword').fill(data.password);
await page.getByLabel('Female').check();
await page.getByTestId('#dob').fill(data.birthdate);
await page.getByTestId('#phone').click();
await page.getByTestId('#phone').fill(data.phone);
await page.getByTestId('#address').click();
await page.getByTestId('#address').fill(data.address);
await page.getByTestId('#linkedIn').click();
await page.getByTestId('#linkedIn').fill(data.linkedinUrl);
await page.getByTestId('#github').click();
await page.getByTestId('#github').fill(data.github);
await page.getByLabel('Submit').click();


await expect(page).goto('https://qa-assessment.pages.dev/');
})*/

