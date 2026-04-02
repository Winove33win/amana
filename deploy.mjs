import * as ftp from "basic-ftp"
import path from "path"
import fs from "fs"

const CONFIG = {
  host: "168.75.84.128",
  user: "reverent-bardeen_6j9y71pu4ra",
  password: "KtM&scCip6k?i1w6",
  secure: false,
}

const LOCAL_ROOT = process.cwd()
const REMOTE_ROOT = "/httpdocs"

// Files/folders to upload (no node_modules, no .git, no deploy script)
const INCLUDE = [
  "app.js",
  "package.json",
  "package-lock.json",
  ".npmrc",
  "next.config.ts",
  "tsconfig.json",
  "src",
  "public",
  ".next",
]

const EXCLUDE_DIRS = ["node_modules", ".git"]

async function uploadDir(client, localDir, remoteDir) {
  const entries = fs.readdirSync(localDir, { withFileTypes: true })

  try {
    await client.ensureDir(remoteDir)
  } catch {}

  for (const entry of entries) {
    if (EXCLUDE_DIRS.includes(entry.name)) continue

    const localPath = path.join(localDir, entry.name)
    const remotePath = `${remoteDir}/${entry.name}`

    if (entry.isDirectory()) {
      process.stdout.write(`  📁 ${remotePath}\n`)
      await uploadDir(client, localPath, remotePath)
    } else {
      process.stdout.write(`  ⬆  ${remotePath}\n`)
      await client.uploadFrom(localPath, remotePath)
    }
  }
}

async function deploy() {
  const client = new ftp.Client()
  client.ftp.verbose = false

  try {
    console.log("🔌 Conectando ao FTP...")
    await client.access(CONFIG)
    console.log("✅ Conectado!\n")

    for (const item of INCLUDE) {
      const localPath = path.join(LOCAL_ROOT, item)

      if (!fs.existsSync(localPath)) {
        console.log(`⚠️  Não encontrado, pulando: ${item}`)
        continue
      }

      const stat = fs.statSync(localPath)
      const remotePath = `${REMOTE_ROOT}/${item}`

      if (stat.isDirectory()) {
        console.log(`\n📂 Enviando pasta: ${item}`)
        await uploadDir(client, localPath, remotePath)
      } else {
        console.log(`⬆  Enviando arquivo: ${item}`)
        await client.uploadFrom(localPath, remotePath)
      }
    }

    console.log("\n✅ Deploy concluído com sucesso!")
    console.log("🚀 Agora vá ao Plesk e clique em 'Reiniciar aplicativo'")
    console.log("📦 Depois execute no Plesk: npm install --omit=dev")

  } catch (err) {
    console.error("❌ Erro:", err.message)
  } finally {
    client.close()
  }
}

deploy()
