import { User } from '../../resources/users/user.model';


export class InMemoryDatabaseCollection<T extends { id: string }> {
    collectionData : Map <string, T>

    constructor() {
        this.collectionData = new Map <string, T>()

    }


    async insert(data : T) : Promise<T> {
        this.collectionData.set(data.id, data)
        return data
    }

    async getAll(): Promise<T[]> {
        return Array.from(this.collectionData.values())
    };

    async getId(id : string)  {
        return this.collectionData.get(id)
    };

    async delete(id : string) : Promise<void>{
        await this.collectionData.delete(id)
    };

    async update(id: string, data : T) : Promise<T | undefined>{
         this.collectionData.set(id, data)
        return this.collectionData.get(id)
    };

}




