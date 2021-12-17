import Proptypes from 'prop-types'
import Button from './Button'
const Header = ({onAdd, showAdd}) =>{
    return(
        <header>
             <Button color = 'Purple' 
             text = {showAdd ? 'Cancel' : 'Add new Challenge!'} 
             onClick = {onAdd}/>
        </header>
    )
}

export default Header