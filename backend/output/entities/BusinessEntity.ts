import {
  Column,
  Entity,
  Index,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("business_entity_pkey", ["entityId"], { unique: true })
@Entity("business_entity", { schema: "users" })
export class BusinessEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "entity_id" })
  entityId: number;

  @Column("date", {
    name: "entity_modified_date",
    nullable: true,
    default: () => "now()",
  })
  entityModifiedDate: string | null;

  @OneToOne(() => Users, (users) => users.userEntity)
  users: Users;
}
