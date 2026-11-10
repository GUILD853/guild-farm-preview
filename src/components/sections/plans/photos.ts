import type { ImageAsset } from "@/config/images";
import { images } from "@/config/images";
import type { PlansPhotoKey } from "@/content/plans";

/**
 * /plans/ の写真の対応表。
 *
 * src/content/plans.ts では写真を「キー（文字列）」で指定しています。
 * 実際の画像ファイルとの対応づけは、この1ファイルだけで行います。
 * 写真を差し替えるときは、まず src/config/images.ts を見てください。
 *
 * ⚠ 梅津寺宿の写真は 2026-11-10 に追加しました（2026-10-22 撮影）。
 * ⚠ 三津浜の宿の写真は 2026-11-10 に届きました（images.mitsuhama の12枚）。
 *   今市シェアハウス（house）の写真を三津浜の写真として使うことはできません。
 */
export const plansPhotos: Record<PlansPhotoKey, ImageAsset> = {
  /** 今市シェアハウス（images.house の並び順に対応） */
  houseRoom: images.house[0], // 個室
  houseKitchen: images.house[1], // 共用キッチン
  houseWash: images.house[2], // 洗面・洗濯
  houseCorridor: images.house[3], // 廊下
  houseExterior: images.house[4], // 外観
  houseEntrance: images.house[5], // 玄関

  /** 梅津寺宿（images.baishinji の並び順に対応） */
  baishinjiExterior: images.baishinji[0], // 外観
  baishinjiLiving: images.baishinji[1], // 居間
  baishinjiBedroom: images.baishinji[2], // 和室（布団）
  baishinjiTerrace: images.baishinji[3], // 縁側から見たテラス
  baishinjiGarden: images.baishinji[4], // 庭から見たテラス
  baishinjiBath: images.baishinji[5], // 浴室
  baishinjiToilet: images.baishinji[6], // 絵のあるトイレ

  /** 三津浜エリアの宿（images.mitsuhama の並び順に対応） */
  mitsuhamaExterior: images.mitsuhama[0], // 外観
  mitsuhamaKitchen: images.mitsuhama[1], // 共用キッチン
  mitsuhamaStairs: images.mitsuhama[2], // 階段
  mitsuhamaRoomUp: images.mitsuhama[3], // 2階の個室
  mitsuhamaShower: images.mitsuhama[4], // シャワー
  mitsuhamaGarden: images.mitsuhama[5], // 坪庭
  mitsuhamaLiving: images.mitsuhama[6], // 共用の居間
  mitsuhamaWash: images.mitsuhama[7], // 洗面
  mitsuhamaToilet: images.mitsuhama[8], // お手洗い
  mitsuhamaCorridor: images.mitsuhama[9], // 廊下
  mitsuhamaRoom: images.mitsuhama[10], // 個室
  mitsuhamaYard: images.mitsuhama[11], // 坪庭から見た建物

  /** そのほか */
  workDesk: images.dayWork, // 窓際に机を置いた部屋
  field: images.aboutField, // 耕したばかりの畑と集落
  morningField: images.dayMorning, // 朝の畑での作業
};
