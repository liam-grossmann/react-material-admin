import { Stack } from "@mui/material";
import { DataService } from "../services/DataService"

const dataService = new DataService();
const users = dataService.getUsers();

const listToDisplay = users.map(user =>   {
    return <Stack key={user.id + user.firstName} direction='row'>
        <div>{user.firstName}</div>
        <div>{user.lastName}</div>
        <div>{user.emailAddress}</div>
 </Stack>;
})


export const Users = () => {
    return (<div>{listToDisplay}

    </div>);
}