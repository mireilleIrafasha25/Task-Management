import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const durations = ['All', 'Daily', 'Weekly', 'Monthly', 'Year'];

 const Home=()=>{
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [duration, setDuration] = useState('Daily');
  const [filter, setFilter] = useState('All');
  const [editId, setEditId] = useState(null);

  const handleAddTask = () => {
    if (!taskName) return;

    if (editId) {
      setTasks(tasks.map(task => task.id === editId ? { ...task, name: taskName, duration } : task));
      setEditId(null);
    } else {
      setTasks([...tasks, { id: uuidv4(), name: taskName, duration }]);
    }

    setTaskName('');
    setDuration('Daily');
  };

  const handleDelete = (id) => setTasks(tasks.filter(task => task.id !== id));

  const handleEdit = (task) => {
    setTaskName(task.name);
    setDuration(task.duration);
    setEditId(task.id);
  };

  const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.duration === filter);

  return (
    <div className="text-white p-8 font-sans">
      <div className='bg-[#212C29]'>
      <div>
        <h1 className="text-4xl font-bold mb-4">
        Make a <span className="text-indigo-400">better</span> plan <br /> for your life
        </h1>
        <div className='flex flex-wrap w-100'>
        <p className=" text-gray-400 mb-8 w-[16rem]">
        Whoever you are, Whatever you are looking for, we have the perfect place for you
      </p>
           <div className="flex flex-row gap-4 mb-6">
        <select
          value={duration}
          onChange={e => setDuration(e.target.value)}
          className="bg-black border border-yellow-400 h-10 py-1 px-1 rounded-3xl"
        >
          {durations.slice(1).map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Task"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          className="w-1/2 bg-black border border-yellow-400 h-10 rounded-2xl"
        />

        <button
          onClick={handleAddTask}
          className="bg-[#A5A763] text-black h-10 rounded-2xl w-[10rem]">
          {editId ? 'Update Task' : 'Add Task'}
        </button>
      </div>
      </div>
       </div>
 
      </div>

      <div className="flex justify-center gap-2 mb-6">
        {durations.map(d => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className={`px-4 py-2 rounded-full border ${filter === d ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-white'}`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredTasks.map((task, idx) => (
          <div key={task.id} className="flex justify-between items-center bg-gray-800 rounded-full px-6 py-2">
            <span>{idx + 1}</span>
            <span className="flex-1 ml-4">{task.name}</span>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(task)} className="bg-indigo-500 p-2 rounded-full">✏️</button>
              <button onClick={() => handleDelete(task.id)} className="bg-red-500 p-2 rounded-full">🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
