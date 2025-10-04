# HerHaven - Technical Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture Overview](#architecture-overview)
3. [System Components](#system-components)
4. [Data Flow](#data-flow)
5. [Technology Stack](#technology-stack)
6. [API Endpoints](#api-endpoints)
7. [Database Schema](#database-schema)
8. [Security Features](#security-features)
9. [Development Setup](#development-setup)
10. [Contributing Guidelines](#contributing-guidelines)

---

## Project Overview

**HerHaven** is a comprehensive women's health tracking application designed to provide a safe, educational, and empowering digital space for monitoring menstrual cycles, pregnancy progress, and hormonal health. Built as an open-source project, it combines modern web technologies with advanced analytics to deliver personalized health insights.

### Key Features
- **Menstrual Cycle Tracking**: Comprehensive period logging with flow intensity and symptom tracking
- **Mood Monitoring**: Emotional well-being tracking correlated with hormonal changes
- **Pregnancy Tracking**: Progress monitoring and health metric logging
- **Advanced Analytics**: AI-powered cycle prediction and health pattern analysis
- **Secure Authentication**: User account management with privacy protection
- **Responsive Design**: Mobile-first approach with cross-platform compatibility

### Target Audience
- Women seeking to understand their reproductive health patterns
- Healthcare providers requiring patient health data insights
- Researchers studying women's health trends and patterns
- Open-source contributors passionate about women's health technology

---

## Architecture Overview

HerHaven follows a modern three-tier architecture pattern, separating concerns across presentation, business logic, and data processing layers.

### System Architecture Diagram

![HerHaven Architecture](./frontend/assets/architecture-diagram.svg)

*Figure 1: HerHaven System Architecture - Shows the interaction between Frontend, Backend, C++ Modules, and Database layers*

---

## System Components

### 1. Frontend Layer (Presentation Tier)

**Technology**: HTML5, CSS3, JavaScript (ES6+)

**Key Components**:
- **Single Page Application (SPA)**: Dynamic routing and component-based architecture
- **Authentication Module**: User login/logout and session management
- **Dashboard Interface**: Centralized health data visualization
- **Period Tracker**: Cycle logging and symptom recording
- **Mood Tracker**: Emotional state monitoring and correlation analysis
- **Responsive UI**: Mobile-optimized design with accessibility features

**File Structure**:
```
frontend/
├── html/           # Page templates and components
├── css/            # Styling and responsive design
├── js/             # JavaScript modules and logic
└── assets/         # Images, icons, and diagrams
```

### 2. Backend Layer (Business Logic Tier)

**Technology**: PHP 7.4+, RESTful API Architecture

**Key Components**:
- **Authentication API**: Secure user login and session management
- **Data Management APIs**: CRUD operations for health data
- **Validation Layer**: Input sanitization and security checks
- **Session Management**: Secure cookie handling and user state
- **Database Abstraction**: Query optimization and data integrity

**API Endpoints**:
```
/api/
├── auth.php        # User authentication
├── mood.php        # Mood tracking data
├── period.php      # Menstrual cycle data
├── pregnancy.php   # Pregnancy tracking
└── journal.php     # Health journal entries
```

### 3. C++ Modules (Analytics Tier)

**Technology**: C++17, Statistical Analysis Libraries

**Key Components**:
- **Cycle Prediction Engine**: Advanced algorithms for period forecasting
- **Health Metrics Analyzer**: Statistical analysis of health patterns
- **Anomaly Detection**: Identification of irregular health patterns
- **Fertility Calculator**: Ovulation and fertile window prediction
- **Regularity Scoring**: Cycle consistency analysis

**Core Algorithms**:
- Statistical regression for cycle prediction
- Standard deviation analysis for pattern recognition
- Machine learning-based anomaly detection
- Time-series analysis for trend identification

### 4. Database Layer (Data Tier)

**Technology**: MySQL 8.0+

**Key Features**:
- **Relational Data Model**: Normalized schema for data integrity
- **Indexed Queries**: Optimized performance for health data retrieval
- **Data Encryption**: Sensitive health information protection
- **Backup Strategy**: Automated data protection and recovery

---

## Data Flow

### 1. User Interaction Flow
```
User Input → Frontend Validation → API Request → Backend Processing → Database Storage
```

### 2. Analytics Processing Flow
```
Raw Health Data → C++ Analysis → Statistical Results → Backend Integration → Frontend Visualization
```

### 3. Authentication Flow
```
Login Credentials → Backend Validation → Session Creation → Secure Cookie → Frontend State Update
```

---

## Technology Stack

### Frontend Technologies
- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with Flexbox/Grid layouts
- **JavaScript ES6+**: Modular programming and async operations
- **Progressive Web App**: Offline capability and mobile optimization

### Backend Technologies
- **PHP 7.4+**: Server-side logic and API development
- **RESTful Architecture**: Standardized API design
- **Session Management**: Secure user state handling
- **Input Validation**: XSS and SQL injection prevention

### Analytics Technologies
- **C++17**: High-performance computational algorithms
- **Statistical Libraries**: Mathematical analysis and prediction
- **Memory Management**: Optimized resource utilization
- **Cross-platform Compatibility**: Linux/Windows/macOS support

### Database Technologies
- **MySQL 8.0+**: Relational database management
- **Indexed Queries**: Performance optimization
- **Data Encryption**: Security and privacy protection
- **Backup Systems**: Data integrity and recovery

---

## API Endpoints

### Authentication Endpoints
- `POST /api/auth.php` - User login
- `POST /api/auth.php?action=register` - User registration
- `POST /api/auth.php?action=logout` - User logout

### Health Data Endpoints
- `GET /api/period.php` - Retrieve cycle data
- `POST /api/period.php` - Log new period entry
- `GET /api/mood.php` - Retrieve mood data
- `POST /api/mood.php` - Log mood entry
- `GET /api/pregnancy.php` - Retrieve pregnancy data
- `POST /api/pregnancy.php` - Log pregnancy metrics

### Analytics Endpoints
- `GET /api/analytics.php?type=prediction` - Cycle prediction
- `GET /api/analytics.php?type=patterns` - Health pattern analysis
- `GET /api/analytics.php?type=anomalies` - Anomaly detection results

---

## Database Schema

### Core Tables

#### Users Table
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

#### Cycle Data Table
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

#### Symptoms Table
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

---

## Security Features

### Data Protection
- **Password Hashing**: bcrypt encryption for user credentials
- **Session Security**: Secure cookie configuration with HttpOnly and SameSite
- **Input Validation**: XSS and SQL injection prevention
- **Data Encryption**: Sensitive health data protection

### Privacy Measures
- **User Consent**: Clear data usage policies
- **Data Minimization**: Collection of only necessary information
- **Access Control**: User-specific data isolation
- **Audit Logging**: Security event monitoring

### Compliance
- **GDPR Ready**: European data protection compliance
- **HIPAA Considerations**: Healthcare data security standards
- **Open Source**: Transparent security practices

---

## Development Setup

### Prerequisites
- PHP 7.4 or higher
- MySQL 8.0 or higher
- C++17 compatible compiler
- Modern web browser with JavaScript support

### Installation Steps

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-org/HerHaven-Hacktober25.git
   cd HerHaven-Hacktober25
   ```

2. **Database Setup**
   ```bash
   mysql -u root -p < backend/database/schema.sql
   ```

3. **Backend Configuration**
   ```bash
   cp backend/utils/config.example.php backend/utils/config.php
   # Edit config.php with your database credentials
   ```

4. **C++ Module Compilation**
   ```bash
   cd backend/cpp-modules
   g++ -std=c++17 -O2 cycle_prediction.cpp -o cycle_prediction
   g++ -std=c++17 -O2 health_metrics.cpp -o health_metrics
   ```

5. **Web Server Setup**
   - Configure Apache/Nginx to serve the frontend
   - Ensure PHP is enabled for backend APIs
   - Set up SSL certificates for HTTPS

### Development Environment
- **Local Development**: XAMPP/WAMP for Windows, MAMP for macOS
- **Version Control**: Git with feature branch workflow
- **Code Quality**: PSR-12 coding standards for PHP
- **Testing**: Unit tests for critical components

---

## Contributing Guidelines

### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b yourname-feature`
3. Make your changes following the coding standards
4. Test your changes thoroughly
5. Submit a pull request with detailed description

### Code Standards
- **PHP**: Follow PSR-12 coding standards
- **JavaScript**: Use ES6+ features and modular architecture
- **CSS**: Use BEM methodology for class naming
- **C++**: Follow Google C++ Style Guide

### Documentation Requirements
- Update relevant documentation for new features
- Include code comments for complex algorithms
- Maintain API documentation for new endpoints
- Update this technical documentation as needed

### Testing Requirements
- Unit tests for new backend functionality
- Frontend testing for user interface changes
- Integration tests for API endpoints
- Performance testing for C++ modules

---

## Future Enhancements

### Planned Features
- **Machine Learning Integration**: Advanced pattern recognition
- **Mobile Application**: Native iOS and Android apps
- **Healthcare Provider Portal**: Professional dashboard for doctors
- **Data Export**: GDPR-compliant data portability
- **Multi-language Support**: Internationalization features

### Technical Improvements
- **Microservices Architecture**: Scalable backend design
- **Real-time Analytics**: Live health data processing
- **Cloud Deployment**: AWS/Azure infrastructure
- **API Versioning**: Backward compatibility management
- **Performance Optimization**: Caching and CDN integration

---

## Support and Community

### Getting Help
- **GitHub Issues**: Bug reports and feature requests
- **Discussions**: Community questions and ideas
- **Documentation**: Comprehensive guides and tutorials
- **Code Reviews**: Collaborative development process

### Community Guidelines
- **Respectful Communication**: Inclusive and supportive environment
- **Quality Contributions**: Meaningful and well-tested changes
- **Knowledge Sharing**: Help others learn and grow
- **Privacy Respect**: Protect user data and confidentiality

---
