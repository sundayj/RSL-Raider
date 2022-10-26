import {IFactionGroupEntity} from '../../../services/data/entities/faction-group-entity';
import {IFactionEntity} from '../../../services/data/entities/faction-entity';

export interface IFactionsByFactionGroup {
  factionGroup: IFactionGroupEntity;
  factions: IFactionEntity[];
}
