/**
 * @summary An model representing an entity from the `Factions` table
 *
 * @interface
 * @property {number} Id
 * @property {string} Name
 * @property {string} FactionGroupId - Foreign Key to `FactionGroups`
 * @property {string} RTK_Name - The name of the faction as used in the `Raid Toolkit` api.
 * @property {boolean} Active - An Int in the SQLite3 database. 1 = True and 0 = False. Some factions aren't visible in the game yet.
 */
export interface IFactionEntity {
  Id: number;
  Name: string;
  FactionGroupId: number;
  RTK_Name: string;
  Active: boolean;
}

export class FactionEntity implements IFactionEntity {
  Id: number;
  Name: string;
  FactionGroupId: number;
  RTK_Name: string;
  Active: boolean;

  constructor(id = 0, name = '', factionGroupId = 0, rtkName = '', active = 0) {
    this.Id = id;
    this.Name = name;
    this.FactionGroupId = factionGroupId;
    this.RTK_Name = rtkName;
    this.Active = active === 1;
  }
}
