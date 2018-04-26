# My App Name
Hacktivpress

## REST API

List of user routes:

Route|HTTP|Description
---|---|---
/api/users/all|GET|Get all the users
/api/users/register|POST|Register a user
/api/users/signin|POST|Login a user
/api/users/findone/:id|GET|Get a single user
/api/users/deletes:id|DELETE|Delete a user


List of article routes:

Route|HTTP|Description
---|---|---
/api/articles/all|GET|Get all the articles
/api/articles/create|POST|Create a article
/api/articles/findone/:id|GET|Get a single article
/api/articles/update:id|PUT|Update a article with new info
/api/articles/deletes:id|DELETE|Delete a article


## Usage

With only npm :

```javascript
npm install
npm start
npm run dev
```

Access the website via `http://localhost:3000` or API via `http://localhost:3000/api`

Access the website via Heroku `https://glacial-fortress-17622.herokuapp.com/`