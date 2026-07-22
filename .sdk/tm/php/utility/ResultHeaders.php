<?php
declare(strict_types=1);

// IpGeolocationApi4 SDK utility: result_headers

class IpGeolocationApi4ResultHeaders
{
    public static function call(IpGeolocationApi4Context $ctx): ?IpGeolocationApi4Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
