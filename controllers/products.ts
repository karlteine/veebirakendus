import { Request, Response, Router } from "express";
import Toode from "../models/Toode";

const router: Router = Router();

let toode: Toode | null = new Toode(1, "Koola", 1.5, true);

router.get("/toode", (req: Request, res: Response) =>  {
  res.send(toode)
});

router.get("/kustuta-toode", (req: Request, res: Response) =>  {
  toode = null;
  res.send(toode)
});

router.get("/kustuta-toode2", (req: Request, res: Response) =>  {
  toode = null;
  res.send("Edukalt kustutatud");
});

router.get("/suurenda-hinda", (req: Request, res: Response) =>  {
  if (toode !== null) {
    toode.price = toode.price + 1;
  }
  res.send(toode);
});

router.get("/muuda-statust", (req: Request, res: Response) => {
    if (toode !== null) {
      toode.isActive = !toode.isActive;
      res.send(toode);
    } else {
      res.status(404).send("Toodet ei leitud");
    }
  });
  router.get("/muuda-nime/:newName", (req: Request, res: Response) => {
    const { newName } = req.params;
    if (toode !== null) {
      toode.name = newName;
      res.send(toode);
    } else {
      res.status(404).send("Toodet ei leitud");
    }
  });

export default router;