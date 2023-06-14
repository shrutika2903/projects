import  { useState } from 'react'
import { Data } from './data'
import './App.css';
import { Project } from './project';
import List from './list';
import Button from '@mui/material/Button';
import { Wrapper } from './App.style';
import { Card } from '@mui/material';


function App() {
  const [projects, setProjects] = useState<Project[]>(Data);
  console.log('DAta', Data)
  return (
    <>
      <Wrapper>
        <Card variant="outlined">
          <h1>{projects.length} Birthdays Today</h1>
          <List projects={projects} />
          <Button onClick={() => setProjects([])} variant="contained">Clear All</Button>
        </Card>

      </Wrapper>
    </>
  )

}

export default App
