
import { Context } from './Context'


class IpGeolocationApi4Error extends Error {

  isIpGeolocationApi4Error = true

  sdk = 'IpGeolocationApi4'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  IpGeolocationApi4Error
}

