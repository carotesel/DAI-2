import {Router} from 'express';
import PizzaService from "../services/pizzaService.js";

const apiRouter = Router();
const service = new PizzaService();
