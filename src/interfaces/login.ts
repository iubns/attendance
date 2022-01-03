export interface LoginResult{
    result: 'fail' | 'success'
    authority: 'admin' | 'user'
    token: string
}