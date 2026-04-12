This is a [Next.js](https://nextjs.org/) project bootstrapped with [
`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

For local development run:

   ```bash
   
   docker compose -f docker-compose.local.yml up --force-recreate --no-deps --build
   ```

## Fully Stop Docker Compose and Prevent Anything from Coming Back.

1. Stop all running containers (Compose + non-Compose)
   ```bash
   docker stop $(docker ps -aq)
   ```
2. Remove all containers
   ```bash
   docker rm $(docker ps -aq)
   ```
3. Remove all images
   ```bash
   docker rmi -f $(docker images -aq)
   ```
4. Remove volumes (optional but recommended if you want everything gone)
   ```bash
    docker volume rm $(docker volume ls -q)
   ```
5. Remove networks (cleanup leftovers)
   ```bash
   docker network rm $(docker network ls -q)
   ```

⚠️ Docker won’t let you remove default networks (bridge, host, none). That’s fine.

6. Stop Docker from auto-starting on reboot (critical step)
   Linux (systemd)
   ```bash
    sudo systemctl disable docker
    sudo systemctl stop docker
    ```

If you have container restart policies (like restart: always), this step is what actually prevents them from coming
back.

7. Double-check no restart policies linger (best practice)

Even though containers are removed, good habit:

```bash
  docker inspect <container_id> | grep RestartPolicy
```

8. If using Docker Compose specifically

From each compose directory:

```bash
  docker compose down --volumes --remove-orphans
```

If you don’t know where they are, steps 1–4 already nuked everything globally.

Quick one-liner (nuclear option)

```bash
  docker stop $(docker ps -aq) && docker rm $(docker ps -aq) && docker rmi -f $(docker images -aq) && docker volume rm $(docker volume ls -q)
```

[//]: # (First, run the development server:)

[//]: # ()

[//]: # (```bash)

[//]: # (npm run dev)

[//]: # (# or)

[//]: # (yarn dev)

[//]: # (# or)

[//]: # (pnpm dev)

[//]: # (```)

[//]: # ()

[//]: # (Open [http://localhost:3000]&#40;http://localhost:3000&#41; with your browser to see the result.)

[//]: # ()

[//]: # (You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.)

[//]: # ()

[//]: # (This project uses [`next/font`]&#40;https://nextjs.org/docs/basic-features/font-optimization&#41; to automatically optimize and load Inter, a custom Google Font.)

[//]: # ()

[//]: # (## Learn More)

[//]: # ()

[//]: # (To learn more about Next.js, take a look at the following resources:)

[//]: # ()

[//]: # (- [Next.js Documentation]&#40;https://nextjs.org/docs&#41; - learn about Next.js features and API.)

[//]: # (- [Learn Next.js]&#40;https://nextjs.org/learn&#41; - an interactive Next.js tutorial.)

[//]: # ()

[//]: # (You can check out [the Next.js GitHub repository]&#40;https://github.com/vercel/next.js/&#41; - your feedback and contributions are welcome!)

[//]: # ()

[//]: # (## Deploy on Vercel)

[//]: # ()

[//]: # (The easiest way to deploy your Next.js app is to use the [Vercel Platform]&#40;https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme&#41; from the creators of Next.js.)

[//]: # ()

[//]: # (Check out our [Next.js deployment documentation]&#40;https://nextjs.org/docs/deployment&#41; for more details.)

[//]: # ()

[//]: # ([//]: # &#40;update test&#41;)