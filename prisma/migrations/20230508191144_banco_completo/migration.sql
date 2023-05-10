-- CreateTable
CREATE TABLE "cidade" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "instituicao" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cidade_id" TEXT NOT NULL,

    CONSTRAINT "instituicao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "turma" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "database" TEXT NOT NULL,
    "instituicao_id" TEXT,

    CONSTRAINT "turma_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cidade_name_key" ON "cidade"("name");

-- AddForeignKey
ALTER TABLE "instituicao" ADD CONSTRAINT "instituicao_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "cidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma" ADD CONSTRAINT "turma_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicao"("id") ON DELETE SET NULL ON UPDATE CASCADE;
