import { Button } from "@/components/ui/button";
import { GithubIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-[#f5f5f5] py-4 px-6 dark:bg-gray-900 dark:text-white">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <Button className="group" variant="link">
            <GithubIcon className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button className="group" variant="link">
            <TwitterIcon className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </Button>
        </div>
        <p className="text-xs">lumagoesmontes@gmail.com</p>
      </div>
    </footer>
  );
}
