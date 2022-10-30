import { Faction as FactionEnum } from "@raid-toolkit/webclient/lib/Types/Enums";
import {Rarity} from '@raid-toolkit/webclient';


export type FactionGuardians = {
  [key in keyof FactionEnum]: {
    [key in Rarity]: number;
  };
};

/**
 * @example {
 *     "Unknown": {
 *         "Common": 0,
 *         "Uncommon": 0,
 *         "Rare": 0,
 *         "Epic": 0,
 *         "Legendary": 0
 *     },
 *     "BannerLords": {
 *         "Rare": 5,
 *         "Epic": 5
 *     },
 *     "HighElves": {
 *         "Rare": 5,
 *         "Epic": 5
 *     },
 *     "SacredOrder": {
 *         "Epic": 5,
 *         "Rare": 5,
 *         "Legendary": 1
 *     },
 *     "CovenOfMagi": {
 *         "Common": 0,
 *         "Uncommon": 0,
 *         "Rare": 0,
 *         "Epic": 0,
 *         "Legendary": 0
 *     },
 *     "OgrynTribes": {
 *         "Rare": 5,
 *         "Epic": 5
 *     },
 *     "LizardMen": {
 *         "Epic": 3,
 *         "Rare": 5
 *     },
 *     "Skinwalkers": {
 *         "Rare": 5,
 *         "Epic": 5
 *     },
 *     "Orcs": {
 *         "Rare": 5,
 *         "Epic": 4
 *     },
 *     "Demonspawn": {
 *         "Rare": 5,
 *         "Epic": 5
 *     },
 *     "UndeadHordes": {
 *         "Rare": 5,
 *         "Epic": 5
 *     },
 *     "DarkElves": {
 *         "Rare": 5,
 *         "Epic": 3
 *     },
 *     "KnightsRevenant": {
 *         "Epic": 4,
 *         "Rare": 5
 *     },
 *     "Barbarians": {
 *         "Epic": 4,
 *         "Rare": 5
 *     },
 *     "NyresanElves": {
 *         "Common": 0,
 *         "Uncommon": 0,
 *         "Rare": 0,
 *         "Epic": 0,
 *         "Legendary": 0
 *     },
 *     "Samurai": {
 *         "Rare": 5,
 *         "Epic": 5,
 *         "Legendary": 1
 *     },
 *     "Dwarves": {
 *         "Rare": 5,
 *         "Epic": 3
 *     }
 * }
 */
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
