import { InMemoryDatabaseCollection } from "./InMemoryDatabaseCollection";
import { DatabaseEntity } from './database.type';


export class InMemoryDatabase{
    collections:  Map<unknown, InMemoryDatabaseCollection<DatabaseEntity>>;


  constructor() {
      this.collections = new Map()
  }

   getOrAddCollection<T extends DatabaseEntity>(entity: unknown ) : InMemoryDatabaseCollection<T>  {
      if (!this.collections.has(entity)) {
           this.collections.set(entity, new InMemoryDatabaseCollection())
      }

      return this.collections.get(entity) as InMemoryDatabaseCollection<T>;
  }

}




