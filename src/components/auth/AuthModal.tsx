import React, { useState } from "react";
import { Mail, Lock, User, AtSign, Facebook, Github, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AuthModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultTab?: "login" | "signup";
  onLogin?: (data: { email: string; password: string }) => void;
  onSignup?: (data: { name: string; email: string; password: string }) => void;
  onSocialLogin?: (
    provider: "google" | "facebook" | "github" | "twitter",
  ) => void;
}

const AuthModal = ({
  open = true,
  onOpenChange = () => {},
  defaultTab = "login",
  onLogin = () => console.log("Login attempted"),
  onSignup = () => console.log("Signup attempted"),
  onSocialLogin = (provider) => console.log(`${provider} login attempted`),
}: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">(defaultTab);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(loginData);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup(signupData);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] bg-gray-900 text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-white">
            {activeTab === "login" ? "Welcome Back" : "Create Account"}
          </DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            {activeTab === "login"
              ? "Sign in to your account to continue"
              : "Sign up for a new account to get started"}
          </DialogDescription>
        </DialogHeader>

        <Tabs
          defaultValue={defaultTab}
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "login" | "signup")}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 bg-gray-800">
            <TabsTrigger
              value="login"
              className={cn(
                "data-[state=active]:bg-amber-500 data-[state=active]:text-black",
              )}
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className={cn(
                "data-[state=active]:bg-amber-500 data-[state=active]:text-black",
              )}
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="mt-6">
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="pl-10 bg-gray-800 border-gray-700 text-white"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="pl-10 bg-gray-800 border-gray-700 text-white"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-gray-700 bg-gray-800"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-amber-500 hover:text-amber-400"
                >
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-black"
              >
                Sign In
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="mt-6">
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Full Name"
                    className="pl-10 bg-gray-800 border-gray-700 text-white"
                    value={signupData.name}
                    onChange={(e) =>
                      setSignupData({ ...signupData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="relative">
                  <AtSign className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="pl-10 bg-gray-800 border-gray-700 text-white"
                    value={signupData.email}
                    onChange={(e) =>
                      setSignupData({ ...signupData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="pl-10 bg-gray-800 border-gray-700 text-white"
                    value={signupData.password}
                    onChange={(e) =>
                      setSignupData({ ...signupData, password: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 rounded border-gray-700 bg-gray-800"
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium text-gray-300"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-amber-500 hover:text-amber-400 underline"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-amber-500 hover:text-amber-400 underline"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-black"
              >
                Create Account
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-gray-900 px-2 text-gray-400">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white"
            onClick={() => onSocialLogin("google")}
          >
            <svg
              className="mr-2 h-4 w-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Google
          </Button>
          <Button
            type="button"
            variant="outline"
            className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white"
            onClick={() => onSocialLogin("facebook")}
          >
            <Facebook className="mr-2 h-4 w-4" />
            Facebook
          </Button>
          <Button
            type="button"
            variant="outline"
            className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white"
            onClick={() => onSocialLogin("github")}
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button
            type="button"
            variant="outline"
            className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white"
            onClick={() => onSocialLogin("twitter")}
          >
            <X className="mr-2 h-4 w-4" />
            Twitter
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
