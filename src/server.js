import express from "express";
import morgan from  "morgan"
import homeRouter from "./routers/homeRouter";
import userRouter from "./routers/userRouter";
import leagueRouter from "./routers/leagueRouter";


const app = express();


// app.use("/", rootRouter);
// app.use("/users", userRouter);



const logger = morgan("dev");

app.use(logger)
// app.use 는 미들웨어

app.set("view engine", "pug")
app.set("views",process.cwd() + "/src/views" )


app.use("/", homeRouter);
// app.use("/user", userRouter)
// app.use("/league", leagueRouter)


app.listen(3000, function() {
  console.log("Server is running on port 3000.")
})
