import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    url: string;

    @Column()
    title: string;

    @Column({nullable:true})
    description: string;

    @Column({nullable:true})
    alt: string;
}
