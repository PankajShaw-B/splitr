"use client";

import { ConvexProviderWithClerk} from "convex/react-clerk"
import { useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export function ConvexClientProvider({ children }) {
    return (
    <ConvexProviderWithClerk 
        client={convex}
        useAuth={useAuth}
    >
        {children}
    </ConvexProviderWithClerk>
    );
}