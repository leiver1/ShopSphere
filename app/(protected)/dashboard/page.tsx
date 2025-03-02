"use client";

import { useSession } from "next-auth/react";

interface pageProps {}
const page: React.FC<pageProps> = () => {
  const { data: session, status } = useSession();

  console.log(session?.user?.role);
  return <div>dashboard</div>;
};

export default page;
