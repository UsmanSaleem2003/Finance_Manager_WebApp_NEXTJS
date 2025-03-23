"use client"

import React, { useState } from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { zodResolver } from "@hookform/resolvers"
import { useForm } from "react-hook-form";
import accountSchema from "@/app/lib/formSchema"

const CreateAccountDrawer = ({ children }) => {
    const [open, setOpen] = useState(false);

    const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm({
        resolver: zodResolver(accountSchema),
        defaultValues: {
            name: "",
            type: "Current",
            balance: "",
            isDefault: false,
        }
    })

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>{children}</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Create New Account</DrawerTitle>
                </DrawerHeader>
                <div>
                    <form>

                    </form>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default CreateAccountDrawer
