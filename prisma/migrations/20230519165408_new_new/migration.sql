-- DropForeignKey
ALTER TABLE "institution" DROP CONSTRAINT "institution_city_id_fkey";

-- AlterTable
ALTER TABLE "institution" ALTER COLUMN "city_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "institution" ADD CONSTRAINT "institution_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE SET NULL ON UPDATE CASCADE;
