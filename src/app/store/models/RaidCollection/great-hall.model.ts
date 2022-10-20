import {Affinity as AffinityEnum, StatKindId} from '@raid-toolkit/webclient/lib/Types/Enums';

export type GreatHallModel = {
  [key in keyof AffinityEnum]: {
    [key in StatKindId]: number;
  };
};

export interface IGreatHallModel extends GreatHallModel {
  name: string;
}

const getInitialGreatHall = (): IGreatHallModel => {
  let stats = {};
  let greatHall = {};

  for (const statKindIdKey in StatKindId) {
    stats = {
      ...stats,
      [statKindIdKey]: 0
    };
  }

  for (const affinityEnumKey in AffinityEnum) {
    greatHall = {
      ...greatHall,
      [affinityEnumKey]: stats
    };
  }

  return greatHall as IGreatHallModel;
};

export const INIT_GREAT_HALL = getInitialGreatHall();
