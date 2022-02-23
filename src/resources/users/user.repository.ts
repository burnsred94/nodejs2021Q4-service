import { InMemoryDatabase }  from '../../common/database/InMemoryDatabase'
import { InMemoryDatabaseCollection } from '../../common/database/InMemoryDatabaseCollection';
import { User } from './user.model';




export class UsersDB {
    private usersCollection: InMemoryDatabaseCollection<User>;

    constructor() {
        this.usersCollection  = new InMemoryDatabase().getOrAddCollection(User);
    };

    getAll() {
        return this.usersCollection.getAll();
    };

    getById(id: string) : Promise <User| undefined> {
        return this.usersCollection.getId(id);
    };

    updateUser(id : string, data : User) : Promise <User | undefined>{
        return this.usersCollection.update(id, data);
    };

    createUser(user : User) {
        return this.usersCollection.insert(user);
    };

    deleteUser(id : string) {
        return this.usersCollection.delete(id);
    };

}




