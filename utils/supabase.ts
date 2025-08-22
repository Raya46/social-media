
import { createClient, processLock } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL! || "https://llwnkeadrwizhwnbvpbz.supabase.co",
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY! || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxsd25rZWFkcndpemh3bmJ2cGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4MjMyNzgsImV4cCI6MjA3MTM5OTI3OH0.52FhRX5w2UW03kw9DtmgiynLa3IsBbIahUQ3OD6P6G0",
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
      lock: processLock,
    },
  })
        