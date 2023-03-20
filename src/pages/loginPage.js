import '../App.css';
import Email from '../components/email';
import Pass from '../components/pass';
import ButtonLogin from '../components/button';
import ButtonForgotPass from '../components/forgotpass';
import ButtonCreate from '../components/create';

function LoginPage() {
    return (
        <div>
            <div className='divcenter'>
                <div className='background-box'>
                    <h2 className='header'>เข้าสู่ระบบ</h2>
                    <Email />
                    <Pass />
                    <ButtonLogin />
                    <ButtonForgotPass />
                    <div className="divider">
                        <hr className="left" />
                        <span className='hrTextSize'>หรือ</span>
                        <hr className="right" />
                    </div>
                    <ButtonCreate />
                </div>
                <span className='contract-operation'>ติดต่อเจ้าหน้าที่</span>
            </div>
        </div>
    );
}

export default LoginPage