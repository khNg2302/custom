"use client";
import Button from "@/components/ui/Button";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { AuthInstance, useAuth } from "@/hooks/useAuth";

const SignIn = () => {
  const { signInWithFirebasePopup } = useAuth();
  const router = useRouter();
  const handleSignInGoogle = useCallback(async () => {
    signInWithFirebasePopup({
      authInstance: AuthInstance.GOOGLE,
      successHandler: () => {
        router.replace("/");
      },
    });
  }, [router, signInWithFirebasePopup]);
  return <Button label="Google" onClick={handleSignInGoogle}></Button>;
};

export default SignIn;
