"use client"

import { ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

interface ProvidersProps {
    children: ReactNode;
  }
  export function Providers({ children }: ProvidersProps) {

  return (
      <GoogleReCaptchaProvider reCaptchaKey="6Le_JhkpAAAAAMOKCA19sZ4VbxTGbfV475c-Tj73">
        {children}
      </GoogleReCaptchaProvider>
  )
}