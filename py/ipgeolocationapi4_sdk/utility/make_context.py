# IpGeolocationApi4 SDK utility: make_context

from ipgeolocationapi4_sdk.core.context import IpGeolocationApi4Context


def make_context_util(ctxmap, basectx):
    return IpGeolocationApi4Context(ctxmap, basectx)
