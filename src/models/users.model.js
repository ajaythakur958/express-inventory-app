export default class usersModel{
    constructor(_id,_name,_email,_password){
        this.id = _id;
        this.name = _name;
        this.email = _email;
        this.password = _password;
    }
    static add(name,email,password){
        const newUser = new usersModel(
            users.length +1,
            name,
            email,
            password
        );
        users.push(newUser);
        console.log(users);
    }
    static isValidUser(email,password){
        const result = users.find(
            (u) => u.email == email && u.password == password            
        );
        console.log(users);
        return result;
    }
};

let users = [];