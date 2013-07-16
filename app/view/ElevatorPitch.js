Ext.define('ZMessage.view.ElevatorPitch', {
    extend: 'Ext.Panel',
    xtype: 'elevpitchpanel',
    id: 'elevatorpitch',

    config: {
        title: 'Elevator Pitch',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Elevator Pitch',
            
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
                    '<img src="http://www.zscaler.com/images/znew-logo.png" />',
                    '<img src="http://img685.imageshack.us/img685/9851/appdrawer.png" />'
                ].join("")
            }
        ]
    }
})