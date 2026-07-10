default:
    @just --list

lint:
    pnpm lint

check:
    pnpm check

format:
    pnpm format

build:
    pnpm build

dev:
    pnpm dev

update:
    pnpm update --latest
    pnpm install
