-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "avartar" TEXT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cateId" INTEGER NOT NULL,
    "cateNm" TEXT NOT NULL,
    "cateUpId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "useYn" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Token" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "payload" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Menu_cateId_key" ON "Menu"("cateId");

-- CreateIndex
CREATE UNIQUE INDEX "Menu_cateNm_key" ON "Menu"("cateNm");

-- CreateIndex
CREATE UNIQUE INDEX "Menu_cateUpId_key" ON "Menu"("cateUpId");

-- CreateIndex
CREATE UNIQUE INDEX "Menu_order_key" ON "Menu"("order");

-- CreateIndex
CREATE UNIQUE INDEX "Token_payload_key" ON "Token"("payload");
