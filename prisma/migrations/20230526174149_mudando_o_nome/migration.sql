/*
  Warnings:

  - You are about to drop the `General` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "General" DROP CONSTRAINT "General_city_id_fkey";

-- DropTable
DROP TABLE "General";

-- CreateTable
CREATE TABLE "general" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "database" TEXT NOT NULL,
    "city_id" TEXT NOT NULL,

    CONSTRAINT "general_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "general" ADD CONSTRAINT "general_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
