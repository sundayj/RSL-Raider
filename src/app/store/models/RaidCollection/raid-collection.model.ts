import {AccountDump} from './account-dump.model';
import {INIT_GREAT_HALL} from './great-hall.model';
import {INIT_FACTION_GUARDIANS} from './faction-guardians.model';
import {INIT_SHARDS} from './shard.model';

export interface RaidCollection extends AccountDump {}

export const InitRaidCollection: RaidCollection = {
  arenaLeague: '',
  artifacts: [],
  factionGuardians: INIT_FACTION_GUARDIANS,
  fileVersion: '',
  greatHall: INIT_GREAT_HALL,
  heroes: [],
  id: '',
  lastUpdated: new Date(),
  name: '',
  shards: INIT_SHARDS,
  stagePresets: {}
};
