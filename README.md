# json 形式のデータのgzip化と読込みサンプル

## gzip化処理

[server.mjs](src/server.mjs)

```bash
node server.mjs
```

## pako

JavaScript で書かれた高速な圧縮・解凍ライブラリ。
ブラウザおよび Node.js 環境で gzip や deflate を扱うことが可能

### 主な用途

- クライアントサイドでの圧縮・解凍処理（ブラウザ内の操作）
- gzip/deflateのデータ送受信や操作に使用
- サーバーとの通信でデータを圧縮して送信する場合など

### 主な特性

- 純粋な JavaScript 実装
- 他の zlib ベースのライブラリと互換性あり（例: zlib.gzip）
- バイナリデータ（Uint8Array など）を直接操作可能
- 小型で高速

### 適用領域

- フロントエンドで動作するアプリケーション
- Node.js プロジェクト
- ブラウザベースのリアルタイムデータ処理
