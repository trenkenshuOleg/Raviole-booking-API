/*
  Warnings:

  - You are about to drop the column `address` on the `Cafe` table. All the data in the column will be lost.
  - You are about to drop the column `cuisineType` on the `Cafe` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Cafe` table. All the data in the column will be lost.
  - You are about to alter the column `rating` on the `Cafe` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `averageCheck` on the `Cafe` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - The `menuImg` column on the `Cafe` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `translation` to the `Cafe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cafe" DROP COLUMN "address",
DROP COLUMN "cuisineType",
DROP COLUMN "tags",
ADD COLUMN     "coordinates" DOUBLE PRECISION[],
ADD COLUMN     "translation" JSONB NOT NULL,
ALTER COLUMN "workTimeStart" DROP DEFAULT,
ALTER COLUMN "workTimeEnd" DROP DEFAULT,
ALTER COLUMN "rating" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "averageCheck" SET DATA TYPE DECIMAL(65,30),
DROP COLUMN "menuImg",
ADD COLUMN     "menuImg" TEXT[];
