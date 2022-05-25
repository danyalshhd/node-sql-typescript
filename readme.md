# API Demo

Postman collection attached with sample body by the name Babbel.postman_collection.json on root folder

# How to run

```
$ npm install
$ npm run dev # run for developer
$ npm run build # run build for production
$ npn run test # test the routes
```

# Deploy

```
$ npm run build
```

- Copy folder dist to server

```
$ node dist/index.js
```

- Use can using pm2 start for background
