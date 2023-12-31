import { Button } from "@/components/ui/button";
import { GithubIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-[#f5f5f5] py-2 px-6 dark:bg-gray-900 dark:text-white">
      <div className="flex flex-col md:flex-row items-center justify-between flex-wrap">
        <div className="flex gap-2 mb-2 md:mb-0">
          <a
            href="https://github.com/lumamontes/wbb-games"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Button className="group" variant="link">
              <GithubIcon className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <a
            href="https://twitter.com/monnlu1"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Button className="group" variant="link">
              <TwitterIcon className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </Button>
          </a>
        </div>
        <p className="text-xs">lumagoesmontes@gmail.com</p>
      </div>
    </footer>
  );
}
