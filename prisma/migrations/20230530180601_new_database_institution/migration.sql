/*
  Warnings:

  - Added the required column `database` to the `institution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "institution" ADD COLUMN     "database" TEXT NOT NULL;
