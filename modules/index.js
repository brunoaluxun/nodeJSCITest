const query = require('../database');

module.exports = {
  create: async (req, res) => {
    console.log('Create called');
    try {
      const result = await query(
        'INSERT INTO users (username, password, role, address, email) VALUES (?, ?, ?, ?, ?)',
        [req.body.username, req.body.password, req.body.role, req.body.address, req.body.email]);
      return res.status(200).send({
        status: 200,
        message: 'Success!',
        data: `${req.body.username} has been added to db`
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        status: 500,
        message: 'Couldn\'t process request',
        error: err.message
      });
    }
  },
  list: async (req, res) => {
    console.log('List called');
    try {
      const id = req.body.id;
      if (id) { query1 = `SELECT * FROM users WHERE id = ${id}`; }
      else { query1 = 'SELECT * FROM users'; }
      const result = await query(query1, (err, rows) => {
        if (err) throw err;
        if (rows.length === 0) {
          return res.status(400).send({
            status: 400,
            message: "No available data",
            data: rows
          })
        }
        else {
          return res.status(200).send({
            status: 200,
            message: 'Success!',
            data: rows
          })
        }
      })
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        status: 500,
        message: 'Couldn\'t process request',
        error: err.message
      });
    }
  }
}