export const VENDOR_ID = 0x2b24
export const WEBUSB_PRODUCT_ID = 0x0002
export const HID_PRODUCT_ID = 0x0001

export function makePromise(func: Function, ...args: any[]): Promise<any> {
  return new Promise((resolve) => {
    func(...args, resolve)
  })
}