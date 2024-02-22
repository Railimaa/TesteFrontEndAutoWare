/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/prefer-default-export */

import { Frown } from 'lucide-react';

import { Button } from '@ui/components/ui/Button';
import { SkeletonCustom } from '@ui/components/ui/SkeletonCustom';

import { EmptySearch } from './EmptySearch';
import { Header } from './Header';
import { RecallCard } from './RecallCard';
import { useRecallList } from './useRecallList';

export function RecallList() {
  const {
    recalls,
    isInitialLoading,
    filteredListRecalls,
    searchInputValue,
    handleChangeSearchInputValue,
    handleOpenFilterModal,
    isError,
    refetch,
  } = useRecallList();

  const hasRecalls = recalls.length > 0;
  const emptySearch = recalls.length > 0 && filteredListRecalls.length < 1;

  return (
    <>
      {isError && (
      <div className="p-[24px] flex flex-col space-y-10 items-center">
        <div className="flex items-center gap-3">
          <Frown width={40} height={40} color="#fff" />
          <h3 className="text-zinc-200 leading-3 text-xl">Ops...algo inesperado aconteceu!</h3>
        </div>

        <div>
          <Button
            onClick={() => refetch()}
          >
            Tentar novamente
          </Button>
        </div>
      </div>
      )}

      {!isError && (
        <>
          {isInitialLoading && (
            <div className="space-y-4">
              <SkeletonCustom />
              <SkeletonCustom />
              <SkeletonCustom />
            </div>
          )}

          {!isInitialLoading && !hasRecalls && (
            <div>
              <p>None Recall...</p>
            </div>
          )}

          {!isInitialLoading && hasRecalls && (
          <>
            <Header
              searchInputValue={searchInputValue}
              handleChangeSearchInputValue={handleChangeSearchInputValue}
              handleOpenFilterModal={handleOpenFilterModal}
            />

            {emptySearch && (
            <EmptySearch searchInputValue={searchInputValue} />
            )}

            <div>
              <RecallCard
                recalls={filteredListRecalls}
              />
            </div>
          </>

          )}
        </>
      )}

    </>
  );
}
