import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const INI_PATH = path.join(rootDir, 'version.ini');
const PACKAGE_JSON_PATH = path.join(rootDir, 'package.json');
const MANIFEST_PATH = path.join(rootDir, '.release-please-manifest.json');

const SEMVER_REGEX = /^[0-9]+\.[0-9]+\.[0-9]+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/;

/**
 * Reads and extracts the semver version from version.ini
 * @param {string} filePath
 * @returns {string}
 */
export function readVersionFromIni(filePath = INI_PATH) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`INI version file not found at ${filePath}`);
  }
  const content = fs.readFileSync(filePath, 'utf8');

  // Match version = <semver> with optional quotes and surrounding whitespace
  const match = content.match(/^\s*version\s*=\s*["']?([0-9]+\.[0-9]+\.[0-9]+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?)["']?/m);
  if (!match || !match[1]) {
    throw new Error(`Could not parse a valid semver version from ${filePath}`);
  }
  return match[1].trim();
}

/**
 * Updates version in version.ini while preserving markers, comments, and formatting
 * @param {string} newVersion
 * @param {string} filePath
 */
export function writeVersionToIni(newVersion, filePath = INI_PATH) {
  if (!SEMVER_REGEX.test(newVersion)) {
    throw new Error(`Invalid semver version: ${newVersion}`);
  }
  if (!fs.existsSync(filePath)) {
    throw new Error(`INI version file not found at ${filePath}`);
  }

  const content = fs.readFileSync(filePath, 'utf8');
  let updatedContent = '';

  const markerRegex = /(;\s*x-release-please-start-version[\r\n]+[\s]*version\s*=\s*)[^\r\n]+([\r\n]+;\s*x-release-please-end)/;
  if (markerRegex.test(content)) {
    updatedContent = content.replace(markerRegex, `$1${newVersion}$2`);
  } else {
    const versionLineRegex = /^(\s*version\s*=\s*)[^\r\n]+/m;
    if (!versionLineRegex.test(content)) {
      throw new Error(`Could not find a 'version = ...' line in ${filePath} to update`);
    }
    updatedContent = content.replace(versionLineRegex, `$1${newVersion}`);
  }

  fs.writeFileSync(filePath, updatedContent, 'utf8');
}

/**
 * Reads version from package.json
 * @param {string} filePath
 * @returns {string}
 */
export function readVersionFromPackageJson(filePath = PACKAGE_JSON_PATH) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`package.json not found at ${filePath}`);
  }
  const pkg = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (!pkg.version) {
    throw new Error(`No version field found in ${filePath}`);
  }
  return pkg.version.trim();
}

/**
 * Updates version in package.json
 * @param {string} newVersion
 * @param {string} filePath
 */
export function writeVersionToPackageJson(newVersion, filePath = PACKAGE_JSON_PATH) {
  if (!SEMVER_REGEX.test(newVersion)) {
    throw new Error(`Invalid semver version: ${newVersion}`);
  }
  const pkg = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  pkg.version = newVersion;
  fs.writeFileSync(filePath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
}

/**
 * Updates version in .release-please-manifest.json if it exists
 * @param {string} newVersion
 * @param {string} filePath
 */
export function writeVersionToManifest(newVersion, filePath = MANIFEST_PATH) {
  if (!fs.existsSync(filePath)) return;
  const manifest = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  manifest['.'] = newVersion;
  fs.writeFileSync(filePath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
}

/**
 * Main execution function
 */
export function sync(mode = 'from-ini') {
  const iniVersion = readVersionFromIni(INI_PATH);
  const pkgVersion = readVersionFromPackageJson(PACKAGE_JSON_PATH);

  if (mode === 'check') {
    if (iniVersion !== pkgVersion) {
      console.error(`[version-sync] MISMATCH: version.ini (${iniVersion}) !== package.json (${pkgVersion})`);
      process.exit(1);
    }
    console.log(`[version-sync] OK: version.ini and package.json are in sync (${iniVersion})`);
    return;
  }

  if (mode === 'to-ini') {
    if (iniVersion === pkgVersion) {
      console.log(`[version-sync] Already in sync: version.ini is already ${pkgVersion}`);
      return;
    }
    console.log(`[version-sync] Updating version.ini: ${iniVersion} -> ${pkgVersion}`);
    writeVersionToIni(pkgVersion, INI_PATH);
    writeVersionToManifest(pkgVersion, MANIFEST_PATH);
    console.log(`[version-sync] Successfully synced version.ini to ${pkgVersion}`);
    return;
  }

  // Default: from-ini (package follows version.ini)
  if (iniVersion === pkgVersion) {
    console.log(`[version-sync] Already in sync: package.json is already ${iniVersion}`);
    writeVersionToManifest(iniVersion, MANIFEST_PATH);
    return;
  }

  console.log(`[version-sync] Updating package.json from version.ini: ${pkgVersion} -> ${iniVersion}`);
  writeVersionToPackageJson(iniVersion, PACKAGE_JSON_PATH);
  writeVersionToManifest(iniVersion, MANIFEST_PATH);
  console.log(`[version-sync] Successfully pinned package.json to ${iniVersion}`);
}

const args = process.argv.slice(2);
let mode = 'from-ini';
if (args.includes('--check')) {
  mode = 'check';
} else if (args.includes('--to-ini')) {
  mode = 'to-ini';
} else if (args.includes('--from-ini')) {
  mode = 'from-ini';
}

sync(mode);
