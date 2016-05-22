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
          'ベルギー'
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
      }
    ];

    Dog.query = function() {
      return Dog.data
        .map(function(d) {return new Dog(d)})
        .sort(function(d) {return d.id - d.id});
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
