import Input from '@mui/material/Input'
import './index.scss'
import { Button, FormControl, InputLabel } from '@mui/material';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { LoginResult } from '../../interfaces/login';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    let navigate = useNavigate();

    const [id, setID] = useState('');
    const [password, setPassword] = useState('')

    async function handleSubmit(event: any) {
        event.preventDefault();
        navigate("../success", { replace: true });
    }


    function onTypeId(event: ChangeEvent<HTMLInputElement>): void{
        let id = event.target.value
        setID(id)
    }

    function onTypePassword(event: ChangeEvent<HTMLInputElement>): void{
        let password = event.target.value
        setPassword(password)
    }

    function onPressEnterKey(event: KeyboardEvent){
        if(event.key === 'Enter'){
            login()
        }
    }
    async function login(){
        let formData = new FormData();
        formData.append('id', id)
        formData.append('password', password)

        let networkResult = await fetch(`http://${process.env.REACT_APP_API_SERVER}/login`,{
            method: 'post',
            body: formData
        });
        let resultJson: LoginResult = await networkResult.json()
        if(resultJson.result === 'fail')
        {
            alert('로그인 실패!')
            return
        }else if(resultJson.result === 'success'){
            console.log(resultJson.authority)
            if(resultJson.authority === 'admin'){
                navigate('./admin')
            }else{
                navigate('./attendCheck')
            }
        }
    }

    return(
        <div className='login-from'>
            <FormControl>
                <InputLabel>이름</InputLabel>
                <Input 
                    onInput={onTypeId}
                    placeholder='이름'/>
            </FormControl>
            <FormControl>
                <InputLabel>비밀번호</InputLabel>
                <Input
                    onInput={onTypePassword}
                    onKeyDown={onPressEnterKey}
                    placeholder='비밀번호'/>
                <Button
                    onClick={login}
                    className='login-button'>로그인</Button>
            </FormControl>
        </div>
    )
}
