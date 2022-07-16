import HelloWorld2 from "../contracts/HelloWorld2.cdc"

transaction(myNewInsult: String) {

  prepare(signer: AuthAccount) {}

  execute {
    HelloWorld2.changeInsult(newInsult: myNewInsult)
  }
}