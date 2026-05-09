/**
 * Supabase Client Configuration
 * 
 * This file initializes the Supabase client with your project credentials.
 * The credentials are loaded from environment variables for security.
 */

import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate that credentials are present
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    '❌ Missing Supabase credentials! Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file'
  );
}

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
