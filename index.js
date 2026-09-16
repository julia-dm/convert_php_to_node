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
app.get("/galerie", (req, res) => {
  res.render("galerie.ejs", { title: "Galerie" });
});
app.get("/geographie", (req, res) => {
  res.render("geographie.ejs", { title: "Geographie" });
});
app.get("/histoire", (req, res) => {
  res.render("histoire.ejs", { title: "Histoire" });
});
app.use((req, res) => {
  res.status(404).render("page-404.ejs", { title: "Page non trouvée" });
});
app.listen(port, () => {
  console.log(` http://localhost:${port}`);
});