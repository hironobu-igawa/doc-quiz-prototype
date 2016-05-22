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
