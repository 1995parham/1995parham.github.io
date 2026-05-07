default:
    @just --list

lint:
    pnpm lint

build:
    pnpm build

dev:
    pnpm dev

update:
    pnpm update --latest
    pnpm install
