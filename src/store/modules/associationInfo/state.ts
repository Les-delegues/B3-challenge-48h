export type State = {
  title: string;
  acronym: string;
  object: string;
  addressLine1: string;
  addressLine2: string;
  postalCode: number;
  city: string;
  country: string;
  creationDate: Date;
}

export const state: State = {
  title: '',
  acronym: '',
  object: '',
  addressLine1: '',
  addressLine2: '',
  postalCode: 0,
  city: '',
  country: '',
  creationDate: new Date(),
};
