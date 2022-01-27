import './index.scss'
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { UserData } from '../../../interfaces/user'

interface IProps {
    hidden: boolean
}


function UserContol (props: IProps){

    const [userDataList, setUserDataList] = useState<Array<UserData>>([])

    useEffect(() => {
        async function fetchUserDataLisr() {
            let userDataList = await fetch(`http://${process.env.REACT_APP_API_SERVER}/getUserData`)   
            setUserDataList(await userDataList.json())
        }

        fetchUserDataLisr()
    },[])

    return (
        <div hidden={props.hidden}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>이름</TableCell>
                            <TableCell>등급</TableCell>
                            <TableCell>그룹</TableCell>
                            <TableCell>비밀번호</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userDataList.map((row) => (
                            <TableRow
                                key={row.num}
                            >
                                <TableCell>{row.ID}</TableCell>
                                <TableCell>{row.Duty}</TableCell>
                                <TableCell>{row.Class}</TableCell>
                                <TableCell>{row.PassWord}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

UserContol.propTypes = {
    hidden: PropTypes.bool.isRequired
}

export default UserContol