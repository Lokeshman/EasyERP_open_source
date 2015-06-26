﻿define([
    'text!templates/salesInvoice/wTrack/wTrackRows.html'
], function (wTrackRowsHeader, wTrackRows) {
    var ProductItemTemplate = Backbone.View.extend({
        el: '#linwoiceGenerateTable',
        template: _.template(wTrackRowsHeader),

        events: {
           
        },

        initialize: function (options) {
            this.render(options);
        },

        render: function (options) {
            var wTracks = options.wTracks;
            var thisEl = this.$el;

            thisEl.html(this.template(options));

            return this;
        }
    });

    return ProductItemTemplate;
});