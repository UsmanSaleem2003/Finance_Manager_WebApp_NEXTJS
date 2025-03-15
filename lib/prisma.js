import { PrismaClient } from "@/prisma/client"

export const db = globalThis.prisma || new PrismaClient();

//creating prisma client through which we can interact with the database
//we are creating a new instance of PrismaClient and exporting it as db

if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = db;
}
//if the environment is not production then we are setting the global prisma client to the db instance
//this is done so that we can use the same instance of prisma client throughout the application
// otherwise on every hot reload, a new instance of prisma client will be created