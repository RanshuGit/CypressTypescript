REM install-dependencies-and-run-tests.bat

echo "Running npm install..."
npm install

echo "Running npx cypress run..."
npm run cypress:run

echo "Completed Cypress tests."