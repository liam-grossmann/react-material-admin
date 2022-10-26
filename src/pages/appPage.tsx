import { Outlet } from "react-router-dom";
import { IUser } from "../domain/User";
import { SidePanel } from "../layouts/navigation/sidePanel";

export interface IAppPageProps {
    signedInUser: IUser;
}

export default function AppPage(props: IAppPageProps) {
    return (
        <>
            <div id="sidebar">
                <SidePanel signedInUser={props.signedInUser}></SidePanel>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
