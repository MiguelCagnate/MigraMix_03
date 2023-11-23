import { useState, useEffect } from "react";
import axios from "axios";
import MixEventsList from "./MixEventsList";
import SearchEventsBar from "../PublicEventsSection/SearchEventsBar";

const MixEventsSection = () => {
  const [mixEventsData, setMixEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  useEffect(() => {
    fetchMixEventsData();
    async function fetchMixEventsData() {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/events/allEvents"
        );

        const data = response.data;
        setMixEventsData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
  }, []);

  const filteredData = mixEventsData
    .filter((event) => {
      if (filterType === "free") {
        return event.typeofactivity.toLowerCase() === "free";
      } else if (filterType === "paid") {
        return event.typeofactivity.toLowerCase() !== "free";
      } else {
        return true;
      }
    })
    .filter((event) => {
      if (searchTerm.trim() === "") {
        return true;
      } else {
        return event.eventtitle
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      }
    });

  return (
    <div id="mixEventsSection" htmlFor="mixEventsSection">
      <SearchEventsBar
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
      />
      <MixEventsList
        mixEventsData={filteredData}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default MixEventsSection;
