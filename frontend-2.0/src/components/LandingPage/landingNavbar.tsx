import { Button } from "../commons/button";

const MENUOPTIONS = ["platfroms", "features", "resources", "changelog", "blog"];
export const LandingPageNavbar = () => {
  return (
    <div className="w-full h-fit py-14 xs:px-10 px-5 2xl:max-w-[1500px] flex text items-center justify-between m-auto">
      <div className="">
        <h1 className="xl:text-2xl text-xl text-new-primary font-[900] italic font-popins drop-shadow-md shadow-new-primary">
          hrms.dev
        </h1>
      </div>
      <div className="lg:flex hidden gap-5">
        {MENUOPTIONS.map((item) => (
          <p
            key={item}
            className="xl:text-xl lg:text-lg md:text-md font-medium capitalize font-popins cursor-pointer ml-5 text-neutral-500"
          >
            {item}
          </p>
        ))}
      </div>
      <div className="h-fit">
        <Button type="outlined" className="font-medium px-4 lg:text-lg text-base">
          Sign up now
        </Button>
      </div>
    </div>
  );
};
