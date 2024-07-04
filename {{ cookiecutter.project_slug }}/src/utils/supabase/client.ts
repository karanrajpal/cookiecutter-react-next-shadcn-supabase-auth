import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPBASE_PROJECT_URL!,
    process.env.NEXT_PUBLIC_SUPBASE_API_KEY!
  )
}