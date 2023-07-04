import { atom } from 'recoil';

export const selectedNavAtom = atom({
  key: 'selectedNav',
  default: "home"
});

export const isFilterShownAtom = atom({
  key: 'isFilterShown',
  default: false
});

export const selectedFiltersAtom = atom<string[]>({
  key: 'selectedFilters',
  default: []
});
