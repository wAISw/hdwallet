import React from "react";
import {
  Keyring,
  HDWallet
  // Events
} from "@shapeshiftoss/hdwallet-core";

import { WebUSBKeepKeyAdapter } from "@shapeshiftoss/hdwallet-keepkey-webusb";
import { TrezorAdapter } from "@shapeshiftoss/hdwallet-trezor-connect";

export interface HDWalletContextValue {
  keyring: Keyring;
  pairedDevices: { [index: string]: HDWallet };
  getAdapter: () => WebUSBKeepKeyAdapter | TrezorAdapter | any;
}

let hdWalletContext: React.Context<HDWalletContextValue>;

const initialValue = {
  keyring: new Keyring(),
  pairedDevices: {},
  getAdapter: () => {}
};

export function getHDWalletContext() {
  if (!hdWalletContext) {
    hdWalletContext = React.createContext<HDWalletContextValue>(initialValue);
  }
  return hdWalletContext;
}

export function resethdWalletContext() {
  hdWalletContext = React.createContext<HDWalletContextValue>(initialValue);
}
