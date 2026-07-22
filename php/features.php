<?php
declare(strict_types=1);

// IpGeolocationApi4 SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class IpGeolocationApi4Features
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new IpGeolocationApi4BaseFeature();
            case "test":
                return new IpGeolocationApi4TestFeature();
            default:
                return new IpGeolocationApi4BaseFeature();
        }
    }
}
