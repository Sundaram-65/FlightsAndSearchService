## Welcome to Fights Service

# Project Structure
    `-src/
        index.js //server
        models/
        controllers/
        middleware/
        services/
        utils/
        config/
    -test/ [later]
    -static/
    -temp
    `
## Project Setup
-Clone the project on your local 
-Execute `npm install` on same path of directory it will install node_modules
-Create a env file in the root directory and add the following environment variable
    -PORT=3000;
-Inside the `src/config` create a new file `config.json` and then the following piece of code-
```
    {
    "development": {
        "username": "USER_NAME",
        "password": "YOUR_DB_PASSWORD",
        "database": "Flights_Search_DB_DEV",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
    }
```
once you added your db config as listed above ,go to src folder from your terminal and execute `npx sequelize db:create`