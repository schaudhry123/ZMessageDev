Ext.define('ZMessage.view.Home', {
    extend: 'Ext.Panel',
    requires: [ 
        'Ext.TabPanel',
        'Ext.ux.touch.SwipeTabs',
    ],

    xtype: 'homepanel',

    config: {
        title: 'Home',
        cls: 'home',

        defaults: {
            xtype: 'panel'
        },

        items: [
            {   //TitleBar
                docked: 'top',
                xtype: 'titlebar',
                title: 'Home'
            },

            {   //Zscaler Logo
                html: '<a href="http://www.zscaler.com"><img src="resources/images/Z-Logo.png" /></a>'
            },

            {
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },

                items: [
                    {
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'button',
                                cls: 'btnGrid',
                                html: '<img src="resources/icons/elevatoricon.png" />',
                                text: 'Page 1',
                                handler: function() {
                                    Ext.getCmp('mainNav').setActiveItem(1);
                                }
                            },
                            {
                                xtype: 'button',
                                cls: 'btnGrid',
                                html: '<img src="resources/icons/functionicon.png" />',
                                text: 'Key Function',
                                handler: function() {
                                    Ext.getCmp('mainNav').setActiveItem(2);
                                }
                            },
                            {
                                xtype: 'button',
                                cls: 'btnGrid',
                                html: '<img src="resources/icons/benefitsicon.png" />',
                                text: 'Page 3',
                                handler: function() {
                                    Ext.getCmp('mainNav').setActiveItem(3);
                                }
                            }
                        ]
                    },
                    {
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'button',
                                cls: 'btnGrid',
                                text: 'Page 4',
                                handler: function() {
                                    Ext.getCmp('mainNav').setActiveItem(4);

                                }
                            },
                            {
                                xtype: 'button',
                                cls: 'btnGrid',
                                text: 'Page 5',
                                handler: function() {
                                    Ext.getCmp('mainNav').setActiveItem(2);
                                }
                            },
                            {
                                xtype: 'button',
                                cls: 'btnGrid',
                                text: 'Page 6',
                                handler: function() {
                                    Ext.getCmp('mainNav').setActiveItem(3);
                                }
                            }
                        ]
                    },
                    {
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'
                        },
                        items: [
                            {
                                xtype: 'button',
                                cls: 'btnGrid',
                                text: 'Page 7',
                                handler: function() {
                                    Ext.getCmp('mainNav').setActiveItem(1);
                                }
                            },
                            {
                                xtype: 'button',
                                cls: 'btnGrid',
                                text: 'Page 8',
                                handler: function() {
                                    Ext.getCmp('mainNav').setActiveItem(2);
                                }
                            },
                            {
                                xtype: 'button',
                                cls: 'btnGrid',
                                text: 'Page 9',
                                handler: function() {
                                    Ext.getCmp('mainNav').setActiveItem(3);
                                }
                            }
                        ]
                    },
                ]
            }
            /*{
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'
                },

                items: [
                    {
                        xtype: 'button',
                        cls: 'btnGrid',
                        text: 'Elevator Pitch',
                        handler: function() {
                            Ext.create('ZMessage.view.Main').setActiveItem(1);
                        }
                    },

                    {
                        xtype: 'button',
                        cls: 'btnGrid',
                        text: 'Key Function',
                        handler: function() {
                            Ext.create('ZMessage.view.Main').setActiveItem(2);
                        }
                    },

                    {
                        xtype: 'button',
                        cls: 'btnGrid',
                        text: 'Benefits',
                        handler: function() {
                            Ext.create('ZMessage.view.Main').setActiveItem(3);
                        }
                    }
                ]
            },

            {
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'
                },

                items: [
                    {
                        xtype: 'button',
                        cls: 'btnGrid',
                        text: 'Benefits',
                        handler: function() {
                            Ext.create('ZMessage.view.Main').setActiveItem(3);
                        }
                    },

                    {
                        xtype: 'button',
                        cls: 'btnGrid',
                        text: 'Benefits',
                        handler: function() {
                            Ext.create('ZMessage.view.Main').setActiveItem(3);
                        }
                    },

                    {
                        xtype: 'button',
                        cls: 'btnGrid',
                        text: 'Benefits',
                        handler: function() {
                            Ext.create('ZMessage.view.Main').setActiveItem(3);
                        }
                    }
                ]
            },

            {
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'
                },

                items: [
                    {
                        xtype: 'button',
                        cls: 'btnGrid',
                        text: 'Benefits',
                        handler: function() {
                            Ext.create('ZMessage.view.Main').setActiveItem(3);
                        }
                    },

                    {
                        xtype: 'button',
                        cls: 'btnGrid',
                        text: 'Benefits',
                        handler: function() {
                            Ext.create('ZMessage.view.Main').setActiveItem(3);
                        }
                    },

                    {
                        xtype: 'button',
                        cls: 'btnGrid',
                        text: 'Benefits',
                        handler: function() {
                            Ext.create('ZMessage.view.Main').setActiveItem(3);
                        }
                    }
                ]
            }*/
        ]
    }
})