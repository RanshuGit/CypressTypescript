REM install-dependencies-and-run-tests.bat

echo "Running npm install..."
npm install

echo "Running npx cypress run..."
npx cypress run

echo "Completed Cypress tests."