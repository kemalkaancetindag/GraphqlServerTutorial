const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors =  require("cors")

mongoose.connect(
  "mongodb+srv://kemalkaan:12688621kK@cluster0.vbidi.mongodb.net/Cluster0?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("DB Connection OK");
});

const app = express();

app.use(cors()) 

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening on 4000");
});
