import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const DatePicker = ({style}) => {
  const [date, setDate] = React.useState(
    dayjs('2022-11-16T21:11:54'),
  );

  const setNewDate = newDate => setDate(newDate);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
        <MobileDatePicker
          label="מתי להתחיל את הסבב הראשון?"
          inputFormat="MM/DD/YYYY"
          value={date}
          onChange={setNewDate}
          renderInput={params => <TextField {...params} />}
          okLabel="שמור"
          clearLabel="ניקוי"
          cancelLabel="ביטול"
        />
    </LocalizationProvider>
  );
}

export default DatePicker; 