import { db } from "../db.js"


export const getClothes = (req, res) => {
    const q = req.query.type ? "SELECT * FROM clothes WHERE uid=? AND type=?"
        : "SELECT * FROM clothes WHERE uid=?";

    db.query(q, [req.query.uid, req.query.type], (err, data) => {
        if (err) return res.status(500).json(err);
    
        return res.status(200).json(data);
    });
};


export const getClothing = (req, res) => {
    const q = "SELECT * FROM clothes WHERE id=?";
  
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data[0]);
    });
};

export const addClothing = (req, res) => {
    const q = "INSERT INTO clothes(`name`, `desc`, `type`, `img`, `wears`, `uid`) VALUES (?)";
    
    const values = [
        req.body.name,
        req.body.desc,
        req.body.type,
        req.body.img,
        req.body.wears,
        req.body.uid
    ];
    
    db.query(q, [values], (err, data) => {
        if (err) return res.send(err)
        return res.json(data)
    });
}

export const deleteClothing = (req, res) => {
    const clothesId = req.params.id;
    const q = " DELETE FROM clothes WHERE id = ?";
    
    db.query(q, [clothesId], (err, data) => {
        if (err) return res.send(err)
        return res.json(data)
    });
}


export const updateClothing = (req, res) => {
    const clothingId = req.params.id;
    const q =
    "UPDATE clothes SET `name`=?,`desc`=?,`type`=?,`img`=?, `wears`=? WHERE `id`=?";

    const values = [req.body.name, req.body.desc, req.body.type, req.body.img, req.body.wears];

    db.query(q, [...values, clothingId], (err, data) => {
        if (err) return res.status(500).json(err)
        return res.json(data);
    });
}