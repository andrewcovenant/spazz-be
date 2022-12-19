How to test:

1. Open the terminal and install nest/cli: npm install -g @nestjs/cli
2. Clone the repo and open in the code editor;
3. Run npm install then npm run start:dev;

Use Postman to test the endpoints;

Get All Users: localhost:3000/user/all
Get User: localhost:3000/user/:id

For creating a user, in PostMan add on Body (username, password, email);

Delete: Get User: localhost:3000/user/:id
Patch: Get User: localhost:3000/user/:id with (username, password, email) on body;

NOTE: The data is saved temporary on the server cache. NO DB!
