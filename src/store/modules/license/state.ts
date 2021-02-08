export interface License {
  licenseNumber: number;
  startDate: Date;
  endDate: Date;
}

export type State = {
  licenses: License[];
}

export const state: State = {
  licenses: [],
};
