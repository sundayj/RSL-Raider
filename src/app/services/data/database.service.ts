import { Injectable } from '@angular/core';
// import Database from 'better-sqlite3';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  // open the database
  get DB() {
    return {};//new Database('champs.db', {verbose: console.log, readonly: true, fileMustExist: true});
  }

  constructor() { }

  /**
   * Maps the supplied data to the type of the given object
   * @param {any} data - Raw data object to be mapped
   * @param {T} newEntity - The object on which to map the supplied data
   */
  mapDataToEntity<T>(data: any, newEntity: T): T {
    const newEntityProps = () => {
      return Object.keys(newEntity as unknown as object).map(k => k.toString());
    };
    for (const dataKey of Object.keys(data)) {
      if (newEntityProps().includes(dataKey)){
        newEntity[dataKey] = data[dataKey];
      }
    }
    return newEntity;
  }

  /**
   * Uses supplied query to get data from the database,
   * then map that data to the supplied entity.
   * @param {string} query - SQL query
   * @param {T} newEntity - An entity to use as a template for mapping the returned data
   */
  getAllOfEntity<T>(query: string, newEntity: T){
    // const mappedEntities: T[] = [];
    // const stmt = this.DB.prepare(query);
    // stmt.iterate().forEach((row) => {
    //   const newEntityCopy: T = {...newEntity};
    //   const mappedEntity = this.mapDataToEntity(row, newEntityCopy);
    //   mappedEntities.push(mappedEntity);
    // })
    // return mappedEntities;
  }
}
