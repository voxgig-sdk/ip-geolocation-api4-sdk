<?php
declare(strict_types=1);

// IpGeolocationApi4 SDK utility: prepare_headers

class IpGeolocationApi4PrepareHeaders
{
    public static function call(IpGeolocationApi4Context $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
