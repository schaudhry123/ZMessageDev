Ext.define('ZMessage.view.Page4', {
    extend: 'Ext.Panel',
    xtype: 'page4panel',

    config: {
        title: 'Page 4',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Page 4',

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