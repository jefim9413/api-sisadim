/*
  Warnings:

  - You are about to drop the column `cidade_id` on the `instituicao` table. All the data in the column will be lost.
  - You are about to drop the `cidade` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `city_id` to the `instituicao` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "instituicao" DROP CONSTRAINT "instituicao_cidade_id_fkey";

-- AlterTable
ALTER TABLE "instituicao" DROP COLUMN "cidade_id",
ADD COLUMN     "city_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "cidade";

-- CreateTable
CREATE TABLE "city" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "city_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "city_name_key" ON "city"("name");

-- AddForeignKey
ALTER TABLE "instituicao" ADD CONSTRAINT "instituicao_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
