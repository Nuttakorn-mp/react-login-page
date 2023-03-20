import '../App.css';
// import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
function ButtonLogin() {
    const nav = useNavigate();
    return (
        <button onClick={()=>{nav('/create');}} className='buttonLogin'>
            <span className='textLogin'>เข้าสู่ระบบ</span>
        </button>
        
        // <Link to="/blogs">Blogs</Link>
        // <div>
        //     <button className='ButtonLogin' onClick={navigateTo} >
        //         เข้าสู่ระบบ
        //     </button>
        // </div>

    );
}
export default ButtonLogin