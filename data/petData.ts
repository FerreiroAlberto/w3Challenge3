type Pets = {
  id: number;
  name: string;
  species: string;
  isAdopted: boolean;
};

export const petList: Pets[] = [
  { id: 879, name: 'Choco', species: 'Perro', isAdopted: false },
  { id: 318, name: 'Kim', species: 'Gato', isAdopted: true },
  { id: 505, name: '2Pac', species: 'Conejo', isAdopted: false },
  { id: 923, name: 'Roy', species: 'Serpiente', isAdopted: false },
];
