import express, { Router, Request, Response } from "express";
import {employeeFeedback} from "common/src/types";
import {FormType} from "common/src/FormType"

const router: Router = express.Router();

let database: FormType[] = [];

router.post("/", async function (req: Request, res: Response) {
    const data: FormType = req.body;
    database.push(data);
    console.log(database);
    res.status(200).json("added db object");
});

router.get("/", async function (req: Request, res: Response) {
    res.status(200).json(database);
});

export default router;