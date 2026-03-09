import { rest } from "msw";
import userData from "../data/users.json";
const users = [...userData];

export default [
  rest.post("/api/login", (req, res, ctx) => {
    const { email, password } = req.body;
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      return res(ctx.status(200), ctx.json({ success: true, user }));
    } else {
      return res(
        ctx.status(401),
        ctx.json({ success: false, message: "Invalid credentials" })
      );
    }
  }),

  rest.post("/api/signup", (req, res, ctx) => {
    const newUser = req.body;
    users.push(newUser);
    return res(ctx.status(200), ctx.json({ success: true, user: newUser }));
  }),
];
