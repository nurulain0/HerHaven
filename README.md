# HerHaven

HerHaven is a women-led open-source web app designed to track menstrual cycles, pregnancy progress, and hormonal health — all in one safe, educative, and empowering digital space. Built with a responsive interface, it aims to promote awareness, inclusivity, and wellness through technology.

> ⚠️ **Project Status: In Progress**
> HerHaven is currently under active development and not yet deployed.
> We’re participating in **Hacktoberfest 2025**, and open to contributions from developers, designers, and writers who want to help shape this women-led wellness platform! 💜
>
> The current phase focuses on:
>
> - Setting up the core React structure 🧩
> - Designing UI/UX layouts 🎨
> - Writing content for awareness and education 🩷

## 🌼 Project Preview

Here’s a quick visual preview of what I want to build with HerHaven:👉 [View Prototype](https://preview--herhaven-womenapp.lovable.app/)

> This is just a concept preview — the project is still in progress!
> I’d love your ideas and contributions to bring this to life 💻💫

## Setup and Installation

Follow these steps to get HerHaven running on your local machine.

The project is built with a  **PHP backend** , a  **MySQL database** , and a  **static HTML/CSS/JavaScript frontend** .

##### 1. Prerequisites

Before you begin, ensure you have the following installed on your system:

* **PHP** (Version 8.0 or newer is recommended)
* **MySQL** or **MariaDB** (A database server)
* **Git** (For cloning the repository)
* **Composer** (Optional, for managing PHP dependencies)

##### 2. Installation Steps

**Step 1: Clone the Repository**

First, clone the HerHaven repository to your local machine using Git.

```
git clone https://github.com/your-username/HerHaven.git
cd HerHaven
```

**Step 2: Set Up the Database**

The backend requires a MySQL database named `herhaven`.

1. **Create the Database:** Run the following command in your terminal. You may be prompted for your MySQL root password.
   **SQL**

   ```
   mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS herhaven;"
   ```
2. **Import the Database Schema:** This will create all the necessary tables.
   **SQL**

   ```
   mysql -u root -p herhaven < backend/database/queries.sql
   ```
3. **Configure Database Connection:** Open the `backend/database/database connect.php` file. The default credentials are for a user named `root` with an empty password. If your local MySQL setup is different, update the `$username` and `$password` variables accordingly.
   **PHP**

   ```
   // backend/database/database connect.php
   $host = 'localhost';
   $dbname = 'herhaven';
   $username = 'root'; // <-- Change if needed
   $password = '';     // <-- Change if needed
   ```

**Step 3: Address Backend Fixes**

There are a couple of known issues in the current codebase. Here’s how to fix them for local development.

1. **Create the `queries.php` File:** Several API files require a file that is currently missing. Create a new file named `queries.php` inside the `backend/database/` directory.
   **File:** `backend/database/queries.php`
   **PHP**

   ```
   <?php
   // This file is required by multiple API endpoints.
   // It includes the main database connection to make the $pdo variable available.
   require_once 'database connect.php';

   // You can add helper functions here as the project grows.
   // For example:
   /*
   function get_user_by_email($pdo, $email) {
       $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
       $stmt->execute([$email]);
       return $stmt->fetch(PDO::FETCH_ASSOC);
   }
   */
   ?>
   ```

   This will prevent "file not found" errors when you run the backend.
2. **Fix Session Cookie for Local Development:** For login sessions to work on `http://localhost`, you need to make a small change.

   * Open `backend/api/mood.php`.
   * Find the line that starts with `session_set_cookie_params`.
   * Change `'secure' => true,` to `'secure' => false,`.

   **PHP**

   ```
   // In backend/api/mood.php
   session_set_cookie_params([
       'lifetime' => 86400,
       'path' => '/',
       'domain' => '',
       'secure' => false, // Changed for local development
       'httponly' => true,
       'samesite' => 'Lax'
   ]);
   ```

**Step 4: Run the Application**

We will use PHP's built-in web server to run both the frontend and backend from the same origin.

1. **Start the Server:** From the **root directory** of the `HerHaven` project, run:
   **Bash**

   ```
   php -S localhost:8000
   ```
2. **Access the App:** Open your web browser and navigate to:

   * **Frontend:** `http://localhost:8000/frontend/`

You should now see the HerHaven website running locally! The backend APIs are accessible at `http://localhost:8000/backend/api/`.

## 💡 How to Contribute

1. Fork this repo.
2. Create a new branch: `git checkout -b yourname-feature`.
3. Make your changes (documentation, design ideas, feature proposals, etc.).
4. Commit your work: `git commit -m "Added contribution by <your name>"`.
5. Push the branch: `git push origin yourname-feature`.
6. Open a Pull Request 🚀

## 🎯 Contribution Ideas

- Add ideas or features to improve HerHaven’s website.
- Improve the README or documentation.
- Add creative design concepts or social media ideas.
- Fix typos or improve instructions.
