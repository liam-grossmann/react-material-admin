import { createContext } from "react";
import { IUser } from "../domain/User";

export const SecurityContext = createContext<IUser | undefined>(undefined);