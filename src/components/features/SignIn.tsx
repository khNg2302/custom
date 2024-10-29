"use client";
import Button from "@/components/ui/Button";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { AuthInstance, useAuth } from "@/hooks/useAuth";
import { FlexBox, FlexBoxI } from "../ui/containers/FlexBox";

interface SignInI extends Omit<FlexBoxI, 'children'> {
  onSignedIn?: ({ }: unknown) => void
}

const SignIn = ({ onSignedIn, ...flexBoxStyle }: SignInI) => {
  const { signInWithFirebasePopup } = useAuth();
  const router = useRouter();
  const handleSignInGoogle = useCallback(async () => {
    signInWithFirebasePopup({
      authInstance: AuthInstance.GOOGLE,
      successHandler: () => {
        onSignedIn ? onSignedIn({}) : router.back();
      },
    });
  }, [onSignedIn, router, signInWithFirebasePopup]);
  return (
    <FlexBox {...flexBoxStyle} >
      <h1 style={{ textAlign: "center" }}>Sign in</h1>
      <p>Sign in to access more features!</p>
      <Button icon='flat-color-icons:google' label="Sign in with Google" onClick={handleSignInGoogle}></Button>
    </FlexBox>
  );
};

export default SignIn;
