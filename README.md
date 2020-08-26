This is a React application with no database interaction to work
with tables, filters, sort and modals.

## Application

The application has a auth integration with Okta so a login is needed to access the app.
Once you have logged in, you will see a table with all main information coming from a JSON.
This table allows the user to sort asc and desc the columns and also filter by some columns
using free text or pre-selected values.

There is two editable columns, Brand Code and Brand Variant Code, which will open a modal with 
the brands and variants and when click on the brand line, it will close the modal and update the main
table with the new information.

To login, please use the following credentials:

user: test@test.com

pass: AppBrands123

### Setup

* Clone this repository

Open one terminal, navigate to the repository root folder and:
* run "npm install".
* run "npm run start".
* When finished, a message about server being running at localhost:3000 will be displayed.

The frontend will running at address http://localhost:3000.
