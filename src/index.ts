export interface RoseBotExport {
    /**
     * The ID of the bot that exported this data
     */
    bot_id: number;
    /**
     * The data that was exported
     */
    data: {
        /**
         * Make it easy to promote and demote users with the admin module!
         */
        admin: {
            /**
             * Send error messages when normal users use admin commands.
             */
            admin_error_disable: boolean;
            /**
             * Allow anonymous admins to use all commands without checking their permissions. Not recommended.
             */
            anon_admin: boolean;
            legacy_admin: boolean;
        };
        /**
         * You know how sometimes, people join, send 100 messages, and ruin your chat? With antiflood, that happens no more!
         *
         * Antiflood allows you to take action on users that send more than x messages in a row. Actions are: ban/mute/kick/tban/tmute
         * 
         * https://missrose.org/docs/anti-spam/antiflood/#stopping-messages-over-a-period-of-time
         */
        antiflood: {
            /**
             * Choose which action to take on a user who has been flooding. Possible actions: ban/mute/kick/tban/tmute
             */
            action: 'ban' | 'mute' | 'kick' | 'tban' | 'tmute';
            action_duration: number;
            /**
             * Whether to delete the messages that triggered the flood.
             */
            flood_clear: boolean;
            /**
             * Set the number of consecutive messages to trigger antiflood. 
             */
            flood_limit: number;
            /**
             * Set the time required for timed antiflood to take action on a user. 
             */
            flood_timer: number;
            /**
             * Set the number of messages required for timed antiflood to take action on a user. 
             */
            flood_timer_limit: number;
        };
        /**
         * Want to stop people asking stupid questions? or ban anyone saying censored words? Blocklists is the module for you!
         *
         * From blocking rude words, filenames/extensions, to specific emoji, everything is possible.
         * 
         * https://missrose.org/docs/anti-spam/blocklists/
         */
        blocklists: {
            /**
             * Set the desired action to take when someone says a blocklisted item. Available: nothing/ban/mute/kick/warn/tban/tmute.
             */
            action: 'nothing' | 'ban' | 'mute' | 'kick' | 'warn' | 'tban' | 'tmute';
            action_duration: number;
            /**
             * Set the default blocklist reason to warn people with.
             */
            default_reason: string;
            filters: {
                name: string;
                reason: string;
            }[] | null;
            /**
             * Set whether blocklisted messages should be deleted.
             */
            should_delete: boolean;
        };
        /**
         * Keep your chat clean by cleaning up commands from both users and admins!
         *
         * This module allows you to delete certain command categories, for both users and admins, to ensure your chat is kept clean.
         * For example, you might choose to delete all user commands; this will stop users from accidentally pressing on blue-text commands in other people's messages.
         */
        clean_command: {
            command_types: {
                /**
                 * Delete any admin-only commands sent to the group (eg /ban, /mute, or any settings changes).
                 */
                admin: {
                    clean: boolean;
                };
                /**
                 * Delete ALL commands sent to the group.
                 */
                all: {
                    clean: boolean;
                };
                /**
                 * Delete any commands which aren't recognised as being valid Rose commands.
                 */
                other: {
                    clean: boolean;
                };
                /**
                 * Delete any user commands sent to the group (eg /id, /info, or /get). These commands will also be cleaned when admins use them.
                 */
                user: {
                    clean: boolean;
                };
            };
        };
        /**
         * Clean up automated telegram service messages!
         */
        clean_service: {
            service_types: {
                /**
                 * All service messages.
                 */
                all: {
                    clean: boolean;
                };
                /**
                 * When a new user joins, or is added. eg: 'X joined the chat'
                 */
                join: {
                    clean: boolean;
                };
                /**
                 * When a user leaves, or is removed. eg: 'X left the chat'
                 */
                leave: {
                    clean: boolean;
                };
                /**
                 * Miscellaneous items; such as chat boosts, successful telegram payments, proximity alerts, webapp messages, or message auto deletion changes.
                 */
                other: {
                    clean: boolean;
                };
                /**
                 * When chat photos or chat backgrounds are changed.
                 */
                photo: {
                    clean: boolean;
                };
                /**
                 * When a new message is pinned. eg: 'X pinned a message'
                 */
                pin: {
                    clean: boolean;
                };
                /**
                 * When chat or topic titles are changed.
                 */
                title: {
                    clean: boolean;
                };
                /**
                 * When a video chat action occurs - eg starting, ending, scheduling, or adding members to the call.
                 */
                videochat: {
                    clean: boolean;
                };
            };
        };
        /**
         * Not everyone wants every feature that Rose offers. Some commands are best left unused; to avoid spam and abuse.
         * 
         * This allows you to disable some commonly used commands, so no one can use them. It'll also allow you to autodelete them, stopping people from bluetexting.
         */
        disabled: {
            /**
             * Stop admins from using disabled commands too.
             */
            disable_admin: boolean;
            disabled: {
                name: string;
            }[] | null;
            /**
             * Delete disabled commands when used by non-admins.
             */
            should_delete: boolean;
        };
        /**
         * With federations, you can make a ban in one chat overlap to all your other chats.
         * You can even appoint federation admins, so that your trustworthiest admins can ban across all the chats that you want to protect.
         */
        federations: {
            fed_id: string;
            quiet_ban: boolean;
        };
        /**
         * Make your chat more lively with filters; The bot will reply to certain words!
         * 
         * Filters are case insensitive; every time someone says your trigger words, Rose will reply something else! can be used to create your own commands, if desired.
         */
        filters: {
            filters: {
                data_id: string;
                name: string;
                text: string;
                type: number;
            }[] | null;
        };
        /**
         * Give your members a warm welcome with the greetings module! Or a sad goodbye... Depends!
         */
        greetings: {
            captcha_rules: boolean;
            goodbye: {
                data_id: string;
                text: string;
                type: number;
            };
            kick_after: number;
            mute_for: number;
            mute_mode: string;
            mute_text: string;
            should_clean: boolean;
            should_goodbye: boolean;
            should_kick: boolean;
            should_mute: boolean;
            should_welcome: boolean;
            welcome: {
                data_id: string;
                text: string;
                type: number;
            };
        };
        /**
         * The locks module allows you to lock away some common items in the Telegram world; the bot will automatically delete them!
         */
        locks: {
            allowlisted_url: {
                group_id: number;
                group_username: string;
                url: string;
            }[] | null;
            lock_warns: boolean;
            locks: {
                album: {
                    locked: boolean;
                    reason: string;
                };
                all: {
                    locked: boolean;
                    reason: string;
                };
                anonchannel: {
                    locked: boolean;
                    reason: string;
                };
                audio: {
                    locked: boolean;
                    reason: string;
                };
                bot: {
                    locked: boolean;
                    reason: string;
                };
                botlink: {
                    locked: boolean;
                    reason: string;
                };
                button: {
                    locked: boolean;
                    reason: string;
                };
                cjk: {
                    locked: boolean;
                    reason: string;
                };
                command: {
                    locked: boolean;
                    reason: string;
                };
                comment: {
                    locked: boolean;
                    reason: string;
                };
                contact: {
                    locked: boolean;
                    reason: string;
                };
                cyrillic: {
                    locked: boolean;
                    reason: string;
                };
                document: {
                    locked: boolean;
                    reason: string;
                };
                email: {
                    locked: boolean;
                    reason: string;
                };
                emoji: {
                    locked: boolean;
                    reason: string;
                };
                emojicustom: {
                    locked: boolean;
                    reason: string;
                };
                emojigame: {
                    locked: boolean;
                    reason: string;
                };
                emojionly: {
                    locked: boolean;
                    reason: string;
                };
                externalreply: {
                    locked: boolean;
                    reason: string;
                };
                forward: {
                    locked: boolean;
                    reason: string;
                };
                forwardbot: {
                    locked: boolean;
                    reason: string;
                };
                forwardchannel: {
                    locked: boolean;
                    reason: string;
                };
                forwardstory: {
                    locked: boolean;
                    reason: string;
                };
                forwarduser: {
                    locked: boolean;
                    reason: string;
                };
                game: {
                    locked: boolean;
                    reason: string;
                };
                gif: {
                    locked: boolean;
                    reason: string;
                };
                inline: {
                    locked: boolean;
                    reason: string;
                };
                invitelink: {
                    locked: boolean;
                    reason: string;
                };
                location: {
                    locked: boolean;
                    reason: string;
                };
                phone: {
                    locked: boolean;
                    reason: string;
                };
                photo: {
                    locked: boolean;
                    reason: string;
                };
                poll: {
                    locked: boolean;
                    reason: string;
                };
                rtl: {
                    locked: boolean;
                    reason: string;
                };
                spoiler: {
                    locked: boolean;
                    reason: string;
                };
                sticker: {
                    locked: boolean;
                    reason: string;
                };
                stickeranimated: {
                    locked: boolean;
                    reason: string;
                };
                stickerpremium: {
                    locked: boolean;
                    reason: string;
                };
                text: {
                    locked: boolean;
                    reason: string;
                };
                url: {
                    locked: boolean;
                    reason: string;
                };
                video: {
                    locked: boolean;
                    reason: string;
                };
                videonote: {
                    locked: boolean;
                    reason: string;
                };
                voice: {
                    locked: boolean;
                    reason: string;
                };
            };
        };
        /**
         * Save data for future users with notes!
         * 
         * Notes are great to save random tidbits of information; a phone number, a nice gif, a funny picture - anything!
         */
        notes: {
            notes: {
                data_id: string;
                name: string;
                text: string;
                type: number;
            }[] | null;
            /** 
             * Whether or not to send notes in PM. Will send a message with a button which users can click to get the note in PM.
             */
            private_notes: boolean;
        };
        pins: {
            /**
             * Don't let telegram auto-pin linked channels.
             */
            antichannelpin: boolean;
            /**
             * Delete messages sent by the linked channel.
             */
            cleanlinked: boolean;
        };
        raids: {
            raid_mode_action_duration: number;
            raid_mode_auto_limit: number;
            raid_mode_duration: number;
        };
        /**
         * We're all busy people who don't have time to monitor our groups 24/7. But how do you react if someone in your group is spamming?
         * 
         * Presenting reports; if someone in your group thinks someone needs reporting, they now have an easy way to call all admins.
         */
        reports: {
            /**
             * Enable/disable user reports.
             */
            disable_reports: boolean;
        };
        /**
         * Every chat works with different rules; this module will help make those rules clearer!
         */
        rules: {
            /**
             * Set the rules button name when using {rules}.
             */
            button_name: string;
            content: string;
            /**
             * Enable/disable whether the rules should be sent in private.
             */
            send_to_chat: boolean;
        };
        /**
         * Not every group speaks fluent english; some groups would rather have Rose respond in their own language.
         * 
         * This is where translations come in; you can change the language of the bot's replies to be in the language of your choice!
         */
        translations: {
            lang: string;
        };
        /**
         * Keep your members in check with warnings; stop them getting out of control!
         * 
         * If you're looking for automated warnings, go read about the blocklist module.
         */
        warns: {
            /**
             * Set the chat's warn mode.
             */
            action: 'ban' | 'mute' | 'kick' | 'tban' | 'tmute';
            action_duration: number;
            /**
             * Set how long warnings should last. Example time values: 4m = 4 minutes, 3h = 3 hours, 6d = 6 days, 5w = 5 weeks.
             */
            warn_for: number;
            /**
             * Set the number of warnings before users are punished.
             */
            warn_limit: number;
        };
    };
    /**
     * The version of the data that was exported. As is known, always 2.
     */
    version: number;
}
