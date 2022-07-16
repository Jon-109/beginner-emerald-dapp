pub contract HelloWorld2 {

    pub var insult: String

    pub fun changeInsult(newInsult: String) {
        self.insult = newInsult
    }

    init() {
        self.insult = "you are dog water kid"
    }
}