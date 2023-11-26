import { Model } from 'mongoose';

export type ICow = {
  name: string;
  age: number;
  price: number;
  location: [
    | 'Dhaka'
    | 'Chattogram'
    | 'Barishal'
    | 'Rajshahi'
    | 'Sylhet'
    | 'Comilla'
    | 'Rangpur'
    | 'Mymensingh',
  ];
  breed:
    | 'Brahman'
    | 'Nellore'
    | 'Sahiwal'
    | 'Gir'
    | 'Indigenous'
    | 'Tharparkar'
    | 'Kankrej';
  weight: number;
  label: 'for sale' | 'sold out';
  category: 'Dairy' | 'Beef ' | 'DualPurpose ';
  seller?: string;
};

export type CowModel = Model<ICow>;

export type ICowFilters = {
  searchTerm?: string;
  location?: string;
  breed?: string;
  category?: string;
  label?: string;
};
