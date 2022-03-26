import { DateTime, Default, Id, Model, OneToMany, Property, Unique } from "decotix"

@Model()
export class User {
    @Property(() => String)
    @Id("uuid")
    id!: string;

    @Unique()
    @Property(() => String)
    name!: string;

    @Unique()
    @Property(() => String)
    email!: string 
}