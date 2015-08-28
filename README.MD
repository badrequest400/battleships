#Battleships
**A simple one-sided battleships game**



##Setup

This is a project built on **Node.js**, so it needs to be installed to do anything, along with **npm**.
Back-end dependencies are managed by **npm**.

First install all back-end dependencies. Currently the project only uses one extra module for
synchronous CLI prompting. Only other dependencies are the Mocha test runner and the Chai assertion lib.

While in the project root:

```
npm install
```

A test suite has been written using **Mocha** and **Chai**. It can be run using:

```
npm test
```


**Start the game**
```
node main.js
```

The size of the board and number of ships can be configured in config.js if needed.
The game displays the initial board layout for easier testing, can be disabled in main.js.

You should be good to go, have fun!
