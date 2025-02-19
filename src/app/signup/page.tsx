"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { BorderBeam } from "@/app/ui/border-beam";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/ui/card";
import { Button } from "@/app/ui/button";
import { Input } from "@/app/ui/input";
import { Label } from "@/app/ui/label";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    // Signup logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      {/* Form Container with Border Beam Effect */}
      <Card className="relative w-[350px] p-6 overflow-hidden">
        <BorderBeam duration={8} size={100} /> {/* Beam only on the form */}
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">Signup</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Enter username"
                className="mt-2 p-2 rounded-md text-black"
              />
            </div>

            <div className="flex flex-col">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Enter email"
                className="mt-2 p-2 rounded-md text-black"
              />
            </div>

            <div className="flex flex-col">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter password"
                className="mt-2 p-2 rounded-md text-black"
              />
            </div>

            <Button onClick={onSignup} className="w-full bg-blue-600 hover:bg-blue-700">
              Signup
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/login" className="text-blue-400 hover:underline">
            Already have an account? Login here.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}