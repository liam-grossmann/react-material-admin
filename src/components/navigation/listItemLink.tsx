import React from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps, } from 'react-router-dom';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

interface ListItemLinkProps {
    to: string;
    primary: string;
    icon?: React.ReactElement;
}
  
// https://mui.com/material-ui/guides/routing/
// Use prop forwarding for the routing so that mui links are forwarded to 
// the react - router rather then the server
export const ListItemLink = (props: ListItemLinkProps) => {
    const { to, primary, icon } = props;
  
    const renderLink = React.useMemo(
        () =>
            React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(function Link(
                itemProps,
                ref,
            ) {
                return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
            }),
        [to],
    );
  
    return (
        <ListItem key={primary} disablePadding>
            <ListItemButton component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItemButton>
        </ListItem>
    );
}