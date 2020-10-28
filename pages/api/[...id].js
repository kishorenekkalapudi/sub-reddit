import nc from "next-connect";
import { API_URL } from "../../src/components/const";

const handler = nc()
  // use connect based middleware
  // express like routing for methods
  .get(async (req, res) => {
    const data = await fetch(`${API_URL}/${req.query.id.join("/")}`);
    const posts = await data.json();

    res.send(posts);
  })
  .post((req, res) => {
    res.json({ hello: "world" });
  })
  .put(async (req, res) => {
    res.end("hello");
  });

export default handler;
