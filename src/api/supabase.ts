import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ooszicfynlpqvpfwdunb.supabase.co';

// supabase public key
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vc3ppY2Z5bmxwcXZwZndkdW5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2MDg3NzksImV4cCI6MjAzODE4NDc3OX0.3cF8aUZPidDeganMnmigNWZHEp8RHIBbWCvQvnP80oU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
