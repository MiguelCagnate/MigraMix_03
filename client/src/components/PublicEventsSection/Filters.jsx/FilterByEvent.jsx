import PropTypes from "prop-types";
import { TextField, InputAdornment, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FilterByEvent = ({ onSearch }) => {
  const theme = useTheme();

  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="bg-[whitesmoke]">
      <TextField
        id="titleFilter"
        label="By event"
        onChange={handleSearch}
        sx={{
          width: "100%", // Set width to 100% for small screens
          [theme.breakpoints.up("sm")]: {
            width: 300, // Adjust width for screens wider than or equal to sm
          },
          [theme.breakpoints.up("md")]: {
            width: 400, // Adjust width for screens wider than or equal to md
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

FilterByEvent.propTypes = {
  onSearch: PropTypes.func,
};

export default FilterByEvent;
