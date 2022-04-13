const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Hello!</title></head>");
    res.write(` <body>
                    <h1>Hello World</h1>
                    <form action='/create-user' method='POST'>
                        <input type='text' name='username'>
                        <button type='submit'>Send</button>
                    </form>
                </body>
    `);
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write(
      "<body><h1>Users</h1><ul><li>User 1</li><li>User 2</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log("chunk: ", chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log("parsedBody: ", parsedBody);
    });
  }
};

module.exports.handler = requestHandler;
