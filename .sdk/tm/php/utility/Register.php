<?php
declare(strict_types=1);

// IpGeolocationApi4 SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

IpGeolocationApi4Utility::setRegistrar(function (IpGeolocationApi4Utility $u): void {
    $u->clean = [IpGeolocationApi4Clean::class, 'call'];
    $u->done = [IpGeolocationApi4Done::class, 'call'];
    $u->make_error = [IpGeolocationApi4MakeError::class, 'call'];
    $u->feature_add = [IpGeolocationApi4FeatureAdd::class, 'call'];
    $u->feature_hook = [IpGeolocationApi4FeatureHook::class, 'call'];
    $u->feature_init = [IpGeolocationApi4FeatureInit::class, 'call'];
    $u->fetcher = [IpGeolocationApi4Fetcher::class, 'call'];
    $u->make_fetch_def = [IpGeolocationApi4MakeFetchDef::class, 'call'];
    $u->make_context = [IpGeolocationApi4MakeContext::class, 'call'];
    $u->make_options = [IpGeolocationApi4MakeOptions::class, 'call'];
    $u->make_request = [IpGeolocationApi4MakeRequest::class, 'call'];
    $u->make_response = [IpGeolocationApi4MakeResponse::class, 'call'];
    $u->make_result = [IpGeolocationApi4MakeResult::class, 'call'];
    $u->make_point = [IpGeolocationApi4MakePoint::class, 'call'];
    $u->make_spec = [IpGeolocationApi4MakeSpec::class, 'call'];
    $u->make_url = [IpGeolocationApi4MakeUrl::class, 'call'];
    $u->param = [IpGeolocationApi4Param::class, 'call'];
    $u->prepare_auth = [IpGeolocationApi4PrepareAuth::class, 'call'];
    $u->prepare_body = [IpGeolocationApi4PrepareBody::class, 'call'];
    $u->prepare_headers = [IpGeolocationApi4PrepareHeaders::class, 'call'];
    $u->prepare_method = [IpGeolocationApi4PrepareMethod::class, 'call'];
    $u->prepare_params = [IpGeolocationApi4PrepareParams::class, 'call'];
    $u->prepare_path = [IpGeolocationApi4PreparePath::class, 'call'];
    $u->prepare_query = [IpGeolocationApi4PrepareQuery::class, 'call'];
    $u->result_basic = [IpGeolocationApi4ResultBasic::class, 'call'];
    $u->result_body = [IpGeolocationApi4ResultBody::class, 'call'];
    $u->result_headers = [IpGeolocationApi4ResultHeaders::class, 'call'];
    $u->transform_request = [IpGeolocationApi4TransformRequest::class, 'call'];
    $u->transform_response = [IpGeolocationApi4TransformResponse::class, 'call'];
});
