'use strict';
angular.module('weweb')
    .controller('slider_D', ['$scope', 'wwWebsiteData', '$timeout', '$http', 'wwMigrateSection', 'wwUtils', function ($scope, wwWebsiteData, $timeout, $http, wwMigrateSection, wwUtils) {

        $scope.init = function (section) {

            //$scope.data = wwMigrateSection.migrate("landing_A", 2, wwWebsiteData.getSection(section.id).data)
            $scope.data = wwWebsiteData.getSection(section.id).data;

            //$timeout(function() { 
            $scope.$emit("ctrl-ready", "wwbuilder_C");
            //}, 1);
        };

        var defaultRow = {
            config: {
                count: 3,
                xs: null,
                sm: [{
                    offset: 0,
                    width: 33.2,
                    borders: [{
                            width: 0,
                            color: "#000000",
                            style: "solid"
                        },
                        {
                            width: 0,
                            color: "#000000",
                            style: "solid"
                        },
                        {
                            width: 0,
                            color: "#000000",
                            style: "solid"
                        },
                        {
                            width: 0,
                            color: "#000000",
                            style: "solid"
                        },
                    ]
                }, {
                    offset: 0,
                    width: 33.2,
                    borders: [{
                            width: 0,
                            color: "#000000",
                            style: "solid"
                        },
                        {
                            width: 0,
                            color: "#000000",
                            style: "solid"
                        },
                        {
                            width: 0,
                            color: "#000000",
                            style: "solid"
                        },
                        {
                            width: 0,
                            color: "#000000",
                            style: "solid"
                        },
                    ]
                }, {
                    offset: 0,
                    width: 33.2,
                    borders: [{
                            width: 0,
                            color: "#000000",
                            style: "solid"
                        },
                        {
                            width: 0,
                            color: "#000000",
                            style: "solid"
                        },
                        {
                            width: 0,
                            color: "#000000",
                            style: "solid"
                        },
                        {
                            width: 0,
                            color: "#000000",
                            style: "solid"
                        },
                    ]
                }],
                md: null,
                lg: null
            },
            data: [{
                    background: null,
                    wwObjects: []
                },
                {
                    background: null,
                    wwObjects: []
                },
                {
                    background: null,
                    wwObjects: []
                }
            ]
        };


        $scope.addRow = function () {
            if (!$scope.data.rows) {
                $scope.data.rows = [];
            }

            var newRow = JSON.parse(JSON.stringify(defaultRow));
            newRow.uniqueId = wwUtils.getUniqueId();

            $scope.data.rows.push(newRow);
        }

        $scope.removeRow = function (row) {
            var index = $scope.data.rows.indexOf(row);
            $scope.data.rows.splice(index, 1);
        }

    }]);