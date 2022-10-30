export interface IRoleEntity {
  Id: number;
  Name: string;
}


export const Roles: IRoleEntity[] = [
	{
		"Id" : 1,
		"Name" : "Attack"
	},
	{
		"Id" : 2,
		"Name" : "Defense"
	},
	{
		"Id" : 3,
		"Name" : "HP"
	},
	{
		"Id" : 4,
		"Name" : "Support"
	}
];
