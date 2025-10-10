# 🌸 HerHaven - Women's Health & Wellness Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Hacktoberfest](https://img.shields.io/badge/Hacktoberfest-2025-orange)](https://hacktoberfest.com/)
[![Open Source](https://img.shields.io/badge/Open%20Source-Yes-green)](https://github.com/nurulain0/HerHaven)

> **HerHaven** is a comprehensive, women-led open-source web application designed to track menstrual cycles, pregnancy progress, mood patterns, and overall hormonal health. Built with privacy-first principles, HerHaven provides a safe, educative, and empowering digital space for women to understand and manage their wellness journey.

## 🌟 Features

### 📊 Core Tracking Features
- **Menstrual Cycle Tracking**: Visual calendar with period, ovulation, and fertile window predictions
- **Mood Monitoring**: Daily mood tracking with pattern analysis and insights
- **Symptom Logging**: Track physical symptoms, energy levels, and wellness indicators
- **Pregnancy Tracking**: Comprehensive pregnancy progress monitoring and milestone tracking
- **Health Metrics**: Weight, temperature, and other vital health measurements
- **Journaling**: Private journal entries for personal reflections and notes

### 🎨 User Experience
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Intuitive Interface**: Clean, modern UI with accessible design principles
- **Data Visualization**: Charts and graphs for cycle patterns and health trends
- **Privacy-First**: Local data storage with optional cloud synchronization

### 🔒 Privacy & Security
- **End-to-End Encryption**: Secure data transmission and storage
- **Local-First Architecture**: Data stored locally with optional cloud backup
- **No Data Selling**: Commitment to never monetize user health data
- **GDPR Compliant**: Full compliance with privacy regulations
- **Secure Authentication**: Multi-factor authentication support

## 🏗️ Technical Architecture

### Frontend Stack
- **HTML5/CSS3**: Semantic markup with modern CSS features
- **Vanilla JavaScript**: ES6+ with modular architecture
- **CSS Variables**: Dynamic theming system
- **Progressive Web App**: Service worker for offline functionality
- **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox

### Backend Stack
- **PHP 8.4+**: Modern PHP with type declarations
- **MySQL**: Relational database for structured health data
- **RESTful API**: Clean API design with JSON responses
- **JWT Authentication**: Secure token-based authentication
- **Composer**: Dependency management and autoloading

### Development Tools
- **PHPUnit**: Comprehensive testing suite
- **Composer**: Package management
- **Git**: Version control with conventional commits
- **ESLint/Prettier**: Code formatting and linting
- **Browser DevTools**: Cross-browser testing and debugging

## 📁 Project Structure

```
HerHaven/
├── frontend/                    # Frontend application
│   ├── assets/                 # Images, icons, and static assets
│   │   ├── calender.svg
│   │   ├── droplet.svg
│   │   ├── heart.svg
│   │   └── menu.svg
│   ├── css/                    # Stylesheets
│   │   ├── main.css           # Core styles and CSS variables
│   │   ├── dark-mode.css      # Dark theme implementation
│   │   ├── theme.css          # Theme system
│   │   ├── components.css     # Reusable component styles
│   │   └── responsive.css     # Mobile responsiveness
│   ├── html/                  # HTML pages
│   │   ├── dashboard-complete.html
│   │   ├── period-complete.html
│   │   ├── mood-tracker-complete.html
│   │   └── TEMPLATE-WITH-DARK-MODE.html
│   ├── js/                    # JavaScript modules
│   │   ├── main.js           # Application entry point
│   │   ├── router.js         # Client-side routing
│   │   ├── auth.js           # Authentication logic
│   │   ├── mood.js           # Mood tracking functionality
│   │   ├── period.js         # Period tracking logic
│   │   ├── api.js            # API communication
│   │   └── theme.js          # Dark mode theme management
│   └── index.html            # Main landing page
├── backend/                   # Backend API
│   ├── api/                  # API endpoints
│   │   ├── auth.php         # Authentication endpoints
│   │   ├── mood.php         # Mood tracking API
│   │   ├── period.php       # Period tracking API
│   │   ├── pregnancy.php    # Pregnancy tracking API
│   │   ├── journal.php      # Journal API
│   │   └── test/            # API tests
│   ├── database/            # Database management
│   │   ├── database connect.php
│   │   ├── schema.sql       # Database schema
│   │   ├── queries.sql      # Common queries
│   │   └── migrations/      # Database migrations
│   ├── utils/               # Utility functions
│   │   ├── config.php       # Configuration management
│   │   ├── helpers.php      # Helper functions
│   │   └── validation.php   # Input validation
│   ├── cpp-modules/         # C++ performance modules
│   │   ├── cycle_prediction.cpp
│   │   └── health_metrics.cpp
│   ├── vendor/              # Composer dependencies
│   ├── composer.json        # PHP dependencies
│   └── php-unit.xml        # PHPUnit configuration
├── docs/                    # Documentation
│   ├── DARK_MODE_GUIDE.md
│   ├── DARK_MODE_VISUAL_GUIDE.md
│   ├── IMPLEMENTATION_CHECKLIST.md
│   └── Contributing.md
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites
- **PHP 8.4+** with extensions: `mysqli`, `pdo_mysql`, `json`, `openssl`
- **MySQL 8.0+** or **MariaDB 10.4+**
- **Composer** for PHP dependency management
- **Modern web browser** (Chrome 90+, Firefox 88+, Safari 14+)
- **Git** for version control

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/nurulain0/HerHaven.git
cd HerHaven
```

2. **Backend Setup**
```bash
cd backend
   composer install
   ```

3. **Database Configuration**
   ```bash
   # Create database
   mysql -u root -p
   CREATE DATABASE herhaven;
   USE herhaven;
   
   # Import schema
   source database/schema.sql
   ```

4. **Environment Configuration**
   Create `backend/.env`:
```env
DB_HOST=localhost
DB_NAME=herhaven
   DB_USER=your_username
   DB_PASS=your_password
   JWT_SECRET=your_jwt_secret_key
   API_BASE_URL=http://localhost:8000/api
   ```

5. **Start Development Server**
   ```bash
   # Backend (PHP built-in server)
   cd backend
   php -S localhost:8000
   
   # Frontend (in another terminal)
   cd frontend
   # Open index.html in your browser or use a local server
   python -m http.server 3000
   ```

6. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000/api

## 📚 API Documentation

### Authentication Endpoints

#### POST `/api/auth/login`
Authenticate user and return JWT token.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": 1,
    "name": "Jane Doe",
    "email": "user@example.com"
  },
  "token": "jwt_token_here"
}
```

#### POST `/api/auth/register`
Register new user account.

**Request:**
```json
{
  "name": "Jane Doe",
  "email": "user@example.com",
  "password": "securepassword",
  "birth_date": "1990-01-01"
}
```

### Health Tracking Endpoints

#### GET `/api/period/cycles`
Get user's menstrual cycle data.

**Response:**
```json
{
  "success": true,
  "cycles": [
    {
      "id": 1,
      "start_date": "2025-01-01",
      "end_date": "2025-01-05",
      "cycle_length": 28,
      "flow_intensity": 3
    }
  ]
}
```

#### POST `/api/mood/entry`
Log mood entry for a specific date.

**Request:**
```json
{
  "date": "2025-01-15",
  "mood": "happy",
  "energy_level": 4,
  "notes": "Feeling great today!"
}
```

## 🗄️ Database Schema

### Core Tables

#### `users`
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100),
    birth_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### `cycle_data`
```sql
CREATE TABLE cycle_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    cycle_length INT,
    flow_intensity INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

