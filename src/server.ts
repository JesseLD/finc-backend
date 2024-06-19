import config from "./Config/config";
import { app } from "./Config/express";


// Start the server
app.listen(config.port, () => {
  console.log(`
       _____ _ _   _  ____ 
      |  ___(_) \ | |/ ___|
      | |_  | |  \| | |    
      |  _| | | |\  | |___ 
      |_|   |_|_| \_|\____|
      
    `);
  console.log(`[Server] Server is running on port ${config.port}`);
});
