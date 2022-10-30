/**
 * @summary An model representing an entity from the `Factions` table
 *
 * @interface
 * @property {number} Id
 * @property {string} Name
 * @property {string} FactionGroupId - Foreign Key to `FactionGroups`
 * @property {string} RTK_Name - The name of the faction as used in the `Raid Toolkit` api.
 * @property {string} RTK_FactionKey - The key for the faction's keys in the basic resources object
 * @property {boolean} Active - An Int in the SQLite3 database. 1 = True and 0 = False. Some factions aren't visible in the game yet.
 */
export interface IFactionEntity {
  Id: number;
  Name: string;
  FactionGroupId: number;
  RTK_Name: string;
  RTK_FactionKey: string;
  Active: boolean;
}

export class FactionEntity implements IFactionEntity {
  Id: number;
  Name: string;
  FactionGroupId: number;
  RTK_Name: string;
  RTK_FactionKey: string
  Active: boolean;

  constructor(
    id = 0, name = '', factionGroupId = 0,
    rtkName = '', rtkFactionKey = '',
    active = 0
  ) {
    this.Id = id;
    this.Name = name;
    this.FactionGroupId = factionGroupId;
    this.RTK_Name = rtkName;
    this.RTK_FactionKey = rtkFactionKey;
    this.Active = active === 1;
  }
}


export const Factions: IFactionEntity[] = [
	{
		"Id" : 1,
		"Name" : "Banner Lords",
		"FactionGroupId" : 6,
		"RTK_Name" : "BannerLords",
    "RTK_FactionKey": "FractionWarKey_BannerLords",
		"Active" : true
	},
	{
		"Id" : 2,
		"Name" : "Barbarians",
		"FactionGroupId" : 6,
		"RTK_Name" : "Barbarians",
    "RTK_FactionKey": "FractionWarKey_Barbarians",
		"Active" : true
	},
	{
		"Id" : 3,
		"Name" : "High Elves",
		"FactionGroupId" : 6,
		"RTK_Name" : "HighElves",
    "RTK_FactionKey": "FractionWarKey_HighElves",
		"Active" : true
	},
	{
		"Id" : 4,
		"Name" : "Sacred Order",
		"FactionGroupId" : 6,
		"RTK_Name" : "SacredOrder",
    "RTK_FactionKey": "FractionWarKey_SacredOrder",
		"Active" : true
	},
	{
		"Id" : 5,
		"Name" : "Ogryn Tribes",
		"FactionGroupId" : 7,
		"RTK_Name" : "OgrynTribes",
    "RTK_FactionKey": "FractionWarKey_OgrynTribes",
		"Active" : true
	},
	{
		"Id" : 6,
		"Name" : "Lizardmen",
		"FactionGroupId" : 7,
		"RTK_Name" : "LizardMen",
    "RTK_FactionKey": "FractionWarKey_LizardMen",
		"Active" : true
	},
	{
		"Id" : 7,
		"Name" : "Skinwalkers",
		"FactionGroupId" : 7,
		"RTK_Name" : "Skinwalkers",
    "RTK_FactionKey": "FractionWarKey_Skinwalkers",
		"Active" : true
	},
	{
		"Id" : 8,
		"Name" : "Orcs",
		"FactionGroupId" : 7,
		"RTK_Name" : "Orcs",
    "RTK_FactionKey": "FractionWarKey_Orcs",
		"Active" : true
	},
	{
		"Id" : 9,
		"Name" : "Demonspawn",
		"FactionGroupId" : 8,
		"RTK_Name" : "Demonspawn",
    "RTK_FactionKey": "FractionWarKey_Demonspawn",
		"Active" : true
	},
	{
		"Id" : 10,
		"Name" : "Undead Hordes",
		"FactionGroupId" : 8,
		"RTK_Name" : "UndeadHordes",
    "RTK_FactionKey": "FractionWarKey_UndeadHordes",
		"Active" : true
	},
	{
		"Id" : 11,
		"Name" : "Dark Elves",
		"FactionGroupId" : 8,
		"RTK_Name" : "DarkElves",
    "RTK_FactionKey": "FractionWarKey_DarkElves",
		"Active" : true
	},
	{
		"Id" : 12,
		"Name" : "Knights Revenant",
		"FactionGroupId" : 8,
		"RTK_Name" : "KnightsRevenant",
    "RTK_FactionKey": "FractionWarKey_KnightsRevenant",
		"Active" : true
	},
	{
		"Id" : 13,
		"Name" : "Dwarves",
		"FactionGroupId" : 9,
		"RTK_Name" : "Dwarves",
    "RTK_FactionKey": "FractionWarKey_Dwarves",
		"Active" : true
	},
	{
		"Id" : 14,
		"Name" : "Shadowkin",
		"FactionGroupId" : 9,
		"RTK_Name" : "Samurai",
    "RTK_FactionKey": "FractionWarKey_Samurai",
		"Active" : true
	},
	{
		"Id" : 15,
		"Name" : "Unknown",
		"FactionGroupId" : 5,
		"RTK_Name" : "Unknown",
    "RTK_FactionKey": "FractionWarKey_Unknown",
		"Active" : false
	},
	{
		"Id" : 16,
		"Name" : "Coven of Magi",
		"FactionGroupId" : 5,
		"RTK_Name" : "CovenOfMagi",
    "RTK_FactionKey": "FractionWarKey_CovenOfMagi",
		"Active" : false
	},
	{
		"Id" : 17,
		"Name" : "Sylvan Watchers",
		"FactionGroupId" : 9,
		"RTK_Name" : "NyresanElves",
    "RTK_FactionKey": "FractionWarKey_NyresanElves",
		"Active" : true
	}
];
