require([
  // 'node_modules/'
  // '_nytg/2016-07-08-preview-firehose-hp/assets',
  // '_nytg/2016-07-08-preview-firehose-hp/big-assets',
  // 'jquery/nyt',
  // 'underscore/1.6',
  // 'foundation/views/page-manager',
  // 'nyt5/analytics',
  // 'lib/text-balancer' // uncomment to balance headlines
  'd3/3',
  // 'queue/1'
  // 'resizerScript'     // uncomment this line to include resizerScript
  // 'templates'         // uncomment to use src/templates
], function(d3) {

  var fragment = "http://localhost.nytimes.com:3000/projects/1/embed/teaser";

  d3.text(fragment, function(err, data) {
    console.log(err, data);
  })

  // begin code for your graphic here:

  // console.warn('foo', d3.version);
  //
  //






  // uncomment to balance headline and leadin
  // balanceText('.interactive-headline, .interactive-leadin');

  // templates
  // var html = Templates.jst.example_template({ text: "yo" });

  // custom sharetools
  // <div class="sharetools g-sharetools" data-url="http://www.nytimes.com" data-title="Custom Title"></div>
  // require(['interactive/main'], function() {
  //   require(['shared/sharetools/views/share-tools-container'], function(ShareTools) {
  //     $(".g-sharetools").each(function() {
  //       new ShareTools({ el: $(this) });
  //     });
  //   });
  // });

}); // end require
;
define("script", function(){});

