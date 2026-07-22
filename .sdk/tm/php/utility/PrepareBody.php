<?php
declare(strict_types=1);

// IpGeolocationApi4 SDK utility: prepare_body

class IpGeolocationApi4PrepareBody
{
    public static function call(IpGeolocationApi4Context $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
