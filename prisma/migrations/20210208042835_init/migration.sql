-- Create extensions
CREATE EXTENSION if not exists postgis;
CREATE EXTENSION if not exists "uuid-ossp";

-- CreateEnum
CREATE TYPE "InviteStatus" AS ENUM ('ACTIVE', 'REVOKED');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'DISABLED');

-- CreateEnum
CREATE TYPE "PasswordResetStatus" AS ENUM ('ACTIVE', 'CANCELLED');

-- CreateEnum
CREATE TYPE "CustomerableType" AS ENUM ('USER', 'BUSINESS');

-- CreateEnum
CREATE TYPE "BusinessStatus" AS ENUM ('ACTIVE', 'DISABLED');

-- CreateEnum
CREATE TYPE "BusinessUserRoles" AS ENUM ('READER', 'ORDERER', 'ADMIN');

-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('ACTIVE', 'DISABLED');

-- CreateEnum
CREATE TYPE "VariantStatus" AS ENUM ('ACTIVE', 'DISABLED');

-- CreateEnum
CREATE TYPE "AvailabilityRulesStatus" AS ENUM ('ACTIVE', 'DISABLED');

-- CreateEnum
CREATE TYPE "RuleType" AS ENUM ('REGIONS', 'CUSTOMER_TYPE', 'CUSTOMER_IDS', 'TAGS');

-- CreateEnum
CREATE TYPE "DiscountStatus" AS ENUM ('ACTIVE', 'DISABLED');

-- CreateEnum
CREATE TYPE "DiscountValueType" AS ENUM ('AMOUNT', 'PERCENTAGE');

-- CreateEnum
CREATE TYPE "BrandStatus" AS ENUM ('ACTIVE', 'DISABLED');

-- CreateEnum
CREATE TYPE "ProductUnitStatus" AS ENUM ('ACTIVE', 'DISABLED');

-- CreateEnum
CREATE TYPE "CollectionStatus" AS ENUM ('ACTIVE', 'DISABLED');

-- CreateEnum
CREATE TYPE "MediaStatus" AS ENUM ('ACTIVE', 'DISABLED');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('IMAGE', 'VIDEO');

-- CreateEnum
CREATE TYPE "PaymentMethodStatus" AS ENUM ('ACTIVE', 'DISABLED');

-- CreateEnum
CREATE TYPE "PaymentMethodType" AS ENUM ('CARD', 'DIRECT_DEBIT', 'ROLLING_ACCOUNT', 'SUPPLIER_ACCOUNT', 'CASH', 'ADJUSTMENT');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('CHARGE', 'REFUND', 'ADJUSTMENT');

