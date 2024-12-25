import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

/**
 * 指定されたディレクトリが存在しない場合は作成
 * @param dirPath 作成するディレクトリのパス
 */
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * 指定されたパスにJSONファイルの書き込み処理
 * 書き込んだファイルはgzip化する
 * @param filePath 書き込むファイルのパス
 * @param data 書き込むデータオブジェクト
 */
export function writeJsonFile(filePath, data) {
  const jsonData = JSON.stringify(data);
  // gzip圧縮
  const gzipData = zlib.gzipSync(jsonData);
  const gzipFilePath = `${filePath}.gz`;

  // ディレクトリが存在しない場合は作成
  ensureDirectoryExists(path.dirname(gzipFilePath));

  fs.writeFileSync(gzipFilePath, gzipData);
}

// test
writeJsonFile(
	'public/json/test.json',
	{
		test: {
			num: 0,
			str: "str",
			bool: false,
			arr: [1,2,3],
			obj: { foo: "bar" }
		}}
	)