// importazione della lista dei post
let { posts } = require("../data/db");

//configurazione del router
const express = require("express");
const router = express.Router();

//CRUD

// INDEX per visualizzare tutti gli elementi
router.get("/", (req, res) => {
  res.json({
    description: "Lista dei post",
    data: posts,
  });
});

//SHOW per visualizzare un elemento specifico tramite id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  res.json({
    description: `Post con id ${id}`,
    data: post,
  });
});

//STORE per creare un nuovo elemento
router.post("/", (req, res) => {
  res.send("Creazione di un nuovo elemento");
});

//UPDATE per modificare un delemento specifico tramite id
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.send(`Modifica dell' elemento con id: ${id}`);
});

//DESTROY per eliminare un elemento specifico tramite id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  posts = posts.filter((post) => post.id !== id);
  res.json({
    description: "Elemento eliminato correttamente",
    data: posts,
  });
});

module.exports = router;
