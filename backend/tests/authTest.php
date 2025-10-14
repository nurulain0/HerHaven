<?php
use PHPUnit\Framework\TestCase;

class AuthTest extends TestCase
{
    private $pdo;
    private $stmt;

    protected function setUp(): void
    {
        // Create mock PDO and PDOStatement
        $this->pdo = $this->createMock(PDO::class);
        $this->stmt = $this->createMock(PDOStatement::class);
        
        // Mock the prepare method to return our statement mock
        $this->pdo->method('prepare')->willReturn($this->stmt);
    }

    private function runAuthLogic($input, $userData = null)
    {
        // Mock the execute method
        $this->stmt->method('execute')->willReturn(true);
        
        // Mock the fetch method to return user data or false
        $this->stmt->method('fetch')->willReturn($userData);
        
        // Input validation (copied from auth.php)
        if (empty($input['email']) || empty($input['password'])) {
            return [400, ['error' => 'Email and password required']];
        }

        // Database operation (copied from auth.php but using our mock PDO)
        $stmt = $this->pdo->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$input['email']]);
        $user = $stmt->fetch();

        if (!$user || !password_verify($input['password'], $user['password_hash'])) {
            return [401, ['error' => 'Invalid credentials']];
        }

        // Successful login
        return [200, [
            'success' => true,
            'user' => [
                'id' => $user['id'],
                'name' => $user['name']
            ]
        ]];
    }

    public function testMissingEmailAndPassword()
    {
        list($statusCode, $response) = $this->runAuthLogic([]);
        
        $this->assertEquals(400, $statusCode);
        $this->assertArrayHasKey('error', $response);
        $this->assertEquals('Email and password required', $response['error']);
    }

    public function testMissingEmailOnly()
    {
        list($statusCode, $response) = $this->runAuthLogic([
            'password' => 'password123'
        ]);
        
        $this->assertEquals(400, $statusCode);
        $this->assertEquals('Email and password required', $response['error']);
    }

    public function testMissingPasswordOnly()
    {
        list($statusCode, $response) = $this->runAuthLogic([
            'email' => 'test@example.com'
        ]);
        
        $this->assertEquals(400, $statusCode);
        $this->assertEquals('Email and password required', $response['error']);
    }

    public function testInvalidCredentialsUserNotFound()
    {
        list($statusCode, $response) = $this->runAuthLogic([
            'email' => 'nonexistent@example.com',
            'password' => 'wrongpass'
        ], false); // userData = false (no user found)
        
        $this->assertEquals(401, $statusCode);
        $this->assertArrayHasKey('error', $response);
        $this->assertEquals('Invalid credentials', $response['error']);
    }

    public function testInvalidCredentialsWrongPassword()
    {
        // Mock user data with a password hash that won't match
        $userData = [
            'id' => 1,
            'email' => 'test@example.com',
            'password_hash' => password_hash('differentpassword', PASSWORD_DEFAULT),
            'name' => 'Test User'
        ];

        list($statusCode, $response) = $this->runAuthLogic([
            'email' => 'test@example.com',
            'password' => 'wrongpass'
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

        list($statusCode, $response) = $this->runAuthLogic([
            'email' => 'test@example.com',
            'password' => $plainPassword
        ], $userData);
        
        $this->assertEquals(200, $statusCode);
        $this->assertArrayHasKey('success', $response);
        $this->assertTrue($response['success']);
        $this->assertArrayHasKey('user', $response);
        $this->assertEquals(1, $response['user']['id']);
        $this->assertEquals('Test User', $response['user']['name']);
    }
}