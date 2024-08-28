import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// import { v4 as uuidv4 } from 'uuid'; uuidv4()
function App() {
  const [todo, settodo] = useState('');
  const [todos, settodos] = useState([]);

  function saveToLS(){
    localStorage.setItem('todos',JSON.stringify(todos))
  }

  useEffect(() => {
    let todsstring  = localStorage.getItem('todos');
    if(todsstring){
      settodos(JSON.parse(todsstring))
    }
    console.log('useffelc')
  }, [])
  

  function handleEdit(e){
    settodo(todos[e].todo);
    let newTodo = [...todos];
   newTodo.splice(e,1)
   settodos(newTodo)
   saveToLS()
  }

  function handleDelete(e){
   let newTodo = [...todos];
   newTodo.splice(e,1)
   settodos(newTodo)
   saveToLS()
  }
  function handleAdd(){
    if(todo === ''){
      alert('enter todo')
    }
    else{

      settodos([...todos,{todo,isCompleted:false}]);
      settodo('')
      saveToLS()
    } 
  }
  function handleChange(e){
    settodo(e.target.value)
  }

  function handleCheckbox(e){
    let newTodo2 = [...todos];
    newTodo2[e].isCompleted = !newTodo2[e].isCompleted
    settodos(newTodo2)
    saveToLS()
  }
  return (
    <>
      <Navbar/>
      <div className="container bg-violet-100  p-5 my-5 rounded-xl w-[75%] ml-[130px] min-h-[80vh]">
        <h1 className='text-center text-3xl font-bold mb-6'>iTask-Manage your Todos</h1>
        <div className="Add Todo mb-3">
          <h2 className='font-bold text-lg mb-2'>Add Todo</h2>
          <input value={todo} onChange={handleChange} className='px-3 outline-none py-1 w-[500px]' type="text" placeholder='Add Todo' />
          <button onClick={handleAdd} className='bg-violet-700 text-white px-3 py-1 mx-6 rounded-md hover:bg-violet-800 font-bold text-sm'>Add</button>
        </div>
        {/* <input onChange={toggleFinished} className='mb-4' type="checkbox" checked={showFinished}  /> Show Finished */}
        <h2 className='font-bold text-lg mb-3'>Your Todos</h2>
        <div className="todos">
          {todos.map(function(item,id){
          return <div key={id} className="todo flex mb-4 justify-between">
            <div className="first flex gap-3">
            <input onChange={function(){handleCheckbox(id)}} checked={item.isCompleted}  type="checkbox" name="" id="" />
           <p  className={item.isCompleted?'line-through':''}>{item.todo}</p>
           </div>
           <div className="buttons flex">
           <button onClick={function(){handleEdit(id)}} className='bg-violet-700 text-white px-3 py-1  rounded-md hover:bg-violet-800 font-bold text-sm'><FaEdit />
           </button>
           <button onClick={function(){
            handleDelete(id)
           }} className='bg-violet-700 text-white px-3 py-1 ml-2 rounded-md hover:bg-violet-800 font-bold text-sm'><MdDelete />
</button>
           </div>
          </div>
            })}
        </div>
      </div>
    </>
  )
}

export default App
