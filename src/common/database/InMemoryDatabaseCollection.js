const { v4:uuid } = require('uuid')


class InMemoryDatabaseCollection {
    constructor() {
        this.collectionData = new Map()

    }

    async insert(data){
        const dataWithGeneratedId = {
            id: uuid() ,
            ...data,
        }
            this.collectionData.set(dataWithGeneratedId.id, dataWithGeneratedId)
            return dataWithGeneratedId
        }

    async getAll(){
        return Array.from(this.collectionData.values())
    };

    async getId(id){
        return this.collectionData.get(id)
    };

    async delete(id){
        return this.collectionData.delete(id)
    };

    async update(data){
      return this.collectionData.set(data.id, data)
    };

}

module.exports = new InMemoryDatabaseCollection()



