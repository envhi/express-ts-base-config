import { Request, Response } from "express";

export class GenericController {

  async home (req: Request, res: Response) {
    res.json({msg: 'Ok'})
  }

  async create(req: Request, res: Response) {
  }

  async findAll(req: Request, res: Response) {
  }

  async findOne(req: Request, res: Response) {
  }

  async update(req: Request, res: Response) {
  }

  async delete(req: Request, res: Response) {
  }

}

export const genericController = new GenericController();
