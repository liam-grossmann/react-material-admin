import { Dispatch, SetStateAction } from "react";
import { IUser } from "../domain/User";
import SignIn from "../features/authentication/signIn";

export interface ISignInPageProps {
    onSignIn : Dispatch<SetStateAction<IUser | undefined>>;
}
  
export default function SignInPage(props : ISignInPageProps) {
    return (
        <SignIn onSignIn={props.onSignIn}></SignIn>
    );
}