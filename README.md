# LAB - Class 02

## Project: Notesy

### Author: Davee Sok

### Links and Resources

- [Lab 2 Pull Request](https://github.com/davee-401-advanced-javascript/notes/pull/2)
- [Lab 3 Pull Request](https://github.com/davee-401-advanced-javascript/notes/pull/3)

- [ci/cd](https://github.com/davee-401-advanced-javascript/notes/actions) (GitHub Actions)
<!-- - [back-end server url](http://xyz.com) (when applicable)
- [front-end application](http://xyz.com) (when applicable) -->

### Setup

<!-- i.e.
- `PORT` - Port Number
- `MONGODB_URI` - URL to the running mongo instance/db -->

- Make sure Mongo is installed on your computer and working.
- Clone note Repository onto local computer
- CD Into Repository
- do an `npm install` in the command Line
- Create a DB inside Mongo called "notesyDB"
  - Enter mongo by typing "mongo" in command line(MAC USERS)
  - Type `use notesyDB`. This will create a DB called notesyDB
- Create a collection called 'noteCollection'
  - Enter `db.createCollection('noteCollection')`

#### `.env` requirements (where applicable)

- Create .env file and enter the following code to connect database
  - `MONGODB_URI = 'mongodb://localhost:27017/notesyDB'`

#### How to initialize/run your application (where applicable)

<!-- - e.g. `npm start` -->

- CD into repository
- type node notes.js followed by commands

#### How to use your library (where applicable)

#### Tests

<!-- - How do you run tests?
- Any tests of note?
- Describe any tests that you did not complete, skipped, etc -->

To run test:

- cd into your repo
- in the command line enter `npm test`

#### UML

Link to an image of the UML for your application and response to events

![Lab1-UMl](images/Class1-UML.jpg)
