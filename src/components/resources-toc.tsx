import cloud from "../../resources/cloud.json";
import { ScrollArea } from "./ui/scroll-area";

export const Toc = () => {
  return (
    <div className="flex size-full flex-col gap-2 ">
      <a
        href={"#Cloud"}
        className="font-bold hover:cursor-pointer hover:underline"
      >
        Cloud
      </a>
      <div className="flex flex-col">
        {Object.entries(cloud).map((item, index) => (
          <>
            <a
              href={"#" + item[0].replace(" ", "-")}
              className="md:ml-3 hover:cursor-pointer hover:underline"
            >
              {item[0]}
            </a>
          </>
        ))}
      </div>
    </div>
  );
};
