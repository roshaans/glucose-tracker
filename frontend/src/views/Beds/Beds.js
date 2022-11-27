import React from "react";
import "../../App.css"
import "./Beds.css";
import BedCard from "../../components/BedCard";
import { bedData } from "../../data/bedData";

const Beds = () => {
  const bedsRoom1 = bedData.filter((b) => b.roomId === 1);
  const bedsRoom2 = bedData.filter((b) => b.roomId === 2);

  return (

    <div className="beds-container flex column justify-center">
      {/* add [Manage Rooms/Beds] on the top right */}
      <div className="flex flex-end">
        <div className="flex justify-center btn-manage">
          Manage Beds
        </div>
      </div>
      <h1 className="flex justify-center">Floor 1</h1>
      <div className="flex justify-center flex-gap pd-t-16">
        {bedsRoom1 && bedsRoom1.map((alert, index) => (
          <BedCard
            id={alert.id}
            roomId={alert.roomId}
            bedId={alert.bedId}
            patientName={alert.patientName}
            startTime={alert.startTime}
            sensorId={alert.sensorId}
            sensorLeftTime={alert.sensorLeftTime}
            transmitterId={alert.transmitterId}
            transmitterLeftTime={alert.transmitterLeftTime}
            key={index}/>
        ))}
      </div>
      <h1 className="flex justify-center pd-t-64">Floor 2</h1>
      <div className="flex justify-center flex-gap pd-t-16">
        {bedsRoom2 && bedsRoom2.map((alert, index) => (
          <BedCard
            id={alert.id}
            roomId={alert.roomId}
            bedId={alert.bedId}
            patientName={alert.patientName}
            startTime={alert.startTime}
            sensorId={alert.sensorId}
            sensorLeftTime={alert.sensorLeftTime}
            transmitterId={alert.transmitterId}
            transmitterLeftTime={alert.transmitterLeftTime}
            key={index}/>
        ))}
      </div>
    </div>

  );
};

export default Beds;
