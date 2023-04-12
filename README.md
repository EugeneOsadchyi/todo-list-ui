# Todo List Application (frontend)

## Application consists of
- [Backend NodeJS application](https://github.com/EugeneOsadchyi/todo-list-backend)
- [Frontend React application (this repository)](https://github.com/EugeneOsadchyi/todo-list-ui)

## Pre-requirements
- Postgres
- NodeJS (19.7 is currently used). [Check how to install](https://asdf-vm.com/)

## Installation instructions
1. Make sure that the [backend](https://github.com/EugeneOsadchyi/todo-list-backend) is up and running.
  **PS:** If it runs not at `http://localhost:4000` configure `REACT_APP_BASE_URL` environment variable with a correct endpoint (e.g. `REACT_APP_BASE_URL=https://todo.moneys-club.pp.ua`)
2. Install the dependencies
    ```sh
    npm install
    ```
3. Start application
    ```sh
    npm start
    ```
