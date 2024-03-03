import { Router } from "express";
import { genericController } from "./app/controller/genericController";

const router: Router = Router()

//Routes
router.get("/", genericController.home);

export { router };
