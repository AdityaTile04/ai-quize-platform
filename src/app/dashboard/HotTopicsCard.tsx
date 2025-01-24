import CustomeWordCloud from "@/components/CustomeWordCloud";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type Props = {};

const HotTopicsCard = (props: Props) => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        <CardDescription>
          Click on a topic to start a quize on it!
        </CardDescription>
      </CardHeader>

      <CardContent className="pl-2">
        <CustomeWordCloud />
      </CardContent>
    </Card>
  );
};

export default HotTopicsCard;
