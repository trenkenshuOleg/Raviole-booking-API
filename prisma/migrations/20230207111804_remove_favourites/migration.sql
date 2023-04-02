/*
  Warnings:

  - You are about to drop the `_CafeToClient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CafeToClient" DROP CONSTRAINT "_CafeToClient_A_fkey";

-- DropForeignKey
ALTER TABLE "_CafeToClient" DROP CONSTRAINT "_CafeToClient_B_fkey";

-- DropTable
DROP TABLE "_CafeToClient";
