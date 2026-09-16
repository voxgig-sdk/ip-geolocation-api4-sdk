# IpGeolocationApi4 SDK feature factory

from ipgeolocationapi4_sdk.feature.base_feature import IpGeolocationApi4BaseFeature
from ipgeolocationapi4_sdk.feature.ratelimit_feature import IpGeolocationApi4RatelimitFeature
from ipgeolocationapi4_sdk.feature.retry_feature import IpGeolocationApi4RetryFeature
from ipgeolocationapi4_sdk.feature.test_feature import IpGeolocationApi4TestFeature
from ipgeolocationapi4_sdk.feature.timeout_feature import IpGeolocationApi4TimeoutFeature


_FEATURES = {
    "base": lambda: IpGeolocationApi4BaseFeature(),
    "ratelimit": lambda: IpGeolocationApi4RatelimitFeature(),
    "retry": lambda: IpGeolocationApi4RetryFeature(),
    "test": lambda: IpGeolocationApi4TestFeature(),
    "timeout": lambda: IpGeolocationApi4TimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
