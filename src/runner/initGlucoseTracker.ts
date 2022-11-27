import * as dotenv from "dotenv";
import { GlucoseTracker } from "../glucose-tracker/glucoseTracker";

dotenv.config();

const glucoseTracker = new GlucoseTracker();

// Setup the program
glucoseTracker.start();
