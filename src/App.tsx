import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useRoutes } from 'react-router-dom'
import { routesObject } from './routes'
import { globalStyles } from './styles/global'

export const queryClient = new QueryClient()

globalStyles()

export function App() {

  let routes = useRoutes(routesObject)

  return (
    <QueryClientProvider client={queryClient}>
      {routes}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
