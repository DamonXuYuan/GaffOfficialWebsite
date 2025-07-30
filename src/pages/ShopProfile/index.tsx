import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import cs from "classnames";
import Footer from "@/components/Footer";

import logo from "@/assets/img/shopProfile/logo.png";
import addr from "@/assets/img/shopProfile/addr.png";
import bus from "@/assets/img/shopProfile/bus.png";
import img from "@/assets/img/banner.png";
import { useLocation } from "react-router-dom";

import shop1img1 from "@/assets/img/shopProfile/shop1/img1.jpg";
import shop1img2 from "@/assets/img/shopProfile/shop1/img2.jpg";
import shop1img3 from "@/assets/img/shopProfile/shop1/img3.jpg";
import shop1img4 from "@/assets/img/shopProfile/shop1/img4.jpg";
import shop1img5 from "@/assets/img/shopProfile/shop1/img5.jpg";
import shop1img6 from "@/assets/img/shopProfile/shop1/img6.jpg";
import shop1img7 from "@/assets/img/shopProfile/shop1/img7.jpg";
import shop1img8 from "@/assets/img/shopProfile/shop1/img8.jpg";

import shop2img1 from "@/assets/img/shopProfile/shop2/img1.jpg";
import shop2img2 from "@/assets/img/shopProfile/shop2/img2.jpg";
import shop2img3 from "@/assets/img/shopProfile/shop2/img3.jpg";
import shop2img4 from "@/assets/img/shopProfile/shop2/img4.jpg";
import shop2img5 from "@/assets/img/shopProfile/shop2/img5.jpg";
import shop2img6 from "@/assets/img/shopProfile/shop2/img6.jpg";
import shop2img7 from "@/assets/img/shopProfile/shop2/img7.jpg";
import shop2img8 from "@/assets/img/shopProfile/shop2/img8.jpg";

import shop3img1 from "@/assets/img/shopProfile/shop3/img1.jpg";
import shop3img2 from "@/assets/img/shopProfile/shop3/img2.jpg";
import shop3img3 from "@/assets/img/shopProfile/shop3/img3.jpg";
import shop3img4 from "@/assets/img/shopProfile/shop3/img4.jpg";
import shop3img5 from "@/assets/img/shopProfile/shop3/img5.jpg";
import shop3img6 from "@/assets/img/shopProfile/shop3/img6.jpg";
import shop3img7 from "@/assets/img/shopProfile/shop3/img7.jpg";
import shop3img8 from "@/assets/img/shopProfile/shop3/img8.jpg";

import shop4img1 from "@/assets/img/shopProfile/shop4/img1.jpg";
import shop4img2 from "@/assets/img/shopProfile/shop4/img2.jpg";
import shop4img3 from "@/assets/img/shopProfile/shop4/img3.jpg";
import shop4img4 from "@/assets/img/shopProfile/shop4/img4.jpg";
import shop4img5 from "@/assets/img/shopProfile/shop4/img5.jpg";
import shop4img6 from "@/assets/img/shopProfile/shop4/img6.jpg";
import shop4img7 from "@/assets/img/shopProfile/shop4/img7.jpg";
import shop4img8 from "@/assets/img/shopProfile/shop4/img8.jpg";

import shop5img1 from "@/assets/img/shopProfile/shop5/img1.jpg";
import shop5img2 from "@/assets/img/shopProfile/shop5/img2.jpg";
import shop5img3 from "@/assets/img/shopProfile/shop5/img3.jpg";
import shop5img4 from "@/assets/img/shopProfile/shop5/img4.jpg";
import shop5img5 from "@/assets/img/shopProfile/shop5/img5.jpg";
import shop5img6 from "@/assets/img/shopProfile/shop5/img6.jpg";
import shop5img7 from "@/assets/img/shopProfile/shop5/img7.jpg";
import shop5img8 from "@/assets/img/shopProfile/shop5/img8.jpg";

