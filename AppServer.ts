import {App} from "./App";

let server: any = new App().expressApp;
server.listen(8080);