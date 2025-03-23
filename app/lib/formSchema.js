import { z } from 'zod';

export default accountSchema = z.object({
    name: z.string().min(1, "Name is required"),
    type: z.enum(["Current", "Savings"]),
    balance: z.string().min(1, "Initial balance is reuired"),
    isDefault: z.boolean().default(false),
});