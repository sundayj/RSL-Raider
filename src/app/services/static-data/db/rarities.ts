export interface IRarityEntity {
  Id: number;
  Name: string;
}


export const Rarities: IRarityEntity[] = [
	{
		"Id" : 1,
		"Name" : "Legendary"
	},
	{
		"Id" : 2,
		"Name" : "Epic"
	},
	{
		"Id" : 3,
		"Name" : "Rare"
	},
	{
		"Id" : 4,
		"Name" : "Uncommon"
	},
	{
		"Id" : 5,
		"Name" : "Common"
	}
];
