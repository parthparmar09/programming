import carHandlers from "./carHandlers";
import userHandlers from "./userHandlers";

export const handlers = [...userHandlers, ...carHandlers];
