Ext.define('ZMessage.view.Benefits', {
    extend: 'Ext.Panel',
    xtype: 'benefitspanel',

    config: {
        title: 'Benefits',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Zscaler Benefits',

                items: [
                    {
                        xtype: 'button',
                        text:    'Back',
                        align:   'left',
                        handler: function() {
                            Ext.getCmp('mainNav').setActiveItem(0);
                        }
                    }
                ],
            },
            {
                html: [
                    '<p>Type paragraph here.</p>',
                    '<ul>' +
                        '<li>Step #1</li>' +
                        '<li>Step #2</li></ul>',
                    '<h2>Zscaler</h2>',
                    '<img src="http://www.zscaler.com/images/znew-logo.png" />'
                ].join("")
            }
        ]
    }
})