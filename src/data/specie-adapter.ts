import type species from './species.json';
import type { Specie } from './types.ts';

export function specieAdapter(specie: typeof species[number]): Specie {
  const {
    id,
    icono,
    nombre,
    cientifico,
    isla,
    amenaza,
    amenazaLabel,
    desc,
    habitat,
    altura,
  } = specie;

  const threatMap: Record<string, "safe" | "threated" | "vulnerable"> = {
    'LC': 'safe',
    'VU': 'vulnerable',
    'EN': 'threated',
  };

  return {
    id,
    icon: icono,
    name: nombre,
    scientificName: cientifico,
    location: isla,
    threat: threatMap[amenaza] ?? 'safe',
    threatLabel: amenazaLabel,
    description: desc,
    habitat,
    height: altura,
  };
}