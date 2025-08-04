import { Menu } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';


const ToggleButton = ({setToggle,toggle}) => {
  return (
    <button className="w-[50px] h-[50px] rounded-full fixed top-6 left-6 bg-transparent border-none " onClick={() => setToggle((toggle) => !toggle)}>
     { toggle? <CloseIcon />:<Menu />}
    </button>
  )
}

export default ToggleButton