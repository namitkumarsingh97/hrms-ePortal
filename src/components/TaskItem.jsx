import React from "react";

const TaskItem = ({ task, status, color }) => (
  <li className="flex justify-between items-center">
    <span>{task}</span>
    <span className={`text-sm px-3 py-1 rounded-full ${color}`}>{status}</span>
  </li>
);
export default TaskItem;
