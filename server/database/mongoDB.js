import mongoose from "mongoose";

export default function connect() {
  const database = "mongodb+srv://leecalv02:g48gkLl1viNFkbuw@todocluster.a3l8a.mongodb.net/?retryWrites=true&w=majority&appName=TodoCluster";
  mongoose
    .connect(database, {
      
      
      dbName: "todos",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log(error);
    });
}
