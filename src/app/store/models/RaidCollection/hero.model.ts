import {Affinity, Faction, HeroRole, Rarity, Skill} from '@raid-toolkit/webclient';

export interface Hero {
  accuracy: number;
  affinity: Affinity;
  artifacts: number[];
  assignedMasteryScrolls: { [key: string]: number; };
  attack: number;
  awakenLevel: number;
  criticalChance: number;
  criticalDamage: number;
  criticalHeal: number;
  defense: number;
  empowerLevel: number;
  experience: number;
  faction: Faction;
  fullExperience: number;
  grade: string;
  health: number;
  id: number;
  isGuardian: boolean;
  inStorage: boolean;
  level: number;
  locked: boolean;
  marker: string;
  masteries: number[];
  name: string;
  rarity: Rarity;
  resistance: number;
  role: HeroRole;
  skills: Skill[];
  speed: number;
  totalMasteryScrolls: { [key: string]: number; };
  typeId: number;
  unassignedMasteryScrolls: { [key: string]: number; };
}
const example = {
  "typeId": 220,
  "type": {
    "typeId": 220,
    "name": {
      "key": "l10n:hero-type/name?id=220#static",
      "defaultValue": "Bandit",
      "localizedValue": null
    },
    "affinity": "Spirit",
    "faction": "BannerLords",
    "role": "Attack",
    "rarity": "Common",
    "ascended": 0,
    "modelName": "0039_Archer",
    "avatarKey": "220",
    "leaderSkill": null,
    "skillTypeIds": [2201],
    "unscaledStats": {
      "Health": 52,
      "Attack": 89,
      "Defense": 59,
      "Speed": 98,
      "Resistance": 30,
      "Accuracy": 0,
      "CriticalChance": 15,
      "CriticalDamage": 50,
      "CriticalHeal": 50
    },
    "brain": "Clever"
  },
  "name": "Bandit",
  "id": 26776,
  "idOrigin": 0,
  "level": 1,
  "empowerLevel": 0,
  "rank": "Stars1",
  "exp": 0,
  "fullExp": 0,
  "deleted": true,
  "locked": false,
  "inVault": false,
  "marker": "None",
  "masteries": [],
  "assignedMasteryScrolls": {},
  "unassignedMasteryScrolls": {},
  "totalMasteryScrolls": {},
  "equippedArtifactIds": {},
  "skillLevelsByTypeId": {
    "2201": 1
  },
  "SkillsById": {
    "0": {
      "typeId": 2201,
      "id": 0,
      "level": 1
    }
  }
}
