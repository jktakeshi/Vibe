"use client"

import { Database } from "@/types_db"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

interface SupabaseProviderProps {
    children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({children}) => {
    // only run once
    const [supabaseClient] = useState(() =>
        createClientComponentClient<Database>()
    );
    
    return (
        // pass supabaseClient to provider
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    )
}

export default SupabaseProvider;