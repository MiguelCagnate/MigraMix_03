import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ButtonExplore from "./ButtonExplore";
import ButtonLogin from "./ButtonLogin";

const Header = () => {
  
  return (
    <div className="p-7 m-auto">
      <ButtonLogin />
      <Typography
        variant="h1"
        classes={{
          root: "text-sm sm:text-sm text-center text-[#ED0707] transition duration-500 ease-in-out hover:scale-90",
        }}
        style={{
          fontSize: {
            xs: "1rem", // Adjust the font size for extra-small screens
            sm: "3rem", // Default font size for small and larger screens
          },
          fontFamily: "Gayathri, sans-serif",
          fontWeight: "bold",
          letterSpacing: "5px",
        }}
      >
        MIGRAMIX
      </Typography>
      {/* <Typography
        variant="h4"
        className="mt-6 text-bold text-xl md:text-2xl lg:text-3xl p-7 text-white "
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        Amplify Culture, Harmonize Art
      </Typography> */}
      <div className="mt-auto text-base md:text-lg lg:text-lg text-blue text-custom p-7 text-center">
        <Typography
          variant="body1"
          style={{
            fontWeight: 600,
            margin: "10px",
            color: "#2D3142",
            letterSpacing: "1px",
          }}
        >
          Welcome to a vibrant platform showcasing emerging migrant artists in
          Barcelona`s electronic music scene.{" "}
        </Typography>
        <Typography
          variant="body1"
          style={{
            fontWeight: 600,
            margin: "10px",
            color: "#2D3142",
            letterSpacing: "1px",
          }}
        >
          <a>Let`s unite through music, creativity, and cultural diversity.</a>
        </Typography>
      </div>
      <Stack className="mt-6 ">
        <ButtonExplore />
      </Stack>
    </div>
  );
};

export default Header;
