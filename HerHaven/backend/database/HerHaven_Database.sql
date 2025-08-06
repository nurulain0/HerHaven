CREATE DATABASE IF NOT EXISTS HERHAVEN;
USE HERHAVEN;

-- Table : Users
-- Stores info about each registered user
CREATE TABLE IF NOT EXISTS Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(200) NOT NULL,
    -- Email VARCHAR(255) UNIQUE NOT NULL, -- Uncomment if you want email field
    Age INT,
    LanguagePreference VARCHAR(20) DEFAULT 'English',
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table : CycleLogs
-- Stores menstrual cycle data with symptoms and mood tracking
CREATE TABLE IF NOT EXISTS CycleLogs (
    CycleID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE,
    Symptoms TEXT,
    Mood VARCHAR(50),
    FlowLevel VARCHAR(10) CHECK (FlowLevel IN ('Light', 'Medium', 'Heavy')),
    Notes TEXT,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

-- Table : PregenancyLogs
-- Stores pregnancy tracking data including symptoms and health notes
CREATE TABLE IF NOT EXISTS PregenancyLogs (
    PregenancyID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL UNIQUE, -- Assuming one active pregnancy log per user
    LastPeriodDate DATE NOT NULL,
    DueDate DATE,
    CurrentWekk INT,
    Symptoms TEXT,
    HealthNotes TEXT,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

-- Table : JournalEnteries
-- Logs Daily mental health entries, moods, and affirmations
CREATE TABLE IF NOT EXISTS JournalEnteries (
    EntryID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    EntryDate DATE NOT NULL,
    Mood VARCHAR(50),
    EntryText TEXT,
    AffirmationShown TEXT,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

-- Table : Reminders
-- Stores personal reminders (e.g meds, cycle, hydration)
CREATE TABLE IF NOT EXISTS Reminders (
    ReminderID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    Title VARCHAR(100),
    ReminderType VARCHAR(50), -- Example: 'Water', 'Medicine'
    ReminderDateTime DATETIME NOT NULL,
    IsRecurring BOOLEAN DEFAULT FALSE, -- BIT is MySQL's BOOLEAN
    Status VARCHAR(10) CHECK (Status IN ('Pending', 'Done')) DEFAULT 'Pending',
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

-- Table : Articles
-- Stores health related blog content manually or via scraping
CREATE TABLE IF NOT EXISTS Articles (
    ArticleID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Author VARCHAR(100),
    Category VARCHAR(100), -- Example: 'Cycle', 'Pregnancy'
    Content TEXT,
    Source VARCHAR(255),
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table : Affirmations
-- Holds quotes or affirmations to display daily to the user
CREATE TABLE IF NOT EXISTS Affirmations (
    AffirmationID INT AUTO_INCREMENT PRIMARY KEY,
    Quote TEXT NOT NULL,
    MoodTag VARCHAR(50) -- motivational, calm, etc.
);

-- Table : ChatbotLogs
-- Logs chat history with chatbot assistant
CREATE TABLE IF NOT EXISTS ChatbotLogs (
    ChatID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    Question TEXT,
    BotResponse TEXT,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

-- Optional: Sample data for Articles
INSERT INTO Articles (Title, Author, Category, Content, Source, CreatedAt) VALUES
('Understanding Your Cycle: A Guide to Hormonal Harmony', 'Dr. Anya Sharma', 'Hormonal Health', 'Delve into the intricacies of your menstrual cycle and learn how hormonal fluctuations impact your body and mind. Discover practical tips for balance and well-being throughout your cycle. This article covers the four phases of your cycle, common hormonal imbalances, and natural remedies to support your body.', 'HerHaven Blog', NOW()),
('Empowering Workouts for Women: Beyond the Gym', 'Coach Zara Khan', 'Fitness', 'Explore empowering fitness routines tailored for women\'s bodies, focusing on strength, flexibility, and overall well-being at every life stage. From gentle yoga to high-intensity interval training, find what works for you and embrace movement as a form of self-care.', 'HerHaven Blog', NOW()),
('Cultivating Inner Peace: Mindfulness for Modern Women', 'Maya Singh', 'Mental Health', 'Discover simple yet profound mindfulness practices to navigate daily stress, enhance emotional resilience, and find moments of calm in a busy world. Learn how to incorporate meditation, deep breathing, and mindful living into your daily routine for a more peaceful existence.', 'HerHaven Blog', NOW()),
('Fueling Feminine Wellness: A Guide to Nutrient-Rich Eating', 'Nutritionist Priya Devi', 'Nutrition', 'Learn about essential nutrients and dietary choices that support hormonal balance, energy levels, and overall vitality for women. This comprehensive guide covers macronutrients, micronutrients, and specific foods that can enhance your well-being.', 'HerHaven Blog', NOW()),
('Navigating Postpartum Recovery: Mind, Body & Soul', 'Dr. Aisha Rahman', 'Motherhood', 'A compassionate guide to the physical and emotional aspects of postpartum recovery, offering practical advice and self-care strategies for new mothers. Understand the changes your body and mind go through and how to support yourself during this transformative period.', 'HerHaven Blog', NOW()),
('PCOS Management: Lifestyle and Dietary Approaches', 'Dr. Lena Gupta', 'Hormonal Health', 'Insights into managing Polycystic Ovary Syndrome (PCOS) through diet and lifestyle modifications, focusing on holistic well-being. This article provides actionable steps to alleviate symptoms and improve your quality of life with PCOS.', 'HerHaven Blog', NOW());

-- Optional: Sample data for Affirmations
INSERT INTO Affirmations (Quote, MoodTag) VALUES
('You are strong, capable, and resilient.', 'motivational'),
('Every day is a new opportunity for growth.', 'motivational'),
('I am worthy of love and happiness.', 'calm'),
('My body is a temple, and I treat it with respect.', 'calm'),
('I embrace my unique journey with grace.', 'motivational'),
('I am in tune with my body''s wisdom.', 'calm'),
('My health and well-being are my top priorities.', 'motivational'),
('I am surrounded by love and support.', 'calm'),
('I trust my intuition and inner guidance.', 'motivational'),
('I am blooming into my best self.', 'motivational');
