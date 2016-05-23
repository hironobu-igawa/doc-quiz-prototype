$(function() {
  var ImagePreloader = (function() {
    function ImagePreloader() {
      this.imageURLs = [];
      this.loading = false;
    }

    ImagePreloader.prototype.preload = function(imageURL) {
      if (this.loading) {
        this.imageURLs.push(imageURL);
        return;
      }
      this.load(imageURL);
    };

    ImagePreloader.prototype.load = function(imageURL) {
      var _this = this;
      _this.loading = true;
      $('<img>')
        .attr('src', imageURL)
        .on('load', function() {
          if (!_this.imageURLs.length) {
            _this.loading = false;
            return;
          }
          _this.load(_this.imageURLs.shift());
        });
    };

    return ImagePreloader;
  })();

  var imagePreloader = new ImagePreloader();

  Dog.query()
    .map(function(d) {return d.imageURL})
    .forEach(function(u) {imagePreloader.preload(u)});
});
