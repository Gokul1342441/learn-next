"use client"; // This marks the file as a client-side component

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react"; // useEffect will now work in this file
import { Button } from "@/components/ui/button";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to login if the user is unauthenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/loginpage"); // Redirect to login page if not authenticated
    }
  }, [status]); // Only depend on `status`

  // Loading state when session data is being fetched
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-medium">Loading...</p>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <AppSidebar />
        
        {/* Main content */}
        <main className="flex-1 p-8">
          {/* SidebarTrigger */}
          <SidebarTrigger />

          {/* User Info and Logout Button */}
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome, {session?.user?.name || "User"}!</h1>
            <p className="text-gray-600 mb-4">{session?.user?.email}</p>
            <Button
              variant="outline"
              onClick={() => {
                localStorage.clear(); // Clear any local data
                signOut({ callbackUrl: "/loginpage" }); // Redirect to login page after logout
              }}
            >
              Logout
            </Button>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
