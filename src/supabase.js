import { createClient } from "@supabase/supabase-js";


const URL = "https://cmiqfrksphslfqcfwaar.supabase.co";
const KEY = import.meta.env.VITE_SUPABASE_KEY;

// const URL = import.meta.env.VITE_SUPABASE_URL;
// const KEY = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(URL,KEY);