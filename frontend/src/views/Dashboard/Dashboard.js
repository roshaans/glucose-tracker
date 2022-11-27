import React from "react";
import './Dashboard.css';
import TaskCardDashboard from "../../components/TaskCardDashboard";
import TaskCardLong from "../../components/TaskCardLong";
import ThumbnailCard from "../../components/Dashboard/thumbnailCard";
import { alertData } from "../../data/alertData";
import { bedData } from "../../data/bedData";

const Dashboard = () => {

  const alert = alertData.filter((alert) => alert.isDone === false);
  const beds = bedData

  return (
    <div className="dashboard-container">
      <h2>Tasks</h2>
      {alert && alert.map((alert, index) => (
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
      <h2 className="pd-t-32">Graphs</h2>
      <div className="thumbnail-container flex flex-gap">

          {beds && beds.map((bed, index) => (
            <ThumbnailCard />
          ))}

      </div>
      
        
    </div>

  );

};

export default Dashboard;
