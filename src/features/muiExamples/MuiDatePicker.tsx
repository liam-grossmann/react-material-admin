import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers"


export const MuiDatePicker = () => {
  return (
    <TextField
    id="date"
    label="Birthday"
    type="date"
    defaultValue="2017-05-24"
    sx={{ width: 220 }}
    InputLabelProps={{
      shrink: true,
    }}
  />
  );
}
