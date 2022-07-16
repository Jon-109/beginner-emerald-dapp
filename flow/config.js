import { config } from "@onflow/fcl";
import * as fcl from "@onflow/fcl"

fcl.config({
  "app.detail.title": "Emerald Dapp",
  "app.detail.icon": "https://placekitten.com/g/200/200",
  "accessNode.api": "https://rest-testnet.onflow.org", // This connects us to Flow TestNet
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn/" // Allows us to connect to Blocto & Lilico Wallet
})


