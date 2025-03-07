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