const connection = require("../database/db_connection");

const logMood = body => {
  const { mood, date, time } = body;

  return connection.query(
    `INSERT INTO moods(user_id, mood, mood_date, mood_time )
     VALUES($1, $2, $3, $4)`,

    [1, mood, date, time]
  );
};

// const getMood = body => {
//   const { start, end } = body;
//
//   return connection.query(
//     `INSERT INTO moods(user_id, mood_date, mood )
//      VALUES($1, $2, $3)`,
//
//     [1, start, "Kira"]
//   );
// };

const getMood = body => {
  const { start, end } = body;
  return connection.query(
    `SELECT mood, mood_date FROM moods WHERE (user_id = $1) AND (mood_date BETWEEN $2 AND $3)`,

    [1, start, end]
  );
};

// const getMood = () => connection.query("SELECT * FROM moods;");

module.exports = {
  logMood,
  getMood
};
