type Data = {
  title: string;
  items: any;
};

type Props = {
  data: Data[];
};

export const Toc: React.FC<Props> = ({ data }) => {
  return (
    <div
      id="toc-container"
      className="flex w-full max-h-96 overflow-auto flex-col gap-2 "
    >
      <div className="flex flex-col">
        <>
          {data.map((items) => (
            <>
              <p
                className={`toc-item font-bold hover:cursor-pointer hover:underline`}
              >
                {items.title}
              </p>
              {Object.entries(items.items).map((item, index) => (
                <>
                  <p
                    className={`toc-item md:ml-3 hover:cursor-pointer hover:underline ${item[0].replace(
                      " ",
                      "-"
                    )}`}
                  >
                    {item[0]}
                  </p>
                </>
              ))}
            </>
          ))}
        </>
      </div>
    </div>
  );
};
