
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient, processLock } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto'

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL! || "https://jxftwquzcegjfwaayxzs.supabase.co",
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY! || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4ZnR3cXV6Y2VnamZ3YWF5eHpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MTMxNzQsImV4cCI6MjA3MDE4OTE3NH0.BusS7g1v0muMa7YCM0JHH0IMQFuZ0WvOCDvp9O8YzHM",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
      lock: processLock,
    },
  })
        