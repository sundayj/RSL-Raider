import {ShardType} from '../../enums/shard-type.enum';

export type Shards = {
  [key in keyof ShardType]: ShardInfo;
};

export interface IShards extends Shards {}

export interface ShardSummonInfo {
  rarity: string;
  pullCount: number;
  lastHeroId: number;
}

export interface ShardInfo {
  count: number;
  summonData: ShardSummonInfo[];
}

const getInitShards = (): IShards => {
  let shardInfo: ShardInfo = {
    count: 0,
    summonData: []
  };
  let shards = {};

  for (const shardTypeKey in ShardType) {
    shards = {
      ...shards,
      [shardTypeKey]: shardInfo
    };
  }

  return shards as IShards;
};

export const INIT_SHARDS = getInitShards();
