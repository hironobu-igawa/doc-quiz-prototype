(function () {
  window.Dog = (function() {
    function Dog(param) {
      if (!param) return;
      this.id = param.id;
      this.name = param.name;
      this.group = param.group;
      this.countries = param.countries;
      this.colors = param.colors;
      this.characteristics = param.characteristics;
      this.initialWorks = param.initialWorks;
    }

    Dog.data = [
      {
        id: 1,
        name: 'シェットランド・シープドッグ',
        group: '1G',
        countries: [
          'イギリス'
        ],
        colors: [
          'セーブル',
          'ブルーマール',
          'トライカラー',
          'ブラック&ホワイト',
          'ブラック&タン'
        ],
        characteristics: [
          '愛称:シェルティー',
          '豊かな被毛',
          'ストップがはっきりしている',
          'ケネル犬 ソフィー'
        ],
        initialWorks: [
          '羊のハーディング'
        ]
      },
      {
        id: 2,
        name: 'コリー',
        group: '1G',
        countries: [
          'イギリス'
        ],
        colors: [
          'セーブル&ホワイト',
          'トライカラー',
          'ブルーマール'
        ],
        characteristics: [
          '短毛:スムース・コリー',
          '長毛:ラフ・コリー',
          'ホワイト・マーキングを持つ',
          '警察犬',
          'ケネル犬 鈴(リン)'
        ],
        initialWorks: [
          '羊のハーディング'
        ]
      },
      {
        id: 3,
        name: 'ビアデッド・コリー',
        group: '1G',
        countries: [
          'イギリス'
        ],
        colors: [
          'ブラック',
          'ブルー',
          'ブラウン',
          'グレー',
          'フォーン',
          'サンディ'
        ],
        characteristics: [
          'ストレートの長毛'
        ],
        initialWorks: [
          '羊のハーディング'
        ]
      },
      {
        id: 4,
        name: 'オールド・イングリッシュ・シープドッグ',
        group: '1G',
        countries: [
          'イギリス'
        ],
        colors: [
          'ブルー',
          'グレー',
          'グリズル'
        ],
        characteristics: [
          '愛称：ボブ・テイル',
          '断尾',
          '狼爪がある'
        ],
        initialWorks: [
          '羊のハーディング'
        ]
      },
      {
        id: 5,
        name: 'ジャーマン・シェパード・ドッグ',
        group: '1G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'ブラック',
          'グレー',
          '黒地にレディッシュ・ブラウン',
          '黒地にブラウン',
          '黒地にイエロー',
          '黒地に明るいグレー'
        ],
        characteristics: [
          '警察犬'
        ],
        initialWorks: [
          '羊のハーディング'
        ]
      },
      {
        id: 6,
        name: 'ベルジアン・シェパード・ドッグ「タービュレン」',
        group: '1G',
        countries: [
          'ベルギー'
        ],
        colors: [
          'フォーンにブラック・オーバレイ'
        ],
        characteristics: [
          '長毛',
          'ブラックマスク'
        ],
        initialWorks: [
          '牧畜のハーディング'
        ]
      },
      {
        id: 7,
        name: 'ベルジアン・シェパード・ドッグ「グローネンダール」',
        group: '1G',
        countries: [
          'ベルギー'
        ],
        colors: [
          'ブラック'
        ],
        characteristics: [
          '長毛'
        ],
        initialWorks: [
          '牧畜のハーディング'
        ]
      },
      {
        id: 8,
        name: 'ベルジアン・シェパード・ドッグ「マリノア」',
        group: '1G',
        countries: [
          'ベルギー'
        ],
        colors: [
          'フォーンにブラックオーバレイ'
        ],
        characteristics: [
          '長毛',
          'カール状の被毛'
        ],
        initialWorks: [
          '牧畜のハーディング'
        ]
      },
      {
        id: 9,
        name: 'ベルジアン・シェパード・ドッグ「ラケノア」',
        group: '1G',
        countries: [
          'ベルギー'
        ],
        colors: [
          'フォーンにブラックオーバレイ'
        ],
        characteristics: [
          '長毛',
          'カール状の被毛'
        ],
        initialWorks: [
          '牧畜のハーディング'
        ]
      },
      {
        id: 10,
        name: 'ボーダー・コリー',
        group: '1G',
        countries: [
          'イギリス'
        ],
        colors: [
          'オールカラー'
        ],
        characteristics: [
          '短毛：スムース'
        ],
        initialWorks: [
          '羊と牛のハーディング'
        ]
      },
      {
        id: 11,
        name: 'オーストラリアン・シェパード',
        group: '1G',
        countries: [
          'アメリカ'
        ],
        colors: [
          'ブルーマール',
          'レッドマール',
          'ブラックトライ',
          'レッドトライ'
        ],
        characteristics: [
          '断尾'
        ],
        initialWorks: [
          '羊のハーディング'
        ]
      },
      {
        id: 12,
        name: 'ホワイト・スイス・シェパード・ドッグ',
        group: '1G',
        countries: [
          'スイス'
        ],
        colors: [
          'ホワイト'
        ],
        characteristics: [
          'なし'
        ],
        initialWorks: [
          '番犬',
          '作業犬'
        ]
      },
      {
        id: 13,
        name: 'オーストラリアン・キャトル・ドッグ',
        group: '1G',
        countries: [
          'オーストラリア'
        ],
        colors: [
          'ブルー',
          'レッド'
        ],
        characteristics: [
          'なし'
        ],
        initialWorks: [
          '牛のハーディング'
        ]
      },
      {
        id: 14,
        name: 'プーリー',
        group: '1G',
        countries: [
          'ハンガリー'
        ],
        colors: [
          'ブラック',
          'フォーン',
          'パールホワイト'
        ],
        characteristics: [
          '縄状の被毛'
        ],
        initialWorks: [
          '牧畜のハーディング'
        ]
      },
      {
        id: 15,
        name: 'コモンドール',
        group: '1G',
        countries: [
          'ハンガリー'
        ],
        colors: [
          'アイボリー'
        ],
        characteristics: [
          '縄状の被毛'
        ],
        initialWorks: [
          '羊のガーディング'
        ]
      },
      {
        id: 16,
        name: 'スキッパーキ',
        group: '1G',
        countries: [
          'ベルギー'
        ],
        colors: [
          'ブラック'
        ],
        characteristics: [
          '断尾'
        ],
        initialWorks: [
          '小型害獣の狩猟'
        ]
      },
      {
        id: 17,
        name: 'ブービエ・デ・フランダース',
        group: '1G',
        countries: [
          'フランス',
          'ベルギー'
        ],
        colors: [
          'ブラック',
          'ブリンドル',
          'グレー'
        ],
        characteristics: [
          '断尾',
          '断耳',
          'あごひげ',
          '口ひげ'
        ],
        initialWorks: [
          '牛のハーディング',
          '運搬犬'
        ]
      },
      {
        id: 18,
        name: 'ポーリッシュ・　ローランド・シープドッグ',
        group: '1G',
        countries: [
          'ポーランド'
        ],
        colors: [
          'なし'
        ],
        characteristics: [
          '愛称：ポン',
          '別名：ポルスキー・オフチャレック・ニンジンネ'
        ],
        initialWorks: [
          'ハンティング'
        ]
      },
      {
        id: 19,
        name: 'ウェルッシュ・コーギー・ペンブローク',
        group: '1G',
        countries: [
          'イギリス'
        ],
        colors: [
          'レッド',
          'セーブル',
          'フォーン',
          'ブラック&タン'
        ],
        characteristics: [
          '尾生まれつきないか、あっても断尾'
        ],
        initialWorks: [
          '牧畜追い犬'
        ]
      },
      {
        id: 20,
        name: 'ウェルッシュ・コーギー・カーディガン',
        group: '1G',
        countries: [
          'イギリス'
        ],
        colors: [
          'ブリンドル',
          'ブルーマール',
          'セーブル&ブラック',
          'ブラック&タン'
        ],
        characteristics: [
          'ふさふさとした長い尾',
          'ケネル犬：小町'
        ],
        initialWorks: [
          '牧畜追い犬'
        ]
      },
      {
        id: 21,
        name: 'マレンマ・シープドッグ',
        group: '1G',
        countries: [
          'イタリア'
        ],
        colors: [
          'ホワイト'
        ],
        characteristics: [
          'なし'
        ],
        initialWorks: [
          '牧畜のガーディング'
        ]
      },
      {
        id: 22,
        name: 'ドーベルマン',
        group: '2G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'ブラック＆タン',
          'ブラウン＆タン'
        ],
        characteristics: [
          '断耳',
          '断尾',
          '警察犬'
        ],
        initialWorks: [
          '番犬'
        ]
      },
      {
        id: 23,
        name: 'ロットワイラー',
        group: '2G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'ブラック＆タン'
        ],
        characteristics: [
          '断尾'
        ],
        initialWorks: [
          '牧牛犬',
          '護衛犬'
        ]
      },
      {
        id: 24,
        name: 'ボクサー',
        group: '2G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'フォーン',
          'ブリンドル'
        ],
        characteristics: [
          '断尾',
          '断耳',
          'ブラックマスク',
          'アンダージョット',
          '警察犬'
        ],
        initialWorks: [
          'ブル・バイティング',
          '護衛犬'
        ]
      },
      {
        id: 25,
        name: 'グレート・デーン',
        group: '2G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'フォーン',
          'ブリンドル',
          'ハールクイン',
          'ブルー',
          'ブラック'
        ],
        characteristics: [
          '断耳',
          '別名：ジャーマン・マスティフ'
        ],
        initialWorks: [
          '軍用',
          '大型獣のハンティング'
        ]
      },
      {
        id: 26,
        name: 'マスティフ',
        group: '2G',
        countries: [
          'イギリス'
        ],
        colors: [
          'フォーン',
          'ブリンドル'
        ],
        characteristics: [
          '別名：オールド・イングリッシュ・マスティフ'
        ],
        initialWorks: [
          '護衛犬',
          'ベア・ファイティング'
        ]
      },
      {
        id: 27,
        name: 'ブル・マスティフ',
        group: '2G',
        countries: [
          'イギリス'
        ],
        colors: [
          'フォーン',
          'ブリンドル',
          'レッド'
        ],
        characteristics: [
          'ブラックマスク'
        ],
        initialWorks: [
          '護衛犬'
        ]
      },
      {
        id: 28,
        name: 'チベタン・マスティフ',
        group: '2G',
        countries: [
          'チベット地方'
        ],
        colors: [
          'ブラック',
          'ブラウン',
          'ゴールド'
        ],
        characteristics: [
          'なし'
        ],
        initialWorks: [
          '牧畜のガーディング'
        ]
      },
      {
        id: 29,
        name: 'ピレニアン・マスティフ',
        group: '2G',
        countries: [
          'スペイン'
        ],
        colors: [
          'ピュアホワイト・スノーホワイト地にグレ・ゴールデンイエロー・ブラウンの班'
        ],
        characteristics: [
          '明瞭なマスク'
        ],
        initialWorks: [
          '害獣の防衛犬'
        ]
      },
      {
        id: 30,
        name: 'ピレニアン・マウンテン・ドッグ',
        group: '2G',
        countries: [
          'フランス'
        ],
        colors: [
          'ホワイト',
          'グレー',
          '薄いイエロー',
          'ウルフカラー'
        ],
        characteristics: [
          '狼爪を残す',
          '別名：グレート・ピレニーズ',
          'ケネル犬：藍',
          '血統書名：シービー・レディ・ラン・オブ・スペース・タムラ・JP'
        ],
        initialWorks: [
          '牧畜のガーディング'
        ]
      },
      {
        id: 31,
        name: 'ニューファンドランド',
        group: '2G',
        countries: [
          'カナダ'
        ],
        colors: [
          'ブラック',
          'ブラウン',
          'ランドシャー'
        ],
        characteristics: [
          '足に水かきがある'
        ],
        initialWorks: [
          '漁師の補助'
        ]
      },
      {
        id: 32,
        name: 'バーニーズ・マウンテン・ドッグ',
        group: '2G',
        countries: [
          'スイス'
        ],
        colors: [
          '黒地にタンとホワイトの班'
        ],
        characteristics: [
          'ケネル犬：柚子'
        ],
        initialWorks: [
          '牽引',
          '護衛犬'
        ]
      },
      {
        id: 33,
        name: 'セント・バーナード',
        group: '2G',
        countries: [
          'スイス'
        ],
        colors: [
          '白地にブラウンの班'
        ],
        characteristics: [
          '短毛：ショートヘアード',
          '長毛：ロングヘアード'
        ],
        initialWorks: [
          '救助犬',
          'コンパニオン'
        ]
      },
      {
        id: 34,
        name: 'ジャイアント・シュナウザー',
        group: '2G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'ブラック',
          'ソルト＆ペッパー'
        ],
        characteristics: [
          '断耳'
        ],
        initialWorks: [
          '牧畜のハーディング'
        ]
      },
      {
        id: 35,
        name: 'ドゴ・アルヘンティーノ',
        group: '2G',
        countries: [
          'アルゼンチン'
        ],
        colors: [
          'ホワイト'
        ],
        characteristics: [
          '断耳',
          '通称：鉄砲いらずの銃猟犬'
        ],
        initialWorks: [
          '狩猟犬',
          '闘犬',
          '護衛犬'
        ]
      },
      {
        id: 36,
        name: 'レオンベルガー',
        group: '2G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'ライオンイエロー',
          'レッド',
          'レディッシュ・ブラウン',
          'サンディ'
        ],
        characteristics: [
          'ブラックマスク'
        ],
        initialWorks: [
          '牧畜犬',
          '牽引'
        ]
      },
      {
        id: 37,
        name: 'ブルドッグ',
        group: '2G',
        countries: [
          'イギリス'
        ],
        colors: [
          '単色',
          'パイド'
        ],
        characteristics: [
          'アンダーショット',
          'ローズイヤー',
          'スクリュー尾',
          'O脚である',
          'イギリスの国犬',
          'スマット'
        ],
        initialWorks: [
          '闘犬'
        ]
      },
      {
        id: 38,
        name: 'ミニチュア・ピンシャー',
        group: '2G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'ブラック＆タン',
          'チョコレート＆タン',
          'レッド',
          'ブラウン'
        ],
        characteristics: [
          '断耳',
          '断尾'
        ],
        initialWorks: [
          'なし'
        ]
      },
      {
        id: 39,
        name: 'ミニチュア・シュナウザー',
        group: '2G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'ソルト＆ペッパー',
          'ホワイト',
          'ブラック＆シルバー',
          'ブラック'
        ],
        characteristics: [
          '断耳',
          '断尾',
          '長い眉毛とヒゲ'
        ],
        initialWorks: [
          'ネズミ捕り'
        ]
      },
      {
        id: 40,
        name: '土佐闘犬',
        group: '2G',
        countries: [
          '日本'
        ],
        colors: [
          '赤',
          '黒',
          'ブリンドル',
          'フォーン',
          'アプリコット'
        ],
        characteristics: [
          'マスティフと似ている',
          '別名：ジャパニーズ・マスティフ',
          '多くの国では飼育禁止'
        ],
        initialWorks: [
          '闘犬'
        ]
      },
      {
        id: 41,
        name: 'チャイニーズ・シャーペイ',
        group: '2G',
        countries: [
          '中国'
        ],
        colors: [
          'ホワイト以外のすべての単色'
        ],
        characteristics: [
          '額、頬、尾の付け根のシワ',
          '独特な形尾のマズル'
        ],
        initialWorks: [
          'なし'
        ]
      },
      {
        id: 42,
        name: 'ウェスト・ハイランド・ホワイト・テリア',
        group: '3G',
        countries: [
          'イギリス'
        ],
        colors: [
          'ホワイト'
        ],
        characteristics: [
          '愛称：ウェスティ',
          '先祖：ケアーン・テリア'
        ],
        initialWorks: [
          'ネズミ捕り'
        ]
      },
      {
        id: 43,
        name: 'ケアーン・テリア',
        group: '3G',
        countries: [
          'イギリス'
        ],
        colors: [
          'レッド',
          'クリーム',
          'ウィートン',
          'グレー',
          'ほぼブラック'
        ],
        characteristics: [
          'テリア種最古の犬'
        ],
        initialWorks: [
          'ネズミ捕り',
          'キツネ猟'
        ]
      },
      {
        id: 44,
        name: 'ノーリッチ・テリア',
        group: '3G',
        countries: [
          'イギリス'
        ],
        colors: [
          'レッド',
          'ウィートン',
          'ブラック＆タン',
          'グリズル'
        ],
        characteristics: [
          '断耳',
          '立ち耳'
        ],
        initialWorks: [
          'ネズミ捕り'
        ]
      },
      {
        id: 45,
        name: 'ノーフォーク・テリア',
        group: '3G',
        countries: [
          'イギリス'
        ],
        colors: [
          'レッド',
          'ウィートン',
          'ブラック＆タン',
          'グリズル'
        ],
        characteristics: [
          '断耳',
          '垂れ耳'
        ],
        initialWorks: [
          'ネズミ捕り'
        ]
      },
      {
        id: 46,
        name: 'エアーデール・テリア',
        group: '3G',
        countries: [
          'イギリス'
        ],
        colors: [
          'ブラック＆タン',
          'グリズル＆タン'
        ],
        characteristics: [
          '別名：キング・オブ・テリア',
          '警察犬',
          '断尾'
        ],
        initialWorks: [
          'アナグマ・カワウソ猟'
        ]
      },
      {
        id: 97,
        name: 'イングリッシュ・ポインター',
        group: '7G',
        countries: [
          'イギリス'
        ],
        colors: [
          'オレンジ&ホワイト',
          'レモン&ホワイト',
          'ブラック&ホワイト',
          'レバー&ホワイト'
        ],
        characteristics: [
          'なし'
        ],
        initialWorks: [
          '野兎の捜索、回収'
        ]
      },
      {
        id: 98,
        name: 'ジャーマン・ショートヘアード・ポインター',
        group: '7G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'ブラウンの単色',
          'ブラック地に白またはグレーの斑',
          'ホワイト地にブラウンの斑'
        ],
        characteristics: [
          '断尾'
        ],
        initialWorks: [
          '万能な猟犬'
        ]
      },
      {
        id: 99,
        name: 'ジャーマン・ワイヤーヘアード・ポインター',
        group: '7G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'ブラウン・ローン',
          'ブラック・ローン',
          'ブラウン',
          'ローン'
        ],
        characteristics: [
          '断尾'
        ],
        initialWorks: [
          '万能な猟犬'
        ]
      },
      {
        id: 100,
        name: 'ワイマラナー',
        group: '7G',
        countries: [
          'ドイツ'
        ],
        colors: [
          'シルバー',
          'マウス・グレー'
        ],
        characteristics: [
          '断尾',
          '銀灰色の毛色と性格から、「灰色の幽霊」と呼ばれる',
          '短毛：ショートヘアード',
          '長毛：ロングヘアード',
          'ケネル犬：空'
        ],
        initialWorks: [
          '大型ゲームの捜索、回収'
        ]
      },
      {
        id: 101,
        name: 'ショートヘアード・ハンガリアン・ビズラ',
        group: '7G',
        countries: [
          'ハンガリー'
        ],
        colors: [
          '赤みを帯びた金色'
        ],
        characteristics: [
          '断尾'
        ],
        initialWorks: [
          'ハンティング',
          '鷹狩り'
        ]
      },
      {
        id: 102,
        name: 'アイリッシュ・セター',
        group: '7G',
        countries: [
          'アイルランド'
        ],
        colors: [
          'マホガニーレッド'
        ],
        characteristics: [
          'なし'
        ],
        initialWorks: [
          'ゲームの回収、運搬'
        ]
      },
      {
        id: 103,
        name: 'イングリッシュ・セター',
        group: '7G',
        countries: [
          'イギリス'
        ],
        colors: [
          'ブルー・ベルトン',
          'オレンジ・ベルトン',
          'レバー・ベルトン',
          'レモン・ベルトン'
        ],
        characteristics: [
          'なし'
        ],
        initialWorks: [
          '鳥獣の回収、運搬'
        ]
      },
      {
        id: 104,
        name: 'ゴードン・セター',
        group: '7G',
        countries: [
          'イギリス'
        ],
        colors: [
          'ジェットブラックにチェスナットの斑'
        ],
        characteristics: [
          'なし'
        ],
        initialWorks: [
          '鳥猟時のセット'
        ]
      },
      {
        id: 105,
        name: 'ブリタニー・スパニエル',
        group: '7G',
        countries: [
          'フランス'
        ],
        colors: [
          'オレンジ&ホワイト',
          'ブラック&ホワイト',
          'パイボールド',
          'ローン',
          'トライカラー'
        ],
        characteristics: [
          '断尾',
          'スパニエル系で唯一ポイントする',
          'ケネル犬：陽'
        ],
        initialWorks: [
          '回収、運搬'
        ]
      },
      {
        id: 106,
        name: 'コーイケル・ホンディエ',
        group: '8G',
        countries: [
          'オランダ'
        ],
        colors: [
          '白地にオレンジ・レッドの斑'
        ],
        characteristics: [
          'ほぼスクエアなボディ',
          '尾に豊富な飾り気がある',
          'ケネル犬：アム'
        ],
        initialWorks: [
          '鳥獣のフラッシング、回収'
        ]
      },
      {
        id: 107,
        name: 'ラブラドール・レトリーバー',
        group: '8G',
        countries: [
          'イギリス'
        ],
        colors: [
          'イエロー',
          'ブラック',
          'チョコレート'
        ],
        characteristics: [
          '警察犬',
          '盲導犬',
          '救助犬',
          'ケネル犬：ルナ、紬',
          '血統書名：ツムギ・オブ・ヒスビバーチェ・JP'
        ],
        initialWorks: [
          'ガンドッグ'
        ]
      },
      {
        id: 108,
        name: 'ゴールデン・レトリーバー',
        group: '8G',
        countries: [
          'イギリス'
        ],
        colors: [
          'ゴールド',
          'クリーム'
        ],
        characteristics: [
          '警察犬',
          '盲導犬',
          '救助犬'
        ],
        initialWorks: [
          'ゲームの捜索、回収'
        ]
      },
      {
        id: 109,
        name: 'フラットコーテッド・レトリーバー',
        group: '8G',
        countries: [
          'イギリス'
        ],
        colors: [
          'ブラック',
          'レバー'
        ],
        characteristics: [
          'なし'
        ],
        initialWorks: [
          'ゲームの捜索、回収'
        ]
      },
      {
        id: 110,
        name: 'カーリーコーテッド・レトリーバー',
        group: '8G',
        countries: [
          'イギリス'
        ],
        colors: [
          'ブラック',
          'レバー'
        ],
        characteristics: [
          '厚い被毛',
          '防水性のある被毛'
        ],
        initialWorks: [
          '水禽猟での獲物の捜索、回収'
        ]
      },
      {
        id: 111,
        name: 'チェサピーク・ベイ・レトリーバー',
        group: '8G',
        countries: [
          'アメリカ',
          'カナダ'
        ],
        colors: [
          'ダークブラウン',
          'デッドグラス'
        ],
        characteristics: [
          '足に水かきがある',
          'やや脂性で防水性のある被毛'
        ],
        initialWorks: [
          '水禽猟での獲物の捜索、回収'
        ]
      },
      {
        id: 112,
        name: 'ノヴァ・スコシア・ダック・トーリング・レトリーバー',
        group: '8G',
        countries: [
          'カナダ'
        ],
        colors: [
          'レッド',
          'オレンジ'
        ],
        characteristics: [
          'レトリーバーの中で最も小さい'
        ],
        initialWorks: [
          '水禽のフラッシング、回収'
        ]
      },
      {
        id: 113,
        name: 'アメリカン・コッカー・スパニエル',
        group: '8G',
        countries: [
          'アメリカ'
        ],
        colors: [
          'ブラック・バラエティ',
          'アスコブ・バラエティ',
          'パーティカラー・バラエティ'
        ],
        characteristics: [
          '断尾',
          'マズルが短い'
        ],
        initialWorks: [
          '小型ゲームの回収'
        ]
      },
      {
        id: 114,
        name: 'イングリッシュ・コッカー・スパニエル',
        group: '8G',
        countries: [
          'イギリス'
        ],
        colors: [
          'オールカラー'
        ],
        characteristics: [
          '断尾'
        ],
        initialWorks: [
          '小型ゲームの回収'
        ]
      },
      {
        id: 115,
        name: 'イングリッシュ・スプリンガー・スパニエル',
        group: '8G',
        countries: [
          'イギリス'
        ],
        colors: [
          'ブラック&ホワイト',
          'レバー&ホワイト'
        ],
        characteristics: [
          '断尾'
        ],
        initialWorks: [
          '鳥獣のフラッシング、回収'
        ]
      },
      {
        id: 116,
        name: 'クランバー・スパニエル',
        group: '8G',
        countries: [
          'イギリス'
        ],
        colors: [
          '白地にレモンの斑',
          '白地にオレンジの斑'
        ],
        characteristics: [
          '断尾',
          '胴長で頭が大きめ'
        ],
        initialWorks: [
          'ゲームの捜索、回収'
        ]
      },
      {
        id: 117,
        name: 'シー・ズー',
        group: '9G',
        countries: [
          '中国'
        ],
        colors: [
          'オールカラー'
        ],
        characteristics: [
          'ショーのときはトップを結ぶ'
        ],
        initialWorks: [
          '王室愛玩犬'
        ]
      },
      {
        id: 118,
        name: 'ラサ・アプソ',
        group: '9G',
        countries: [
          'チベット地方'
        ],
        colors: [
          'なし'
        ],
        characteristics: [
          'シー・ズーの先祖犬',
          '豊かで硬めの直毛',
          'ショーのときもトップを結ばない'
        ],
        initialWorks: [
          '僧侶のコンパニオン'
        ]
      },
      {
        id: 119,
        name: 'チベタン・テリア',
        group: '9G',
        countries: [
          'チベット地方'
        ],
        colors: [
          'オールカラー'
        ],
        characteristics: [
          '長毛',
          '毛量が多い',
          '羊毛上の下毛'
        ],
        initialWorks: [
          '警察犬'
        ]
      },
      {
        id: 120,
        name: 'チャイニーズ・クレステッド・ドッグ',
        group: '9G',
        countries: [
          '中国'
        ],
        colors: [
          'オールカラー'
        ],
        characteristics: [
          '頭頂・尾先・足先にのみわずかな毛があり、その他の部分は無毛',
          'ごくまれに有毛犬が生まれることがある',
          '有毛犬：パウダーパフ'
        ],
        initialWorks: [
          'コンパニオン',
          '宗教儀式'
        ]
      },
      {
        id: 121,
        name: 'プードル',
        group: '9G',
        countries: [
          'フランス'
        ],
        colors: [
          'ホワイト',
          'ブラック',
          'ブラウン',
          'グレー',
          'シルバー',
          'アプリコット',
          'レッド'
        ],
        characteristics: [
          '体高：45〜60cm⇨スタンダード',
          '体高：35〜45cm⇨ミディアム',
          '体高：28〜35cm⇨ミニチュア',
          '体高：28cm以下⇨トイ'
        ],
        initialWorks: [
          'コンパニオン'
        ]
      },
      {
        id: 122,
        name: 'キャバリア・キング・チャールズ・スパニエル',
        group: '9G',
        countries: [
          'イギリス'
        ],
        colors: [
          'プリンスチャールズ',
          'キングチャールズ',
          'ブレンハイム',
          'ルビー'
        ],
        characteristics: [
          '英国王室愛玩犬'
        ],
        initialWorks: [
          'なし'
        ]
      },
      {
        id: 123,
        name: 'キング・チャールズ・スパニエル',
        group: '9G',
        countries: [
          'イギリス'
        ],
        colors: [
          'プリンスチャールズ',
          'キングチャールズ',
          'ブレンハイム',
          'ルビー'
        ],
        characteristics: [
          'なし'
        ],
        initialWorks: [
          'なし'
        ]
      },
      {
        id: 124,
        name: 'チワワ',
        group: '9G',
        countries: [
          'メキシコ'
        ],
        colors: [
          'オールカラー'
        ],
        characteristics: [
          '長毛：ロングコート',
          '短毛：スムースコート'
        ],
        initialWorks: [
          'なし'
        ]
      },
      {
        id: 125,
        name: 'ブリュッセル・グリフォン',
        group: '9G',
        countries: [
          'ベルギー'
        ],
        colors: [
          'レッド',
          '赤みがかった色'
        ],
        characteristics: [
          '粗毛で赤毛：ブリュッセル・グリフォン',
          '粗毛で黒毛：ベルジアン・グリフォン',
          '短毛：プチブラバンソン'
        ],
        initialWorks: [
          'なし'
        ]
      },
      {
        id: 126,
        name: 'フレンチ・ブルドッグ',
        group: '9G',
        countries: [
          'フランス'
        ],
        colors: [
          'バイド',
          'ブリンドル',
          'フォーン'
        ],
        characteristics: [
          'コウモリ耳'
        ],
        initialWorks: [
          'なし'
        ]
      },
      {
        id: 127,
        name: 'ペキニーズ',
        group: '9G',
        countries: [
          '中国'
        ],
        colors: [
          'オールカラー'
        ],
        characteristics: [
          '別名：ライオンドッグ'
        ],
        initialWorks: [
          'なし'
        ]
      },
      {
        id: 128,
        name: 'パグ',
        group: '9G',
        countries: [
          '中国'
        ],
        colors: [
          'フォーン',
          'ブラック',
          'シルバー',
          'アプリコット'
        ],
        characteristics: [
          '巻き尾',
          'ブラックマスク'
        ],
        initialWorks: [
          'なし'
        ]
      },
      {
        id: 129,
        name: 'パピヨン',
        group: '9G',
        countries: [
          'ヨーロッパ'
        ],
        colors: [
          '地色をホワイトとした全ての色'
        ],
        characteristics: [
          '立ち耳：コンチネンタル・トイスパニエル・ウィズ・アップライトイヤー',
          '垂れ耳：コンチネンタル・トイスパニエル・ウィズ・バンキングイヤー'
        ],
        initialWorks: [
          'なし'
        ]
      },
      {
        id: 130,
        name: 'ビジョン・フリーゼ',
        group: '9G',
        countries: [
          'フランス',
          'ベルギー'
        ],
        colors: [
          '純白'
        ],
        characteristics: [
          '全身をパウダーパフのようにトリミングする'
        ],
        initialWorks: [
          'なし'
        ]
      },
      {
        id: 131,
        name: 'ボロニーズ',
        group: '9G',
        countries: [
          'イタリアのボロニーズ地方'
        ],
        colors: [
          'ピュアホワイト'
        ],
        characteristics: [
          'なし'
        ],
        initialWorks: [
          'なし'
        ]
      },
      {
        id: 132,
        name: 'マルチーズ',
        group: '9G',
        countries: [
          'マルタ共和国'
        ],
        colors: [
          '純白'
        ],
        characteristics: [
          'なし'
        ],
        initialWorks: [
          'なし'
        ]
      },
      {
        id: 133,
        name: '狆',
        group: '9G',
        countries: [
          '日本'
        ],
        colors: [
          '白地に黒か赤の斑'
        ],
        characteristics: [
          '別名：ジャパニーズ・チン'
        ],
        initialWorks: [
          'コンパニオン'
        ]
      },
      {
        id: 134,
        name: 'ボストン・テリア',
        group: '9G',
        countries: [
          'アメリカ'
        ],
        colors: [
          'ブラック',
          'ホワイト&ブリンドル',
          'シール'
        ],
        characteristics: [
          'タキシードを着た紳士',
          'コウモリ耳',
          'スクリュー尾',
          'ボストンマーク'
        ],
        initialWorks: [
          'ねずみ捕り',
          'コンパニオン'
        ]
      }
    ];

    Dog.query = function() {
      return Dog.data
        .map(function(d) {return new Dog(d)})
        .sort(function(a, b) {return a.id - b.id});
    };

    Dog.shuffle = function(limit) {
      return _.sampleSize(Dog.query(), limit || Dog.data.length);
    };

    Object.defineProperty(Dog.prototype, 'imageURL', {
      get: function() {
        return '/resources/' + this.id + '.jpg';
      },
      enumerable: true
    });

    return Dog;
  })();
})();
