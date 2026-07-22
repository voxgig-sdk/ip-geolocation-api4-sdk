<?php
declare(strict_types=1);

// IpGeolocationApi4 SDK base feature

class IpGeolocationApi4BaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(IpGeolocationApi4Context $ctx, array $options): void {}
    public function PostConstruct(IpGeolocationApi4Context $ctx): void {}
    public function PostConstructEntity(IpGeolocationApi4Context $ctx): void {}
    public function SetData(IpGeolocationApi4Context $ctx): void {}
    public function GetData(IpGeolocationApi4Context $ctx): void {}
    public function GetMatch(IpGeolocationApi4Context $ctx): void {}
    public function SetMatch(IpGeolocationApi4Context $ctx): void {}
    public function PrePoint(IpGeolocationApi4Context $ctx): void {}
    public function PreSpec(IpGeolocationApi4Context $ctx): void {}
    public function PreRequest(IpGeolocationApi4Context $ctx): void {}
    public function PreResponse(IpGeolocationApi4Context $ctx): void {}
    public function PreResult(IpGeolocationApi4Context $ctx): void {}
    public function PreDone(IpGeolocationApi4Context $ctx): void {}
    public function PreUnexpected(IpGeolocationApi4Context $ctx): void {}
}
