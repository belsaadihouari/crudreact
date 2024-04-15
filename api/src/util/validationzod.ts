import { z } from "zod";

export const validationzod = z.object({
  username: z.string(),
  email: z.string().email("invalid Email"),
  password: z.string(),
  cpassword: z.string(),
  isAdmin: z.boolean().optional(),
});
