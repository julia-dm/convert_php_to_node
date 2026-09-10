import express from "express"

import path from 'node:path';


const app = express();
const port = 3000;
const __dirname=import.meta.dirname
app.use(express.static(path.join(__dirname,'public')))

app.get("/", (req, res) => {
  res.render("accueil.ejs", { title: "Accueil" });
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs", { title: "Contact" });
});
app.get("/culture", (req, res) => {
  res.render("culture.ejs", { title: "Culture" });
});
app.listen(port, () => {
  console.log(` http://localhost:${port}`);
});