# IpGeolocationApi4 SDK exists test

import pytest
from ipgeolocationapi4_sdk import IpGeolocationApi4SDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = IpGeolocationApi4SDK.test(None, None)
        assert testsdk is not None
