# <ins>E-commerce Server-Side Application</ins>

## <ins>Table of contents</ins>
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [License](#License)
- [Documentation](#Documentation)
- [In Summary](#In-Summary)
- [link](#link)

---
## <ins>What is e-commerce and what does ours offer?</ins>
- E-commerce is simply the buying and selling of goods using the internet. AKA online shopping.
- This is the back-end for such a site.
- Given that customers will buy, and sometimes return items, it is importand to have a server-side application to handle CRUD operations for an online merchant.

---
## <ins>Installation</ins>
In order to create this server-side e-commerce app, I had to download the following:
- Node.js. This is the runtime environment I used in conjunciton with my IDE to code this project. You can download the current version of node.js [here](https://nodejs.org/en)
  ![node screenshot](https://github.com/user-attachments/assets/77cd0435-19f8-4444-8ed1-0f27b24bfc03)
- Once node.js is installed, you have to install the RDBMS (Relational Data Base Management System) PostgreSql.

  ![image](https://github.com/user-attachments/assets/c929ca31-8ea6-42a8-9093-07f0766e76ac)
  
---
## <ins>Usage</ins>
 - To use this app, follow the following steps.
    1. Open a powershell terminal in your IDE along with a bash terminal.
    2. In the powershell terminal, navigate to your database schema file. Then use the command imply run the command `psql -U postgres` to enter your postgreSql password
       and open a PostgreSql session, allowing you to run SQL queries and perform database management tasks.
    3. Switch to your bash terminal and navigate to the folder path level that your package.json file is in. Once there, run the command `node seeds/index.js` to seed the tables with data.
    4. Finally, run the command `node server.js` in your bash terminal and the server will run and listen to port 3001..

---
## <ins>Contributing</ins>
The following are some ways in which you can participate in this project:
- Submit bugs and feature requests, and help verify as they are checked in
- Review source code changes
- Review the documentation and make pull requests for anything from typos to refactoring to additional and new content.

---
## <ins>License</ins>
- This is licensed under the MIT license

---
## <ins>Documentation</ins>
The following resources will help you as they helped me understand and build a quality server-side postgres application:
- [Blog Rocket's blog entitled "CRUD REST API with Node.js, Express, and PostgreSQL"](https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/)
- [Medium's article entitled "Integrating SQL Databases into Node.js Applications: A Comprehensive Guide"](https://dvmhn07.medium.com/integrating-sql-databases-into-node-js-applications-a-comprehensive-guide-c6b0c0a84f91)

---
## <ins>Link</ins>
- Here is the [link](https://bootcampspot.instructuremedia.com/embed/5a0df8f6-d031-4794-ba46-75538abf7fb5) to my video walkthrough demonstrating the usage of the app and database management
  along with testing using Postman.

---
## <ins>In-Summary</ins>

Shopping online is an everyday thing nowadays. Websites need to be able to add, update, and delete items on the site based on inventory. Using PostgreSql in conjunciton with express.js
makes this a lot easier.