-- CreateTable
CREATE TABLE "users_invites" (
    "id" UUID NOT NULL,
    "first_opened_at" TIMESTAMPTZ,
    "status" "InviteStatus" NOT NULL DEFAULT E'ACTIVE',
    "expires_at" TIMESTAMPTZ NOT NULL,
    "email" TEXT NOT NULL,
    "consumed_at" TIMESTAMPTZ,
    "inviter_id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "user_id" UUID,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_users" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "mobile_number" TEXT,
    "notifications_provider_id" TEXT,
    "auth_provider_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "notification_settings" JSONB NOT NULL DEFAULT '{"sms": true, "web": false, "mobile": false, "welcome": false, "sysGenerated": true}',
    "status" "UserStatus" NOT NULL DEFAULT E'ACTIVE',
    "email_verified_at" TIMESTAMPTZ,
    "tags" JSONB,
    "notes" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_password_resets" (
    "id" UUID NOT NULL,
    "access_code" TEXT NOT NULL,
    "status" "PasswordResetStatus" NOT NULL DEFAULT E'ACTIVE',
    "expires_at" TIMESTAMPTZ NOT NULL,
    "consumed_at" TIMESTAMPTZ,
    "user_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers_customers" (
    "id" UUID NOT NULL,
    "customerable_id" UUID,
    "customerable_type" "CustomerableType" NOT NULL,
    "tags" JSONB,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "businesses_businesses" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "abn" TEXT NOT NULL,
    "logo_uri" TEXT,
    "status" "BusinessStatus" NOT NULL DEFAULT E'ACTIVE',
    "contact_email" TEXT,
    "contact_phone" TEXT,
    "min_invoice_size" DECIMAL(12,2),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "businesses_businesses_users" (
    "business_id" UUID NOT NULL,
    "fd_user_id" UUID NOT NULL,
    "role" "BusinessUserRoles" NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID,

    PRIMARY KEY ("business_id","fd_user_id")
);

-- CreateTable
CREATE TABLE "products_products" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "external_reference" TEXT,
    "status" "ProductStatus" NOT NULL DEFAULT E'ACTIVE',
    "is_estimated_qty" BOOLEAN DEFAULT false,
    "tags" JSONB,
    "order_units_id" UUID NOT NULL,
    "invoice_units_id" UUID NOT NULL,
    "fd_supplier_id" UUID NOT NULL,
    "fd_manufacturer_id" UUID,
    "brand_id" UUID,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,
    "businessId" UUID,
    "productUnitId" UUID,
    "mediaId" UUID,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_variant" (
    "id" UUID NOT NULL,
    "status" "VariantStatus" NOT NULL DEFAULT E'ACTIVE',
    "description" TEXT NOT NULL,
    "sell_ex" DECIMAL(12,2) NOT NULL,
    "sell_gst" DECIMAL(12,2) NOT NULL,
    "cost_ex" DECIMAL(12,2) NOT NULL,
    "cost_gst" DECIMAL(12,2) NOT NULL,
    "qty_available" INTEGER NOT NULL,
    "qty_sold" INTEGER NOT NULL DEFAULT 0,
    "available_date" TIMESTAMPTZ NOT NULL,
    "invoice_to_order_ratio" DECIMAL(15,5) NOT NULL,
    "step_qty" INTEGER NOT NULL,
    "minimum_qty" DECIMAL(15,5) NOT NULL,
    "product_id" UUID NOT NULL,
    "discount_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_availability_rule" (
    "id" UUID NOT NULL,
    "status" "AvailabilityRulesStatus" NOT NULL DEFAULT E'ACTIVE',
    "type" "RuleType" NOT NULL,
    "region_ids" TEXT[],
    "customer_type" TEXT,
    "customer_ids" TEXT[],
    "tags" TEXT[],
    "variant_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_discount" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "status" "DiscountStatus" NOT NULL DEFAULT E'ACTIVE',
    "start_at" TIMESTAMPTZ,
    "end_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_discount_value" (
    "id" UUID NOT NULL,
    "type" "DiscountValueType" NOT NULL,
    "gtQty" DECIMAL(15,5) NOT NULL DEFAULT 0,
    "ltQty" DECIMAL(15,5) NOT NULL DEFAULT 10000000000000000,
    "gteTo" BOOLEAN NOT NULL DEFAULT false,
    "lteTo" BOOLEAN NOT NULL DEFAULT false,
    "value" DECIMAL(12,2) NOT NULL,
    "discount_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_brands" (
    "id" UUID NOT NULL,
    "status" "BrandStatus" NOT NULL DEFAULT E'ACTIVE',
    "name" TEXT NOT NULL,
    "logo_id" UUID NOT NULL,
    "supplier_id" UUID,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_units" (
    "id" UUID NOT NULL,
    "singular" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "status" "ProductUnitStatus" NOT NULL DEFAULT E'ACTIVE',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_collections" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "CollectionStatus" NOT NULL DEFAULT E'ACTIVE',
    "tags" JSONB,
    "logo_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_media" (
    "id" UUID NOT NULL,
    "status" "MediaStatus" NOT NULL DEFAULT E'ACTIVE',
    "label" TEXT NOT NULL,
    "type" "MediaType" NOT NULL,
    "business_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,
    "productId" UUID,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders_order_items" (
    "id" UUID NOT NULL,
    "qty_ordered" INTEGER NOT NULL,
    "qty_received" INTEGER,
    "sell_ex" DECIMAL(12,2) NOT NULL,
    "sell_gst" DECIMAL(12,2) NOT NULL,
    "is_estimate" BOOLEAN NOT NULL,
    "product_blob" JSONB,
    "order_id" UUID NOT NULL,
    "fd_variant_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders_orders" (
    "id" UUID NOT NULL,
    "order_ref" SERIAL NOT NULL,
    "completed_at" TIMESTAMPTZ,
    "shipped_at" TIMESTAMPTZ,
    "packed_at" TIMESTAMPTZ,
    "processed_at" TIMESTAMPTZ,
    "paid_at" TIMESTAMPTZ,
    "fd_delivery_location_id" UUID NOT NULL,
    "fd_customer_id" UUID NOT NULL,
    "fd_supplier_id" UUID NOT NULL,
    "fd_orderer_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders_carts" (
    "id" UUID NOT NULL,
    "data" JSONB NOT NULL,
    "fd_customer_id" UUID NOT NULL,
    "fd_user_id" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders_invoices" (
    "id" UUID NOT NULL,
    "invoice_ref" SERIAL NOT NULL,
    "generated_file_url" TEXT NOT NULL,
    "order_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments_payment_methods" (
    "id" UUID NOT NULL,
    "type" "PaymentMethodType" NOT NULL,
    "status" "PaymentMethodStatus" NOT NULL DEFAULT E'ACTIVE',
    "data" JSONB,
    "fd_customer_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments_payments" (
    "id" UUID NOT NULL,
    "receipt_number" SERIAL,
    "notes" TEXT,
    "amount" DECIMAL(12,2),
    "transactionType" "TransactionType" NOT NULL DEFAULT E'CHARGE',
    "completed_at" TIMESTAMPTZ,
    "failed_at" TIMESTAMPTZ,
    "providerId" TEXT,
    "data" JSONB,
    "payment_method_id" UUID NOT NULL,
    "fd_order_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "places_places" (
    "id" UUID NOT NULL,
    "countryCode" TEXT NOT NULL,
    "stateCode" TEXT NOT NULL,
    "suburb" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "streetNumber" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "coordinates" point,
    "providerId" TEXT,
    "data" JSONB,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "places_regions" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "polygon" polygon,
    "business_id" UUID,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_customers_customers_places" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_products_collections_products" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_products_collections_media" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_users.mobile_number_unique" ON "users_users"("mobile_number");

-- CreateIndex
CREATE UNIQUE INDEX "users_users.auth_provider_id_unique" ON "users_users"("auth_provider_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_users.email_unique" ON "users_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customers_customers_customerable_id_unique" ON "customers_customers"("customerable_id");

-- CreateIndex
CREATE UNIQUE INDEX "businesses_businesses.abn_unique" ON "businesses_businesses"("abn");

-- CreateIndex
CREATE UNIQUE INDEX "_customers_customers_places_AB_unique" ON "_customers_customers_places"("A", "B");

-- CreateIndex
CREATE INDEX "_customers_customers_places_B_index" ON "_customers_customers_places"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_products_collections_products_AB_unique" ON "_products_collections_products"("A", "B");

-- CreateIndex
CREATE INDEX "_products_collections_products_B_index" ON "_products_collections_products"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_products_collections_media_AB_unique" ON "_products_collections_media"("A", "B");

-- CreateIndex
CREATE INDEX "_products_collections_media_B_index" ON "_products_collections_media"("B");

-- AddForeignKey
ALTER TABLE "users_invites" ADD FOREIGN KEY ("inviter_id") REFERENCES "users_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_invites" ADD FOREIGN KEY ("business_id") REFERENCES "businesses_businesses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_invites" ADD FOREIGN KEY ("user_id") REFERENCES "users_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_password_resets" ADD FOREIGN KEY ("user_id") REFERENCES "users_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers_customers" ADD FOREIGN KEY ("customerable_id") REFERENCES "users_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers_customers" ADD FOREIGN KEY ("customerable_id") REFERENCES "businesses_businesses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "businesses_businesses_users" ADD FOREIGN KEY ("userId") REFERENCES "users_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "businesses_businesses_users" ADD FOREIGN KEY ("business_id") REFERENCES "businesses_businesses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_products" ADD FOREIGN KEY ("brand_id") REFERENCES "products_brands"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_products" ADD FOREIGN KEY ("fd_supplier_id") REFERENCES "businesses_businesses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_products" ADD FOREIGN KEY ("fd_manufacturer_id") REFERENCES "businesses_businesses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_products" ADD FOREIGN KEY ("order_units_id") REFERENCES "products_units"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_products" ADD FOREIGN KEY ("invoice_units_id") REFERENCES "products_units"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_products" ADD FOREIGN KEY ("businessId") REFERENCES "businesses_businesses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_products" ADD FOREIGN KEY ("productUnitId") REFERENCES "products_units"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_products" ADD FOREIGN KEY ("mediaId") REFERENCES "products_media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_variant" ADD FOREIGN KEY ("product_id") REFERENCES "products_products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_variant" ADD FOREIGN KEY ("discount_id") REFERENCES "products_discount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_availability_rule" ADD FOREIGN KEY ("variant_id") REFERENCES "products_variant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_discount_value" ADD FOREIGN KEY ("discount_id") REFERENCES "products_discount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_brands" ADD FOREIGN KEY ("supplier_id") REFERENCES "businesses_businesses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_brands" ADD FOREIGN KEY ("logo_id") REFERENCES "products_media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_collections" ADD FOREIGN KEY ("logo_id") REFERENCES "products_media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_media" ADD FOREIGN KEY ("business_id") REFERENCES "businesses_businesses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_media" ADD FOREIGN KEY ("productId") REFERENCES "products_products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders_order_items" ADD FOREIGN KEY ("order_id") REFERENCES "orders_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders_order_items" ADD FOREIGN KEY ("fd_variant_id") REFERENCES "products_variant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders_orders" ADD FOREIGN KEY ("fd_supplier_id") REFERENCES "businesses_businesses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders_orders" ADD FOREIGN KEY ("fd_customer_id") REFERENCES "customers_customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders_orders" ADD FOREIGN KEY ("fd_orderer_id") REFERENCES "users_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders_orders" ADD FOREIGN KEY ("fd_delivery_location_id") REFERENCES "places_places"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders_carts" ADD FOREIGN KEY ("fd_customer_id") REFERENCES "customers_customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders_carts" ADD FOREIGN KEY ("fd_user_id") REFERENCES "users_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders_invoices" ADD FOREIGN KEY ("order_id") REFERENCES "orders_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments_payment_methods" ADD FOREIGN KEY ("fd_customer_id") REFERENCES "customers_customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments_payments" ADD FOREIGN KEY ("payment_method_id") REFERENCES "payments_payment_methods"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments_payments" ADD FOREIGN KEY ("fd_order_id") REFERENCES "orders_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "places_regions" ADD FOREIGN KEY ("business_id") REFERENCES "businesses_businesses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_customers_customers_places" ADD FOREIGN KEY ("A") REFERENCES "customers_customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_customers_customers_places" ADD FOREIGN KEY ("B") REFERENCES "places_places"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_products_collections_products" ADD FOREIGN KEY ("A") REFERENCES "products_collections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_products_collections_products" ADD FOREIGN KEY ("B") REFERENCES "products_products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_products_collections_media" ADD FOREIGN KEY ("A") REFERENCES "products_collections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_products_collections_media" ADD FOREIGN KEY ("B") REFERENCES "products_media"("id") ON DELETE CASCADE ON UPDATE CASCADE;
