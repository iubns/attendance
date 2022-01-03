import Input from '@mui/material/Input'
import './index.scss'
import { Button, FormControl, InputLabel } from '@mui/material';
import { ChangeEvent, Component, KeyboardEvent, ReactNode } from 'react';
import { LoginResult } from '../../interfaces/login';

interface IState {
    id: string
    password: string
}

interface IProps{}

export default class LoginPage extends Component<IProps, IState> {
    
    state: IState = {
        id: '',
        password: '',
    }

    private async login() {
        let formData = new FormData();
        formData.append('id', this.state.id)
        formData.append('password', this.state.password)

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
        }
    }

    private onTypeId(event: ChangeEvent<HTMLInputElement>): void{
        let id = event.target.value
        this.setState({...this.state, id})
    }

    private onTypePassword(event: ChangeEvent<HTMLInputElement>): void{
        let password = event.target.value
        this.setState({...this.state, password})
    }

    private onPressEnterKey(event: KeyboardEvent){
        if(event.key === 'Enter'){
            this.login()
        }
    }

    render(): ReactNode {
        return(
        <div className='login-from'>
            <FormControl>
                <InputLabel>이름</InputLabel>
                <Input 
                    onInput={this.onTypeId.bind(this)}
                    placeholder='이름'/>
            </FormControl>
            <FormControl>
                <InputLabel>비밀번호</InputLabel>
                <Input
                    onInput={this.onTypePassword.bind(this)}
                    onKeyDown={this.onPressEnterKey.bind(this)}
                    placeholder='비밀번호'/>
            </FormControl>
            <Button
                onClick={this.login.bind(this)}
                className='login-button'>로그인</Button>
        </div>
        )
    }
}