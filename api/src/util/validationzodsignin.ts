import { z } from "zod";

export const validationzodsignin = z.object({
  email: z.string().email("invalid Email"),
  password: z.string(),
  cpassword: z.string(),
});
