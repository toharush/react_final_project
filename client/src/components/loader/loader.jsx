import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "./loader.css";

const Loader = () => {
  return (
    <Box className="loader">
      <CircularProgress />
    </Box>
  );
}

export default Loader;