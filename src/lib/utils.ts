import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** "MASHWANI SHIPPING L.L.C." -> "Mashwani Shipping L.L.C." */
export function houseName(name: string) {
  return name
    .toLowerCase()
    .replace(/\b[a-z]/g, (c) => c.toUpperCase())
    .replace(/\bL\.l\.c\./, "L.L.C.");
}
