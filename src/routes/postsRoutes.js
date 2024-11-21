import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ dest: "./uploads", storage });


const routes = (app) => {
  // Permite que o servidor interprete requisições com o corpo JSON
  app.use(express.json());

  // Rota para buscar/ler todos os posts
  app.get("/posts", listarPosts);

  /* 
  VERBOS HTML (CRUD)

  CREATE -> (CRIAR) = POST
  READ -> (LER) = GET
  UPDATE -> (ATUALIZAR) = PUT
  DELETE -> (DELETAR) = DELETE 
  */

  // Rota para criar um post
  app.post("/posts", postarNovoPost);

  app.post("/upload", upload.single("imagem"), uploadImagem);

};

export default routes;


