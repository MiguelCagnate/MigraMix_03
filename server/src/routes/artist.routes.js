import { Router } from "express";
import { validateSchemaRequest } from "../middleware/validator.requestBody.js";
import { authenticateToken } from "../middleware/auth.middleware.js";
import { artistSchema } from "../schemas/artist.schemas.js";
import {
  putProfileByArtist,
  getProfileArtist,
  getArtistList,
} from "../controllers/artist.controllers.js";
const router = Router();

router.put(
  "/artists",
  authenticateToken,
  validateSchemaRequest(artistSchema),
  putProfileByArtist
);
router.get("/artists", authenticateToken, getProfileArtist);
router.get("/artistsList", getArtistList);

export default router;
