HerHaven is a women-led open-source web app designed to track menstrual cycles, pregnancy progress, and hormonal health — all in one safe, educative, and empowering digital space.
Built with a responsive, inclusive design, HerHaven aims to promote wellness and awareness through technology.

⚠️ Project Status: In Progress
HerHaven is actively being rebuilt with a modern React frontend and Node.js backend.
We’re participating in Hacktoberfest 2025 🌸 and open to contributions from developers, designers, and writers who want to help shape this women-led wellness platform!

🌼 Project Preview

Here’s a glimpse of the design vision for HerHaven:
👉 View Prototype

This is just a concept preview created on Lovable — the code is being restructured and modernized from scratch.

🚧 Current Status

✅ Static frontend concepts exist (HTML/CSS version)
🛠️ React setup and routing under development
🧠 Backend APIs planned with Node.js & MySQL
🔐 Authentication & database structure in design phase
📦 Old PHP files archived in /legacy_php

⚙️ Setup and Installation

Follow these steps to run HerHaven on your local machine.

🧩 1. Prerequisites

Make sure you have these installed:

Node.js (v18 or newer)

npm or yarn

MySQL (or MariaDB)

Git

🚀 2. Installation Steps
Step 1: Clone the Repository
git clone https://github.com/<your-username>/HerHaven.git
cd HerHaven

Step 2: Backend Setup (Node.js)
cd backend
npm install


Create a .env file inside the backend directory:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=herhaven


Then start the backend server:

npm run server

Step 3: Frontend Setup (React)

In a new terminal:

cd frontend
npm install
npm run dev


Visit the app at:
👉 http://localhost:5173

🧱 Folder Structure
HerHaven/
├── frontend/           # React frontend (new)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/            # Node.js + MySQL backend
│   ├── api/
│   ├── database/
│   └── server.js
│
├── legacy_php/         # Old PHP version (archived)
├── README.md
└── .env (local)

💡 How to Contribute

We’d love your help in shaping HerHaven 💜
Follow these steps:

Fork this repo

Create a branch:

git checkout -b yourname-feature


Make your changes (React UI, backend routes, docs, etc.)

Commit:

git commit -m "Added <feature> by <yourname>"


Push:

git push origin yourname-feature


Open a Pull Request 🚀

🎯 Contribution Ideas

💻 Build React components (Home, Dashboard, or Auth pages)
🎨 Improve UI/UX or design layouts
🧠 Write content for awareness sections
⚙️ Create Node.js routes or APIs
🪄 Organize or modernize the project structure
📝 Improve documentation and developer setup guides

💬 Join the Journey

This project is all about collaboration, community, and creativity.
Every contribution — big or small — helps us make HerHaven a better, safer digital space for women everywhere
 
