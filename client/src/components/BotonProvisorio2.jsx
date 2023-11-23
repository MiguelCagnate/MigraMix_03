import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const BotonProvisorio2 = () => {
  const navigate = useNavigate();
  const handleEventPlannerDashboardClick = () => {
    navigate("/organizers/organizer");
  };
  return (
    <Button
      style={{
        backgroundColor: "transparent",
        color: "#2D3142",
        border: "2px solid #ff5722",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        mt: 3,
        mb: 2,
        borderRadius: "24px",
        fontSize: "11px",      
      }}
      className="w-28px"
      variant="text"
      onClick={handleEventPlannerDashboardClick}
    >
      Event Planner
    </Button>
  );
};

export default BotonProvisorio2;
