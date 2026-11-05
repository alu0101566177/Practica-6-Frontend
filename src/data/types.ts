export type Specie = {
  id: string;
  icon: string;
  name: string;
  scientificName: string;
  location: string;
  threat: 'threated' | 'vulnerable' | 'safe';
  threatLabel?: string;
  description: string;
  habitat: string;
  height: string;
}

export type SpecieSummary = Omit<Specie, 'description' | 'habitat' | 'height'>;