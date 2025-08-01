"use client";

import { useEffect, useState } from "react";
import { Button } from "../utilities/button";
import { SwalAlertTrigger, SwalErrorTrigger } from "../utilities/swal-trigger";
import { Icon } from "../utilities/evervault-card";

export default function InstallGamePulse() {
  const [defferedPrompt, setDefferedPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    prompt: () => Promise<void>;
    userChoice: Promise<{
      outcome: "accepted" | "dismissed";
      platform: string;
    }>;
  }

  useEffect(() => {
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

    const handler = (e: Event) => {
      const promptEvent = e as BeforeInstallPromptEvent;
      e.preventDefault();
      setDefferedPrompt(promptEvent);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!defferedPrompt) {
      SwalAlertTrigger(
        "Installation Not Available",
        "It seems like your browser doesn't support installing this app automatically. Try using Chrome or Edge."
      );
      return;
    }

    if (!isInstallable) {
      SwalAlertTrigger(
        "GamePulse Already Installed",
        "It looks like GamePulse is already installed on your system. Please verify before proceeding."
      );
      return;
    }

    try {
      defferedPrompt.prompt();
    const { outcome } = await defferedPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    setIsInstallable(false);
    setDefferedPrompt(null);
    } catch (error) {
      console.error("Installation failed:", error);
      SwalErrorTrigger(
        "Installation Failed",
        "An error occurred while trying to install GamePulse. Please try again later.",
        error
      );
    }
  };

  return (
    <>
      {!isStandalone && (
        <div className="border border-white/[0.2] flex flex-col max-w-[100%] mx-auto p-8 relative">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
          <h1 className="font-bold text-white text-center text-3xl md:text-4xl">Install GamePulse</h1>

          <div className="mt-8 flex flex-col md:flex-row md:items-stretch">
            {/* Install on Chrome or Edge */}
            <div className="md:w-1/2 flex flex-col items-center">
              <h3 className="text-base md:text-2xl font-bold text-gray-500">Edge or Chrome</h3>
              <p className="mt-2 text-gray-300 text-center">
                Simply click the button below to install GamePulse on your device. This will allow you to access GamePulse directly from your home
                screen, just like a native app.
              </p>
              <br />
              <Button onClick={handleInstall}>Install GamePulse</Button>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-gray-300 md:mx-6 md:my-0 md:h-auto md:w-px md:bg-gray-400" />

            {/* Install on Safari */}
            <div className="md:w-1/2 flex flex-col items-center">
              <h3 className="text-base md:text-2xl font-bold text-gray-500">Safari</h3>
              <p className="mt-2 text-gray-300 text-center">
                To install GamePulse from Safari, tap the <strong>Share</strong> icon in the browser toolbar, then select{" "}
                <strong>“Add to Home Screen”</strong> from the menu. This will let you launch GamePulse just like a native app.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
