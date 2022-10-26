/**
 * @summary An model representing an entity from the `FactionGroups` table
 *
 * @interface
 * @property {number} Id
 * @property {string} Name
 * @property {boolean} Active - An Int in the SQLite3 database. 1 = True and 0 = False. Some faction groups aren't visible in the game yet.
 */
export interface IFactionGroupEntity {
  Id: number;
  Name: string;
  Active: boolean;
}

export class FactionGroupEntity implements IFactionGroupEntity {
  Id: number;
  Name: string;
  Active: boolean;

  constructor(id = 0, name = '', active = 0) {
    this.Id = id;
    this.Name = name;
    this.Active = active === 1;
  }
}
