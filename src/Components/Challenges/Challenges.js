import Challenge from './Challenge'

const Challenges = ({trials, onDelete, onToggle}) =>{
    return(
        <>
            {trials.map((trial) => (
                <Challenge key = {trial.id} trial = {trial}
                
                 onDelete = {onDelete}
                 onToggle = {onToggle}
              />
                
            ))}
            
        </>
    )
}
export default Challenges