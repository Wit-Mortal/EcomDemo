Prerequisites:-
Node.js (version >= 14.x.x)
npm (Node Package Manager)
1. Install Node.js and npm
If you don't have Node.js and npm installed, follow these steps:

For Windows
Download the latest stable version of Node.js from nodejs.org.
Run the installer and follow the installation steps.
Once installed, verify your Node.js and npm versions by running the following commands in your terminal:

cmd: node -v
cmd: npm -v

2. Install the Packages 
cmd: npm i

3. Run the Script 
cmd: npx wdio run wdio.conf.js

4. To Open the Allure Report after the Execution(Allure should be installed)
cmd: npx allure generate allure-results --clean
cmd: npx allure serve allure-results