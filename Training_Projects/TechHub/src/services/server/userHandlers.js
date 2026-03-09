import { rest } from "msw";
import userData from "@data/users.json";
const users = [...userData];

export default [
  rest.post("/api/users/login", (req, res, ctx) => {
    const { email, password } = req.body;
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          message: "Logged In",
          user,
          token: `XYZ-${user.id}`,
        })
      );
    } else {
      return res(
        ctx.status(401),
        ctx.json({ success: false, message: "Invalid credentials" })
      );
    }
  }),

  rest.post("/api/users/signup", (req, res, ctx) => {
    if (users.some((user) => req.body.email === user.email)) {
      return res(
        ctx.status(400),
        ctx.json({
          success: false,
          message: `User with email ${req.body.email} already exists`,
        })
      );
    }
    const newUser = { ...req.body, id: users.length + 1 };
    users.push(newUser);
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        message: "Signed Up",
        user: newUser,
        token: `${newUser.id}`,
      })
    );
  }),
];
