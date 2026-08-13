# IpGeolocationApi4 SDK feature factory

from ipgeolocationapi4_sdk.feature.base_feature import IpGeolocationApi4BaseFeature
from ipgeolocationapi4_sdk.feature.test_feature import IpGeolocationApi4TestFeature


def _make_feature(name):
    features = {
        "base": lambda: IpGeolocationApi4BaseFeature(),
        "test": lambda: IpGeolocationApi4TestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
