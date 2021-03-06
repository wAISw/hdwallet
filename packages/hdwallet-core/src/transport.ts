import * as eventemitter2 from 'eventemitter2'
import { Keyring } from './keyring'

export abstract class Transport extends eventemitter2.EventEmitter2 {
  public keyring: Keyring

  constructor (keyring: Keyring) {
    super()
    this.keyring = keyring
  }

  public abstract getDeviceID(): string

  /**
    * Must emit outgoing message events and communicate with underlying interface
    */
  public abstract call (...args: any[]): Promise<any>

  /**
    * Optional method to bootstrap connection to device
    */
  public connect(): Promise<any> {
    return
  }

  /**
    * Optional method to bootstrap connection to device
    */
  public listen(): Promise<any> {
    return
  }

  /**
    * Optional function that gets called to clean up connection to device
    */
  public disconnect(): Promise<any> {
    return
  }
}
