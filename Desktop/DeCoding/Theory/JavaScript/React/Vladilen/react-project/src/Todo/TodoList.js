import React from 'react' 
import TodoItem from './TodoItem'
import PropTypes  from 'prop-types'
// Всегда импортируем что-то 
// Всегда импортируем первую строчку 


// И экспортируем что-то 




const styles = {
    ul:{
        listStyle: 'none',
        padding: 0,
        margin:0,
    }

}



// Например: 
function TodoList(props){
    return(
        <ul style={styles.ul}>
            { props.todos.map((todo, index) => {
                return ( 
                <TodoItem 
                    todo = {todo} 
                    key={todo.id} 
                    index ={index}
                    onChange={props.onToggle} 
                    />
                    )
            })}
        </ul>
    )
}


TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList

// Можем поработать здесь со стилями 
// Для этого создам переменную выше 

