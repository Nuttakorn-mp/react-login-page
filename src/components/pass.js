import '../App.css';
import React from "react";
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';

function Pass() {
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    return (
        <div>
            <input
                className='input-pass'
                type={values.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                value={values.password}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                        </IconButton>
                    </InputAdornment>
                }
            />
        </div>
    );

}

export default Pass;