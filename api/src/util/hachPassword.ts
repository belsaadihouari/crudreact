import bcrypt from "bcrypt";

export async function hachPassword(password: string) {
  const salt = await bcrypt.genSalt();
  const hach: string = await bcrypt.hash(password, salt);
  return hach;
}
