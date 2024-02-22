/* eslint-disable import/prefer-default-export */
import { Header } from '@ui/components/Header';

import { RecallList } from './components/RecallList';
import { RecallFilterModal } from './components/RecallList/Modals/RecallFilterModal';
import { RecallProvider } from './components/RecallList/RecallContext';

export function Home() {
  return (
    <RecallProvider>
      <Header />

      <div className="bg-zinc-950 min-h-screen px-[16px] pt-[32px] flex flex-col">
        <main className="mx-auto w-full max-w-[500px] px-[16px] p-[32px]">
          <RecallList />
        </main>

        <RecallFilterModal />
      </div>

    </RecallProvider>
  );
}
