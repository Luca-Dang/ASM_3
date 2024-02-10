import express from 'express';
import example from "./routes/example";
import sendMed from "./routes/sendMed";

const app = express();

app.use(express.json());

app.use("/api/example", example);
app.use("/api/med",sendMed);

app.listen(3001, () => {
    console.log("started");
});