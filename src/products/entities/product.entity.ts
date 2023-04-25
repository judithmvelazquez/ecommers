import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    imagen: string;
    
    @Column()
    name: string;

    @Column()
    description: string;
    
    @Column()
    price: string;

    @Column()
    color: string;
    
}
