const InMemoryDatabaseCollection = require("./InMemoryDatabaseCollection");


class InMemoryDatabase {
  constructor() {
      this.collections = new Map()
  }

  getOrAddCollection (collectionName) {
      if (!this.collections.has(collectionName)) {
          this.collections.set(collectionName, InMemoryDatabaseCollection)
      }
      return this.collections.get(collectionName)
  }

}

const database = new InMemoryDatabase()


module.exports = database;
