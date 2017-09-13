define([
    'jquery',
    'underscore',
    'addEvent',
    'Magento_Checkout/js/model/step-navigator',
    'imagerotator'
],function($, _, addEvent, stepNavigator, imagerotator) {
    'use strict';

    if  (typeof $.ajax !== 'undefined') {
        console.log('jQuery loaded');
    }

    if (typeof _.bind !== 'undefined') {
        console.log('Underscore loaded');
    }

    if (typeof stepNavigator.registerStep !== 'undefined') {
        console.log('StepNavigator loaded');
    }

    if (typeof addEvent !== 'undefined') {
        console.log('Local scope AddEvent loaded');
    }

    if (typeof window.addtocalendar.load !== 'undefined') {
        console.log('Window add to calendar loaded');
    }

    _imageRotator.licenseFileURL = "https://stg3.munchkinuat.com/static/frontend/Grassfed/default/en_US/Munchkin_Webrotate360/license/license.lic";
    _imageRotator.settings.configFileURL  = "https://stg3.munchkinuat.com/static/frontend/Grassfed/default/en_US/Grassfed_Truck/360/truck_360.xml";
    _imageRotator.settings.graphicsPath  = "https://stg3.munchkinuat.com/static/frontend/Grassfed/default/en_US/Munchkin_Webrotate360/images/viewer-empty-theme";
    _imageRotator.runImageRotator('contentarea');
});

