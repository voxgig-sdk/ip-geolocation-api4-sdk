<?php
declare(strict_types=1);

// IpGeolocationApi4 SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class IpGeolocationApi4MakeContext
{
    public static function call(array $ctxmap, ?IpGeolocationApi4Context $basectx): IpGeolocationApi4Context
    {
        return new IpGeolocationApi4Context($ctxmap, $basectx);
    }
}
