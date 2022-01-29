// const express = require("express");
// const request = require("request");

// const app = express();

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

// app.get("/players", (req, res) => {
//   request(
//     {
//       url: "https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json",
//     },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: "error", message: error.message });
//       }

//       res.json(JSON.parse(body));
//     }
//   );
// });

// const PORT = 3000;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));
