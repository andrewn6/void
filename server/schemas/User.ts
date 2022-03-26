import { Type } from "@sinclair/typebox";

export const User = Type.Object({
    id: Type.String(),
    name: Type.String(),
    email: Type.String()
})