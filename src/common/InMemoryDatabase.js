

let collection = {}



class InMemoryDatabaseCollection {
  constructor() {
    this.collection = collection
  }
    insert(data){
        this.collection.push(data)
    }

    get(data){
      return this.collection.find((collection) => collection[data] === data)
    };

    delete(data) {
        return this.collection.filter((collection)=> collection[data] !== data)
    }
    getList(data) {
        return this.collection[data]
    }
}

class InMemoryDatabase {
  constructor() {
      this.collections = collection
  }

  getOrAddCollection (collectionName) {
      if (!this.collections[collectionName]) {
          this.collections[collectionName] = new InMemoryDatabaseCollection()
      }
      return this.collections[collectionName]
  }

}



module.exports = new InMemoryDatabase();
