/*
  Warnings:

  - You are about to drop the column `reviews` on the `Cafe` table. All the data in the column will be lost.
  - Added the required column `cafeId` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cafe" DROP COLUMN "reviews",
ALTER COLUMN "workTimeStart" SET DEFAULT 10,
ALTER COLUMN "workTimeEnd" SET DEFAULT 22,
ALTER COLUMN "rating" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "cafeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_cafeId_fkey" FOREIGN KEY ("cafeId") REFERENCES "Cafe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
