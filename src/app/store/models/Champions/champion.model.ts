import {Hero} from '../RaidCollection/hero.model';
import {Skill} from '@raid-toolkit/webclient';

export interface IChampion extends Hero {
  deleted: boolean;
  equippedArtifactIds: EquippedArtifactIds;
  exp: number;
  fullExp: number;
  idOrigin: number;
  inVault: boolean;
  rank: string;
  SkillsById: {[key: string]: Skill};
  skillLevelsByTypeId: {[key: string]: number};
  type: Type;
}

export interface EquippedArtifactIds {
  Ring: number;
  Boots: number;
  Chest: number;
  Gloves: number;
  Shield: number;
  Helmet: number;
  Weapon: number;
  Cloak: number;
  Banner: number;
}

export interface Type {
  typeId: number;
  name: Name;
  affinity: string;
  faction: string;
  role: string;
  rarity: string;
  ascended: number;
  modelName: string;
  avatarKey: string;
  leaderSkill: LeaderSkill;
  skillTypeIds: number[];
  unscaledStats: UnscaledStats;
  brain: string;
}

export interface UnscaledStats {
  Health: number;
  Attack: number;
  Defense: number;
  Speed: number;
  Resistance: number;
  Accuracy: number;
  CriticalChance: number;
  CriticalDamage: number;
  CriticalHeal: number;
}

export interface LeaderSkill {
  area: string;
  affinity: string;
  kind: string;
  absolute: boolean;
  value: number;
}

export interface Name {
  key: string;
  defaultValue: string;
  localizedValue?: any;
}
