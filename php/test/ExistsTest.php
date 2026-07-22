<?php
declare(strict_types=1);

// IpGeolocationApi4 SDK exists test

require_once __DIR__ . '/../ipgeolocationapi4_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = IpGeolocationApi4SDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
