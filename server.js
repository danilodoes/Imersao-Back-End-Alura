import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();

//para server os arquivos estáticos (imagens da pasta uploads)
app.use(express.static("uploads"));
routes(app);
app.listen(3000, () => {
  console.log("Servidor escutando... ");
});
