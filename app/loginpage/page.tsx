"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Welcome Back</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">
            Please sign in to continue. Choose your preferred method:
          </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button
            variant="default"
            className="w-full"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/homepage", // Redirect to homepage after login
              })
            }
          >
            Login with Google
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() =>
              signIn("github", {
                callbackUrl: "/homepage", // Redirect to homepage after login
              })
            }
          >
            Login with GitHub
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
