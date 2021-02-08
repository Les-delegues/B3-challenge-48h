export interface License {
  userId: string;
  licenseNumber: number;
  startDate: Date;
  endDate: Date;
}

export type State = {
  licenses: License[];
}

export const state: State = {
  licenses: [
    {
      userId: '2',
      licenseNumber: 1,
      startDate: new Date('2020-09-01'),
      endDate: new Date('2021-08-01'),
    },
  ],
};
