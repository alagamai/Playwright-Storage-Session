# Test automation using Playwright + session storage -to store session info across test   

# Prerequisites

The first thing we need to do is to setup our environment. So here are some things that you should have to start this project:

VSCode: https://code.visualstudio.com/download </br>
NPM: https://www.npmjs.com/get-npm </br>
NodeJS: https://nodejs.org/en/download

# to install playwright and identify locators using test generator  
1.  sudo npm init playwright
2.  install vs code extenstion - Playwright Test for VSCode
	https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright
3.  Pick locators
    Click the "pick locator" button and hover over the browser to see the locators available. Clicking an element will store it in the locators box in VS Code. Pressing enter will save it to the clip board so you can easily paste it into your code or press the escape key to cancel.
4.  Record new tests
    Record new tests by clicking on the "record tests" button in the testing sidebar. This will open a browser window where you can navigate to a URL and perform actions on the page which will be recorded to a new test file in VS Code.
5.  Record at cursor
    This generates actions into the existing test at the current cursor position. You can run the test, position the cursor at the end of the test and continue generating the test.   	 


# how to save session across test 
1. Initialization Steps in the beforeAll Hook:

	a. The beforeAll hook initializes a browser context and a new page.

	b. It navigates to a login page and executes a login using the utils.login function.

	c. The session storage is saved using await context.storageState({ path: 'storage.json' }).

	d. A global context (webContext) is created by injecting the path to the storage state.


2. Page Setup in the beforeEach Hook:

	a. The beforeEach hook opens a new page using the global context (webContext) before each test.

	b. It accesses the page created within the webContext for subsequent test execution.



3. Login Verification in the First Test (Access Page):

	The first test, named 'access page,' verifies whether the user is logged in by checking the storage session information. This is done by confirming the presence of a welcome message.

4. Additional Tests Using the Second Test (Access Page 1):

	The second test, currently commented out, can be uncommented and utilized for running additional tests or scenarios as needed. Adjust the code within this test for specific test cases or functionalities.


# to run playwright scripts 
    add below line in package.json 
	"scripts": {
		"ui-mode": "npx playwright test --ui",
		"run-chromium": "npx playwright test --headed --project=chromium",
		"show-html-report": "sudo npx playwright show-report"
	}

# Steps to execute the test

1. Checkout the project from git
2. Navigate to the project root directory
3. To install all the project dependencies execute 
    npm install
4. To run the test execute
    sudo npm run ui-mode - to run test in interative mdoe  
    sudo npm run run-chromium - to run test in headed mode for chrome browser
    sudo npm run show-html-report - to generate html report 
    
 # Application under test 
   https://bstackdemo.com/ 
   https://demo.nopcommerce.com/

 # Screenshots
[![Test code](https://github.com/alagamai/Playwright-Storage-Session/blob/master/images/session-storage.png)]
