import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uechmsknmqmnqcaaszln.supabase.co';
const supabaseAnonKey = 'sb_publishable_AksnUzPokgDve7JoMNWyaQ_1-nPRtwx';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);