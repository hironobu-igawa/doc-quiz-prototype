$(function() {

  var appScope = $.scope.generate();

  appScope.init = function() {
    appScope.requestCount = 10;
    appScope.refresh();
  };

  appScope.refresh = function() {
    appScope.dogs = Dog.shuffle(appScope.requestCount);
    appScope.currentNo = 0;
    appScope.goodCount = 0;
    appScope.next();
  };

  appScope.reset = function() {
    appScope.refresh();
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

  appScope.isFinish = function() {
    return appScope.currentNo > appScope.count;
  };

  appScope.isPerfect = function () {
    return appScope.goodCount === appScope.count;
  };

  appScope.isGreat = function() {
    if (appScope.isPerfect()) return false;
    return appScope.goodCount >= appScope.count * 0.8;
  };

  appScope.isGood = function() {
    if (appScope.isPerfect() || appScope.isGood()) return false;
    return appScope.goodCount >= appScope.count * 0.4
  };

  appScope.isBad = function() {
    return !(appScope.isFinish() || appScope.isGreat() || appScope.isGood());
  };

  Object.defineProperty(appScope, 'dog', {
    get: function() {
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

  appScope.input('requestCount', '#request-count');
  appScope.click('#reset', 'reset()');

  (function() {
    appScope.hide('isFinish()', '#quiz');

    appScope.attr('dog.imageURL', '#dog-image', 'src');

    appScope.click('#show-name', 'showName()');
    appScope.show('nameShowFlg', '#name');
    appScope.bind('dog.name', '#name');

    appScope.click('#show-group', 'showGroup()');
    appScope.show('groupShowFlg', '#group');
    appScope.bind('dog.group', '#group');

    appScope.click('#show-countries', 'showCountries()');
    appScope.show('countriesShowFlg', '#countries');
    var countryTemplate = $('#country-template').html();
    appScope.repeat('dog.countries', 'country', function(scope) {
      var $row = $(countryTemplate);
      scope.bind('country', $row);
      return $row;
    }).appendTo('#countries ul');

    appScope.click('#show-colors', 'showColors()');
    appScope.show('colorsShowFlg', '#colors');
    var colorTemplate = '<li>';
    appScope.repeat('dog.colors', 'color', function(scope) {
      var $row = $(colorTemplate);
      scope.bind('color', $row);
      return $row;
    }).appendTo('#colors ul');

    appScope.click('#show-characteristics', 'showCharacteristics()');
    appScope.show('characteristicsShowFlg', '#characteristics');
    var characteristicsTemplate = '<li>';
    appScope.repeat('dog.characteristics', 'characteristic', function(scope) {
      var $row = $(characteristicsTemplate);
      scope.bind('characteristic', $row);
      return $row;
    }).appendTo('#characteristics ul');

    appScope.click('#show-initial-works', 'showInitialWorks()');
    appScope.show('initialWorksShowFlg', '#initial-works');
    var initialWorksTemplate = '<li>';
    appScope.repeat('dog.initialWorks', 'initialWork', function(scope) {
      var $row = $(initialWorksTemplate);
      scope.bind('initialWork', $row);
      return $row;
    }).appendTo('#initial-works ul');

    appScope.bind('currentNo', '#quiz .current-no');
    appScope.bind('count', '#quiz .count');
    appScope.click('#quiz .feel-good', 'feelGood()');
    appScope.click('#quiz .feel-bad', 'feelBad()');
  })();

  (function() {
    appScope.show('isFinish()', '#result');

    appScope.show('isPerfect()', '#result .perfect');
    appScope.show('isGreat()', '#result .great');
    appScope.show('isGood()', '#result .good');
    appScope.show('isBad()', '#result .bad');

    appScope.bind('goodCount', '#result .good-count');
    appScope.bind('count', '#result .count');
  })();

  appScope.init();
  $.scope.apply();
});
