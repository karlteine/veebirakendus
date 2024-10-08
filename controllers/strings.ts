import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/hello-world", (req: Request, res: Response) => {
    res.send("Hello world at " + new Date())
});

router.get("/hello-variable/:nimi", (req: Request, res: Response) => {
  res.send("Hello " + req.params.nimi)
});

router.get("/add/:nr1/:nr2", (req: Request, res: Response) => {
  res.send(req.params.nr1 + req.params.nr2)
});

router.get("/multiply/:nr1/:nr2", (req: Request, res: Response) => {
  const nr1 = Number(req.params.nr1);
  const nr2 = Number(req.params.nr2);
  res.send((nr1 * nr2).toString());
});

router.get("/do-logs/:arv", (req: Request, res: Response) => {
  for (let index = 0; index < Number(req.params.arv); index++) {
    console.log("See on logi nr " + index);
  }
  res.send();
});
router.get("/random/:n1/:n2", (req: Request, res: Response) => {
  const n1 = Number(req.params.n1)
  const n2 = Number(req.params.n2)
  res.send((Math.random() * (n1 - n2) + n2).toString())
})
router.get("/year/:yr", (req: Request, res: Response) => {
    const yr = Number(req.params.yr)
    res.send("Oled " + (2024-yr).toString() + " või " + (2023-yr).toString() + " aastat vana, olenevalt kas sellel aastal on sünnipäev juba olnud")
}) 



export default router;