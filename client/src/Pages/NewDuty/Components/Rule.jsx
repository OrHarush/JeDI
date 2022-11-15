import React, {useState} from "react";
import { Box, Select, TextField, FormControl, InputLabel, MenuItem  } from "@mui/material";
import {Gender, Rank, ServiceType} from '../Enums/SoldierEnums';

const inputStyle = { width: "300px", margin: "5px" };

const Rule = () => {
    const [ruleInfo, setRuleInfo] = useState(
        {
            "name": "",
            "gender": Gender.Male,
            "serviceType": ServiceType.Compulsory,
            "rank": Rank.Rookie,
            "isBaseTenant": false
        });

    const updateInfo = (infoProp, newValue) => setRuleInfo({...ruleInfo, [infoProp]: newValue});

    return (
        <Box>
            <TextField
            style={inputStyle}
            type="text"
            value={ruleInfo.name}
            label="שם החוק"
            variant="outlined"
            onChange={event => updateInfo("name", event.target.value)}
            />
            <br/>
            <br/>
            <FormControl style={inputStyle}>
                <InputLabel id="demo-simple-select-label">מין</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ruleInfo.gender}
                    label="מין"
                    onChange={event => updateInfo("gender", event.target.value)}
                >
                    {Object.entries(Gender).map(([key, value]) => (
                        <MenuItem value={key}>{value}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <br/>
            <br/>
            <FormControl style={inputStyle}>
                <InputLabel id="demo-simple-select-label">סוג שירות</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ruleInfo.serviceType}
                    label="מין"
                    onChange={event => updateInfo("serviceType", event.target.value)}
                >
                    {Object.entries(ServiceType).map(([key, value]) => (
                        <MenuItem value={key}>{value}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <br/>
            <br/>
            <FormControl style={inputStyle}>
                <InputLabel id="demo-simple-select-label">דרגה</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ruleInfo.rank}
                    label="דרגה"
                    onChange={event => updateInfo("rank", event.target.value)}
                >
                    {Object.entries(Rank).map(([key, value]) => (
                        <MenuItem value={key}>{value}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
};

export default Rule;