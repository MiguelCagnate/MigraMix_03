import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const BotonProvisorio = () => {
  const navigate = useNavigate();
  const handleDashboardArtistClick = () => {
    navigate("/artists/artists");
  };
  return (
    <Button
      style={{
        backgroundColor: "transparent",
        color: "#2D3142",
        border: "2px solid #ff5722",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        fontSize: "11px",
        mt: 3,
        mb: 2,
        borderRadius: "24px",       
      }}
      className="w-28px"
      variant="text"
      onClick={handleDashboardArtistClick}
    >
      Dashboard Artist
    </Button>
  );
};

export default BotonProvisorio;
