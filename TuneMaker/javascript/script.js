import { uiHandler } from "./uiHandler.js";
import { DataStore } from "./store.js";



const Store = new DataStore();

uiHandler.setup(Store);