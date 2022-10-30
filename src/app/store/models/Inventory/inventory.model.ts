import {INIT_SHARDS, IShards} from '../RaidCollection/shard.model';
import {BasicInventoryEnum, MarketInventoryEnum} from '../../enums/inventory.enum';




export interface IInventoryModel {
  shards: IShards,
  market: MarketModel,
  basic: BasicModel
}

enum InventoryModelType {
  BasicModel,
  MarketModel
}


export type BasicModel = {
  [key in keyof BasicInventoryEnum]: number;
}

export type MarketModel = {
  [key in keyof MarketInventoryEnum]: number;
}

const getInitialBasicMarketModel = (modelRequest: InventoryModelType) => {
  let model = {};
  let inventoryEnumType;
  switch (modelRequest) {
    case InventoryModelType.BasicModel:
      inventoryEnumType = BasicInventoryEnum;
      break
    case InventoryModelType.MarketModel:
      inventoryEnumType = MarketInventoryEnum;
      break
    default:
      inventoryEnumType = null;
      break
  }
  if (!inventoryEnumType){return inventoryEnumType;}
  for (const enumKey in inventoryEnumType) {
    model = {
      ...model,
      [enumKey]: 0
    }
  }
};

export const INIT_BASIC_INVENTORY: BasicModel = getInitialBasicMarketModel(InventoryModelType.BasicModel);

export const INIT_MARKET_INVENTORY: MarketModel = getInitialBasicMarketModel(InventoryModelType.MarketModel);

export const INIT_INVENTORY: IInventoryModel = {
  basic: INIT_BASIC_INVENTORY,
  market: INIT_MARKET_INVENTORY,
  shards: INIT_SHARDS

}
