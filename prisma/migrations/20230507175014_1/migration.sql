/*
  Warnings:

  - Changed the type of `createdAt` on the `Contact` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `createdAt` on the `Job` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" INTEGER NOT NULL;
