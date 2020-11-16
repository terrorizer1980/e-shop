# e-shop
An e-commerce site selling personal ev wheels with admin management functionality.

- [Client side](https://github.com/VanVDC/e-shop/tree/main/frontend)

#### Server with Node js

- Express backend fremework
- Use MongoDB for database
- REST API for authentication, authorization, and registration

#### Instructions:

- Clone with HTTPS

```
git clone: https://github.com/VanVDC/e-shop.git
```

- `npm install`
- Create an `.env` files for server.
- Create a mongoDB account and get the link
- add add mongoDB url in the env file

```
MONGO_URL=your-key-here
```
-create a paypal account and get the id
```
PAYPAL_CLIENT_ID=your-id-here
```

- `npm dev` to start the client and server together
- Visit `localhost:3000`

#### Built With:
- [Node](https://nodejs.org/en/)
- [Express](https://github.com/expressjs/express)
- [Paypal](https://developer.paypal.com/home/)

#### Demo:

- [Demo](https://evwheels.herokuapp.com/)
- Login

```
user: tom@gmail.com
pass: 123456
```