import shop6img1 from "@/assets/img/shopProfile/shop6/img1.jpg";
import shop6img2 from "@/assets/img/shopProfile/shop6/img2.jpg";
import shop6img3 from "@/assets/img/shopProfile/shop6/img3.jpg";
import shop6img4 from "@/assets/img/shopProfile/shop6/img4.jpg";
import shop6img5 from "@/assets/img/shopProfile/shop6/img5.jpg";
import shop6img6 from "@/assets/img/shopProfile/shop6/img6.jpg";
import shop6img7 from "@/assets/img/shopProfile/shop6/img7.jpg";
import shop6img8 from "@/assets/img/shopProfile/shop6/img8.jpg";

import shop7img1 from "@/assets/img/shopProfile/shop7/img1.jpg";
import shop7img2 from "@/assets/img/shopProfile/shop7/img2.jpg";
import shop7img3 from "@/assets/img/shopProfile/shop7/img3.jpg";
import shop7img4 from "@/assets/img/shopProfile/shop7/img4.jpg";
import shop7img5 from "@/assets/img/shopProfile/shop7/img5.jpg";
import shop7img6 from "@/assets/img/shopProfile/shop7/img6.jpg";
import shop7img7 from "@/assets/img/shopProfile/shop7/img7.jpg";
import shop7img8 from "@/assets/img/shopProfile/shop7/img8.jpg";

import shop8img1 from "@/assets/img/shopProfile/shop8/img1.jpg";
import shop8img2 from "@/assets/img/shopProfile/shop8/img2.jpg";
import shop8img3 from "@/assets/img/shopProfile/shop8/img3.jpg";
import shop8img4 from "@/assets/img/shopProfile/shop8/img4.jpg";
import shop8img5 from "@/assets/img/shopProfile/shop8/img5.jpg";
import shop8img6 from "@/assets/img/shopProfile/shop8/img6.jpg";
import shop8img7 from "@/assets/img/shopProfile/shop8/img7.jpg";
import shop8img8 from "@/assets/img/shopProfile/shop8/img8.jpg";

import shop9img1 from "@/assets/img/shopProfile/shop9/img1.jpg";
import shop9img2 from "@/assets/img/shopProfile/shop9/img2.jpg";
import shop9img3 from "@/assets/img/shopProfile/shop9/img3.jpg";
import shop9img4 from "@/assets/img/shopProfile/shop9/img4.jpg";
import shop9img5 from "@/assets/img/shopProfile/shop9/img5.jpg";
import shop9img6 from "@/assets/img/shopProfile/shop9/img6.jpg";
import shop9img7 from "@/assets/img/shopProfile/shop9/img7.jpg";
import shop9img8 from "@/assets/img/shopProfile/shop9/img8.jpg";

import shop10img1 from "@/assets/img/shopProfile/shop10/img1.jpg";
import shop10img2 from "@/assets/img/shopProfile/shop10/img2.jpg";
import shop10img3 from "@/assets/img/shopProfile/shop10/img3.jpg";
import shop10img4 from "@/assets/img/shopProfile/shop10/img4.jpg";
import shop10img5 from "@/assets/img/shopProfile/shop10/img5.jpg";
import shop10img6 from "@/assets/img/shopProfile/shop10/img6.jpg";
import shop10img7 from "@/assets/img/shopProfile/shop10/img7.jpg";
import shop10img8 from "@/assets/img/shopProfile/shop10/img8.jpg";

import shop11img1 from "@/assets/img/shopProfile/shop11/img1.jpg";
import shop11img2 from "@/assets/img/shopProfile/shop11/img2.jpg";
import shop11img3 from "@/assets/img/shopProfile/shop11/img3.jpg";
import shop11img7 from "@/assets/img/shopProfile/shop11/img7.jpg";
import shop11img8 from "@/assets/img/shopProfile/shop11/img8.jpg";

import shop12img1 from "@/assets/img/shopProfile/shop12/img1.jpg";
import shop12img2 from "@/assets/img/shopProfile/shop12/img2.jpg";
import shop12img3 from "@/assets/img/shopProfile/shop12/img3.jpg";
import shop12img4 from "@/assets/img/shopProfile/shop12/img4.jpg";
import shop12img5 from "@/assets/img/shopProfile/shop12/img5.jpg";
import shop12img6 from "@/assets/img/shopProfile/shop12/img6.jpg";
import shop12img7 from "@/assets/img/shopProfile/shop12/img7.jpg";
import shop12img8 from "@/assets/img/shopProfile/shop12/img8.jpg";

