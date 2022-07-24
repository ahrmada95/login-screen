class User {
    constructor(userName, passWord) {
        this.userName = userName;
        this.passWord = passWord;
    }
}

const Users = [
    new User("ahrmada95", "Taipei101VIP123="),
    new User("souBU95", "HagiaSophiaVIP789=")
] 

export { User };
export { Users };