"use server"

import { db } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

const serializeTransaction = (obj) => {
    const serialized = { ...obj };
    if (obj.balance) {
        serialized.balance = obj.balance.toNumber();
    }
}

export async function createAccount(data) {
    try {
        // get userId from clerk to check if user is authenticated or not
        const { userId } = await auth();

        if (!userId) {
            throw new Error("User Not found");
        }

        // check if authenticated user exists in db or not
        const user = await db.user.findUnique({
            where: { clerkUserId: userId },
        })

        if (!user) {
            throw new Error("User Not found in database");
        }

        // convert the balance amount to float data type
        const balanceInFloatConversion = parseFloat(data?.balance)
        if (isNaN(balanceInFloatConversion)) {
            throw new Error("Invalid Balance Amount");
        }

        // find all other accounts associated with this user's id
        const alreadyExistingAccounts = await db.account.findMany({
            where: { userId: user.id },
        })

        // check if this account will be default or not --- as one user can have many accounts
        const byDefault = alreadyExistingAccounts.length === 0 ? true : data.isDefault

        // if byDefault = true, meaning this account is default, make all other accounts non-default
        if (byDefault) {
            await db.account.iupdateMany({
                where: { userId: user.id, isDefault: true },
                data: { isDefault: false },
            })
        }

        // create a new account with updated data after all checks
        const newAccount = await db.account.create({
            data: {
                ...data,
                balance: balanceInFloatConversion,
                userId: user.id,
                isDefault: byDefault
            }
        })

        // Next Js don't return float/decimal values, due to which, we had to convert the data-type
        const serializedAccount = serializeTransaction(newAccount);

        // this will clear the cache and refresh latest data when user visits route again
        // this is used after CRUD operations, to refetch latest data wihtout reloading the whole page
        revalidatePath("/dashboard");

        return { success: true, data: serializedAccount }

    } catch (error) {
        throw new Error(error.message);
    }
}