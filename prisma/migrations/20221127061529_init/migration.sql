-- CreateTable
CREATE TABLE "sensor_records" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "sqv" INTEGER NOT NULL,
    "direction" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "date_string" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "labels" (
    "sensor_serial_no" TEXT NOT NULL,
    "label" TEXT,
    "time_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "database_keys" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "stringKey" TEXT DEFAULT '',
    "intKey" INTEGER DEFAULT 0,
    "boolKey" BOOLEAN DEFAULT false,

    CONSTRAINT "database_keys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sensor_records_session_id_date_key" ON "sensor_records"("session_id", "date");

-- CreateIndex
CREATE UNIQUE INDEX "labels_sensor_serial_no_key" ON "labels"("sensor_serial_no");
