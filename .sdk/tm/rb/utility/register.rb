# IpGeolocationApi4 SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

IpGeolocationApi4Utility.registrar = ->(u) {
  u.clean = IpGeolocationApi4Utilities::Clean
  u.done = IpGeolocationApi4Utilities::Done
  u.make_error = IpGeolocationApi4Utilities::MakeError
  u.feature_add = IpGeolocationApi4Utilities::FeatureAdd
  u.feature_hook = IpGeolocationApi4Utilities::FeatureHook
  u.feature_init = IpGeolocationApi4Utilities::FeatureInit
  u.fetcher = IpGeolocationApi4Utilities::Fetcher
  u.make_fetch_def = IpGeolocationApi4Utilities::MakeFetchDef
  u.make_context = IpGeolocationApi4Utilities::MakeContext
  u.make_options = IpGeolocationApi4Utilities::MakeOptions
  u.make_request = IpGeolocationApi4Utilities::MakeRequest
  u.make_response = IpGeolocationApi4Utilities::MakeResponse
  u.make_result = IpGeolocationApi4Utilities::MakeResult
  u.make_point = IpGeolocationApi4Utilities::MakePoint
  u.make_spec = IpGeolocationApi4Utilities::MakeSpec
  u.make_url = IpGeolocationApi4Utilities::MakeUrl
  u.param = IpGeolocationApi4Utilities::Param
  u.prepare_auth = IpGeolocationApi4Utilities::PrepareAuth
  u.prepare_body = IpGeolocationApi4Utilities::PrepareBody
  u.prepare_headers = IpGeolocationApi4Utilities::PrepareHeaders
  u.prepare_method = IpGeolocationApi4Utilities::PrepareMethod
  u.prepare_params = IpGeolocationApi4Utilities::PrepareParams
  u.prepare_path = IpGeolocationApi4Utilities::PreparePath
  u.prepare_query = IpGeolocationApi4Utilities::PrepareQuery
  u.result_basic = IpGeolocationApi4Utilities::ResultBasic
  u.result_body = IpGeolocationApi4Utilities::ResultBody
  u.result_headers = IpGeolocationApi4Utilities::ResultHeaders
  u.transform_request = IpGeolocationApi4Utilities::TransformRequest
  u.transform_response = IpGeolocationApi4Utilities::TransformResponse
}
