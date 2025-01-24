import QuizeCreation from "@/components/QuizeCreation";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export const metadata = {
  title: "Quize | QuizeSense",
};

const QuizePage = async (props: Props) => {
  const session = await getAuthSession();
  if (session?.user) {
    // return redirect("/");
  }
  return <QuizeCreation />;
};

export default QuizePage;
