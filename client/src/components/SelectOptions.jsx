import { TextField, MenuItem } from "@mui/material"
import PropTypes from "prop-types";

const SelectOptions = ({label, idField, value, onChange, options}) => {
  return (
    <TextField
        required
        select
        fullWidth
        label={label}
        id={idField}
        value={value}
        onChange={onChange} 
        InputProps={{ style: { fontSize: '16px' } }}
        InputLabelProps={{ style: { fontSize: '16px' } }}
        sx={{
            '& .MuiInputBase-root': {
            borderWidth: '0.8px',
            borderColor: '#2B2D42',
            maxWidth: 300,
            },
        }}    
    >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  )
}
SelectOptions.propTypes = {
  label: PropTypes.string,
  idField: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
};
export default SelectOptions
