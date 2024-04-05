import * as React from "react";

import { Toc } from "@/components/resources-toc";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { Icons } from "@/icons";
import type { MainNavItem, SidebarNavItem } from "@/types";

interface SheetMobileProps {
  mainNavItems?: MainNavItem[];
  sidebarNavItems?: SidebarNavItem[];
}

export function SheetMobileNav({}: SheetMobileProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="mr-2 h-8 px-1.5 md:hidden"
        >
          <Icons.hamburger className="size-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <a href="/" className="flex items-center ">
          <svg
            className="mr-2"
            width="25"
            height="25"
            viewBox="0 0 479 467"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group">
              <path
                d="M479 36C479 16.115 462.885 0 443 0L36 0C16.115 0 0 16.115 0 36L0 431C0 450.885 16.115 467 36 467L113.583 467L113.583 214.054L194.556 214.054L194.556 246.689L155.866 246.689L155.866 441.066L194.556 441.066L194.556 467L418.08 467L418.08 441.066L456.771 441.066L456.771 246.689L418.08 246.689L418.08 213.951L479 213.951L479 36ZM294.003 448.969L219.495 448.969L219.495 238.787L294.619 238.787Q326.331 238.787 349.268 251.359Q372.205 263.931 384.521 287.433Q396.836 310.934 396.836 343.673Q396.836 376.513 384.469 400.118Q372.103 423.722 349.063 436.346Q326.023 448.969 294.003 448.969ZM263.933 410.894L292.156 410.894Q321.815 410.894 337.158 394.884Q352.501 378.874 352.501 343.673Q352.501 308.677 337.158 292.769Q321.815 276.862 292.258 276.862L263.933 276.862L263.933 410.894Z"
                id="Rectangle-Subtract"
                fill="currentColor"
                fill-rule="evenodd"
                stroke="none"
              ></path>
            </g>
          </svg>

          <span className="font-bold">{siteConfig.name}</span>
        </a>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-2">
          <div className="mt-2 mb-20">
            <div className="flex flex-col space-y-3">
              <Toc></Toc>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
