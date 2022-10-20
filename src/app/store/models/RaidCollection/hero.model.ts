import {Affinity, Faction, HeroRole, Rarity, Skill} from '@raid-toolkit/webclient';

export interface Hero {
  id: number;
  typeId: number;
  grade: string;
  level: number;
  empowerLevel: number;
  experience: number;
  fullExperience: number;
  locked: boolean;
  inStorage: boolean;
  isGuardian: boolean;
  marker: string;
  artifacts: number[];
  faction: Faction;
  rarity: Rarity;
  role: HeroRole;
  affinity: Affinity;
  awakenLevel: number;
  name: string;
  health: number;
  accuracy: number;
  attack: number;
  defense: number;
  criticalChance: number;
  criticalDamage: number;
  criticalHeal: number;
  resistance: number;
  speed: number;
  masteries: number[];
  assignedMasteryScrolls: { [key: string]: number; };
  unassignedMasteryScrolls: { [key: string]: number; };
  totalMasteryScrolls: { [key: string]: number; };
  skills: Skill[];
}
