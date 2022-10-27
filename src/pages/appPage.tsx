import { Outlet } from "react-router-dom";
import { SidePanel } from "../layouts/navigation/sidePanel";

export default function AppPage() {
    return (
        <>
            <div id="sidebar">
                <SidePanel />
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
