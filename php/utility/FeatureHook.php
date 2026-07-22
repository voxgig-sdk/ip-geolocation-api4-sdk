<?php
declare(strict_types=1);

// IpGeolocationApi4 SDK utility: feature_hook

class IpGeolocationApi4FeatureHook
{
    public static function call(IpGeolocationApi4Context $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
