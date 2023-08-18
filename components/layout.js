import { useSession, signIn, signOut } from "next-auth/react";
import Google from "next-auth/providers/google";
import Nav from "@/components/nav"
import { Children } from "react";

export default function layout({children}) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-400 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button onClick={() => signIn(Google)} className="bg-white p-2 px-2 rounded-md">Login with google</button>
        </div>
      </div>
    );
  }
  return (
	<div className="bg-blue-900 min-h-screen flex">
	<Nav />
	<div className="bg-white flex-grow mt-2 mr-2 rounded-lg p-4 ">{children}</div>
	</div>
  );
}