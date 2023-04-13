# Todo List Application (frontend)

## Demo
https://todo.moneys-club.pp.ua

## Application consists of
- [Backend NodeJS application](https://github.com/EugeneOsadchyi/todo-list-backend)
- [Frontend React application (this repository)](https://github.com/EugeneOsadchyi/todo-list-ui)

## Pre-requirements
- Postgres
- NodeJS (19.7 is currently used). [Check how to install](https://asdf-vm.com/)

## Installation instructions
1. Make sure that the [backend](https://github.com/EugeneOsadchyi/todo-list-backend) is up and running.<br/>
  **PS:** If it runs not at `http://localhost:4000` configure `REACT_APP_BASE_URL` environment variable with a correct endpoint (e.g. `REACT_APP_BASE_URL=https://todo.moneys-club.pp.ua`)
2. Install the dependencies
    ```sh
    npm install
    ```
3. Start application
    ```sh
    npm start
    ```

## TODOs
- [ ] Review and refactor components
- [ ] Think of the better way to filter items (maybe stop doing filtering on the backend)
- [ ] Maybe save the value of the filter somewhere in the `localstorage` to make it persistent
- [x] Make it running at https://todo.moneys-club.pp.ua
