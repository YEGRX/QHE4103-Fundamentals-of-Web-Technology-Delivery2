# Registration Backend Notes

Branch: feature/registration-backend

Main files:
- registration.html: seller registration form.
- assets/app.js: checks the form and sends FormData to api/register.php.
- api/register.php: receives POST data and inserts a seller into MySQL with MySQLi.
- database/schema.sql: defines the sellers table.

Flow:
1. Seller fills in name, address, phone, email, username, and password.
2. JavaScript checks the field format before sending.
3. The form is sent to api/register.php.
4. PHP checks required fields and duplicate username or email.
5. PHP uses password_hash() and INSERT INTO sellers.
6. phpMyAdmin can show the new seller row in the sellers table.

Database notes:
- The sellers table is part of the schema.
- One new seller row is a tuple.
- name, address, phone, email, username, and password_hash are attributes.
- seller_id is the primary key.
- username and email are unique keys.
- INSERT INTO sellers is DML because it changes the database state.

Local checks for Day 3:
- Valid registration returns 201 and creates a row in sellers.
- Duplicate username or email returns 409.
- Missing required fields return 400.
- The password is saved as password_hash, not plain text.

Short Q&A answer:
The registration page sends the seller form to PHP. PHP uses MySQLi to check
the data and insert it into the sellers table. The schema does not change, but
the database state changes because a new seller tuple is added.
