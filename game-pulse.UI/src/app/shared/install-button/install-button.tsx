import { useEffect, useState } from "react";
import { Button } from "../utilities/button";

export default function InstallButton() {
  const [defferedPrompt, setDefferedPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
//   const isStandalone = window.matchMedia("(display-mode: standalone)").matches;

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDefferedPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!defferedPrompt) return;

    defferedPrompt.prompt();
    const { outcome } = await defferedPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    setIsInstallable(false);
    setDefferedPrompt(null);
  };

  if (!isInstallable) return null;

  return (
    <>
      {/* {!isStandalone && ( */}
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
      {/* )} */}
    </>
  );
}
