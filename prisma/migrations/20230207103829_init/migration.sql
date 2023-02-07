-- CreateTable
CREATE TABLE "_CafeToClient" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CafeToClient_AB_unique" ON "_CafeToClient"("A", "B");

-- CreateIndex
CREATE INDEX "_CafeToClient_B_index" ON "_CafeToClient"("B");

-- AddForeignKey
ALTER TABLE "_CafeToClient" ADD CONSTRAINT "_CafeToClient_A_fkey" FOREIGN KEY ("A") REFERENCES "Cafe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CafeToClient" ADD CONSTRAINT "_CafeToClient_B_fkey" FOREIGN KEY ("B") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;
