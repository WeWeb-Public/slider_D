'use strict';
/*jshint loopfunc: true */

angular.module('weweb')

    .run(["wwMigrateSection", function PostFactory(wwMigrateSection) {

        wwMigrateSection.register("landing_A", 2, function (data) {

            var oldVersion = data.wwVersion || 1;

            if (oldVersion != 1) {
                return data;
            }

            data.columns = [
                [
                    data.logoBig,
                    data.title,
                    data.subtitle,
                    data.subtitle2,
                    data.button
                ]
            ]

            return data;
        });

    }])