import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";

const FilterByTypeOfActivity = ({ onFilterChange }) => {
  const theme = useTheme();

  const handleFilterChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div htmlFor="filterByType">
      <FormControl
        sx={{
          m: 1,
          width: "100%",
          bgcolor:"whitesmoke",
          [theme.breakpoints.up("sm")]: { width: 200 },
        }}
      >
        <InputLabel id="demo-simple-select-helper-label">By Type</InputLabel>
        <Select
          value=""
          labelId="filterByType"
          id="filterByType"
          onChange={handleFilterChange}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="free">Free</MenuItem>
          <MenuItem value="paid">Paid</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

FilterByTypeOfActivity.propTypes = {
  onFilterChange: PropTypes.func,
};

export default FilterByTypeOfActivity;
