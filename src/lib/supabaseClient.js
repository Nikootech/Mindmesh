const env = (typeof import.meta !== 'undefined' && import.meta.env)
  ? import.meta.env
  : (typeof process !== 'undefined' && process.env ? process.env : {});

const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY;

let clientInstance = null;

export const getSupabase = async () => {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  if (clientInstance) return clientInstance;
  try {
    const { createClient } = await import('@supabase/supabase-js');
    clientInstance = createClient(supabaseUrl, supabaseAnonKey);
    return clientInstance;
  } catch (err) {
    return null;
  }
};

export const supabase = null;
