import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/data", (req, res) => {
  const { name = "" } = req.query;
  let aborted = false;
  req.on("close", () => {
    aborted = true;
    clearTimeout(result);
  });
  const result = setTimeout(() => {
    if (!aborted) {
      return res.json({ message: name });
    }
  }, 1000);
});

app.listen(3000, () => {
  console.log("Listening to port");
});
