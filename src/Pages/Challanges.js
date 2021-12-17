
import {useState} from 'react'
import Challenges from "../Components/Challenges/Challenges"
import Button from "../Components/Challenges/Button"
import ProgressBar from 'react-bootstrap/ProgressBar'
import AddTrial from '../Components/Challenges/AddTrial'
import Header from '../Components/Challenges/Header'
function Challanges(){
    const [showAddTrial, setShowAddTrial] = useState(false)
    const [trials, setTrials] = useState([
        {
            id:1,
            text: 'Walk a Mile',
            progress: '4',
            finished: 'false',
        },
        {
            id:2,
            text: 'Biking on a Wooded trail',
            progress: '17',
            finished: 'false',
        },
        {
            id:3,
            text: 'Try cooking a healthy pasta dish',
            progress: '48',
            finished: 'false',
        },
        {
            id:4,
            text: 'Go Hiking',
            progress: '59',
            finished: 'false',
        },
        {
            id:5,
            text: 'Burn 2,000 calories',
            progress: '63',
            finished: 'false',
        },
        {
            id:6,
            text: 'Walk 20,000 steps',
            progress: '74',
            finished: 'false',
        }
    ])

    const addTrial = (trial) =>{
        const id = Math.floor(Math.random() * 1000) +1
        const newTrial = {id, ...trial}
        setTrials([...trials, newTrial])
    }
    
    const onClick = () =>{
        //console.log('was clicked')
       
        
    }
    const deleteTask = (id) =>{
        setTrials(trials.filter((trial)=> trial.id !== id))
    }
    const toggleFinished = (id) =>{
        setTrials(
            trials.map((trial) =>
            trial.id === id ? {...trial, finished: 
                !trial.finished}:trial)
                
                
                )
        
        
    }
   
    return(
        <div className = 'challenge'>
            <h1 className = 'title'> Weekly Challanges! </h1>
           <Header onAdd = {() => setShowAddTrial(!showAddTrial)} showAdd = {showAddTrial}/>
            {showAddTrial && <AddTrial onAdd = {addTrial}/>}
            {trials.length >0 ? (<Challenges trials = {trials} 
            onDelete = {deleteTask}
            onToggle = {toggleFinished}
            />):('Nothing here!')}
           
           
        </div>
    )
}

export default Challanges;