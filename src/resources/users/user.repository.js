const InMemoryDatabase = require('../../common/database/InMemoryDatabase')


class UsersDB {
    constructor() {
        this.usersCollection = InMemoryDatabase.getOrAddCollection('users');
    };

    getAll() {
        return this.usersCollection.getAll();
    };

    getById(id) {
        return this.usersCollection.getId(id);
    };

    updateUser(dataUser) {
        return this.usersCollection.update(dataUser);
    };

    createUser(user) {
        return this.usersCollection.insert(user);
    };

    deleteUser(id) {
        return this.usersCollection.delete(id);
    };

};


module.exports = new UsersDB();

