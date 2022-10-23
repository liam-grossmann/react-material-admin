import { Grid } from "@mui/material"
import { BarChart } from "./components/barchart"
import { Indicator } from "./components/indicator"
import { PieChart } from "./components/piechart"

export const Dashboard = () => {
    return (
        <Grid container spacing={2}>

            <Grid item xs={4}>
                <Indicator></Indicator>
            </Grid>

            <Grid item xs={4}>
                <Indicator></Indicator>
            </Grid>

            <Grid item xs={4}>
                <Indicator></Indicator>
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
