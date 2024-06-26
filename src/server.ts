import config from "./Config/config";
import { app } from "./Config/express";
import { LogService } from "./App/Services/Log/LogService";
// import fs from "fs";


try {
  // Start the server
  app.listen(config.port, () => {
    console.log(`
      _____ _ _   _  ____ 
     |  ___(_) \\ | |/ ___|
     | |_  | |  \\| | |    
     |  _| | | |\\  | |___ 
     |_|   |_|_| \\_|\\____|
     
   `);

    new LogService({
      message: `Server is running on port ${config.port}`,
      source: "Server",
    });
  });


} catch (e: any) {
  new LogService({
    message: e.message,
    source: "Server",
  });
  // fs.writeFileSync("error-sever-bootstrap.log", e, { flag: "a" });
}
