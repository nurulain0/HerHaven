create database HERHAVEN;
use HERHAVEN;

-- Table : Users
-- Stores info about each registered user
create table Users(
UserID INT IDENTITY PRIMARY KEY,
Username VARCHAR(50) NOT NULL,
Password VARCHAR(200) NOT NULL,
-- Email VARCHAR(255) UNIQUE NOT NULL,
Age INT,
LanguagePreference VARCHAR(20) DEFAULT 'English',
CreatedAt DATETIME DEFAULT GETDATE()
);

-- Table : CycleLogs
-- Stores menstrual cycle data with symptoms and mood tracking
create table CycleLogs(
CycleID INT IDENTITY PRIMARY KEY,
UserID INT NOT NULL,
StartDate DATE NOT NULL,
EndDate DATE ,
Symptoms TEXT,
Mood VARCHAR(50),
FlowLevel VARCHAR(10) CHECK (FlowLevel IN ('Light', 'Medium', 'Heavy')),
Notes TEXT,
CreatedAt DATETIME DEFAULT GETDATE(),

FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

-- Table : Pregenancy Logs
-- Stores pregenancy tracking data including symptoms and health notes
create table PregenancyLogs(
PregenanyID INT IDENTITY PRIMARY KEY,
UserID INT NOT NULL,
LastPeriodDate DATE NOT NULL,
DueDate DATE,
CurrentWekk INT,
Symptoms TEXT,
HealthNotes TEXT,
CreatedAt DATETIME DEFAULT GETDATE(),

FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

-- Table : Journal Enteries
-- Logs Daily mental health entries, moods, and affirmations
create table JournalEnteries(
EntryID INT IDENTITY PRIMARY KEY,
UserID INT NOT NULL,
EntryDate DATE NOT NULL,
Mood VARCHAR(50),
EntryText TEXT,
AffirmationShown TEXT,
CreatedAt DATETIME DEFAULT GETDATE(),

FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

-- Table : Reminders 
-- Stores personal reminders (e.g meds, cycle, hydration)
create table Reminders(
ReminderID INT IDENTITY PRIMARY KEY,
UserID INT NOT NULL,
Title VARCHAR(100),
 ReminderType VARCHAR(50),                 -- Example: 'Water', 'Medicine'
ReminderDateTime DATETIME NOT NULL,
IsRecurring BIT DEFAULT 0,
Status VARCHAR(10) CHECK (Status IN ('Pending', 'Done')) DEFAULT 'Pending',
CreatedAt DATETIME DEFAULT GETDATE(),

FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

-- Table : Articles 
-- Stores health related blog content manually or via scraping
create table Articles(
ArticleID INT IDENTITY PRIMARY KEY,
Title VARCHAR(255) NOT NULL,
Author VARCHAR(100),
Category VARCHAR(100),                    -- Example: 'Cycle', 'Pregnancy'
Content TEXT,
Source VARCHAR(255), 
CreatedAt DATETIME DEFAULT GETDATE(),
);

-- Table : Affirmations
-- Holds quotes or affirmations to display daily to the user
create table Affirmations (
    AffirmationID INT IDENTITY PRIMARY KEY,
    Quote TEXT NOT NULL,
    MoodTag VARCHAR(50)                       -- motivational, calm, etc.
);

-- Tbale : ChatbotLogs
-- Logs chat history with chatbot assistant 
create table ChatbotLogs(
ChatID INT IDENTITY PRIMARY KEY,
UserID INT NOT NULL,
Question TEXT,
BotResponse TEXT,
CreatedAt DATETIME DEFAULT GETDATE(),

FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

