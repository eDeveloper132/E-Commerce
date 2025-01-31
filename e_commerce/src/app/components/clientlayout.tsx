// app/ClientWrapper.tsx
"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isStudioRoute = pathname === "/studio";

  return (
    <>
      {isStudioRoute ? (
        children
      ) : (
        <ClerkProvider>
          {children}
        </ClerkProvider>
      )}
    </>
  );
}