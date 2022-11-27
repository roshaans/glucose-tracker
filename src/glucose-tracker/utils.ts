import retry, { Options } from "async-retry";
// import engine from '../fetcher/indexer.js'
// import engine from 'share2nightscout-bridge'
const engine = require('share2nightscout-bridge');
// 1. Simplify programs being shown to eventParsers
// 2. send events to postgres in transaction batches, useDebounce
export async function promiseAllInBatches<T>(
  tasks: (() => Promise<T>)[],
  batchSize: number
) {
  let results: T[] = [];
  while (tasks.length > 0) {
    const currentTasks = tasks.splice(0, batchSize);
    results = results.concat(
      await Promise.all(currentTasks.map((task) => task()))
    );
  }
  return results;
}

function dex_to_entry(d: any) {
  /*
  [ { DT: '/Date(1426292016000-0700)/',
      ST: '/Date(1426295616000)/',
      Trend: 4,
      Value: 101,
      WT: '/Date(1426292039000)/' } ]
  */
    var regex = /\((.*)\)/;
    var wall = parseInt(d.WT.match(regex)[1]);
    var date = new Date(wall);
    // var trend = matchTrend(d.Trend);
    
    var entry = {
      sgv: d.Value / 10
    // , date: wall
    , dateString: date.toISOString( )
    , trend: "FortyFiveDown"
    , direction: "UP"
    // , device: 'share2'
    , type: 'sgv'
    };
    return entry;
  }

export async function getSensorReading(label: string, email: string, password: string) {
  let reading; 
 return await engine.authorize_fetch(
      {
        login: {
          password: password,
          applicationId: "d89443d2-327c-4a6f-89e5-496bbb0317db",
          accountName: email
        },
        fetch: {
          maxCount: 3
        }
      },
      (_error: any, glucose: any) => {
        // console.log(glucose, "glucose reading")
        // console.log(glucose[1], "only one")
        // console.log(glucose.ST)
        if (glucose) {
          var entries = glucose.map(dex_to_entry);
          // var entries = glucose.map(dex_to_entry);
          console.log('-----')
          console.log(label + ":\n")
          console.log(entries);
          console.log('-----')
        }
     
        // console.log(entries)
        // reading = glucose
        return glucose
      }
    )
    console.log("reading", reading)
    return reading
}
