const { test, expect } = require('@playwright/test');

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

async function login(page, uName, pwd) {
	await page.goto('https://demoblaze.com/');
	await page.locator('#login2').click();
	await page.locator('#loginusername').fill(uName);
	await page.locator('#loginpassword').fill(pwd);
	await page
		.locator(
			'#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
		)
		.click();
	await expect(page.locator('#nameofuser')).toContainText(
		'Welcome demo1@yopmail.com'
	);
}

// Export both functions together
module.exports = {
	getRandomInt,
	login,
};
