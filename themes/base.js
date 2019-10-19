const colors = require("../src/colors")

module.exports = {
    // Theme Color reference.
    // https://code.visualstudio.com/docs/getstarted/theme-color-reference
    "$schema": "vscode://schemas/color-theme",
    "name": "Charmed Dark",
    "type": "dark",
    "colors": {
        // Activity Bar.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_activity-bar

        "activityBar": {
            "background": colors.EbonyClay
        },
        // "activityBar.background": colors.EbonyClay,
        "activityBar.border": "#292952",
        "activityBar.dropBackground": "#222145",
        "activityBar.foreground": colors.Logan,
        "activityBar.inactiveForeground": "#A599E9",
        "activityBarBadge.background": colors.EbonyClay,
        "activityBarBadge.foreground": colors.Logan,

        // Sidebar.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_side-bar

        "sideBar.background": colors.EbonyClay,
        "sideBar.border": "#25254B",
        "sideBar.foreground": colors.Logan,
        "sideBarSectionHeader.background": colors.EbonyClay,
        "sideBarSectionHeader.foreground": colors.Logan,
        "sideBarTitle.foreground": colors.Logan,
        "sideBarSectionHeader.border": "#1E1E3F",

        // Badge.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_badge
        "badge.background": "#FAD000",
        "badge.foreground": "#1E1E3F",

        // Button.
        // https: //code.visualstudio.com/docs/getstarted/theme-color-reference#_button-control
        "button.background": "#FAD000",
        "button.foreground": "#222244",
        "button.hoverBackground": "#B362FF",

        // Contrast.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_contrast-colors
        "contrastActiveBorder": "#FFFFFF00",
        "contrastBorder": "#FFFFFF00",

        // Base Colors.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_base-colors
        // Foreground color for description text providing additional information, for example for a label.
        "descriptionForeground": "#A599E9", // @TODO AAA
        "selection.background": "#B362FF",

        // Dropdown.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_dropdown-control
        "dropdown.background": "#1E1E3F",
        "dropdown.border": "#1E1E3F",
        "dropdown.foreground": "#FFFFFF",

        // ——— Editor ———
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-colors
        "editor.background": colors.EbonyClay, // Editor background color.
        "editor.foreground": colors.Logan, // Editor default foreground color.
        "editorLineNumber.foreground": colors.Logan, // Color of editor line numbers.
        "editorCursor.foreground": "#FAD000", //  Color of the editor cursor.

        //  The selection color battle starts here.
        "editor.selectionBackground": "#B362FF88", // Color of the editor selection.
        "editor.inactiveSelectionBackground": "#7580B8C0", // Color of the selection in an inactive editor. The color must not be opaque to not hide underlying decorations.
        "editor.selectionHighlightBackground": "#7E46DF46", // Color for regions with the same content as the selection. The color must not be opaque to not hide underlying decorations.
        "editor.wordHighlightBackground": "#FFFFFF0D", // Same words other places.
        "editor.wordHighlightStrongBackground": "#FFFFFF0D", // Cursor inside current variable.
        "editor.findMatchBackground": "#ff7300ab", // #FF7200 Color of the current search match.
        "editor.findMatchHighlightBackground": "#FFFF0336", // #FF7200A0 #FFFF0336 #FF730056 Color of the other search matches.The color must not be opaque to not hide underlying decorations.
        "editor.findRangeHighlightBackground": "#FFFF0336", // #FF730056 No idea. Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque to not hide underlying decorations.
        "editor.hoverHighlightBackground": "#FF730056", // Highlight below the word for which a hover is shown. The color must not be opaque to not hide underlying decorations
        "editor.lineHighlightBackground": "#1F1F41", // Current line of code. Background color for the highlight of line at the cursor position.
        "editor.lineHighlightBorder": "#1F1F41",
        "editor.rangeHighlightBackground": "#1F1F41",
        "editorLink.activeForeground": "#A599E9",
        "editorIndentGuide.background": "#A599E90F",
        "editorIndentGuide.activeBackground": "#A599E942",
        "editorRuler.foreground": "#A599E91C", // Editor Ruler.
        "editorOverviewRuler.border": "#A599E91C",
        "editorCodeLens.foreground": "#A599E9",
        "editorBracketMatch.background": "#AD70FC46",
        "editorBracketMatch.border": "#AD70FC46",

        // Overview ruler is located beneath the scroll bar on the right edge of the editor and gives an overview of the decorations in the editor.
        "editorOverviewRuler.commonContentForeground": "#FFC60055",
        "editorOverviewRuler.currentContentForeground": "#EE3A4355",
        "editorOverviewRuler.incomingContentForeground": "#3AD90055",

        // Errors and warnings:
        // "editorError.border": "#EC3A37F5",
        "editorError.foreground": colors.Carnation,
        "editorWarning.border": colors.White,
        "editorWarning.foreground": colors.Supernova,

        // Gutter: The gutter contains the glyph margins and the line numbers:
        "editorGutter.background": colors.EbonyClay,
        "editorGutter.addedBackground": "#35AD68",
        "editorGutter.deletedBackground": "#EC3A37F5",
        "editorGutter.modifiedBackground": "#AD70FC46",

        // Diff Editor.
        // https: //code.visualstudio.com/docs/getstarted/theme-color-reference#_diff-editor-colors
        "diffEditor.insertedTextBackground": "#00FF000E",
        "diffEditor.insertedTextBorder": "#00FF009A",
        "diffEditor.removedTextBackground": "#FF000D1A",
        "diffEditor.removedTextBorder": "#FF000D81",

        // Editor Groups & Tabs.
        // "editorGroup.background": "#EC3A37F5", // Deprecated in v1.25
        "editorGroup.border": "#222244",
        "editorGroup.dropBackground": "#222244D0",

        // The editorGroupHeader.
        "editorGroupHeader.noTabsBackground": colors.EbonyClay,
        "editorGroupHeader.tabsBackground": colors.EbonyClay,
        "editorGroupHeader.tabsBorder": colors.Mako,

        // The tabs
        "tab.activeBackground": colors.EbonyClay,
        "tab.activeForeground": colors.Logan,
        "tab.border": colors.Mako,
        "tab.activeBorder": colors.Logan,
        "tab.inactiveBackground": colors.Shark,
        "tab.inactiveForeground": colors.Logan,
        "tab.unfocusedActiveForeground": "#A599E9",
        "tab.unfocusedInactiveForeground": "#A599E9",
        // TODO: Proposed but need testing.
        // "tab.activeModifiedBorder":"#A599E9",
        // "tab.inactiveModifiedBorder":"#A599E966",

        // The Editor widget is shown in front of the editor content. Examples are the Find/Replace dialog, the suggestion widget, and the editor hover.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors
        "editorWidget.background": "#222244",
        "editorWidget.border": "#1F1F41",
        "editorHoverWidget.background": "#161633",
        "editorHoverWidget.border": "#161633",
        "editorSuggestWidget.background": "#1F1F41",
        "editorSuggestWidget.border": "#1F1F41",
        "editorSuggestWidget.foreground": "#A599E9",
        "editorSuggestWidget.highlightForeground": "#FAD000",
        "editorSuggestWidget.selectedBackground": "#2D2B55",

        // Debug.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_debug
        "debugToolBar.background": "#1E1E3F",
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors
        "debugExceptionWidget.background": "#1E1E3F",
        "debugExceptionWidget.border": "#A599E9",

        // The editor marker view shows when navigating to errors and warnings in the editor (Go to Next Error or Warning command).
        "editorMarkerNavigation.background": "#3B536433",
        "editorMarkerNavigationError.background": "#EC3A37F5",
        "editorMarkerNavigationWarning.background": "#FAD000",

        // To see the editor white spaces, enable Toggle Render Whitespace.
        "editorWhitespace.foreground": "#FFFFFF1A",
        "errorForeground": "#EC3A37F5",

        // Extensions.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_extensions
        "extensionButton.prominentBackground": "#5D37F0",
        "extensionButton.prominentForeground": "#FFFFFF",
        "extensionButton.prominentHoverBackground": "#FF9D00",
        "focusBorder": "#1E1E3F",
        "foreground": colors.Logan,

        // Input Control.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_input-control
        "input.background": "#2D2B55",
        "input.border": "#1E1E3F",
        "input.foreground": "#FAD000",
        "input.placeholderForeground": "#A599E9",
        "inputOption.activeBorder": "#1E1E3F",
        "inputValidation.errorBackground": "#2D2B55",
        "inputValidation.errorBorder": "#FAD000",
        "inputValidation.infoBackground": "#2D2B55",
        "inputValidation.infoBorder": "#2D2B55",
        "inputValidation.warningBackground": "#2D2B55",
        "inputValidation.warningBorder": "#FAD000",
        "inputOption.activeBackground": "#5D37F0",

        // Lists and Trees.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_lists-and-trees
        "list.dropBackground": "#2D2B55",
        "list.activeSelectionBackground": "#2D2B55",
        "list.activeSelectionForeground": "#FFFFFF",
        "list.focusBackground": "#2D2B55",
        "list.focusForeground": "#FFFFFF",
        "list.highlightForeground": "#FAD000",
        "list.hoverBackground": "#2D2B55",
        "list.hoverForeground": "#CEC5FF",
        "list.inactiveSelectionBackground": "#2D2B55",
        "list.inactiveSelectionForeground": "#AAA",

        // Merge Conflicts.
        "merge.border": "#FFFFFF00",
        "merge.commonContentBackground": "#A599E981",
        "merge.commonHeaderBackground": "#A599E981",
        "merge.currentContentBackground": "#3ad90093",
        "merge.currentHeaderBackground": "#3ad90093",
        "merge.incomingContentBackground": "#ff730086",
        "merge.incomingHeaderBackground": "#ff730086",

        // Notification Colors.
        "notificationCenter.border": "#1E1E3F", // Notification Center border color.
        "notificationCenterHeader.foreground": "#FFFFFF", // Notification Center header foreground color.
        "notificationCenterHeader.background": "#6943FF", // Notification Center header background color.
        "notificationToast.border": "#1E1E3F", // Notification toast border color.
        "notifications.foreground": "#CEC5FF", // Notification foreground color.
        "notifications.background": "#1E1E3F", // Notification background color.
        "notifications.border": "#2D2B55", // Notification border color separating from other notifications in the Notification Center.
        "notificationLink.foreground": "#FFFFFF", // Notification links foreground color.

        // Panel.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_panel-colors
        "panel.background": "#1E1E3F",
        "panel.border": "#FAD000",
        "panelTitle.activeBorder": "#FAD000",
        "panelTitle.activeForeground": "#FAD000",
        "panelTitle.inactiveForeground": "#A599E9",

        // Peek View Colors.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_peek-view-colors
        "peekView.border": "#FAD000",
        "peekViewEditor.background": "#1E1E3F",
        "peekViewEditor.matchHighlightBackground": "#19354900",
        "peekViewEditorGutter.background": "#191935",
        "peekViewResult.background": "#1E1E3F",
        "peekViewResult.fileForeground": "#AAA",
        "peekViewResult.lineForeground": "#FFFFFF",
        "peekViewResult.matchHighlightBackground": "#2D2B55",
        "peekViewResult.selectionBackground": "#2D2B55",
        "peekViewResult.selectionForeground": "#FFFFFF",
        "peekViewTitle.background": "#1F1F41",
        "peekViewTitleDescription.foreground": "#AAA",
        "peekViewTitleLabel.foreground": "#FAD000",

        // Quick Picker.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_quick-picker
        "pickerGroup.border": "#1E1E3F",
        "pickerGroup.foreground": "#A599E9",

        // Progress Bar.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_progress-bar
        "progressBar.background": "#FAD000",

        // Scroll Bar Control.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_scroll-bar-control
        "scrollbar.shadow": "#a599e981",
        "scrollbarSlider.background": "#a599e981",
        "scrollbarSlider.hoverBackground": "#4D21FC",
        "scrollbarSlider.activeBackground": "#FAD000",

        // Status Bar Colors.
        // The Status Bar is shown in the bottom of the workbench.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_status-bar-colors
        "statusBar.border": "#1E1E3F",
        "statusBar.background": "#1E1E3F",
        "statusBar.foreground": "#A599E9",
        "statusBar.debuggingBackground": "#FAD000",
        "statusBar.debuggingForeground": "#1E1E3F",
        "statusBar.noFolderBackground": "#1E1E3F",
        "statusBar.noFolderForeground": "#A599E9",
        "statusBarItem.activeBackground": "#4D21FC",
        "statusBarItem.hoverBackground": "#4D21FC",
        "statusBarItem.prominentBackground": "#1E1E3F",
        "statusBarItem.prominentHoverBackground": "#2D2B55",

        // Integrated Terminal Colors.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_integrated-terminal-colors
        "terminal.ansiBlack": "#000000",
        "terminal.ansiRed": "#EC3A37F5",
        "terminal.ansiGreen": "#3AD900",
        "terminal.ansiYellow": "#FAD000",
        "terminal.ansiBlue": "#6943FF",
        "terminal.ansiMagenta": "#FF2C70",
        "terminal.ansiCyan": "#80FCFF",
        "terminal.ansiWhite": "#FFFFFF",
        "terminal.ansiBrightBlack": "#5C5C61",
        "terminal.ansiBrightRed": "#EC3A37F5",
        "terminal.ansiBrightGreen": "#3AD900",
        "terminal.ansiBrightYellow": "#FAD000",
        "terminal.ansiBrightBlue": "#6943FF",
        "terminal.ansiBrightMagenta": "#FB94FF",
        "terminal.ansiBrightCyan": "#80FCFF",
        "terminal.ansiBrightWhite": "#2D2B55",
        "terminal.background": "#1E1E3F",
        "terminal.foreground": "#FFFFFF",
        "terminalCursor.background": "#FAD000",
        "terminalCursor.foreground": "#FAD000",

        // Git VS Code theme Colors used for file labels and the SCM viewlet.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_git-colors
        "gitDecoration.modifiedResourceForeground": "#FAD000", // Color for modified git resources.
        "gitDecoration.deletedResourceForeground": "#EC3A37F5", // Color for deleted git resources.
        "gitDecoration.untrackedResourceForeground": "#3AD900", // Color for untracked git resources.
        "gitDecoration.ignoredResourceForeground": "#A599E981", // Color for ignored git resources.
        "gitDecoration.conflictingResourceForeground": "#FF7200", // Color for conflicting git resources.

        // Text Colors — Colors inside a text document, such as the welcome page.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_text-colors
        "textBlockQuote.background": "#1E1E3F",
        "textBlockQuote.border": "#6943FF",
        "textCodeBlock.background": "#1E1E3F",
        "textLink.activeForeground": "#B362FF",
        "textLink.foreground": "#B362FF",
        "textPreformat.foreground": "#FAD000",
        "textSeparator.foreground": "#1E1E3F",

        // Title bar.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_title-bar-colors
        "titleBar.activeBackground": "#1E1E3F",
        "titleBar.activeForeground": "#FFFFFF",
        "titleBar.inactiveBackground": "#1E1E3F",
        "titleBar.inactiveForeground": "#A599E9",
        "walkThrough.embeddedEditorBackground": "#1E1E3F",
        "welcomePage.buttonBackground": "#1E1E3F",
        "welcomePage.buttonHoverBackground": "#262650",
        "widget.shadow": "#00000026",

        // Breadcrumbs.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_breadcrumbs
        "breadcrumb.foreground": "#A599E9",
        "breadcrumb.focusForeground": "#FAD000",// Color of focused breadcrumb items.
        "breadcrumb.activeSelectionForeground": "#FFFFFF",// Color of selected breadcrumb items.
        "breadcrumbPicker.background": "#1E1E3F",// Background color of breadcrumb item picker.

        // New Settings Editor.
        // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_settings-editor-colors
        "settings.headerForeground": "#FFFFFF",
        "settings.dropdownBackground": "#1E1E3F",
        "settings.checkboxBackground": "#1E1E3F",
        "settings.textInputBackground": "#1E1E3F",
        "settings.numberInputBackground": "#1E1E3F",
        "settings.dropdownForeground": "#E5E4FB",
        "settings.checkboxForeground": "#E5E4FB",
        "settings.textInputForeground": "#E5E4FB",
        "settings.numberInputForeground": "#E5E4FB",
        "settings.dropdownBorder": "#1E1E3F",
        "settings.checkboxBorder": "#1E1E3F",
        "settings.textInputBorder": "#1E1E3F",
        "settings.numberInputBorder": "#1E1E3F",
        "settings.dropdownListBorder": "#2D2B55",
        "settings.modifiedItemIndicator": "#FAD000",

        // Customizable menu.
        "menu.separatorBackground": "#A599E9",

        // Tab stops.
        "editor.snippetTabstopHighlightBackground": "#6943ff62",
        "editor.snippetTabstopHighlightBorder": "#6943ff62",
        "editor.snippetFinalTabstopHighlightBackground": "#6943ff62",
        "editor.snippetFinalTabstopHighlightBorder": "#6943ff62",

        // Tree List Filter Colors.
        "listFilterWidget.background": "#2D2B55",
        "listFilterWidget.outline": "#2D2B55",
        "listFilterWidget.noMatchesOutline": "#EC3A37F5",

        // TODO: Colors to be added.
        // "inputValidation.infoForeground": "#FAD000", // Input validation foreground color for information severity.
        // "inputValidation.warningForeground": "#00000000", // Input validation foreground color for warning severity.
        // "inputValidation.errorForeground": "#EC3A37F5", // Input validation foreground color for error severity.
    },
    // Token Colors are heavily inspired by several themes
    // Including but not limited to Material Palenight, Cobalt
    // theme's syntax and several custom setup via Dev scope ext.
    "tokenColors": [
        {
            "name": "[COMMENTS] — The main comments color",
            "scope": ["comment", "punctuation.definition.comment"],
            "settings": {
                "foreground": colors.EastBay
            }
        },
        {
            "name": "[Entity] — The main Entity color",
            "scope": "entity",
            "settings": {
                "foreground": colors.Logan
            }
        },
        {
            "name": "[Constant] — The main constants color",
            "scope": "constant",
            "settings": {
                "foreground": colors.Carnation
            }
        },
        {
            "name": "[Keyword] — The main color for Keyword",
            "scope": ["keyword, storage.type.class.js"],
            "settings": {
                "foreground": colors.Lavender
            }
        },
        {
            "name": "[Meta] — The main color for Meta",
            "scope": "meta",
            "settings": {
                "foreground": colors.Logan
            }
        },
        {
            "name": "[invalid] — The main color for invalid",
            "scope": "invalid",
            "settings": {
                "foreground": colors.SunsetOrange
            }
        },
        {
            "name": "[Meta Brace] — The main color for Meta Brace",
            "scope": [
                "meta.brace",
                "punctuation.definition.parameters.begin.js", "punctuation.definition.parameters.end.js"
            ],
            "settings": {
                "foreground": colors.Logan
            }
        },
        {
            "name": "[Punctuation] — The main color for Punctuation",
            "scope": "punctuation",
            "settings": {
                "foreground": colors.Logan
            }
        },
        {
            "name": "[Punctuation] — Color for Punctuation Parameters",
            "scope": "punctuation.definition.parameters",
            "settings": {
                "foreground": "#FFEE80"
            }
        },
        {
            "name": "[Punctuation] — Color for Punctuation Template Expression",
            "scope": "punctuation.definition.template-expression",
            "settings": {
                "foreground": "#FFEE80"
            }
        },
        {
            "name": "[Storage] — The main color for Storage",
            "scope": "storage",
            "settings": {
                "foreground": colors.Heliotrope
            }
        },
        {
            "name": "[Storage] — The color for Storage Type Arrow Function",
            "scope": "storage.type.function.arrow",
            "settings": {
                "foreground": colors.Heliotrope
            }
        },
        {
            "name": "[String]",
            "scope": ["string", "punctuation.definition.string"],
            "settings": {
                "foreground": colors.Anakiwa
            }
        },
        {
            "name": "[String] Template Color",
            "scope": ["string.template", "punctuation.definition.string.template"],
            "settings": {
                "foreground": "#3AD900"
            }
        },
        {
            "name": "[Support]",
            "scope": "support",
            "settings": {
                "foreground": colors.Crusta
            }
        },
        {
            "name": "[Support] Function Colors",
            "scope": "support.function",
            "settings": {
                "foreground": "#FF9D00"
            }
        },
        {
            "name": "[Support] Variable Property DOM Colors",
            "scope": "support.variable.property.dom",
            "settings": {
                "foreground": "#9EFFFF"
            }
        },
        {
            "name": "[Variable]",
            "scope": "variable",
            "settings": {
                "foreground": "#E1EFFF"
            }
        },
        {
            "name": "[INI] - Color for Entity",
            "scope": ["source.ini entity", "meta.embedded.block.ini", "source.ini"],
            "settings": {
                "foreground": "#E1EFFF"
            }
        },
        {
            "name": "[INI] - Color for Keyword",
            "scope": ["source.ini keyword", "keyword.other.definition.ini"],
            "settings": {
                "foreground": "#FAD000"
            }
        },
        {
            "name": "[INI] - Color for Punctuation Definition",
            "scope": ["source.ini punctuation.definition"],
            "settings": {
                "foreground": "#FFEE80"
            }
        },
        {
            "name": "[INI] - Color for Punctuation Separator",
            "scope": ["source.ini punctuation.separator", "punctuation.separator.key-value.ini"],
            "settings": {
                "foreground": "#FF9D00"
            }
        },
        {
            "name": "[CSS] - Color for Entity",
            "scope": ["source.css entity", "source.stylus entity"],
            "settings": {
                "foreground": "#3AD900"
            }
        },
        {
            "name": "[CSS] - Color for Class Selector",
            "scope": "entity.other.attribute-name.class.css",
            "settings": {
                "foreground": "#9EFFFF"
            }
        },
        {
            "name": "[CSS] - Color for ID Selector",
            "scope": [
                "entity.other.attribute-name.id.css",
                "entity.other.attribute-name.pseudo-class.css"
            ],
            "settings": {
                "foreground": "#FFB454"
            }
        },
        {
            "name": "[CSS] - Color for Element Selector",
            "scope": "entity.name.tag",
            "settings": {
                "foreground": "#9EFFFF"
            }
        },
        {
            "name": "[CSS] - Color for Support",
            "scope": ["source.css support", "entity.name.tag.css", "source.stylus support"],
            "settings": {
                "foreground": "#A5FF90"
            }
        },
        {
            "name": "[CSS] - Color for Constant",
            "scope": [
                "source.css constant",
                "source.css support.constant",
                "source.stylus constant",
                "source.stylus support.constant",
            ],
            "settings": {
                "foreground": "#FFEE80"
            }
        },
        {
            "name": "[CSS] - Color for String",
            "scope": [
                "source.css string",
                "source.css punctuation.definition.string",
                "source.stylus string",
                "source.stylus punctuation.definition.string"
            ],
            "settings": {
                "foreground": "#FFEE80"
            }
        },
        {
            "name": "[CSS] - Color for Variable",
            "scope": ["source.css variable", "source.stylus variable"],
            "settings": {
                "foreground": "#9EFFFF"
            }
        },
        {
            "name": "[HTML] - Color for Entity Name",
            "scope": [
                "text.html.basic entity.name",
                "punctuation.definition.tag.html",
                "entity.name.tag.inline.any.html",
                "meta.tag.other.html",
                "meta.tag.inline.any.html",
                "punctuation.definition.tag.begin.html",
                "punctuation.definition.tag.end.html",
                "entity.name.tag",
                "meta.tag.other.html",
                "meta.tag.other.js",
                "meta.tag.other.tsx",
                "entity.name.tag.tsx",
                "entity.name.tag.js",
                "entity.name.tag",
                "meta.tag.js",
                "meta.tag.tsx",
                "meta.tag.html"
            ],
            "settings": {
                "foreground": "#9EFFFF"
            }
        },
        {
            "name": "[HTML] - Color for ID value",
            "scope": "meta.toc-list.id.html",
            "settings": {
                "foreground": "#A5FF90"
            }
        },
        {
            "name": "[HTML] - Color for Entity Other",
            "scope": "text.html.basic entity.other",
            "settings": {
                "foreground": "#FAD000"
            }
        },
        {
            "name": "[HTML] - Color for Script Tag",
            "scope": "meta.tag.metadata.script.html entity.name.tag.html",
            "settings": {
                "foreground": "#FAD000"
            }
        },
        {
            "name": "[HTML] - Quotes. Different color to handle expanded selection",
            "scope": "punctuation.definition.string.begin, punctuation.definition.string.end",
            "settings": {
                "foreground": colors.Anakiwa
            }
        },
        {
            "name": "[HTML/PUG] Equals Sign",
            "scope": ["meta.tag.inline.any.html", "meta.tag.other"],
            "settings": {
                "foreground": "#FF9D00"
            }
        },
        {
            "name": "[JSON] - Color for Support",
            "scope": "source.json support",
            "settings": {
                "foreground": "#FAD000"
            }
        },
        {
            "name": "[JSON] - Color for String",
            "scope": ["source.json string", "source.json punctuation.definition.string"],
            "settings": {
                "foreground": colors.Anakiwa
            }
        },
        {
            "name": "[JAVASCRIPT] - Color for Storage Type Function",
            "scope": "source.js storage.type.function",
            "settings": {
                "foreground": colors.Heliotrope
            }
        },
        {
            "name": "[JAVASCRIPT] - Color for Variable Language",
            "scope": "variable.language, entity.name.type.class.js",
            "settings": {
                "foreground": "#FB94FF"
            }
        },
        {
            "name": "[JAVASCRIPT] - Color for Inherited Component",
            "scope": ["entity.other.inherited-class"],
            "settings": {
                "foreground": "#FFEE80"
            }
        },
        {
            "name": "[JAVASCRIPT] - Color for React Extends keyword",
            "scope": ["storage.type.extends.js", "storage.type.class.jsdoc"],
            "settings": {
                "foreground": colors.Heliotrope
            }
        },
        {
            "name": "[JAVASCRIPT] — Docs Keywords",
            "scope": "punctuation.definition.block.tag.jsdoc",
            "settings": {
                "foreground": colors.Heliotrope
            }
        },
        {
            "name": "[JAVASCRIPT] — Doc Var Types",
            "scope": ["variable.other.jsdoc", "entity.name.type.instance.jsdoc"],
            "settings": {
                "foreground": "#9EFFFF"
            }
        },
        {
            "name": "[JAVASCRIPT] — Var Types",
            "scope": ["variable.other.constant.js"],
            "settings": {
                "foreground": colors.Logan
            }
        },
        {
            "name": "[JAVASCRIPT REACT] — JSX HTML",
            "scope": ["punctuation.definition.tag.begin.js", "punctuation.definition.tag.end.js"],
            "settings": {
                "foreground": "#9EFFFF"
            }
        },
        {
            "name": "[JAVASCRIPT REACT] — JSX HTML Children Text",
            "scope": "meta.jsx.children.js",
            "settings": {
                "foreground": "#FFFFFF"
            }
        },
        {
            "name": "[JAVASCRIPT] — Storage types",
            "scope": [
                "storage.type.js",
                "storage.type.class.js",
                "storage.modifier.js",
                "keyword.control",
                "keyword.operator"
            ],
            "settings": {
                "foreground": colors.Heliotrope
            }
        },
        {
            "name": "[JAVASCRIPT] — Docs Useless stuff",
            "scope": "punctuation.definition.bracket.curly",
            "settings": {
                "foreground": "#494685"
            }
        },
        {
            "name": "Typescript React Assignment Operator",
            "scope": ["keyword.operator.assignment.tsx", "keyword.operator.assignment.jsx"],
            "settings": {
                "foreground": "#FF9D00"
            }
        },
        {
            "name": "[JAVASCRIPT] Keyword Operator Assignment",
            "scope": "keyword.operator.assignment",
            "settings": {
                "foreground": colors.Heliotrope
            }
        },
        {
            "name": "[JAVASCRIPT] Typescript/React Children",
            "scope": "meta.jsx.children.tsx",
            "settings": {
                "foreground": "#FFFFFF"
            }
        },
        {
            "name": "[JAVASCRIPT] - Object keys",
            "scope": "meta.object-literal.key.js",
            "settings": {
                "foreground": colors.Honeysuckle
            }
        },
        {
            "name": "Typescript/React Classnames and Modules",
            "scope": [
                "entity.name.type.class.tsx",
                "entity.name.type.class.jsx",
                "variable.other.readwrite.alias.tsx",
                "variable.other.readwrite.tsx",
                "variable.other.readwrite.alias.ts",
                "variable.other.readwrite.alias.jsx",
                "variable.other.readwrite.alias.js",
                "variable.other.object.tsx",
                "variable.other.object.jsx",
                "support.class.component.tsx",
                "support.class.component.jsx",
                "entity.name.type.tsx",
                "entity.name.type.jsx",
                "variable.other.readwrite.js",
                "variable.other.object.js"
            ],
            "settings": {
                "foreground": colors.Logan
            }
        },
        {
            "name": "[JAVASCRIPT] - .something",
            "scope": ["variable.other.property", "variable.other.object.property"],
            "settings": {
                "foreground": "#FFEE80"
            }
        },
        {
            "name": "[JAVASCRIPT] - Color for Text inside JSX",
            "scope": "JSXNested",
            "settings": {
                "foreground": "#FFFFFF"
            }
        },
        {
            "name": "[JAVASCRIPT] - Parameters",
            "scope": ["variable.parameter"],
            "settings": {
                "foreground": colors.Logan
            }
        },
        {
            "name": "[PYTHON] - Color for Self Argument",
            "scope": "variable.parameter.function.language.special.self.python",
            "settings": {
                "foreground": colors.Crusta
            }
        },
        {
            "name": "[PYTHON] - Functions",
            "scope": [
                "meta.function-call.python",
                "meta.function-call.generic.python",
                "support.function.builtin.python"
            ],
            "settings": {
                "foreground": colors.Lavender
            }
        },
        {
            "name": "[TYPESCRIPT] - Color for Entity Name Type",
            "scope": "source.ts entity.name.type",
            "settings": {
                "foreground": colors.Crusta
            }
        },
        {
            "name": "[TYPESCRIPT] - Color for Keyword",
            "scope": "source.ts keyword",
            "settings": {
                "foreground": colors.Heliotrope
            }
        },
        {
            "name": "[TYPESCRIPT] - Color for Punctuation Parameters",
            "scope": "source.ts punctuation.definition.parameters",
            "settings": {
                "foreground": "#E1EFFF"
            }
        },
        {
            "name": "[TYPESCRIPT] - Color for Punctuation Arrow Parameters",
            "scope": "meta.arrow.ts punctuation.definition.parameters",
            "settings": {
                "foreground": "#FFEE80"
            }
        },
        {
            "name": "[TYPESCRIPT] - Color for Storage",
            "scope": "source.ts storage",
            "settings": {
                "foreground": "#9EFFFF"
            }
        },
        {
            "name": "[MARKDOWN] - Color for Heading Name Section",
            "scope": [
                "entity.name.section.markdown",
                "markup.heading.setext.1.markdown",
                "markup.heading.setext.2.markdown"
            ],
            "settings": {
                "foreground": "#FAD000",
                "fontStyle": "bold"
            }
        },
        {
            "name": "[MARKDOWN] - Diff Code Inserted Block",
            "scope": [
                "markup.inserted.diff",
                "punctuation.definition.inserted.diff"
            ],
            "settings": {
                "foreground": "#8efa00",
            }
        },
        {
            "name": "[MARKDOWN] - Diff Deleted Code Block",
            "scope": [
                "markup.deleted.diff",
                "punctuation.definition.deleted.diff"
            ],
            "settings": {
                "foreground": "#F16E6B",
            }
        },
        {
            "name": "[MARKDOWN] - Diff Meta text",
            "scope": [
                "meta.embedded.block.diff"
            ],
            "settings": {
                "foreground": "#FFFFFF",
            }
        },
        {
            "name": "[MARKDOWN] - Color for Paragraph",
            "scope": "meta.paragraph.markdown",
            "settings": {
                "foreground": "#FFFFFF"
            }
        },
        {
            "name": "[MARKDOWN] - Comment Punctuation",
            "scope": [
                "punctuation.definition.from-file.diff",
                "meta.diff.header.from-file"
            ],
            "settings": {
                "foreground": "#B362FF"
            }
        },
        {
            "name": "[MARKDOWN] - Color for Text inside inline code block `code`",
            "scope": "markup.inline.raw.string.markdown",
            "settings": {
                "foreground": "#A599E9"
            }
        },
        {
            "name": "[MARKDOWN] - Color for Quote Punctuation",
            "scope": "beginning.punctuation.definition.quote.markdown",
            "settings": {
                "foreground": "#FAD000"
            }
        },
        {
            "name": "[MARKDOWN] - Color for Quote Paragraph",
            "scope": [
                "markup.quote.markdown meta.paragraph.markdown",
                "punctuation.definition.quote.begin.markdown"
            ],
            "settings": {
                "foreground": "#A599E9"
            }
        },
        {
            "name": "[MARKDOWN] - Color for Separator",
            "scope": "meta.separator.markdown",
            "settings": {
                "foreground": "#FAD000"
            }
        },
        {
            "name": "[MARKDOWN] - Color for Emphasis Bold",
            "scope": "markup.bold.markdown",
            "settings": {
                "fontStyle": "bold",
            }
        },
        {
            "name": "[MARKDOWN] - Color for Emphasis Italic",
            "scope": "markup.italic.markdown",
            "settings": {
                "fontStyle": "italic",
            }
        },
        {
            "name": "[MARKDOWN] - Color for Lists",
            "scope": [
                "beginning.punctuation.definition.list.markdown",
                "punctuation.definition.list.begin.markdown",
                "markup.list.unnumbered.markdown",
            ],
            "settings": {
                "foreground": "#FAD000"
            }
        },
        {
            "name": "[MARKDOWN] - Link/Image title string",
            "scope": [
                "string.other.link.description.title.markdown punctuation.definition.string.markdown",
                "meta.link.inline.markdown string.other.link.description.title.markdown",
                "string.other.link.description.title.markdown punctuation.definition.string.begin.markdown",
                "string.other.link.description.title.markdown punctuation.definition.string.end.markdown",
                "meta.image.inline.markdown string.other.link.description.title.markdown"
            ],
            "settings": {
                "foreground": colors.Anakiwa,
                "fontStyle": ""
            }
        },
        {
            "name": "[MARKDOWN] - Color for Link Title",
            "scope": [
                "meta.link.inline.markdown string.other.link.title.markdown", "meta.link.reference.markdown string.other.link.title.markdown",
                "meta.link.reference.def.markdown markup.underline.link.markdown"
            ],
            "settings": {
                "foreground": "#FAD000",
                "fontStyle": "underline"
            }
        },
        {
            "name": "[MARKDOWN] - Color for Link/Image Title",
            "scope": [
                "markup.underline.link.markdown",
                "string.other.link.description.title.markdown"
            ],
            "settings": {
                "foreground": "#A599E9"
            }
        },
        {
            "name": "[MARKDOWN] - Color for Inline Code",
            "scope": ["fenced_code.block.language", "markup.inline.raw.markdown"],
            "settings": {
                "foreground": "#9EFFFF"
            }
        },
        {
            "name": "[MARKDOWN] - Color for Punctuation — Heading, `Code` and fenced ```code blocks```, **Bold**",
            "scope": [
                "punctuation.definition.markdown",
                "punctuation.definition.raw.markdown",
                "punctuation.definition.heading.markdown",
                "punctuation.definition.bold.markdown",
                "punctuation.definition.italic.markdown"
            ],
            "settings": {
                "foreground": "#494685"
            }
        },
        {
            "name": "[MARKDOWN] - LINK Brackets",
            "scope": [
                "meta.link.inline.markdown punctuation.definition.string.begin.markdown",
                "meta.link.inline.markdown punctuation.definition.string.end.markdown",
                "meta.link.reference.markdown punctuation.definition.string.begin.markdown",
                "meta.link.reference.markdown punctuation.definition.string.end.markdown",
                "string.other.link.description.markdown"
            ],
            "settings": {
                "foreground": "#FAD000"
            }
        },
        {
            "name": "[MARKDOWN] - IMG LINK Brackets",
            "scope": [
                "meta.image.inline.markdown punctuation.definition.string.begin.markdown",
                "meta.image.inline.markdown punctuation.definition.string.end.markdown",
                "string.other.link.description.markdown"
            ],
            "settings": {
                "foreground": "#FF9D00"
            }
        },
        {
            "name": "[MARKDOWN] - LINK ALT URI",
            "scope": [
                "markup.underline.link.markdown",
                "punctuation.definition.metadata.markdown",
                "markup.underline.link.image.markdown",
                "constant.other.reference.link.markdown",
                "punctuation.definition.constant.markdown",
                "punctuation.definition.constant.begin.markdown",
                "punctuation.definition.constant.end.markdown",
            ],
            "settings": {
                "foreground": "#A599E9"
            }
        },
        {
            "name": "[PUG] - Color for Entity Name",
            "scope": "text.jade entity.name",
            "settings": {
                "foreground": "#9EFFFF"
            }
        },
        {
            "name": "[PUG] - Types",
            "scope": ["storage.type.function.pug"],
            "settings": {
                "foreground": colors.Heliotrope
            }
        },
        {
            "name": "[PUG] - Var Params",
            "scope": ["variable.parameter.function.js"],
            "settings": {
                "foreground": "#9EFFFF"
            }
        },
        {
            "name": "[PUG] - Imports",
            "scope": ["variable.control.import.include.pug"],
            "settings": {
                "foreground": "#92FC79"
            }
        },
        {
            "name": "[PUG] - Color for String Interpolated",
            "scope": "text.jade string.interpolated",
            "settings": {
                "foreground": "#FFEE80"
            }
        },
        {
            "name": "[C#] - Color for Annotations",
            "scope": "storage.type.cs",
            "settings": {
                "foreground": "#9EFFFF"
            }
        },
        {
            "name": "[C#] - Color for Properties",
            "scope": "entity.name.variable.property.cs",
            "settings": {
                "foreground": "#9EFFFF"
            }
        },
        {
            "name": "[C#] - Color for Storage modifiers",
            "scope": "storage.modifier.cs",
            "settings": {
                "foreground": "#80FFBB"
            }
        },
        {
            "name": "[PHP] - Color for Entity",
            "scope": ["source.php entity", "variable.other.class.php"],
            "settings": {
                "foreground": "#9EFFFF"
            }
        },
        {
            "name": "[PHP] - Docs Keywords",
            "scope": ["keyword.other.phpdoc.php"],
            "settings": {
                "foreground": "#FF9D00"
            }
        },
        {
            "name": "[PHP] - Functions",
            "scope": [
                "entity.name.function.php",
                "support.function.basic_functions.php",
                "meta.function-call.php",
                "variable.other.property"
            ],
            "settings": {
                "foreground": "#FAD000"
            }
        },
        {
            "name": "[PHP] - Variables",
            "scope": [
                "variable.other.php",
                "punctuation.definition.variable.php",
                "variable.other.global.php",
                "variable.language.this.php"
            ],
            "settings": {
                "foreground": "#9EFFFF"
            }
        },
        {
            "name": "[PHP] - Color for Storage Modifiers",
            "scope": ["storage.modifier.php", "keyword.other.namespace.php"],
            "settings": {
                "foreground": "#FF9D00"
            }
        },
        {
            "name": "[YML] — KEYWORDS",
            "scope": ["entity.name.tag.yaml"],
            "settings": {
                "foreground": "#FAD000"
            }
        },
        {
            "name": "[YML] — Punctuation",
            "scope": [
                "punctuation.definition.block.sequence.item.yaml",
            ],
            "settings": {
                "foreground": "#E1EFFF"
            }
        },
        {
            "name": "[PHP] - Keywords for definition",
            "scope": ["storage.type.function.php", "meta.function.parameters.php"],
            "settings": {
                "foreground": "#FB94FF"
            }
        },
        {
            "name": "[PHP Blade] - Keywords for definition",
            "scope": [
                "keyword.blade",
            ],
            "settings": {
                "foreground": "#FF9D00"
            }
        },
        {
            "name": "[PHP Blade] - Punctuation",
            "scope": [
                "begin.bracket.round.blade.php",
                "end.bracket.round.blade.php",
            ],
            "settings": {
                "foreground": "#E1EFFF"
            }
        },
        {
            "name": "[PHP Blade] - Construct",
            "scope": [
                "support.function.construct.begin.blade",
                "support.function.construct.end.blade",
            ],
            "settings": {
                "foreground": "#FFEE80"
            }
        },
        {
            "name": "[GO] - Keywords for definition",
            "scope": ["keyword.package.go", "keyword.import.go"],
            "settings": {
                "foreground": "#FF9D00"
            }
        },
        {
            "name": "[GO] - Functions",
            "scope": ["keyword.function.go"],
            "settings": {
                "foreground": "#FB94FF"
            }
        },
        {
            "name": "[GO] - Variables",
            "scope": ["variable.other.assignment.go"],
            "settings": {
                "foreground": "#9EFFFF"
            }
        },
        {
            "name": "[GO] - Punctuation",
            "scope": [
                "punctuation.definition.string.begin.go",
                "punctuation.definition.string.end.go",
                "support.function.go"
            ],
            "settings": {
                "foreground": "#FAD000"
            }
        },
        {
            "name": "[RUBY] - Interpolation Quoted Double & Block Inline",
            "scope": [
                "punctuation.section.embedded.end.ruby",
                "punctuation.section.embedded.begin.ruby",
                "punctuation.section.scope.begin.ruby",
                "punctuation.section.scope.end.ruby"
            ],
            "settings": {
                "foreground": "#FFEE80"
            }
        },
        {
            "name": "[RUBY] - Constant",
            "scope": "variable.other.constant.ruby",
            "settings": {
                "foreground": "#80FFBB",
            }
        },
        {
            "name": "[RUBY] - Class",
            "scope": "entity.name.type.class.ruby",
            "settings": {
                "foreground": "#FB94FF",
            }
        },
        {
            "name": "[RUBY] - Variables",
            "scope": [
                "variable.other.block.ruby",
                "variable.other.ruby"
            ],
            "settings": {
                "foreground": "#9EFFFF",
            }
        },
        {
            "name": "[RUBY] - Separators",
            "scope": "punctuation.separator.other.ruby",
            "settings": {
                "foreground": "#FF9D00"
            }
        },
        {
            "name": "[RUBY] - Special Methods",
            "scope": "keyword.other.special-method.ruby",
            "settings": {
                "foreground": "#FFEE80",
            }
        },
        {
            "name": "[SHELL] - Function Keyword",
            "scope": ["storage.type.function.shell"],
            "settings": {
                "foreground": "#FB94FF",
            }
        },
        {
            "name": "[SHELL] - Var Other",
            "scope": [
                "variable.other.special.shell",
                "punctuation.definition.variable.shell"
            ],
            "settings": {
                "foreground": "#FF9D00",
            }
        },
        {
            "name": "[GRAPHQL] — Variable",
            "scope": [
                "variable.graphql"
            ],
            "settings": {
                "foreground": "#FAEFA5",
            }
        },
        {
            "name": "[GRAPHQL] — Keywords",
            "scope": [
                "keyword.operation.graphql"
            ],
            "settings": {
                "foreground": "#FB94FF",
            }
        },
        {
            "name": "[SQL] Source",
            "scope": [
                "source.sql"
            ],
            "settings": {
                "foreground": "#E1EFFF"
            }
        },
        {
            "name": "[SQL] — Keywords",
            "scope": [
                "source.sql keyword.other",
                "support.function.mysqli.php"
            ],
            "settings": {
                "foreground": "#FAEFA5"
            }
        },
        {
            "name": "[SQL] — Functions Used",
            "scope": [
                "support.function.mysqli.php",
                "source.sql support.function"
            ],
            "settings": {
                "foreground": "#FAD000"
            }
        },
        {
            "name": "[SQL] — RegExp String",
            "scope": [
                "string.regexp",
                "string.regexp keyword.other"
            ],
            "settings": {
                "foreground": "#E1EFFF"
            }
        },
        {
            "name": "[SQL] — Other keywords",
            "scope": [
                "keyword.other.DML.sql"
            ],
            "settings": {
                "foreground": "#FF9D00",
            }
        },
        {
            "name": "[TOML] — SYNTAX",
            "scope": [
                "punctuation.definition.table.array.toml"
            ],
            "settings": {
                "foreground": "#E1EFFF"
            }
        },
        {
            "name": "[TOML] — Other keywords",
            "scope": [
                "entity.other.attribute-name.table.array.toml",
                "entity.other.attribute-name.table.toml"
            ],
            "settings": {
                "foreground": "#FF9D00",
            }
        },
        {
            "name": "[TOML] — Keywords",
            "scope": [
                "keyword.key.toml"
            ],
            "settings": {
                "foreground": "#FAD000"
            }
        },
        {
            "name": "[DOCKER] — Keywords",
            "scope": [
                "keyword.other.special-method.dockerfile"
            ],
            "settings": {
                "foreground": "#FAD000",
            }
        },
        {
            "name": "[RUST] — Keywords",
            "scope": [
                "keyword.other.rust"
            ],
            "settings": {
                "foreground": "#FF9D00",
            }
        },
        {
            "name": "[RUST] — Keyword Fn",
            "scope": [
                "keyword.other.fn.rust"
            ],
            "settings": {
                "foreground": "#FB94FF",
            }
        },
        {
            "name": "[ENV] — Keyword",
            "scope": [
                "keyword.other.env"
            ],
            "settings": {
                "foreground": "#FF9D00",
            }
        },
        {
            "name": "[ENV] — Variable",
            "scope": [
                "variable.other.env"
            ],
            "settings": {
                "foreground": "#FAD000",
            }
        },
        {
            "name": "[ENV] — Source",
            "scope": [
                "source.env"
            ],
            "settings": {
                "foreground": "#E1EFFF",
            }
        },
        {
            "name": "[ENV] — Punctuation",
            "scope": [
                "keyword.other.template.begin.env",
                "keyword.other.template.end.env",
                "keyword.operator.assignment.env",

            ],
            "settings": {
                "foreground": "#FF9D00",
            }
        },
        {
            "name": "[JS] — Double Destructure of Object",
            "scope": [
                "variable.object.property.js",
            ],
            "settings": {
                "foreground": "#9EFFFF",
            }
        },
        {
            "name": "[JS] — Regex",
            "scope": [
                "string.regexp.js",
            ],
            "settings": {
                "foreground": "#FB94FF",
            }
        },
        {
            "name": "[CSV] — Keyword 2",
            "scope": [
                "keyword.rainbow2",
            ],
            "settings": {
                "foreground": "#FF9D00",
            }
        },
        {
            "name": "[ITALICS] All the awesome italics live here.",
            "scope": [
                "modifier",
                "this",
                "comment",
                "storage.modifier.js",
                "entity.other.attribute-name.js",
                "entity.other.attribute-name.html",
                "punctuation.definition.comment",
                "text.html.basic entity.other",
                "entity.other.attribute-name.tsx",
                "entity.other.attribute-name.jsx",
                "markup.quote.markdown meta.paragraph.markdown",
                "markup.italic.markdown",
                "text.jade entity.other.attribute-name.tag",
                "keyword.control.from.js",
                "entity.other.attribute-name.tag.pug"
            ],
            "settings": {
                "fontStyle": "italic"
            }
        }
    ]
}
