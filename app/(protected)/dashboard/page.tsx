"use client";

import { useSession } from "next-auth/react";

const page = () => {
  const { data: session, status } = useSession();

  console.log(session?.user?.role);
  return <div>dashboard</div>;
};

export default page;
