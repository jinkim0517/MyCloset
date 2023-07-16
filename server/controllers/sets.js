import { db } from "../db.js"


export const getSets = (req, res) => {
    const q = "SELECT * FROM sets WHERE uid=?";
  
    db.query(q, [req.query.uid], (err, data) => {
      if (err) return res.status(500).send(err);
  
      return res.status(200).json(data);
    });
};

export const getSet = (req, res) => {
    const q = "SELECT * FROM sets WHERE id=?";
  
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data[0]);
    });
};

export const addSet = (req, res) => {
    const q = "INSERT INTO sets(`name`, `top`, `outerwear`, `bottom`, `footwear`, `accessory`, `uid`) VALUES (?)";
    
    const values = [
        req.body.name,
        req.body.top,
        req.body.outerwear,
        req.body.bottom,
        req.body.footwear,
        req.body.accessory,
        req.body.uid
    ];
    
    db.query(q, [values], (err, data) => {
        if (err) return res.send(err)
        return res.json(data)
    });
}

export const deleteSet = (req, res) => {
    const setId = req.params.id;
    const q = " DELETE FROM sets WHERE id = ? ";
    
    db.query(q, [setId], (err, data) => {
        if (err) return res.send(err)
        return res.json(data)
    });
}