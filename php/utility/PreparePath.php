<?php
declare(strict_types=1);

// IpGeolocationApi4 SDK utility: prepare_path

class IpGeolocationApi4PreparePath
{
    public static function call(IpGeolocationApi4Context $ctx): string
    {
        $point = $ctx->point;
        $parts = [];
        if ($point) {
            $p = \Voxgig\Struct\Struct::getprop($point, 'parts');
            if (is_array($p)) {
                $parts = $p;
            }
        }
        return \Voxgig\Struct\Struct::join($parts, '/', true);
    }
}
