/* eslint-disable import/prefer-default-export */
export function EmptySearch({ searchInputValue }: { searchInputValue: string }) {
  return (
    <p className="text-zinc-100/40">
      Nenhum resultado encontrado para
      {' '}
      {`"${searchInputValue}"`}
    </p>
  );
}
