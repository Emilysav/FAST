import {useState} from 'react'

const AddTrial = ({onAdd}) => {
    const[text, setText] = useState('')
    const[progress, setProgress] = useState('')
    const[finished, setFinished] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }
        onAdd({text, progress, finished})

        setText('')
        setProgress('')
        setFinished(false)
    }
    return(
        <form className = 'add-form' onSubmit={onSubmit}>
            <div className = 'form-control'>
                <label>Challenge Name</label>
                <input type = 'text' placeholder = 'Add Challenge'
                value = {text}
                onChange = {(e)=>setText(e.target.value)}/>
            </div>
            <div className = 'form-control'>
                <label>Current Progress</label>
                <input type = 'text' placeholder = 'Add Progress'
                value = {progress}
                onChange = {(e) => setProgress(e.target.value)}/>

            </div>
            <div className = 'form-control form-control-check'>
                <label>Did you finish it already?</label>
                <input type = 'checkbox'
                checked = {finished}
                value = {finished}
                onChange ={(e) => setFinished(e.currentTarget.checked)}/>

            </div>
            <input type = 'submit' value = 'Save Challenge'
            className = 'btn btn-block'/>
        </form>
    )
}

export default AddTrial