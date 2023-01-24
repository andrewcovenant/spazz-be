A BE service to showcase the use of NestJ, Mongoose, JWT as auth and TypeScript.

How to test:
IMPORTANT! YOU NEED TO SETUP A MONGO ACCOUNT.

1. Run npm install then npm run start:dev;
2. Use Postman to test the endpoints;

Get All Users: localhost:3000/user/all
Get User: localhost:3000/user/:id
Patch User: localhost:3000/user/:id
Delete User: localhost:3000/user/:id

For creating a user, in PostMan add on Body (username, password, email);

Delete: Get User: localhost:3000/user/:id
Patch: Get User: localhost:3000/user/:id with (username, password, email) on body;
