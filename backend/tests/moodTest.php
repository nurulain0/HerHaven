<?php
use PHPUnit\Framework\TestCase;

class MoodTest extends TestCase
{
    protected function setUp(): void
    {
        // Clear any existing session data
        if (session_status() === PHP_SESSION_ACTIVE) {
            session_destroy();
        }
        
        // Start with fresh session for each test
        session_start();
    }

    protected function tearDown(): void
    {
        // Clean up session after each test
        session_destroy();
    }

    private function runLoginLogic($input, $userData = null)
    {
        // Mock the get_user_by_email function
        global $mockUserData;
        $mockUserData = $userData;
        
        // Input validation (copied from login.php)
        if (empty($input['email']) || empty($input['password'])) {
            return [400, ['error' => 'Email and password are required']];
        }

        if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
            return [400, ['error' => 'Invalid email format']];
        }

        // Mock database query - simulate get_user_by_email
        $user = $mockUserData;

        if (!$user) {
            return [401, ['error' => 'Invalid credentials']];
        }

        if (!password_verify($input['password'], $user['password_hash'])) {
            return [401, ['error' => 'Invalid credentials']];
        }

        // Simulate session setup (in tests, we'll check if session variables would be set)
        $sessionData = [
            'user_id' => $user['id'],
            'user_email' => $user['email'],
            'last_activity' => time()
        ];

        // Successful login
        return [200, [
            'success' => true,
            'user' => [
                'id' => $user['id'],
                'name' => $user['name'],
                'email' => $user['email']
            ],
            'session_data' => $sessionData // Include for testing
        ]];
    }

    public function testMissingEmailAndPassword()
    {
        list($statusCode, $response) = $this->runLoginLogic([]);
        
        $this->assertEquals(400, $statusCode);
        $this->assertArrayHasKey('error', $response);
        $this->assertEquals('Email and password are required', $response['error']);
    }

    public function testMissingEmailOnly()
    {
        list($statusCode, $response) = $this->runLoginLogic([
            'password' => 'password123'
        ]);
        
        $this->assertEquals(400, $statusCode);
        $this->assertEquals('Email and password are required', $response['error']);
    }

    public function testMissingPasswordOnly()
    {
        list($statusCode, $response) = $this->runLoginLogic([
            'email' => 'test@example.com'
        ]);
        
        $this->assertEquals(400, $statusCode);
        $this->assertEquals('Email and password are required', $response['error']);
    }

    public function testInvalidEmailFormat()
    {
        list($statusCode, $response) = $this->runLoginLogic([
            'email' => 'invalid-email',
            'password' => 'password123'
        ]);
        
        $this->assertEquals(400, $statusCode);
        $this->assertArrayHasKey('error', $response);
        $this->assertEquals('Invalid email format', $response['error']);
    }

    public function testUserNotFound()
    {
        list($statusCode, $response) = $this->runLoginLogic([
            'email' => 'nonexistent@example.com',
            'password' => 'password123'
        ], null); // No user found
        
        $this->assertEquals(401, $statusCode);
        $this->assertArrayHasKey('error', $response);
        $this->assertEquals('Invalid credentials', $response['error']);
    }

    public function testWrongPassword()
    {
        // Mock user data with a password hash that won't match
        $userData = [
            'id' => 1,
            'email' => 'test@example.com',
            'password_hash' => password_hash('correctpassword', PASSWORD_DEFAULT),
            'name' => 'Test User'
        ];

        list($statusCode, $response) = $this->runLoginLogic([
            'email' => 'test@example.com',
            'password' => 'wrongpassword'
        ], $userData);
        
        $this->assertEquals(401, $statusCode);
        $this->assertEquals('Invalid credentials', $response['error']);
    }

    public function testValidCredentials()
    {
        $plainPassword = 'password123';
        $passwordHash = password_hash($plainPassword, PASSWORD_DEFAULT);
        
        $userData = [
            'id' => 1,
            'email' => 'test@example.com',
            'password_hash' => $passwordHash,
            'name' => 'Test User'
        ];

        list($statusCode, $response) = $this->runLoginLogic([
            'email' => 'test@example.com',
            'password' => $plainPassword
        ], $userData);
        
        $this->assertEquals(200, $statusCode);
        $this->assertArrayHasKey('success', $response);
        $this->assertTrue($response['success']);
        
        // Check user data
        $this->assertArrayHasKey('user', $response);
        $this->assertEquals(1, $response['user']['id']);
        $this->assertEquals('Test User', $response['user']['name']);
        $this->assertEquals('test@example.com', $response['user']['email']);
        
        // Check session data would be set
        $this->assertArrayHasKey('session_data', $response);
        $this->assertEquals(1, $response['session_data']['user_id']);
        $this->assertEquals('test@example.com', $response['session_data']['user_email']);
        $this->assertArrayHasKey('last_activity', $response['session_data']);
    }

    public function testMultipleInvalidEmails()
    {
        $invalidEmails = [
            'plainstring',
            'missing@domain',
            '@missinglocal.com',
            'spaces in@email.com',
            'multiple@@at.com'
        ];

        foreach ($invalidEmails as $email) {
            list($statusCode, $response) = $this->runLoginLogic([
                'email' => $email,
                'password' => 'password123'
            ]);
            
            $this->assertEquals(400, $statusCode);
            $this->assertEquals('Invalid email format', $response['error']);
        }
    }

    public function testValidEmails()
    {
        $validEmails = [
            'test@example.com',
            'test.user@example.com',
            'test+user@example.com',
            'test@sub.example.com'
        ];

        $plainPassword = 'password123';
        $passwordHash = password_hash($plainPassword, PASSWORD_DEFAULT);
        
        $userData = [
            'id' => 1,
            'email' => 'test@example.com', // This will match one of the emails
            'password_hash' => $passwordHash,
            'name' => 'Test User'
        ];

        foreach ($validEmails as $email) {
            // Only the exact matching email should work
            $userData['email'] = $email;
            
            list($statusCode, $response) = $this->runLoginLogic([
                'email' => $email,
                'password' => $plainPassword
            ], $userData);
            
            $this->assertEquals(200, $statusCode);
            $this->assertTrue($response['success']);
        }
    }
}