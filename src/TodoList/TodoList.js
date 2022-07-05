import React, {useState} from 'react';

const TodoList = ({el, deleteTodo, changeStatus, updateTodo}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState(el.name)

    const openInput = () => {
        setIsOpen(true)
    }

    const closeInput = (title, id) => {
        updateTodo(title,id)
        setIsOpen(false)
    }

    const saveChange = (e) => setTitle(e.target.value)


    return (
        <li className=" px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 flex items-center justify-between">
                                     <span className="flex">
                                          <input
                                              onChange={() => changeStatus(el.id)}

                                              defaultChecked={el.isDone}
                                              type="checkbox"/>
                                         {
                                             isOpen ? <input className="input-save text-black p-1 mx-2 bg-yellow-100"
                                                             onChange={saveChange}
                                                             onKeyDown={(event) => {
                                                                 if (event.key === "Enter"){
                                                                     closeInput(title, el.id)
                                                                 }
                                                             }}
                                                             type="text"
                                                             value={title}/> :   <span
                                                 style={{
                                                     textDecoration: el.isDone? "line-through": ""
                                                 }}
                                                 className="mx-2">{el.name}</span>
                                         }
                                     </span>
            <span className="flex items-center">
                                          <button
                                              onClick={() => isOpen? closeInput(title, el.id) : openInput()}
                                                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                              {isOpen? "сохранить" : "изменить"}</button>

                                          <button
                                              onClick={() => deleteTodo(el.id)}
                                              type="button"
                                                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                              удалить</button>
                                      </span>
        </li>
    );
};

export default TodoList;