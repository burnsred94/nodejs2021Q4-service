


class InMemoryDatabaseCollection {
    constructor() {
        this.collectionData = new Map()

    }

    async insert(data) {
        this.collectionData.set(data.id, data)
        return data
    }

    async getAll() {
        return Array.from(this.collectionData.values())
    };

    async getId(id) {
        return this.collectionData.get(id)
    };

    async delete(id) {
        return this.collectionData.delete(id)
    };

    async update(data) {
        return this.collectionData.set(data.id, data)
    };

}


module.exports = new InMemoryDatabaseCollection()



