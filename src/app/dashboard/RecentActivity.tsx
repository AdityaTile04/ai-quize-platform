import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type Props = {};

const RecentActivity = (props: Props) => {
  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Recent Activities</CardTitle>
        <CardDescription>You have played a total of quizzes.</CardDescription>
      </CardHeader>
      <CardContent className="max-h-[580px] overflow-scroll">
        Historiess
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
