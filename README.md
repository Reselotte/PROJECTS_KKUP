# KKUP Project Setup Tool

# 66022141 ศุภกร พรมหสารเมฆ BACKEND

# 66021263 กิม เฮง ลุย front end

# 66021555 เทพอารักษ์ อินท์ประสงค์ front end


## 📌 Project Setup Instructions

### 1️⃣ Install Node.js  
- Open **Google Chrome** or any web browser.  
- Search for **Node.js** and download the latest stable version.  
- Install **Node.js** on your computer.  

### 2️⃣ Verify Installation  
- Open **Command Prompt (CMD)** on Windows.  
- Type the following command:  
  ```sh
  npm -v
  ```  
- Press **Enter**. If Node.js is installed correctly, the version number should appear.  

### 3️⃣ Set Up the Project in Visual Studio Code  
- Open **Visual Studio Code**.  
- Open the **Terminal** *(Recommended: PowerShell)*.  
- Run the command below to create a **package.json** file:  
  ```sh
  npm init -y
  ```  

### 4️⃣ Troubleshooting npm Issues (If Needed)  
- If you encounter issues using **npm**, follow these steps:  
  1. Type this command in the terminal:  
     ```sh
     Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
     ```  
     *(This issue occurs because your system doesn’t allow PowerShell scripts in VS Code yet.)*  
  2. Restart **Visual Studio Code**.  

### 5️⃣ Install Required Dependencies  
- Install **Express**:  
  ```sh
  npm i express
  ```  
  *(`npm i` is a shortcut for `npm install` to save time.)*  
- Install **Nodemon**:  
  ```sh
  npm i nodemon
  ```  

### 6️⃣ Run the Server  
- Start the server using:  
  ```sh
  npm run start
  ```  
- If everything is set up correctly, the terminal will display:  
  ```
  http://localhost:3000/home.html
  ```  

### 7️⃣ Access the Web Page  
- Press **Left-Ctrl** and **Left-Click** on the displayed link in the terminal.  
- Or copy the address and paste it into your web browser.  

### 🎉 Enjoy! Happy To Visits! 🚀


### BACK END

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
    - **Repeatpassword**: '1234`
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