#### `symptoms`
```sql
CREATE TABLE symptoms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    date DATE NOT NULL,
    symptom_type ENUM('cramps', 'headache', 'bloating', 'tender_breasts'),
    severity INT,
    notes TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## 🎨 Dark Mode Implementation

HerHaven features a comprehensive dark mode system:

### Features
- **System Preference Detection**: Automatically detects user's OS theme preference
- **Smooth Transitions**: CSS transitions for seamless theme switching
- **Persistent Storage**: Remembers user's theme choice across sessions
- **Accessibility**: High contrast ratios and readable text in both themes
- **Comprehensive Coverage**: All UI elements support both light and dark themes

### Implementation
```css
/* CSS Variables for Theming */
:root {
    --bg-primary: #FFFFFF;
    --text-primary: #333333;
    --accent-pink: #FF85A2;
}

[data-theme="dark"] {
    --bg-primary: #1a1a1a;
    --text-primary: #ffffff;
    --accent-pink: #ff6b9d;
}
```

## 🧪 Testing

### Running Tests
    ```bash
# Backend tests
cd backend
vendor/bin/phpunit

# Frontend tests (manual)
# Open browser DevTools and test functionality
```

### Test Coverage
- **Unit Tests**: API endpoints and utility functions
- **Integration Tests**: Database operations and authentication
- **UI Tests**: Cross-browser compatibility and responsive design
- **Accessibility Tests**: WCAG 2.1 compliance

## 🤝 Contributing

We welcome contributions from developers, designers, and content creators! Here's how you can help:

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
    ```bash
   git checkout -b feature/your-feature-name
    ```
3. **Make your changes**
4. **Test your changes**
5. **Commit with conventional commits**
    ```bash
   git commit -m "feat: add mood tracking visualization"
   ```
6. **Push and create a Pull Request**

### Contribution Areas

#### 🎨 Frontend Development
- React component development
- UI/UX improvements
- Dark mode enhancements
- Mobile responsiveness
- Accessibility improvements

#### ⚙️ Backend Development
- API endpoint development
- Database optimization
- Security enhancements
- Performance improvements
- Testing coverage

#### 📝 Content & Documentation
- Health education content
- API documentation
- User guides
- Code comments
- Translation support

#### 🧪 Testing & Quality Assurance
- Test case development
- Bug reporting
- Performance testing
- Security auditing
- Cross-browser testing

### Code Standards

- **PHP**: PSR-12 coding standards
- **JavaScript**: ES6+ with JSDoc comments
- **CSS**: BEM methodology with CSS variables
- **Git**: Conventional commit messages
- **Documentation**: Clear, comprehensive comments

## 🌍 Internationalization

HerHaven is designed to be globally accessible:

- **Multi-language Support**: Ready for translation
- **Cultural Sensitivity**: Respectful of different cultural practices
- **Time Zone Support**: Automatic timezone detection
- **Regional Health Guidelines**: Adaptable to local health recommendations

## 🔮 Roadmap

### Phase 1: Core Features (Current)
- [x] Basic cycle tracking
- [x] Mood monitoring
- [x] Dark mode implementation
- [x] Responsive design
- [ ] User authentication
- [ ] Data persistence

### Phase 2: Advanced Features
- [ ] AI-powered cycle predictions
- [ ] Health insights and recommendations
- [ ] Export/import functionality
- [ ] Cloud synchronization
- [ ] Mobile app development

### Phase 3: Community Features
- [ ] Anonymous community support
- [ ] Health education resources
- [ ] Healthcare provider integration
- [ ] Research participation options

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Contributors**: All the amazing developers who have contributed to this project
- **Community**: The women who have provided feedback and suggestions
- **Open Source**: The open-source libraries and tools that make this project possible
- **Health Professionals**: Medical professionals who have provided guidance and validation

## 📞 Support & Contact

- **GitHub Issues**: [Report bugs or request features](https://github.com/nurulain0/HerHaven/issues)
- **Discussions**: [Join community discussions](https://github.com/nurulain0/HerHaven/discussions)
- **Email**: [Contact the maintainers](mailto:maintainers@herhaven.app)

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=nurulain0/HerHaven&type=Date)](https://star-history.com/#nurulain0/HerHaven&Date)

---

**Made with 💖 by women, for women**

*HerHaven is committed to providing a safe, private, and empowering space for women's health tracking. We believe that understanding your body is the first step toward better health and wellness.*