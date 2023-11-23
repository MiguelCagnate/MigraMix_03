import {Container, Stack} from "@mui/material";
import PropTypes from 'prop-types';
import FilterByEvent from "./Filters.jsx/FilterByEvent";
import FilterByTypeOfActivity from "./Filters.jsx/FilterByTypeOfActivity";

function SearchEventsBar({ onSearch, onFilterChange }) {

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ mt: 6, mb: 6 }}
        className="container mx-auto px-4"
      >
        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          justifyContent="center"
        >
          <FilterByEvent onSearch={onSearch} />
          <FilterByTypeOfActivity onFilterChange={onFilterChange} />
        </Stack>
      </Container>
    </>
  );

}
SearchEventsBar.propTypes = {
  onSearch: PropTypes.func, 
  onFilterChange: PropTypes.func, 
}
export default SearchEventsBar