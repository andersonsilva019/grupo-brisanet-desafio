import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Home } from "./pages/Home"
import { globalStyles } from './styles/global'

const queryClient = new QueryClient()

globalStyles()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}
