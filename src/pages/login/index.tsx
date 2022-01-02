import { Link } from 'react-router-dom'
import Input from '@mui/material/Input'
import './index.scss'
import { Button, FormControl, InputLabel } from '@mui/material';

export default function Login(){
 return (
    <div className='login-from'>
        <FormControl>
            <InputLabel>이름</InputLabel>
            <Input 
                placeholder='이름'/>
        </FormControl>
        <FormControl>
            <InputLabel>비밀번호</InputLabel>
            <Input 
                placeholder='비밀번호'/>
        </FormControl>

        <Link to="/Admin">
            <Button>
                관리자 모드
            </Button>
        </Link>
    </div>
 );
}