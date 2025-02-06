# Back End Setup Guide

Welcome to the **Back End** setup guide! I assume you've already read `front_end.md`. Now, let's set up the back end step by step.

## 1. Install Required Software

1. Install **XAMPP** by searching for it in any browser.
2. Install **HeidiSQL** in any browser.
3. Install both programs by following the installation requirements.

## 2. Set Up Your Development Environment

4. Open **Visual Studio Code**.
5. Open **Terminal**.
6. Run the following command to install necessary modules:

   ```sh
   npm i dotenv body-parser cookie-parser nodemon
   ```

   > This will install all required modules automatically.

7. Verify that the modules are installed correctly by running:

   ```sh
   dir node_modules   # for Windows
   ls node_modules    # for macOS/Linux
   ```

## 3. Database Setup

8. After downloading this project, you will find a folder named **Data_base**. This contains a pre-created database for you.
9. Extract the database files.
10. Open **XAMPP** and start **MySQL**.
11. Open **HeidiSQL** and click **+New**. Change:
    - **User**: `root` → `admin`
    - **Password**: `1234`
    - Click **Open**.
12. Click **Toolbar** → **File** → **Load SQL File**, then select `KKUP_DATABASE`.
13. Done! Now, try running the project:

    ```sh
    npm run start
    ```

## 4. Important Notes

14. You **must** keep **XAMPP (MySQL)** and **HeidiSQL** open before and while running `npm run start`.

## 5. Adding Content to the Database

### Adding Blog Posts to the `health_blog` Table

Use this command to insert a new blog post:

```sql
INSERT INTO health_blog (?, ?, ?, ?) VALUES ("", "", "", "");
```

### Adding Activities to the `activities` Table

Use this command to insert a new activity:

```sql
INSERT INTO activities (?, ?, ?, ?) VALUES ("", "", "", "");
```

### Understanding `?` and `""`
- `?` represents the **column names** in the table.
- `""` represents the **data** you want to insert.

### Example: Adding a New Activity

```sql
INSERT INTO activities (name, description, date, image_url) VALUES ("Hiking", "Doing Hiking", "2025-02-20", "/img/hiking.png");
```

## 6. All Done!
Now you're ready to work with the back end and database!
