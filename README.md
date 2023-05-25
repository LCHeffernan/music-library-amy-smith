# Backend app

This app was created with `@command-shift/create-backend-app`

Music Library API

In this project, I learned to create api's to perform various functions such as:
. create an artists table and an albums table in the express database with SQL commands in migration files
. post data into the tables
. get data from the tables
. put and patch data within the tables
. delete data from tables

Migration files should not be altered once created. Should there be a need to do so, create a new file
to alter the original. Otherwise, when in the learning environment, you can delete the rows with errors in the
migration table, then recreate your migration files. Over simply drop the test database.

Controllers and routes are used to help split the app and index files into smaller more manageable modules,
easier to run tests, scale and spot errors too!

The database scripts -
First script - create-database.js will run before our app or tests start, to make sure the database exists and contains the correct tables.
The second one - drop-database.js will run after our tests to tear down the test database. This will ensure our tests have a fresh database each time they run.
