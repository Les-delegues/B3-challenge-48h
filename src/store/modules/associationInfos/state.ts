export type State = {
  name: string;
  acronym: string | null;
  object: string;
  addressLine1: string;
  addressLine2: string | null;
  zipCode: number;
  city: string;
  country: string;
  creationDate: Date;
};

export const state: State = {
  name: 'Club de Canne et Bâton d’Aquitaine',
  acronym: 'CCBA',
  object: 'Association de sport (canne et bâton de combat)',
  addressLine1: '12 Rue de Bègles',
  addressLine2: null,
  zipCode: 33800,
  city: 'Bordeaux',
  country: 'France',
  creationDate: new Date('1980-10-17'),
};
