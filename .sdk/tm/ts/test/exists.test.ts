
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { IpGeolocationApi4SDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = IpGeolocationApi4SDK.test()
    equal(testsdk instanceof IpGeolocationApi4SDK, true,
      'IpGeolocationApi4SDK.test() must return a client synchronously')
  })

})
