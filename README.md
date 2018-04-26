# My App Name
Hacktivpress

## REST API

List of user routes:

Route|HTTP|Description
---|---|---
/api/users/all|GET|Get all the users
/api/users/create|POST|Create a user
/api/users/findone/:id|GET|Get a single user
/api/users/update:id|PUT|Update a user with new info
/api/users/deletes:id|DELETE|Delete a user


## Usage

With only npm :

```javascript
npm install
npm start
npm run dev
```

Access the website via `http://localhost:3000` or API via `http://localhost:3000/api`

Access the website via Heroku `https://glacial-fortress-17622.herokuapp.com/`