/*
  Warnings:

  - Added the required column `city` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastContacted` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkedIn` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `industry` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `travelRequired` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "lastContacted" TEXT NOT NULL,
ADD COLUMN     "linkedIn" TEXT NOT NULL,
ADD COLUMN     "phone" INTEGER NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "industry" TEXT NOT NULL,
ADD COLUMN     "travelRequired" BOOLEAN NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
