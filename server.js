import express from "express";

const app = express();

let friends = ["ayyan", "khyber", "abdul rafay"]

app.get("/friends", (req, res) => {
    return res.json(friends);
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running at ${process.env.PORT}`)
})