import {BiWalk} from "react-icons/bi"
import {FaTimes} from 'react-icons/fa'
import {useState} from 'react'
import ProgressBar from "react-bootstrap/ProgressBar"

const Challenge = ({trial, onDelete, onToggle}) => {
    const [finished, setFinished] = useState(false)
    return(
        <div className = {`trial ${trial.finished ? 'finished' : ''}`} onDoubleClick = {
            () => onToggle(trial.id)
        }>
            
            <h3 className = 'challenges'>{trial.text}{' '}
            <BiWalk 
            style = {{color: 'green',
            cursor: 'pointer' }} className = 'icon'/>
            <div className = 'form-control form-control-check'>
                <label>Finished?</label>
                <input type = 'checkbox'
                checked = {finished}
                value = {finished}
                const onChange = {(e)=> {
                    setFinished(e.currentTarget.checked)
                    
                    if(!finished){
                        alert("Are you sure you're finished? We did not log 100% of your task")
                        
                    }
                    if(!finished){
                        trial.progress = '100'
                    }
                }}
                />
            </div>
            <FaTimes
            style ={{color:'red', cursor: 'pointer'}}
            onClick = {() => onDelete(trial.id)}/>
            </h3>
            <div id = "myProgress">
           <ProgressBar animated now ={trial.progress} />
           </div>
         
             <p>{trial.progress}%</p>
       
         </div>
    )
}

export default Challenge