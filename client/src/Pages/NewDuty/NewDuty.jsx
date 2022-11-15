import React, {useState} from "react";

import { TextField, Button, Box, Typography, Switch,FormGroup, FormControlLabel } from "@mui/material";
import MultiOptionSelection from './Components/MultiOptionSelection';
import Rule from './Components/Rule';
import DatePicker from "./Components/DatePicker";

const inputStyle = { width: "300px", margin: "5px" };

const NewDuty = () => {
  const [rules, setRules] = useState([]);

  const addNewRule = () => {
    setRules([...rules, <Rule/>])
  }

  return (
    <Box
      sx={{height: '100%',  display: "flex", flexDirection: "column", alignItems: "center"}}
    >
        <Typography color='secondary' variant="h3">צור תורנות חדשה</Typography>

      <form>
      <br />
      <br />
        <TextField
          style={inputStyle}
          type="text"
          label="שם התורנות"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          style={inputStyle}
          type="number"
          label="אורך סבב (בשבועות)"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          style={inputStyle}
          type="number"
          label="כמה חיילים צריך לכל שיבוץ?"
          variant="outlined"
        />
        <br />
        <br />
        <FormGroup >
            <FormControlLabel control={<Switch />} label="מחולק לפי יום/לילה?" />
        </FormGroup>
        <br />
        <MultiOptionSelection style={inputStyle} title={'באיזה ימים אפשר לשבץ?'} options={['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']}/>
        <br />
        <DatePicker style={inputStyle}/>
        <br />
        <br />
        <MultiOptionSelection style={inputStyle} title={'מי ישתתף בתורנות?'} options={['מדור עליונות', 'מדור מז']}/>
        <br />
        <br />
        <br />
        <Button variant="contained" color="secondary" onClick={addNewRule}>
          הוסף חוק חדש
        </Button>
        <br />
        <br />
        {rules.map(rule => {
          return (<>{rule}<br/><br/><br/></>)
        })}
      </form>
    </Box>
  );
};

export default NewDuty;
