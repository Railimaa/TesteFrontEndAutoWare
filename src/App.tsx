/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import { queryClient } from '@app/libs/QueryClient';
import { Router } from '@app/Router';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />

      <Toaster />
    </QueryClientProvider>
  );
}
