import { useEffect, useState } from "react";

const Todo = () => {
    const [newTask, setNewTask] = useState("");
    const saved = localStorage.getItem("taskList");
    console.log(JSON.parse(saved));
    const [taskList, setTaskList] = useState(saved ? JSON.parse(saved) : []);

    const toggleTask = (id) => {
        setTaskList(
            taskList.map((task) =>
                task.id === id ? { ...task, isDone: !task.isDone } : task
            )
        );
    };

    const addTask = (e) => {
        e.preventDefault();
        console.log(newTask);
        setTaskList((prev) => [
            ...prev,
            { task: newTask, id: Date.now(), isDone: false },
        ]);
        setNewTask("");
    };

    const deleteTask = (id) => {
        setTaskList(taskList.filter((i) => i.id !== id));
    };

    useEffect(() => {
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }, [taskList]);

    return (
        <div className=" h-[700px] w-[450px] flex flex-col max-h-[900px]">
            <div className="flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-neutral-800 to-transparent text-xl font-semibold text-neutral-300">
                Today's tasks
            </div>
            <div className="flex flex-col px-3 py-6 scroll-smooth scrollbar-hide overflow-y-scroll">
                {taskList.map((i) => (
                    <TodoItem
                        task={i.task}
                        isDone={i.isDone}
                        key={i.id}
                        id={i.id}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask}
                    />
                ))}
                <form onSubmit={addTask}>
                    <input
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        type="text"
                        placeholder="+ add task"
                        className="ml-7 py-2 text-xl bg-transparent outline-none shadow-none focus:outline-none focus:placeholder-transparent focus:border-b border-neutral-700"
                    />
                </form>
            </div>
        </div>
    );
};

const TodoItem = ({ task, isDone, toggleTask, id, deleteTask }) => {
    const [hover, setHover] = useState(false);
    return (
        <div
            className={`py-3 pl-2 group rounded-full flex items-center text-xl text-neutral-300 font-semibold hover:text-[22px] transition-all duration-100 cursor-pointer ${
                hover ? "bg-red-600/20 " : "hover:bg-neutral-800/50"
            }`}
        >
            <div
                onClick={() => toggleTask(id)}
                className="flex items-center w-7/8"
            >
                <div className="mx-3">
                    {isDone ? (
                        <img
                            src="checkmark.png"
                            className="w-[20px] p-0 group-hover:h-[22px] group-hover:w-[22px]"
                        />
                    ) : (
                        <div
                            className={`w-3 h-3 rounded-xl border group-hover:w-[14px] group-hover:h-[14px] bg-neutral-700`}
                        ></div>
                    )}
                </div>
                <div
                    className={`${
                        isDone ? "line-through text-neutral-400" : ""
                    }`}
                >
                    {task}
                </div>
            </div>
            <div
                onClick={() => deleteTask(id)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="h-full w-9 text-center text-neutral-400 group-hover:opacity-100 opacity-0 hover:text-red-600 "
            >
                x
            </div>
        </div>
    );
};

export default Todo;