import shop13img1 from "@/assets/img/shopProfile/shop13/img1.jpg";
import shop13img2 from "@/assets/img/shopProfile/shop13/img2.jpg";
import shop13img3 from "@/assets/img/shopProfile/shop13/img3.jpg";
import shop13img4 from "@/assets/img/shopProfile/shop13/img4.jpg";
import shop13img5 from "@/assets/img/shopProfile/shop13/img5.jpg";
import shop13img6 from "@/assets/img/shopProfile/shop13/img6.jpg";
import shop13img7 from "@/assets/img/shopProfile/shop13/img7.jpg";
import shop13img8 from "@/assets/img/shopProfile/shop13/img8.jpg";

export interface ShopItem {
  id: number;
  name: string;
  time?: string;
  address?: string | string[];
  tel?: string;
  des?: string;
  desPro: string;
  desPro2?: string;
  mapAddr: string | string[];
  mapBus: string | string[];
  imgs: string[];
}

export const shopList: ShopItem[] = [
  {
    id: 1,
    name: "品川バードマン",
    time: "(2020年11月6日開店)",
    address: ["東京都港区港南2-3-28", "第三協和ビル 1階"],
    tel: "03-6712-9969",
    des: "フレッシュさにこだわった鶏を使用する焼き鳥居酒屋です。希少部位あり！",
    desPro:
      "【品川駅港南口徒歩1分】国産地鶏を使用した焼き鳥は、定番から希少部位まで常時10種類以上をご用意。新鮮さをモットーに仕入れルートにもこだわりを持ちます。自家製の生つくねもおすすめです。また、卓上のセルフサーバーでお客様ご自身でお楽しみいただく「卓上ハイボール、レモンサワー」の飲み放題!お客様のペースでたっぷりとハイボールをお楽しみいただける画期的なシステムは当店の魅力の1つです!",
    mapAddr: ["東京都港区港南2-3-28第三協和ビル 1階", ""],
    mapBus: ["品川駅港南口から徒歩1分", "品川駅から396m"],
    imgs: [
      shop1img1,
      shop1img2,
      shop1img3,
      shop1img4,
      shop1img5,
      shop1img6,
      shop1img7,
      shop1img8,
    ],
  },
  {
    id: 2,
    name: "SHE WOLF DINER 渋谷店",
    time: "(2021年3月5日開店)",
    address: ["東京都渋谷区宇田川町3ｰ1", "渋谷東武ホテル1階"],
    tel: "03-6416-3363",
    des: "本場ハンバーガーやクラフトビールが楽しめるアメリカンダイナー。",
    desPro:
      "アメリカ料理をテーマに、手ごねのジューシーなパティ、甘味のあるグリルオニオン、自家製のアリオリソース、バンズにこだわったバランスの良い、本場アメリカのハンバーガーを味わってください。クラフトビールや日本の定番ビールなど、様々な味を取り揃えておりますので、夜はお酒をメインにお楽しみいただくことも♪",
    mapAddr: ["東京都渋谷区宇田川町3ｰ1", "渋谷東武ホテル1階"],
    mapBus: ["渋谷駅から徒歩5~10分", "渋谷駅から521m"],
    imgs: [
      shop2img1,
      shop2img2,
      shop2img3,
      shop2img4,
      shop2img5,
      shop2img6,
      shop2img7,
      shop2img8,
    ],
  },
  {
    id: 3,
    name: "撒椒小酒館 大久保店",
    time: "(2022年2月14日開店)",
    address: ["東京都新宿区百人町1-18-8", "大久保カドビル 1F"],
    tel: "03-6908-9164",
    des: "充実したランチ＆ディナーメニューの本格四川中華料理",
    desPro:
      "ご提供するのは、唐辛子をしっかり効かせた四川料理がメインのネオ中華！新鮮な驚きと共に本場の味を満喫する、楽しいひと時をお過ごしいただけます。一押しは、柔らかいナマズを使用した魚料理“烤魚”。そのほかプリプリ食感のザリガニ料理や、クセになる味わいの自家製ドリンクもおすすめです。",
    mapAddr: ["東京都新宿区百人町1-18-8", "大久保カドビル 1F"],
    mapBus: ["JR大久保駅徒歩3分", "大久保駅から230m"],
    imgs: [
      shop3img1,
      shop3img2,
      shop3img3,
      shop3img4,
      shop3img5,
      shop3img6,
      shop3img7,
      shop3img8,
    ],
  },
  {
    id: 4,
    name: "座・撒椒 渋谷東武ホテル店",
    time: "(2023年4月1日開店)",
    address: ["東京都渋谷区宇田川町3-1", "渋谷東武ホテル B1F"],
    tel: "03-6452-5995",
    des: "【マジ中華の世界】特集で紹介された人気店芸能人やyoutuber&TikToker多数来店!渋谷駅近!名物石鍋麻婆豆腐など本場の味を楽しめる中華料理専門居酒屋です。",
    desPro: `魚の甘辛酢焼き魚や熱々石焼麻婆豆腐、やみつきよだれ鶏や自家製・小籠包の定番料理から仕切り鍋や北京ダックなど本格中華料理をお楽しみいただける多数のコースをご用意。明るい店内はインスタ映えするのはもちろん、お食事とともに空間もお楽しみいただけます。`,
    desPro2: `人気番組で連続放送されました！『マツコの知らない世界』・【マジ中華の世界】の特集など人気番組に紹介されました！今メディアからもありがたいことに大人気です★`,
    mapAddr: ["東京都渋谷区宇田川町3-1", "渋谷東武ホテル B1F"],
    mapBus: ["渋谷駅ハチ公口から徒歩5分", "渋谷駅から517m"],
    imgs: [
      shop4img1,
      shop4img2,
      shop4img3,
      shop4img4,
      shop4img5,
      shop4img6,
      shop4img7,
      shop4img8,
    ],
  },
  {
    id: 5,
    name: "黔荘 貴州牛羊粉",
    time: "(2023年12月25日開店)",
    address: ["東京都新宿区百人町1-18-9", "大久保センタービル1F"],
    tel: "03-6279-3758",
    des: "米粉（米で作った面です）中国貴州の有名な軽食です。",
    desPro: `当店では四川料理人直伝・中国貴州地方の伝統料理をカジュアルにお楽しみいただけます。一押しの麺料理は、牛骨と多彩な漢方薬を使った濃厚なスープが魅力の「牛肉粉」や、羊肉の旨味を存分に引き出したスープが味わえる「羊肉粉」。日本ではなかなかお目にかかれない本場さながらの味を心ゆくまでご堪能ください◎店内はモダンでスタイリッシュな雰囲気を演出。おひとり様やご家族連れ・お集まりなど様々なシーンに対応可能です。`,
    mapAddr: ["東京都新宿区百人町1-18-9", "大久保センタービル1F"],
    mapBus: ["大久保駅から213m", ""],
    imgs: [
      shop5img1,
      shop5img2,
      shop5img3,
      shop5img4,
      shop5img5,
      shop5img6,
      shop5img7,
      shop5img8,
    ],
  },
  {
    id: 6,
    name: "酔狂割烹 伊達",
    time: "(2023年8月17日開店)",
    address: ["東京都中央区日本橋2-2-15", "森井ビル 1F"],
    tel: "03-6281-8360",
    des: "全国各地から厳選した日本酒や本格焼酎と共にお楽しみくださいませ。",
    desPro: `ゆったりした空間でしっぽり味わう旨い酒と美味い飯『名物 かつおのレアカツ』サクサクの衣と中身はカツオはレアに♪落ち着いた大人の空間でゆったり楽しむ割烹料理。`,
    mapAddr: ["東京都中央区日本橋2-2-15", "森井ビル 1F"],
    mapBus: ["地下鉄東西線 日本橋駅 徒歩2分", "日本橋駅から186m"],
    imgs: [
      shop6img1,
      shop6img2,
      shop6img3,
      shop6img4,
      shop6img5,
      shop6img6,
      shop6img7,
      shop6img8,
    ],
  },
  {
    id: 7,
    name: "天府火鍋巷子",
    time: "(2024年1月25日開店)",
    address: ["東京都新宿区新宿3-22-7", "指田ビルB1F~B2F"],
    tel: "03-6380-6112",
    des: "本場重慶の味が楽しめる火鍋専門店。",
    desPro: `階段を降りると現れるのは、地下3フロア(全190席)の巨大空間！カラフルなネオン輝くレトロチャイナな店内で、本場の味を追求した「火鍋」を提供しています。中国から取り寄せた牛脂を使用し、試行錯誤の末に完成したスープは絶品。ノン冷凍で新鮮なお肉は、定番のラム肉から珍しい具材までご用意しました。手作りのサイドメニューも豊富で、女性に人気のタピオカやアルコールも多彩◎写真映えする空間で至福の時間をどうぞ♪`,
    mapAddr: ["東京都新宿区新宿3-22-7", "指田ビルB1F~B2F"],
    mapBus: ["新宿駅から徒歩3分", "新宿西口駅から215m"],
    imgs: [
      shop7img1,
      shop7img2,
      shop7img3,
      shop7img4,
      shop7img5,
      shop7img6,
      shop7img7,
      shop7img8,
    ],
  },
  {
    id: 8,
    name: "THE SMASH SCRAMBLE",
    time: "(2025年2月14日開店)",
    address: ["東京都渋谷区宇田川町26番11号", "白馬ビル1F"],
    tel: "03-6416-1169",
    des: "アメリカ料理",
    desPro: `アメリカンテイストのインテリアで統一。ポップでヴィンテージ感のある雰囲気なので、カフェ・飲食店シーン、アパレル、インタビューなどの様々なシチュエーションの撮影が可能です。個性的なアメリカンテイストの空間なので、広告、プロモーション、各種映像制作にもおすすめです。`,
    mapAddr: ["東京都渋谷区宇田川町26番11号", "白馬ビル1F"],
    mapBus: ["東急渋谷駅A3b出口より徒歩約1分", "JR渋谷駅ハチ公口より徒歩約4分"],
    imgs: [
      shop8img1,
      shop8img2,
      shop8img3,
      shop8img4,
      shop8img5,
      shop8img6,
      shop8img7,
      shop8img8,
    ],
  },
  {
    id: 9,
    name: "スターカラオケ",
    time: "(2025年6月29日開店)",
    address: ["東京都渋谷区宇田川町26番11号", "白馬ビル2F~5F"],
    tel: "03-6277-5349",
    des: "【世界1000店舗のカラオケ、渋谷に上陸!渋谷のセンター街に位置する便利な立地で、深夜まで営業しているため、遅くまでゆっくりとお楽しみいただけます】",
    desPro: `【5階はフロア完全貸切の≪VIPルーム≫をご用意しております☆】専用スタッフが5階に常駐し、専用トイレも完備。最新のDAM機器を導入し、なんとマイクは4本同時に使用可能!完全なプライベート空間で、リッチなカラオケ体験をお楽しみいただけます♪人数や料金など、お気軽にお店までお問い合わせください。【渋谷のセンター街！宴会・歓送迎会・女子会・パーティーにぴったり◎】団体利用にぴったりの当店では、様々なシーンでご利用いただけます！`,
    mapAddr: ["東京都渋谷区宇田川町26番11号", "白馬ビル2F~5F"],
    mapBus: ["東急渋谷駅A3b出口より徒歩約1分", "JR渋谷駅ハチ公口より徒歩約4分"],
    imgs: [
      shop9img1,
      shop9img2,
      shop9img3,
      shop9img4,
      shop9img5,
      shop9img6,
      shop9img7,
      shop9img8,
    ],
  },
  {
    id: 10,
    name: "楊國福マーラータン 神保町駅前店",
    time: "(2025年8月2日開店)",
    address: ["東京都千代田区神田神保町2-14-11", "朝日神保町プラザ 1F"],
    tel: "03-6261-9776",
    des: "マーラータン（スープ春雨）具材をチョイスして自分好みのマーラータンが楽しめる。",
    desPro: `世界に広がる、健康と美味しさの架け橋。本格的な味わいを提供し、幅広い顧客層に対応します。本格的な麻辣湯の魅力を日本全国に広める楊国福麻辣湯は、中国本土を基盤とし、世界中に7000軒以上のチェーン店を展開するグローバルファストフードリーダーです。楊国福グループは2003年に設立され、「健康、匠心、美しさ」をコア価値観とし、飲食サービスと小売運営を行っています。`,
    mapAddr: ["東京都千代田区神田神保町2-14-11", "朝日神保町プラザ 1F"],
    mapBus: ["神保町駅より徒歩約2分", ""],
    imgs: [
      shop10img1,
      shop10img2,
      shop10img3,
      shop10img4,
      shop10img5,
      shop10img6,
      shop10img7,
      shop10img8,
    ],
  },
  {
    id: 11,
    name: "楊國福マーラータン 池袋西口駅前店",
    time: "(2025年8月2日開店)",
    address: ["東京都豊島区西池袋1-15-8", "三仲ビル1F"],
    tel: "03-6691-0387",
    des: "マーラータン（スープ春雨）具材をチョイスして自分好みのマーラータンが楽しめる。",
    desPro: `世界に広がる、健康と美味しさの架け橋。本格的な味わいを提供し、幅広い顧客層に対応します。本格的な麻辣湯の魅力を日本全国に広める楊国福麻辣湯は、中国本土を基盤とし、世界中に7000軒以上のチェーン店を展開するグローバルファストフードリーダーです。楊国福グループは2003年に設立され、「健康、匠心、美しさ」をコア価値観とし、飲食サービスと小売運営を行っています。`,
    mapAddr: ["東京都豊島区西池袋1-15-8", "三仲ビル1F"],
    mapBus: ["池袋駅より徒歩約1分", ""],
    imgs: [
      shop11img1,
      shop11img2,
      shop11img3,
      shop10img4,
      shop10img5,
      shop10img6,
      shop11img7,
      shop11img8,
    ],
  },
  {
    id: 12,
    name: "炉ノ鳥 銀座店",
    time: "(2025年8月25日開店予定)",
    address: ["東京都中央区銀座一丁目", "6番15号銀座岡田ビル1F"],
    tel: "03-6263-0988",
    des: "炭火で焼き上げた、一本入魂の焼き鳥",
    desPro: `上質な炭を使うことで、鶏の脂が炭に落ちて立ち上る煙が風味を深め、皮は香ばしく仕上がります。`,
    mapAddr: ["東京都中央区銀座一丁目", "6番15号銀座岡田ビル1F"],
    mapBus: ["有楽町駅から1分", "銀座駅から4分"],
    imgs: [
      shop12img1,
      shop12img2,
      shop12img3,
      shop12img4,
      shop12img5,
      shop12img6,
      shop12img7,
      shop12img8,
    ],
  },
  {
    id: 13,
    name: "銀座七號",
    time: "(9月1号開店予定)",
    address: ["東京都中央区銀座7-17-18", ""],
    tel: "03-6278-8839",
    des: "高級中華料理会員制",
    desPro: `食材選びに妥協はなく、旬と産地にこだわり抜いた素材のみを厳選。ひとつひとつの素材に秘められた本来の旨みを最大限に引き出す“鮮味”の追求こそが、私たちの料理づくりの原点です。`,
    mapAddr: ["東京都中央区銀座7-17-18", ""],
    mapBus: ["新橋駅から5分", ""],
    imgs: [
      shop13img1,
      shop13img2,
      shop13img3,
      shop13img4,
      shop13img5,
      shop13img6,
      shop13img7,
      shop13img8,
    ],
  },
];

