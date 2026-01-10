🎭 Playwright Automation Framework.

This repository showcases end-to-end testing practices using Playwright and TypeScript. 
I use this project to practice website UI automation and apply solid test framework practices (DRY , SOC)

Inside tests folder :

-DemoBlaze test folder: Focuses on login, looping over credentials of users in JSON external data, handling Browser native Dialogs and performing assertions depending on validity of login credentials.

-todomvc test folder: Focuses on locating UI elements and performing assertions.

🚀 Click Here to View Live Allure Report
 https://porfyrosgit.github.io/Playwright-repository/
 
(report automatically updated via GitHub Actions on every push.)

🛠️ Tech Stack & Tools
Engine: Playwright (Chromium/Webkit/Firefox)
Language: TypeScript
Reporting: Allure Report 

🏗️ Framework Features
CI/CD GitHub Integration: Automated test execution on every push.
Page Object Model pattern: Lean architecture designed for maintainability and readability.
Defect Categorization: Custom Allure configuration to differentiate between Product Defects and Automation/Infrastructure Issues.

⚙️ Local Execution
Clone the repo: git clone https://github.com/porfyrosgit/Playwright-repository.git

Install dependencies: npm install

Install Browsers: npx playwright install

Run all tests: npx playwright test

View Report: npx allure serve allure-results
