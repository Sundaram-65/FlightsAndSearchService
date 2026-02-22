/
    -src/
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

## Project Setup
1.Clone the project on your local 
2.Execute `npm install` on same path of directory it will install node_modules
3.Create a env file in the root directory and add the following environment variable
    -PORT=3000;
4.Inside the `src/config` create a new file `config.json` and then the following piece of code-
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