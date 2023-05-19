/*
  Warnings:

  - You are about to drop the column `instituicao_id` on the `turma` table. All the data in the column will be lost.
  - You are about to drop the `instituicao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "instituicao" DROP CONSTRAINT "instituicao_city_id_fkey";

-- DropForeignKey
ALTER TABLE "turma" DROP CONSTRAINT "turma_instituicao_id_fkey";

-- AlterTable
ALTER TABLE "turma" DROP COLUMN "instituicao_id",
ADD COLUMN     "institution_id" TEXT;

-- DropTable
DROP TABLE "instituicao";

-- CreateTable
CREATE TABLE "institution" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city_id" TEXT NOT NULL,

    CONSTRAINT "institution_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "institution" ADD CONSTRAINT "institution_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma" ADD CONSTRAINT "turma_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "institution"("id") ON DELETE SET NULL ON UPDATE CASCADE;
