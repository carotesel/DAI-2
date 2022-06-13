import { Router } from 'express';
import PizzaService from "../services/pizza-services.js";
import Pizza from "../models/pizza.js";

const apiRouter = Router();
const service = new PizzaService();
const pizza = new Pizza();

apiRouter.get("/", async (req, res) => {
    const allPizzas = await service.getAll();
    res.json(allPizzas).status(200);
})

apiRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const pizza = await service.getById(id);
    res.json(pizza).status(200);
})

apiRouter.post('', async (req, res) => {
    const pizza = req.body;
    const insertedPizza = await service.insert(req.body);
    res.json(insertedPizza).status(201);
})

apiRouter.put("/:id", async (req, res) => {
    const id = req.params.id;
    const pizza = req.body;
    const updatedPizza = await service.update(req.body);
    res.json(updatedPizza);
})


apiRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deletedPizza = await service.deleteById(id);
    res.json(deletedPizza);
})

export default apiRouter;