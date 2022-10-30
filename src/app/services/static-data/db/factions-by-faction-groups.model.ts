import {IFactionEntity} from './factions';
import {IFactionGroupEntity} from './faction-groups';

export interface IFactionsByFactionGroup {
  factionGroup: IFactionGroupEntity;
  factions: IFactionEntity[];
}
