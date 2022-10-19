import { Outlet } from "react-router-dom";
import { SidePanel } from "../components/navigation/sidePanel";


export default function Root() {
 
 
    return (
        <>
            <div id="sidebar">
                <SidePanel></SidePanel>
            </div>    
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
  