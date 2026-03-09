import { setupWorker } from "msw";
import userHandlers from "./userHandlers";
import blogsHandlers from "./blogsHandlers";
export const worker = setupWorker(...userHandlers, ...blogsHandlers);
