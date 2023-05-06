-- DropIndex
DROP INDEX "Contact_userId_key";

-- DropIndex
DROP INDEX "Job_userId_key";

-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "createdAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "createdAt" DROP DEFAULT;
