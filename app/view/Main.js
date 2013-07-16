Ext.Loader.setPath({
    'Ext': 'touch/src'
});

Ext.define('ZMessage.view.Main', {
    requires: [
        'Ext.TitleBar',
        'ZMessage.view.Home',
        'ZMessage.view.ElevatorPitch',
        'ZMessage.view.KeyFunction',
        'ZMessage.view.Benefits',
        'ZMessage.view.Page4'
    ],

    extend: 'Ext.TabPanel',

    config: {
        id: 'mainNav',

        defaults: {
            styleHtmlContent: true
        },

        items: [
            {   //Home
                xtype: 'homepanel'
            },
            {   //Elevator Pitch
                xtype: 'elevpitchpanel'
            },
            {   //Key Functionality
                xtype: 'keyfuncpanel'
            },
            {   //Benefits
                xtype: 'benefitspanel'
            },
            {
                xtype: 'page4panel'
            }
        ]
    }
});