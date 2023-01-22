import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Home } from "./pages/Home"
import { globalStyles } from './styles/global'

const queryClient = new QueryClient()

globalStyles()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
