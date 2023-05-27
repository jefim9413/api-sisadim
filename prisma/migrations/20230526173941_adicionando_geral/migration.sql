-- CreateTable
CREATE TABLE "General" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "database" TEXT NOT NULL,
    "city_id" TEXT NOT NULL,

    CONSTRAINT "General_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "General" ADD CONSTRAINT "General_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
