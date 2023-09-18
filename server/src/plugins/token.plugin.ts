import { generateJWT, verifyJWT } from "../utils/jwt";

export const getToken = async (data: object) => await generateJWT(data);

export const decodedToken = async (token: string) => await verifyJWT(token);
