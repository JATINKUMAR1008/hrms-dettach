import { Button } from "../commons/button";

const MENUOPTIONS = ["platfroms", "features", "resources", "changelog", "blog"];
export const LandingPageNavbar = () => {
  return (
    <div className="w-full h-fit py-14 px-3 max-w-[1500px] flex text items-center justify-between m-auto">
      <div className="">
        <h1 className="text-2xl text-new-primary font-[900] italic font-popins">
          hrms.dev
        </h1>
      </div>
      <div className="flex gap-5">
        {MENUOPTIONS.map((item) => (
          <p
            key={item}
            className="text-xl font-medium capitalize font-popins cursor-pointer ml-5 text-neutral-500"
          >
            {item}
          </p>
        ))}
      </div>
      <div className="h-fit">
        <Button type="outlined" className="font-medium px-4">
          Sign up now
        </Button>
      </div>
    </div>
  );
};
