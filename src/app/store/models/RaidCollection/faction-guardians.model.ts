import { Faction as FactionEnum } from "@raid-toolkit/webclient/lib/Types/Enums";
import {Rarity} from '@raid-toolkit/webclient';


export type FactionGuardians = {
  [key in keyof FactionEnum]: {
    [key in Rarity]: number;
  };
};

export interface IFactionGuardians extends FactionGuardians {}

const getInitialFactionGuardians = (): IFactionGuardians => {
  let rarityCount = {};
  let factionGuardians = {};

  for (const rarityKey in Rarity) {
    rarityCount = {
      ...rarityCount,
      [rarityKey]: 0
    };
  }

  for (const factionEnumKey in FactionEnum) {
    factionGuardians = {
      ...factionGuardians,
      [factionEnumKey]: rarityCount
    };
  }

  return factionGuardians as IFactionGuardians;
};

export const INIT_FACTION_GUARDIANS = getInitialFactionGuardians();
