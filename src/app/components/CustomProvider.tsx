"use client";

import { ReactNode } from "react";
import { Provider } from "@/components/ui/provider";

interface ICustomProvider {
  children: ReactNode;
}

export default function CustomProvider(props: ICustomProvider) {
  return (
    <>
      <Provider>{props.children}</Provider>
    </>
  );
}
