import ServiceManager from './SvcManager'
import EventEmitter from 'events'

export default class BaseSvc extends EventEmitter {

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  constructor(opts = {}) {

    super()

    this._config = opts.config || {}
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  name() {

    return this._name
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  config() {

    return this._config
  }
}