/*
  Warnings:

  - Added the required column `resume` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "resume" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "resume" DROP DEFAULT;
