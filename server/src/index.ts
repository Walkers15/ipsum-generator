import express from "express";
import * as core from "express-serve-static-core";
import cors from "cors";
import { config } from "dotenv";
// import mongoose from "mongoose";
import morgan from "morgan";
import { faker, UsableLocale } from "@faker-js/faker";
console.log("Server Restart");

config();

// const uri = String(process.env.ATLAS_URI);
// mongoose.set("strictQuery", false);
// mongoose.connect(uri);
// const connection: mongoose.Connection = mongoose.connection;

// connection.once("open", async () => {
//   console.log("MongoDB database connection established successfully");
//   cron.schedule("7 3 */1 * *", refreshDiary);
// });

const app: core.Express = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

enum WordType {
  paragraphs,
  words,
  sentences,
  lines,
}
interface IIpsumRequest {
  language: UsableLocale;
  type: WordType;
  count: number;
}

app.get("/ipsum", (req: core.Request<unknown, unknown, unknown, IIpsumRequest>, res) => {
  const language = req.query.language;
  const type: WordType = Number(req.query.type);
  const count = Number(req.query.count);
  console.log(language, type, count);
  faker.setLocale(language);
  let ipsum = "";

  switch (type) {
    case WordType.paragraphs:
      console.log("ipsum paragraphs");
      ipsum = faker.lorem.paragraphs(count);
      break;
    case WordType.words:
      console.log("ipsum words");
      ipsum = faker.lorem.words(count);
      break;
    case WordType.sentences:
      console.log("ipsum sentences");
      ipsum = faker.lorem.sentences(count);
      break;
    case WordType.lines:
      console.log("ipsum lines");
      ipsum = faker.lorem.lines(count);
      break;
  }

  res.json({ ipsum });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
