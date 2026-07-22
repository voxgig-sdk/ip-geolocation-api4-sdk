
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { IpGeolocationApi4SDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await IpGeolocationApi4SDK.test()
    equal(null !== testsdk, true)
  })

})
