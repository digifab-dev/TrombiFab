import jsonlint from "jsonlint"
import fs from "fs"
import path from "path"

test("Les fichiers de soumission doivent être des fichiers JSON valides", () => {
  const JSON_SOURCE_DIR = "Submissions"
  const submissionFiles = fs.readdirSync(path.resolve(JSON_SOURCE_DIR))

  submissionFiles.forEach((file) => {
    const fileContent = fs.readFileSync(path.resolve(JSON_SOURCE_DIR, file), {
      encoding: "utf-8",

    })
    jsonlint.parse (fileContent)
  })

})
