import { Router } from 'express';
import PizzaService from "../services/pizza-services.js";

const apiRouter = Router();
const service = new PizzaService();

apiRouter.get("/", async (req, res) => {
    const allPizzas = await service.getAll();
    res.json(allPizzas);
})

apiRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const pizza = await service.getById(id);
    res.json(pizza);
})

apiRouter.post("/", async (req, res) => {
    const pizza = req.body;
    const insertedPizza = await service.insert(pizza);
    res.json(insertedPizza);
})

apiRouter.put("/:id", async (req, res) => {
    const id = req.params.id;
    const pizza = req.body;
    const updatedPizza = await service.update(pizza);
    res.json(updatedPizza);
})


apiRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deletedPizza = await service.deleteById(id);
    res.json(deletedPizza);
})

export default apiRouter;