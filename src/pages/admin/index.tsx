import { Card, CardContent, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import UserControlTab from './UserContol/index'
import './index.scss'


export default function AdminPage() {
  const [tabIndex, setTabIndex] = useState(0)

  function selectTab(event: React.SyntheticEvent<Element, Event>, newTabIndex: number){
    setTabIndex(newTabIndex)
  }

  return (
    <div className='admin-page'>
        <Card className='card'>
          <CardContent className='title-bar'>
            <Typography variant='h5'>
              관리자 화면
            </Typography>
            <Typography variant='body2'>
              <Tabs value={tabIndex} onChange={selectTab}>
                <Tab label='사용자 설정'/>
                <Tab label="그룹 설정"/>
              </Tabs>
            </Typography>
          </CardContent>
        </Card>
        <Card className='card'>
          <CardContent>
            <UserControlTab 
              hidden={tabIndex !== 0}
            />
          </CardContent>
        </Card>

    </div>
  );
}