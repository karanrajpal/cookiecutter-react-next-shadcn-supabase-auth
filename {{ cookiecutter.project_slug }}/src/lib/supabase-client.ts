import { createClient } from '@supabase/supabase-js'

export const supabaseClient = createClient(process.env.NEXT_PUBLIC_SUPBASE_PROJECT_URL as string, process.env.NEXT_PUBLIC_SUPBASE_API_KEY as string);
