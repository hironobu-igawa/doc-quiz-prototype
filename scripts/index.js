$(function() {

  var appScope = $.scope.generate();

  appScope.init = function() {
    appScope.requestCount = 10;
    appScope.currentNo = 0;
    appScope.goodCount = 0;
  };

  appScope.challenge = function() {
    appScope.dogs = Dog.shuffle(appScope.requestCount);
    appScope.currentNo = 0;
    appScope.goodCount = 0;
    appScope.next();
  };

  appScope.showName = function() {
    appScope.nameShowFlg = true;
  };

  appScope.showGroup = function() {
    appScope.groupShowFlg = true;
  };

  appScope.showCountries = function() {
    appScope.countriesShowFlg = true;
  };

  appScope.showColors = function() {
    appScope.colorsShowFlg = true;
  };

  appScope.showCharacteristics = function() {
    appScope.characteristicsShowFlg = true;
  };

  appScope.showInitialWorks = function() {
    appScope.initialWorksShowFlg = true;
  };

  appScope.feelGood = function() {
    appScope.goodCount ++;
    appScope.next();
  };

  appScope.feelBad = function() {
    appScope.next();
  };

  appScope.next = function() {
    appScope.currentNo ++;
    appScope.nameShowFlg = false;
    appScope.groupShowFlg = false;
    appScope.countriesShowFlg = false;
    appScope.colorsShowFlg = false;
    appScope.characteristicsShowFlg = false;
    appScope.initialWorksShowFlg = false;
  };

  appScope.goFirst = function() {
    appScope.dogs = null;
  };

  appScope.isSetting = function() {
    return appScope.dogs == null;
  };

  appScope.isQuizMode = function() {
    return !!appScope.dogs && appScope.currentNo <= appScope.count;
  };

  appScope.isResultMode = function() {
    return !!appScope.dogs && appScope.currentNo > appScope.count;
  };

  appScope.isPerfect = function () {
    return appScope.goodCount === appScope.count;
  };

  appScope.isGreat = function() {
    if (appScope.isPerfect()) return false;
    return appScope.goodCount >= appScope.count * 0.8;
  };

  appScope.isGood = function() {
    if (appScope.isPerfect() || appScope.isGreat()) return false;
    return appScope.goodCount >= appScope.count * 0.6;
  };

  appScope.isBad = function() {
    return !(appScope.isPerfect() || appScope.isGreat() || appScope.isGood());
  };

  Object.defineProperty(appScope, 'dog', {
    get: function() {
      if (appScope.dogs == null) return null;
      return appScope.dogs[appScope.currentNo - 1];
    },
    enumerable: true
  });

  Object.defineProperty(appScope, 'count', {
    get: function() {
      return appScope.dogs.length;
    },
    enumerable: true
  });

  appScope.watch('dog', function() {$(window).scrollTop(0)});

  (function() {
    appScope.show('isSetting()', '#setting');
    appScope.input('requestCount', '#setting .request-count');
    appScope.click('#setting .challenge', 'challenge()');
  })();

  (function() {
    appScope.show('isQuizMode()', '#quiz');

    appScope.attr('dog.imageURL', '#quiz .dog-image', 'src');

    appScope.click('#quiz .show-name', 'showName()');
    appScope.hide('nameShowFlg', '#quiz .show-name');
    appScope.show('nameShowFlg', '#quiz .name');
    appScope.bind('dog.name', '#quiz .name');

    appScope.click('#quiz .show-group', 'showGroup()');
    appScope.hide('groupShowFlg', '#quiz .show-group');
    appScope.show('groupShowFlg', '#quiz .group');
    appScope.bind('dog.group', '#quiz .group');

    appScope.click('#quiz .show-countries', 'showCountries()');
    appScope.hide('countriesShowFlg', '#quiz .show-countries');
    appScope.show('countriesShowFlg', '#quiz .countries');
    var countryTemplate = $('#quiz .country-template').html();
    appScope.repeat('dog.countries', 'country', function(scope) {
      var $row = $(countryTemplate);
      scope.bind('country', $row);
      return $row;
    }).appendTo('#quiz .countries');

    appScope.click('#quiz .show-colors', 'showColors()');
    appScope.hide('colorsShowFlg', '#quiz .show-colors');
    appScope.show('colorsShowFlg', '#quiz .colors');
    var colorTemplate = $('#quiz .color-template').html();
    appScope.repeat('dog.colors', 'color', function(scope) {
      var $row = $(colorTemplate);
      scope.bind('color', $row);
      return $row;
    }).appendTo('#quiz .colors');

    appScope.click('#quiz .show-characteristics', 'showCharacteristics()');
    appScope.hide('characteristicsShowFlg', '#quiz .show-characteristics');
    appScope.show('characteristicsShowFlg', '#quiz .characteristics');
    var characteristicsTemplate = $('#quiz .characteristic-template').html();
    appScope.repeat('dog.characteristics', 'characteristic', function(scope) {
      var $row = $(characteristicsTemplate);
      scope.bind('characteristic', $row);
      return $row;
    }).appendTo('#quiz .characteristics');

    appScope.click('#quiz .show-initial-works', 'showInitialWorks()');
    appScope.hide('initialWorksShowFlg', '#quiz .show-initial-works');
    appScope.show('initialWorksShowFlg', '#quiz .initial-works');
    var initialWorksTemplate = $('#quiz .initial-work-template').html();
    appScope.repeat('dog.initialWorks', 'initialWork', function(scope) {
      var $row = $(initialWorksTemplate);
      scope.bind('initialWork', $row);
      return $row;
    }).appendTo('#quiz .initial-works');

    appScope.bind('currentNo', '#quiz .current-no');
    appScope.bind('count', '#quiz .count');
    appScope.click('#quiz .feel-good', 'feelGood()');
    appScope.click('#quiz .feel-bad', 'feelBad()');
  })();

  (function() {
    appScope.show('isResultMode()', '#result');

    appScope.show('isPerfect()', '#result .perfect');
    appScope.show('isGreat()', '#result .great');
    appScope.show('isGood()', '#result .good');
    appScope.show('isBad()', '#result .bad');

    appScope.bind('goodCount', '#result .good-count');
    appScope.bind('count', '#result .count');

    appScope.click('#result .go-first', 'goFirst()');
  })();

  appScope.init();
  $.scope.apply();
});
