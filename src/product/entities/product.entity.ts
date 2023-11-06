import { Column, Entity, PrimaryColumn } from "typeorm";




@Entity()


export class Product {



    @PrimaryColumn('uuid')
    public id : string;


    @Column()
    public name: string;

    @Column()
    public desc: string;

    @Column()
    public price: number;

    @Column({default:true})
    public isSealed : Boolean;

}
