# Bank-Dashboard-App

### Inspiration

![screen shot 2019-05-02 at 2 53 48 pm](client/src/img/dashboard.png)

### Development

![screen shot 2018-01-29 at 3 11 28 pm](https://user-images.githubusercontent.com/19230394/35532067-f07f2e12-0506-11e8-869a-4079f913a1dc.png)

### Prerequisites

Install NPM (https://www.npmjs.com/) Install Node.js
(https://nodejs.org/en/download/current/)

### Configuration

### MongoDB

Add your own MONGOURI from mLAB database in config/keys.js

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

### Plaid

Add add your own PLAID Creds to these files

1. routes/api/plaid.js

```javascript
const PLAID_CLIENT_ID = "YOUR_CLIENT_ID";
const PLAID_SECRET = "YOUR_SECRET";
const PLAID_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
```

2. client/src/components/dashboard/Accounts.js

```javascript
    <PlaidLink
              className="plaid"
              clientName="UNIBANK"
              env="sandbox"
              product={["transactions"]}
              publicKey={"PLAID_PUBLIC_KEY"}
              onExit={this.handleLogoutClick}
              onSuccess={this.handleOnSuccess}
              onScriptLoad={() => this.setState({ loaded: true })}
            >
```

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

Clone or download the project files from my repository

git clone https://github.com/BrianQMclaren/Bank-Dashboard-App

#### Run this cmd your terminal to get all of the packages for client and server

npm install && npm run client-install

#### Run client & server concurrently

npm run dev

#### Server runs on http://localhost:8080 and client on http://localhost:3000

## Built With

- [React](https://reactjs.org/docs/hello-world.html) - The javascript library
  for building user interfaces
- [Express](https://expressjs.com/) Backend JS Framework
- [Node](https://nodejs.org/en/about/) - Asynchronous event driven JavaScript runtime
- [Redux](https://redux.js.org/) Global state management
- [MongoDB](https://www.mongodb.com/) NoSQL Database
- [d3](https://d3js.org/) - Data driven documents
- [Plaid](https://plaid.com/) for bank transaction data
- [Jest](https://facebook.github.io/jest/) - Test javascript code including
  react apps
- [Babel](http://babeljs.io/) - Javascript complier

## Authors

- **Brian McLaren**

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details
