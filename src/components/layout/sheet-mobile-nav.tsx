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
        <a href="/" className="flex items-center">
          <svg
            className="mr-2"
            width="35"
            height="35"
            viewBox="0 0 460 460"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group">
              <path
                d="M310 0C392.854 0 460 67.146 460 150L460 310C460 392.854 392.854 460 310 460L150 460C67.146 460 0 392.854 0 310L0 150C0 67.146 67.146 0 150 0L310 0Z"
                id="Rectangle"
                fill="#232527"
                stroke="none"
              ></path>
              <path
                d="M338.76 104C349.387 104 358 112.73 358 123.503L358 219.909L325.441 219.909L325.441 237.645L346.12 237.645L346.12 342.95L325.441 342.95L325.441 357L205.98 357L205.98 342.95L185.302 342.95L185.302 237.645L205.98 237.645L205.98 219.965L162.704 219.965L162.704 357L121.24 357C110.613 357 102 348.27 102 337.497L102 123.503C102 112.73 110.613 104 121.24 104L338.76 104L338.76 104ZM219.308 347.232L259.129 347.232C270.538 347.232 280.346 344.952 288.555 340.393C296.765 335.834 303.072 329.291 307.478 320.766C311.885 312.241 314.088 302.048 314.088 290.187C314.088 278.363 311.894 268.206 307.506 259.718C303.118 251.23 296.838 244.716 288.665 240.175C280.493 235.635 270.757 233.364 259.458 233.364L219.308 233.364L219.308 347.232L219.308 347.232ZM258.142 326.604L243.058 326.604L243.058 253.992L258.196 253.992C268.727 253.992 276.726 256.864 282.193 262.609C287.66 268.355 290.393 277.547 290.393 290.187C290.393 302.9 287.66 312.148 282.193 317.931C276.726 323.713 268.709 326.604 258.142 326.604L258.142 326.604Z"
                id="Vector"
                fill="#FFFFFF"
                fill-rule="evenodd"
                stroke="none"
              ></path>
            </g>
          </svg>
          <span className="font-bold">{siteConfig.name}</span>
        </a>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-10">
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
