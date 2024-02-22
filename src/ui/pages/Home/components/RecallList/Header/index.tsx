/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/prefer-default-export */
import { Filter } from 'lucide-react';
import React from 'react';

import { InputSearch } from '@ui/components/ui/InputSearch';

interface IHeaderProps {
  searchInputValue: string;
  handleChangeSearchInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOpenFilterModal: () => void;
}

export function Header({
  searchInputValue,
  handleChangeSearchInputValue,
  handleOpenFilterModal,
}: IHeaderProps) {
  return (
    <header className="flex items-center justify-between mb-[30px]">
      <InputSearch
        value={searchInputValue}
        onChange={handleChangeSearchInputValue}
        placeholder="Titúlo, Descrição, Data..."
      />

      <button
        type="button"
        className="outline-none animate-bounce"
        onClick={handleOpenFilterModal}
      >
        <Filter width={20} height={20} color="#fff" />
      </button>
    </header>
  );
}
