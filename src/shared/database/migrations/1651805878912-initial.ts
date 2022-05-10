import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1651805878912 implements MigrationInterface {
    name = 'initial1651805878912'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "archive" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url" character varying NOT NULL, "user_id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_6493b19677ebfecfcf5281f4233" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "service_user_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "service_user_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_4cebbce553cfdba7c9c8f942460" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "service_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "price" numeric NOT NULL, "chargeType" character varying NOT NULL, "postalCode" character varying NOT NULL, "street" character varying NOT NULL, "number" integer NOT NULL, "complement" character varying NOT NULL, "neighborhood" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "user_id" character varying NOT NULL, "service_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_6c4f6adc2bc86736d090dc29071" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "service" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "category_id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "categoryId" uuid, CONSTRAINT "PK_85a21558c006647cd76fdce044b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "service_user_item" ADD CONSTRAINT "FK_2424898b2b034c0e337b760f4ed" FOREIGN KEY ("service_user_id") REFERENCES "service_user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service_user" ADD CONSTRAINT "FK_06be98d307f2521db80ee9a256f" FOREIGN KEY ("service_id") REFERENCES "service"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service" ADD CONSTRAINT "FK_cb169715cbb8c74f263ba192ca8" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service" DROP CONSTRAINT "FK_cb169715cbb8c74f263ba192ca8"`);
        await queryRunner.query(`ALTER TABLE "service_user" DROP CONSTRAINT "FK_06be98d307f2521db80ee9a256f"`);
        await queryRunner.query(`ALTER TABLE "service_user_item" DROP CONSTRAINT "FK_2424898b2b034c0e337b760f4ed"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "service"`);
        await queryRunner.query(`DROP TABLE "service_user"`);
        await queryRunner.query(`DROP TABLE "service_user_item"`);
        await queryRunner.query(`DROP TABLE "archive"`);
    }

}
