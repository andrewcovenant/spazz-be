A BE service to showcase the use of NestJ, Mongoose, JWT as auth and TypeScript.

How to test:
IMPORTANT! YOU NEED TO SETUP A MONGO ACCOUNT.

1. Run npm install then npm run start:dev;
2. Use Postman to test the endpoints;

ENDPOINTS:

1. Create: localhost:3000/user (add body params, {username: 'username', password: 'password', email: 'email@email.com'})
1. Get All Users: localhost:3000/user/all
2. Get User: localhost:3000/user/:id
3. Patch User: localhost:3000/user/:id
4. Delete User: localhost:3000/user/:id

TO BE ADDED...
