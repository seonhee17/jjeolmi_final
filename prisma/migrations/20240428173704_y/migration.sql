/*
  Warnings:

  - Added the required column `updatedAt` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Menu" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cateId" INTEGER NOT NULL,
    "cateNm" TEXT NOT NULL,
    "cateUpId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "useYn" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Menu" ("cateId", "cateNm", "cateUpId", "id", "order", "useYn") SELECT "cateId", "cateNm", "cateUpId", "id", "order", "useYn" FROM "Menu";
DROP TABLE "Menu";
ALTER TABLE "new_Menu" RENAME TO "Menu";
CREATE UNIQUE INDEX "Menu_cateId_key" ON "Menu"("cateId");
CREATE UNIQUE INDEX "Menu_cateNm_key" ON "Menu"("cateNm");
CREATE UNIQUE INDEX "Menu_cateUpId_key" ON "Menu"("cateUpId");
CREATE UNIQUE INDEX "Menu_order_key" ON "Menu"("order");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
