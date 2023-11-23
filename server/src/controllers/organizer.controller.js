import pool from "../db.js";

export const newOrganizer = async (req, res) => {
  const { eventPlannerBio, eventPlannerMainLink, eventProfilePicture } =
    req.body;

  let query = `INSERT INTO organizer (id_user, biography, main_link, picture) 
  VALUES ($1,$2,$3,$4) 
  ON CONFLICT (id_user) DO UPDATE 
  SET 
  biography=EXCLUDED.biography, 
  main_link=EXCLUDED.main_link, 
  picture=EXCLUDED.picture RETURNING * `;

  const id = req.userId;

  try {
    const { rows } = await pool.query(query, [
      id,
      eventPlannerBio,
      eventPlannerMainLink,
      eventProfilePicture,
    ]);
    if (!rows.length) {
      console.log("error: Failed to register organizer");
      return res.sendStatus(422);
    }
    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(400);
  }
};

export const getPerfilOrganizer = async (req, res) => {
  const id = req.userId;
  
  let query = `SELECT u.first_name, u.last_name, u.username, o.picture
  FROM users u
  INNER JOIN organizer o
    ON u.id = o.id_user
  WHERE id = $1`;
  try {
    const { rows } = await pool.query(query, [id]);
    if (!rows.length) {
      console.log("error: Failed to register organizer");
      return res.sendStatus(422);
    }
    return res.status(200).json(rows[0]);
  } catch (error) {
    return res.sendStatus(400);
  }
};
