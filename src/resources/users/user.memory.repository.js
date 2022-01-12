const { users } = require('../../common/DB')


class UsersMemoryDB {
    constructor() {
        this.users = users;
    };

    getAll() {
        return new Promise((resolve)=>{
            resolve(this.users);
        })
    };

    getById(id) {
        return new Promise((resolve)=>{
            resolve(this.users.find((user) => user.id === id))
        })
    };

    userUpdate(id, update) {
        return new Promise((resolve) =>{
            const index = this.users.findIndex((u) => u.id === id);
            resolve(this.users[index] = { id, ...update });
        })
    };

    creatUser(user) {
        return new Promise(resolve => {
            resolve(this.users.push(user));
        })

    };

    removeUser(id) {
        return new Promise(resolve => {
            resolve(this.users.filter(b => b.id !== id));
        })
    };
}

const UserDB = new UsersMemoryDB()

module.exports = {
    UserDB
}

