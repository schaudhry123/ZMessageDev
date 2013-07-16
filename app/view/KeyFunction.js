Ext.define('ZMessage.view.KeyFunction', {
    extend: 'Ext.Panel',
    xtype: 'keyfuncpanel',

    config: {
        title: 'Key Function',
        cls: 'info',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Key Function',
                items: [
                {
                    text:    'ping',
                    align:   'right',
                    action:  'pingHomeBadge'
                },
                {
                    text:    'Back',
                    align:   'left',
                    handler: function() {
                        Ext.getCmp('mainNav').setActiveItem(0);
                    }
                }
            ]
            },
            {
                html: [
                    '<p>Type paragraph here.</p>',
                    '<ul>' +
                        '<li>Step #1</li>' +
                        '<li>Step #2</li></ul>',
                    '<h2>Zscaler</h2>',
                    '<img src="http://www.zscaler.com/images/znew-logo.png" />',
                    '<img src="http://img685.imageshack.us/img685/9851/appdrawer.png" />'
                ].join("")
            }
        ]
    }
})