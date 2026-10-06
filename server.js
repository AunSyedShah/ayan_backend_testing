import express from "express";

const app = express();

app.get("/", (req, res) => {
    return res.json(
        {
            message:"ok"
        }
    )
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running at ${process.env.PORT}`)
})