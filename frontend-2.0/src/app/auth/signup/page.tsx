import SignUpForm from "@/components/auth/signupForm";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
    
  return (
    <div className="w-full h-screen relative max-w-[1500px] m-auto">
      <div className="text-new-primary lg:px-10 md:py-10 px-5 py-5">
        <h1 className="xl:text-2xl text-xl text-new-primary font-[900] italic font-popins drop-shadow-md shadow-new-primary">
          <Link href="/">hrms.dev</Link>
        </h1>
      </div>
      <div className="text-black max-w-[1500px] m-auto md:py-24  md:px-3 ">
        <div className="w-full grid grid-cols-2 md:py-20 py-10">
        <div className="lg:col-span-1 col-span-2 w-full lg:max-w-[70%] px-5 m-auto h-full flex flex-col items-start justify-center">
            <div className="flex flex-col w-full">
                <h1 className="text-3xl font-roboto font-bold">
                    SignIn in your account
                </h1>
                <p className="text-lg font-medium font-popins text-neutral-500 mt-1">
                    Signin and start managing your company.
                </p>
            </div>
            <SignUpForm />
        </div>
          <div className="col-span-1 px-10 hidden lg:block">
            <Image
              src="https://images.pexels.com/photos/4474033/pexels-photo-4474033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Picture of the author"
              width={500}
              height={500}
              className="shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="w-full py-5 px-10 flex md:flex-row flex-col items-center justify-between absolute bottom-0">
        <p className="text-neutral-500 lg:text-lg md:text-base text-sm font-medium">
          © 2024 HRMS.dev. All rights reserved
        </p>
        <p className="text-neutral-500 lg:text-lg md:text-base text-sm font-medium">
          Privacy Policy | Terms of Service
        </p>
      </div>
    </div>
  );
}
