import React, {useState } from "react";
import { Title } from "./Title";
import { TaskTable } from "./TaskTable";
import { AddTaskForm } from "./AddTaskForm";

export const MainComp = () => {


    const initTasks = [
        { task: "Wake up at 6 AM", status: false },
        { task: "Have Healthy Breakfast", status: false },
        { task: "Exercise", status: false },
    ];

    const [tasks, setTasks] = useState(initTasks);

    const addTask = (formData) => {
        // Create a new array with the updated task list and add a new task
        const updatedTasks = [...tasks, { task: formData.task, status: formData.status }];
        setTasks(updatedTasks);
    };

    const handleStatusChange = (task) => {
      const updatedTaskBox = tasks.map((row) =>
        row.task === task ? { ...row, status: !row.status } : row
      );
      setTasks(updatedTaskBox);
    };

    return (
      <div>
        <Title name="Soham" />
        <TaskTable
          tasks={tasks}
          align="center"
          handleStatusChange={handleStatusChange}
        />
        <AddTaskForm
          addTask={addTask}
        />
      </div>
    );
}
