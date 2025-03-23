"use server"

import { auth } from "@clerk/nextjs/server"

export async function createAccount(data) {
    try {
        const { userId } = await auth();

        if (!userId) {
            throw new Error("User Not found");
        }

        const user = await db.user.findUnique({
            where: { clerkUserId: userId },
        })

        if (!user) {
            throw new Error("User Not found in database");
        }

        const balanceFloat = parseFloat(data?.balance)
        if (isNaN(balanceFloat)) {
            throw new Error("Invalid Balance Amount");

        }

    } catch (error) {

    }
}