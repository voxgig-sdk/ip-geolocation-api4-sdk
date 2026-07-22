<?php
declare(strict_types=1);

// IpGeolocationApi4 SDK utility: result_body

class IpGeolocationApi4ResultBody
{
    public static function call(IpGeolocationApi4Context $ctx): ?IpGeolocationApi4Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
