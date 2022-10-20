import {Hero} from './hero.model';
import {IShards} from './shard.model';
import {Artifact} from './artifact.model';
import {IFactionGuardians} from './faction-guardians.model';
import {IGreatHallModel} from './great-hall.model';

export interface AccountDump {
  fileVersion: string;
  id: string;
  name: string;
  artifacts: Artifact[];
  heroes: Hero[];
  arenaLeague: string;
  greatHall: IGreatHallModel;
  factionGuardians: IFactionGuardians;
  shards: IShards;
  stagePresets: { [key: number]: number[]; };
  lastUpdated: Date;
}
