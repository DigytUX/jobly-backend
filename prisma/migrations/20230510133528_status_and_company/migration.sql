/*
  Warnings:

  - Added the required column `company` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "company" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "status" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "link" DROP DEFAULT;
