import { useEffect, useState } from "react";
import { Button } from "../utilities/button";
import SwalAlertTrigger from "../utilities/swal-trigger";

export default function InstallButton() {
  const [defferedPrompt, setDefferedPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches;

  interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    prompt: () => Promise<void>;
    userChoice: Promise<{
      outcome: "accepted" | "dismissed";
      platform: string;
    }>;
  }

  useEffect(() => {
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
    if (!isInstallable) {
      SwalAlertTrigger(
        "GamePulse Already Installed",
        "It looks like GamePulse is already installed on your system. Please verify before proceeding."
      );
      return;
    }

    if (!defferedPrompt) return;

    defferedPrompt.prompt();
    const { outcome } = await defferedPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    setIsInstallable(false);
    setDefferedPrompt(null);
  };

  return (
    <>
      {!isStandalone && (
        <div>
          <h1 className="font-bold text-center text-3xl md:text-4xl">Install GamePulse</h1>

          <div className="mt-8 flex flex-row gap-10">
            {/* Install on Chrome or Edge */}
            <div className="flex flex-col items-center">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem necessitatibus quidem expedita nemo exercitationem enim nulla
                aperiam eos consequuntur temporibus non eligendi iste blanditiis, mollitia laudantium aliquid adipisci beatae?
              </p>
              <Button onClick={handleInstall}>Install GamePulse</Button>
            </div>

            {/* Install on Safari */}
            <div className="flex flex-col items-center">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem necessitatibus quidem expedita nemo exercitationem enim nulla
                aperiam eos consequuntur temporibus non eligendi iste blanditiis, mollitia laudantium aliquid adipisci beatae?
              </p>
              <Button>Install on Safari</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
