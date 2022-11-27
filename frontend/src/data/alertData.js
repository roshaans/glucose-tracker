export const alertData = [
    {
        id: 1,
        dateTime: "2020-10-01 12:00:00",
        when: "1 hour ago",
        alertType: "⚠️ Transmitter Expired:", // Transmitter Expired, Sensor Expired, LOW, HIGH
        roomId: 1,
        bedId: 4,
        patientId: 1,
        message: '', // will be generated from the patient's data later
        isDone: false,
    },
    {
        id: 2,
        dateTime: "2022-10-03 12:00:00",
        when: "38 minutes ago",
        alertType: "⚠️ Sensor Expired:", // Transmitter Expired, Sensor Expired, LOW, HIGH
        roomId: 1,
        bedId: 3,
        patientId: 2,
        message: '', // will be generated from the patient's data later
        isDone: false,
    },
    {
        id: 3,
        dateTime: "2022-10-03 12:00:00",
        when: "8 minutes ago",
        alertType: "🚨 LOW:", // Transmitter Expired, Sensor Expired, LOW, HIGH
        roomId: 2,
        bedId: 4,
        patientId: 3,
        message: '3.4 mmol/g (target: 4.0 - 10.0 mmol/g)', // will be generated from the patient's data later
        isDone: false,
    },

    {
        id: 5,
        dateTime: "2022-10-03 12:00:00",
        when: "2 hours ago",
        alertType: "🚨 HIGH:", // Transmitter Expired, Sensor Expired, LOW, HIGH
        roomId: 2,
        bedId: 3,
        patientId: 5,
        message: '10.86 mmol/g (target: 4.0 - 10.0 mmol/g)', // will be generated from the patient's data later
        isDone: true,
    },
    {
        id: 6,
        dateTime: "2022-10-03 12:00:00",
        when: "2 hours ago",
        alertType: "⚠️ Sensor Expired:", // Transmitter Expired, Sensor Expired, LOW, HIGH
        roomId: 2,
        bedId: 3,
        patientId: 5,
        message: '', // will be generated from the patient's data later
        isDone: true,
    },
    {
        id: 7,
        dateTime: "2022-10-03 12:00:00",
        when: "2 hours ago",
        alertType: "🚨 LOW:", // Transmitter Expired, Sensor Expired, LOW, HIGH
        roomId: 1,
        bedId: 3,
        patientId: 5,
        message: '3.82 mmol/g (target: 4.0 - 10.0 mmol/g)', // will be generated from the patient's data later
        isDone: true,
    },
    {
        id: 8,
        dateTime: "2022-10-03 12:00:00",
        when: "2 hours ago",
        alertType: "⚠️ Sensor Expired:", // Transmitter Expired, Sensor Expired, LOW, HIGH
        roomId: 2,
        bedId: 5,
        patientId: 5,
        message: '', // will be generated from the patient's data later
        isDone: true,
    },
    {
        id: 9,
        dateTime: "2022-10-03 12:00:00",
        when: "2 hours ago",
        alertType: "🚨 LOW:", // Transmitter Expired, Sensor Expired, LOW, HIGH
        roomId: 1,
        bedId: 8,
        patientId: 5,
        message: '3.86 mmol/g (target: 4.0 - 10.0 mmol/g)', // will be generated from the patient's data later
        isDone: true,
    },
    {
        id: 10,
        dateTime: "2022-10-03 12:00:00",
        when: "2 hours ago",
        alertType: "⚠️ Sensor Expired:", // Transmitter Expired, Sensor Expired, LOW, HIGH
        roomId: 2,
        bedId: 7,
        patientId: 5,
        message: '', // will be generated from the patient's data later
        isDone: true,
    },
]