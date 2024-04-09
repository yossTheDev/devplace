import { siteConfig } from "@/config/site";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Menu } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Toc } from "./resources-toc";

type Props = {
  items: any;
};
export const SheetToc: React.FC<Props> = ({ items }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <div className="flex gap-2 w-full justify-center items-center p-0.5">
          <Button variant="ghost" className="my-1 gap-2 h-8 px-1.5 md:hidden">
            <Menu size={16}></Menu>
            <p className="font-bold text-xs">Table Of Contents</p>
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <p className="font-bold">Table Of Contents</p>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-2">
          <Toc data={items}></Toc>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
