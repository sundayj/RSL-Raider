/**
 * @summary An model representing an entity from the `Affinities` table
 *
 * @property {number} Id - Id of the Affinity
 * @property {string} Name - Name of the Affinity
 * @property {number} Weak - The id of the Affinity for which this Affinity is weak
 * @property {number} Strong - The id of the Affinity for which this Affinity is strong
 */
export interface IAffinityEntity {
  Id: number;
  Name: string;
  Weak: number;
  Strong: number;
}

export const Affinities: IAffinityEntity[] = [
	{
		"Id" : 1,
		"Name" : "Void",
		"Weak" : 0,
		"Strong" : 0
	},
	{
		"Id" : 2,
		"Name" : "Force",
		"Weak" : 3,
		"Strong" : 4
	},
	{
		"Id" : 3,
		"Name" : "Spirit",
		"Weak" : 4,
		"Strong" : 2
	},
	{
		"Id" : 4,
		"Name" : "Magic",
		"Weak" : 2,
		"Strong" : 3
	}
];
