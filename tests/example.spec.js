// @ts-check
const { test, expect } = require('@playwright/test');
// import { faker } from '@faker-js/faker';
// const { getRandomInt, login } = require('./utils');
const utils = require('./utils');

let webContext;
let webPage;

test.beforeAll(async ({ browser }) => {
	const uName = 'demo1@yopmail.com';
	const pwd = 'Pass@123';

	const context = await browser.newContext();
	const page = await context.newPage();

	await utils.login(page, uName, pwd);

	await context.storageState({ path: 'storage.json' });

	webContext = await browser.newContext({ storageState: 'storage.json' });
});

test.beforeEach(async () => {
	webPage = await webContext.newPage();
	await webPage.goto('https://demoblaze.com/');
});

test('check session info is stored across tests', async () => {
	await expect(webPage.locator('#nameofuser')).toContainText(
		'Welcome demo1@yopmail.com'
	);
	// expect(page.locator('#nameofuser')).toHaveText('Welcome');
});

// test('accesss page 1', async ({ page }) => {
// 	// await page.goto('https://demoblaze.com/');
// });
