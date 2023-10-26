import bcrypt from "bcryptjs";
import pool from "../db.js";

export const signUp = async (req, res) => {
  const { firstName, lastName, username, email, password, dateOfBirth } =
    req.body;
  let query = `INSERT INTO users (first_name,last_name,userName,email,password,dateOfBirth) VALUES ($1,$2,$3,$4,$5,$6)`;
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const { rows } = await pool.query(query, [
      firstName,
      lastName,
      username,
      email,
      passwordHash,
      dateOfBirth,
    ]);
    return res.sendStatus(201);
    // if(!rows) return res.sendStatus(404)
  } catch (error) {
    console.log("Error query insert : ", error);
    // res.status(500).json(error.detail);
    return res.sendStatus(500);
  }
};
