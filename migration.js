const query = require("./database");

module.exports = (app) => {
  try {
    const result = query(`CREATE TABLE users (
      id	bigint	NOT NULL,
      username	varchar(30)	NOT NULL,
      password	varchar(250)	NOT NULL,
      role	varchar(20)	NOT NULL,
      address	varchar(250)	NOT NULL,
      email	varchar(100)	NOT NULL,
      insertUTC	timestamp	NOT NULL DEFAULT current_timestamp()
      ) ENGINE=InnoDB DEFAULT CHARSET=latin1;`
    );
  } catch { }
}