import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ERROR_STATUS } from "./error.types";

@Entity({ name: "errors" })
export class Error extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "enum", default: null, enum: ERROR_STATUS, nullable: true })
  status: ERROR_STATUS;

  @Column({ type: "varchar", nullable: true })
  message: string;

  @Column({ type: "text", nullable: true })
  stack: string;
}
