import { currentUser } from "@clerk/nextjs/server"
import { db } from "./prisma";


export const checkUser = async () => {
    const user = await currentUser() //get this from clerk

    if (!user) {
        return null;
    }

    // check if user exists in db
    try {
        const userExists = await db.user.findUnique({
            where: {
                clerkUserId: user.id,
            }
        });

        if (userExists) {
            return userExists;
        }

        // user is new, first time signup, add user in db.
        const name = `${user.firstName} ${user.lastName}`
        const newUser = await db.user.create({
            data: {
                clerkUserId: user.id,
                email: user.emailAddresses[0].emailAddress,
                name,
                imageUrl: user.imageUrl,
            }
        })

        return newUser;
    } catch (error) {
        console.error("Error Message : ", error.message)
        console.error("Comeplete Error: ", error)
    }


    return true
}