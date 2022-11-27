import React from "react";
import "./Tasks.css";
import TaskCardLong from "../../components/TaskCardLong";
import { alertData } from "../../data/alertData";

const Tasks = () => {
  const alertTodo = alertData.filter((alert) => alert.isDone === false);
  const alertDone = alertData.filter((alert) => alert.isDone === true);

  return (

    <div className="all-task-container">
      <h2>To do</h2>
      {alertTodo && alertTodo.map((alert, index) => (
        <TaskCardLong
          alertType={alert.alertType}
          when={alert.when}
          dateTime={alert.dateTime}
          roomId={alert.roomId}
          bedId={alert.bedId} 
          message={alert.message}
          isDone={alert.isDone}
          key={index}/>
      ))}
      <h2 className="pd-t-32">Done</h2>
      {alertDone && alertDone.map((alert, index) => (
        <TaskCardLong
          alertType={alert.alertType}
          when={alert.when}
          dateTime={alert.dateTime}
          roomId={alert.roomId}
          bedId={alert.bedId} 
          message={alert.message}
          isDone={alert.isDone}
          key={index}/>
      ))}
    </div>

  );
};

export default Tasks;
