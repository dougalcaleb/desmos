import { uiHandler } from "./uiHandler.js";
import { DataStore } from "./store.js";
import { TuneMaker } from "./tuneMaker.js";


const Store = new DataStore();

uiHandler.setup(Store);
TuneMaker.setup(Store);