const ShopProfile: React.FC = () => {
  const location = useLocation();
  const shopRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const hash = location.hash; // 例如: #1001
    if (hash) {
      const id = hash.replace("#", "");
      const element = shopRefs.current[id];
      if (element) {
        // 平滑滚动到目标位置
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]); // 依赖 location，监听 hash 变化
  return (
    <section className={styles.shopProfile}>
      <div className={styles.banner} />
      {shopList.map((item: ShopItem, index: number) => {
        return (
          <div
            className={cs(
              styles.shopItem,
              (index + 1) % 2 === 1 ? styles.red : styles.gray
            )}
            key={index}
            id={String(item.id)}
            ref={(el) => {
              shopRefs.current[String(item.id)] = el;
            }}
          >
            <div className={styles.content}>
              {/* 分割线 */}
              <div className={styles.line}>
                <img src={logo} alt="" />
              </div>
              {/* 店铺详情 */}
              <div className={styles.shop}>
                {/* 店铺信息 */}
                <div className={styles.info}>
                  {/* 店铺名 */}
                  <div className={styles.shopName}>{item?.name}</div>
                  <div className={styles.time}>{item?.time}</div>
                  {/* 所在地 */}
                  <div className={cs(styles.address, styles.text)}>
                    <span className={styles.addr}>
                      <span className={styles.addr1}>
                        所在地：{item?.address?.[0]}
                      </span>
                      {item?.address?.[1] && (
                        <span className={styles.addr2}>
                          <span className={styles.opcity}>所在地：</span>
                          {item?.address?.[1]}
                        </span>
                      )}
                    </span>
                    {item?.tel && (
                      <span className={styles.tel}>
                        <span className={styles.opcity}>所在地：</span>Tel:{" "}
                        {item?.tel}
                      </span>
                    )}
                  </div>
                  {/* 描述 */}
                  {item?.des && (
                    <div className={cs(styles.address, styles.text)}>
                      ◇{item?.des}
                    </div>
                  )}
                </div>
                {/* 图片1 */}
                <div className={styles.img1}>
                  <img src={item?.imgs[0]} alt="" />
                </div>
                {/* 详细描述 */}
                <div
                  className={cs(
                    styles.desPro,
                    (index + 1) % 2 === 1 ? styles.grayDes : styles.redDes
                  )}
                >
                  {item?.desPro}
                  {item?.desPro2 && (
                    <span className={styles.desPro2}>{item?.desPro2}</span>
                  )}
                </div>
                {/* 图片2、图片3、图片4、图片5、图片6 */}
                <div className={styles.imgs}>
                  <img src={item?.imgs[1]} alt="" className={styles.miniImg} />
                  <img
                    src={item?.imgs[3]}
                    alt=""
                    className={cs(styles.miniImg, styles.miniImgMobile)}
                  />
                  <img src={item?.imgs[2]} alt="" className={styles.bigImg} />
                  <img
                    src={item?.imgs[3]}
                    alt=""
                    className={cs(styles.miniImg, styles.miniImgPc)}
                  />
                  <img src={item?.imgs[4]} alt="" className={styles.miniImg} />
                  <img src={item?.imgs[5]} alt="" className={styles.miniImg} />
                </div>
                {/* 图片7、地址 */}
                <div className={styles.mapSection}>
                  <img src={item?.imgs[6]} alt="" className={styles.mapImg} />
                  <div className={styles.mapInfo}>
                    <div
                      className={cs(
                        styles.addr,
                        item?.mapAddr[1] && styles.hasTwo
                      )}
                    >
                      <img src={addr} alt="addr" />
                      <div className={styles.texts}>
                        <div className={styles.text}>
                          住所: {item?.mapAddr[0]}
                        </div>
                        {item?.mapAddr[1] && (
                          <div className={styles.text}>
                            <span>住所: </span>
                            {item?.mapAddr[1]}
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className={cs(
                        styles.bus,
                        item?.mapBus[1] && styles.hasTwo
                      )}
                    >
                      <img src={bus} alt="addbusr" />
                      <div className={styles.texts}>
                        <div className={styles.text}>
                          アクセス: {item?.mapBus[0]}
                        </div>
                        {item?.mapBus[1] && (
                          <div className={styles.text}>
                            <span>アクセス: </span>
                            {item?.mapBus[1]}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <section className={styles.footer}>
        <Footer />
      </section>
    </section>
  );
};

export default ShopProfile;
