export interface Artifact {
  id: number;
  sellPrice: number;
  price: number;
  level: number;
  isActivated: boolean;
  kind: string;
  rank: string;
  rarity: string;
  setKind: string;
  isSeen: boolean;
  failedUpgrades: number;
  primaryBonus: ArtifactBonus;
  secondaryBonuses: ArtifactBonus[];
  requiredFraction: string;
}

export interface ArtifactBonus {
  kind: string;
  isAbsolute: boolean;
  value: number;
  enhancement: number;
  level: number;
}
