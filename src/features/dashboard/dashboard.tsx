import { Grid } from "@mui/material"
import { BarChart } from "./components/barchart"
import { Indicator } from "./components/indicator"
import { PieChart } from "./components/piechart"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BugReportIcon from '@mui/icons-material/BugReport';

export const Dashboard = () => {
    return (
        <Grid container spacing={2}>

            <Grid item xs={4}>
                <Indicator icon={<AttachMoneyIcon color='primary' fontSize="large" />}
                    title={"Revenue"}
                    valueText={"12,000"}
                    isUp={true}
                    changeText={"15% up from yesterday"} />
            </Grid>

            <Grid item xs={4}>
                <Indicator icon={<PersonAddIcon color='primary' fontSize="large" />}
                    title={"New Customers"}
                    valueText={"15"}
                    isUp={false}
                    changeText={"2 less than yesterday"} />
            </Grid>

            <Grid item xs={4}>
                <Indicator icon={<BugReportIcon color="primary" fontSize="large" />}
                    title={"Open Tickets"}
                    valueText={"7"}
                    isUp={true}
                    changeText={"4 more then last week"} />
            </Grid>

            <Grid item xs={12}>
                &nbsp;
            </Grid>
            

            <Grid item xs={8}>
                <BarChart></BarChart>
            </Grid>
            
            <Grid item xs={4}>
                <PieChart></PieChart>
                </Grid>
        </Grid>
    )
}
