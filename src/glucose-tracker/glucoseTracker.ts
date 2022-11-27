import cliProgress from "cli-progress";
import { glucoseTracker } from "../utils/prismaClient";
import { promiseAllInBatches, getSensorReading } from "./utils";
// import {default as auth_details} from "../utils/auth-json.json";
// import Authinfo from '../types/GlucoseTrackerTypes'
const progressBar = new cliProgress.SingleBar(
  {},
  cliProgress.Presets.shades_classic
);

// pull this from .env
const auth_details: Record<string,  Record<string, string>> =  {
  "room1-bed1-dexcom": {
      "email": "park49j@mtholyoke.edu",
      "password": "REDACTED"
  },
  "room2-bed2-dexcom": {
    "email": "daniel.sulc@bindworks.eu",
    "password": "REDACTED"
  },
  "r2b1": {
      "email": "park49j@mtholyoke.edu",
      "password": "REDACTED"
    },
  "r2b2": {
      "email": "park49j@mtholyoke.edu",
      "password": "REDACTED"
    },
  "r3b1": {
      "email": "park49j@mtholyoke.edu",
      "password": "REDACTED"
    },
  "r3b2": {
      "email": "park49j@mtholyoke.edu",
      "password": "REDACTED"
    },
  "r4b1": {
      "email": "park49j@mtholyoke.edu",
      "password": "REDACTED"
    }, 
  "r4b2": {
      "email": "park49j@mtholyoke.edu",
      "password": "REDACTED"
    }
}
interface DatabaseKey {
  id: string;
  description: string;
  boolKey?: boolean;
  intKey?: number;
}
export class GlucoseTracker {
  static TX_SYNC_INTERVAL = 5000;
  static PREF_SYNC_INTERVAL = 130000;

  private client: any;
  private sensorsToTrack: any[] = [];

  constructor() {
    this.client = glucoseTracker;
  }

  public async start() {
    try {
      await this.initializeApp();
    } catch (err) {
      console.log(`failed to initialize program ${err}`);
      throw err;
    }
    console.log(
      `loop: check sensor data every ${
        GlucoseTracker.TX_SYNC_INTERVAL / 1000
      }s`
    );
    this.startProcess();
  }

  private async startProcess() {
    try {
      console.log("syncSignatures: fetching data from sensors ");
      await this.getSensorReadings();
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        this.startProcess();
      }, GlucoseTracker.TX_SYNC_INTERVAL);
      setTimeout(() => {
        this.initializeApp();
      }, GlucoseTracker.PREF_SYNC_INTERVAL);
    }
  }

  /**
   * Initialize the program
   */
  public async initializeApp() {
    console.log(`initializeApp - glucoseTrackerProgram`);
    try {
      console.log("get sensors to be tracked from DB");
      this.sensorsToTrack = await glucoseTracker.labels.findMany({
        select: { sensor_serial_no: true, label: true },
      });
    } catch (err) {
      console.log("errored out");
    }
  }

  async getSensorReadings() {
    const tasks: (() => Promise<any>)[] = [];
    for await (const sensor of this.sensorsToTrack) {
      const sensor_label = sensor.label
      console.log(sensor_label, "sensor_label")
      const reading = await getSensorReading(sensor_label,auth_details[sensor_label].email,auth_details[sensor_label].password )
     
      // console.log(reading, "reading")
    //   tasks.push(() => 
      
    //   getSensorReading(auth_details[sensor_label].email,auth_details[sensor_label].password )
    //   .then((sensor_reading)=> {
    //     sensor['values'] = sensor_reading
    //     console.log(sensor, "this is whole sensor")
    //   }))      
    // }

    // Do promises in batch sizes of 4 to do it faster
    // await promiseAllInBatches(tasks, 4);

    //   // console.log(owner, "owner");
    const commitToDB = [];

      
    // for await (const sensor of sensorsToTrack.tokenAccounts.value) {
    //   token_balance += Number(balance.value.uiAmount);
    //   // await sleep(400);
    // }
      // commitToDB.push({
      //   label: sensor_reading,
      //   mint: all_token_accounts.mint.mint_name,
      //   owner_address: owner.owner,
      //   balance: token_balance,
      // });
    // }

    // console.log(commitToDB, "ALL DB COMMITs");
    // await glucoseTracker.sensorRecords.createMany({ data: commitToDB });
  }
}
}