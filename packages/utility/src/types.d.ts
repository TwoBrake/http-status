// Resources
import type { ReactNode } from "react";

/** A possibly undefined value. */
export type Possible<TType> = TType | undefined;

export interface HttpCheck {
  acceptedCodes?: number[];
  url: string;
  headers?: Record<string, string>;
  method?: "GET" | "POST";
}
