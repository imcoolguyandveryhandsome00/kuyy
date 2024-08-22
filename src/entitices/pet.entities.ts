import { Type } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn,ManyToOne,ManyToMany,OneToMany} from "typeorm";
import User from 'src/entitices/user.entities';



@Entity()
export default class Pet  {
    @Column()
    id : number;

    @Column()
    name : string;

    @Column()
    age : number;

    @Column()
    type : string;

    @ManyToOne(() => User, (user)=>user.pets)
    owner : User;

    @Column()
    health : string
}