const connection = require("../database/db_connection");

const logMood = body => {
  const { mood, date, time } = body;

  return connection.query(
    `INSERT INTO moods(user_id, mood, mood_date, mood_time )
     VALUES($1, $2, $3, $4)`,

    [1, mood, date, time]
  );
};

module.exports = {
  logMood
};
