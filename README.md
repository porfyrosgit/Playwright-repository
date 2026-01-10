🎭 Playwright Automation Framework.

This repository showcases end-to-end test automation using Playwright and TypeScript. 
>solid test framework practices (DRY , SOC).

>dynamically generated test ID in executed test methods, for potential integration with Xray test executions.

Inside tests folder :

-DemoBlaze : Focuses on login, looping over credentials of users from JSON external data, handling Browser native Dialogs and performing assertions depending on validity of login credentials.

-todomvc : Focuses on locating UI elements and performing assertions.

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
