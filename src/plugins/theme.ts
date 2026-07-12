import type { ComponentProps } from "@oruga-ui/oruga";
import { isTrueish } from "@oruga-ui/oruga";

const tailwindConfig = {
    button: {
        override: true,
        rootClass: (): string => {
            const classes = [
                "button",
                "relative",
                "cursor-pointer",
                "text-gray-500",
                "border",
                "border-gray-200",
                "rounded-lg",
                "shadow-xs",
                "hover:bg-gray-200",
                "focus:outline-offset-2",
                "focus:outline-2",
                "focus:outline-gray-500",
            ];
            return classes.join(" ");
        },
        wrapperClass: "button-wrapper inline-flex items-center",
        sizeClass: "is-",
        variantClass: "is-",
        roundedClass: "!rounded-3xl",
        expandedClass: "w-full",
        disabledClass:
            "is-disabled pointer-events-none cursor-not-allowed opacity-50",
        loadingClass:
            "is-loading shadow-none pointer-events-none !text-transparent",
        outlinedClass: (variant: string): string => {
            if (!variant) return "is-outlined";
            return `is-${variant} is-outlined`;
        },
        invertedClass: (variant: string): string => {
            if (!variant) return "is-inverted";
            return `is-${variant} is-inverted`;
        },
    },
    autocomplete: {
        override: true,
        rootClass: `autocomplete`,
        itemHoverClass: `bg-gray-50`,
        itemEmptyClass: `text-gray-400 italic text-sm`,
        itemGroupTitleClass: `text-xs font-bold text-gray-300 uppercase tracking-wider bg-gray-50`,
    },

    breadcrumb: {
        override: true,
        rootClass: "breadcrumb-wrapper font-medium text-gray-700",
        listClass: "breadcrumb flex",
        variantClass: "is-",
        sizeClass: (size: string): string => {
            if (size == "small") return "text-sm";
            else if (size == "medium") return "text-md";
            else if (size == "large") return "text-xl";
            return "text-sm";
        },
        positionClass: (position: string): string => {
            if (position == "left") return "[&_.breadcrumb]:justify-start";
            if (position == "centered") return "[&_.breadcrumb]:justify-center";
            if (position == "right") return "[&_.breadcrumb]:justify-end";
            return "[&_.breadcrumb]:justify-start";
        },
        // positionClass: "",
        itemClass: "breadcrumb-item cursor-pointer [&_.icon]:mx-1.5",
        activeClass: "is-active text-blue-500",
        disabledClass:
            "is-disabled pointer-events-none cursor-not-allowed opacity-50",
    },
    carousel: {
        override: true,
        rootClass: "carousel relative overflow-hidden w-full",
        overlayClass:
            "is-overlay flex flex-col items-center justify-center fixed",
        wrapperClass: "carousel-scene w-full relative",
        itemsClass: "carousel-items flex",
        itemsDraggingClass: "is-dragging",
        iconClass: (): string => {
            const classes = [
                "carousel-arrow",
                "transition",
                "duration-200",
                "ease-in-out",
                "bg-white/50",
                "text-white",
                "border",
                "border-white/50",
                "rounded-full",
                "w-[30px]",
                "h-[30px]",
                "hover:opacity-100",
            ];
            return classes.join(" ");
        },
        iconPrevClass: "has-icons-left",
        iconNextClass: "has-icons-right",
        indicatorsClass:
            "carousel-indicator p-2 w-full flex items-center justify-center bg-gray-300",
        indicatorClass: "indicator-item [&_img]:cursor-default",
        indicatorsInsideClass: "is-inside absolute bg-transparent",
        indicatorsPositionClass: (_: string, props: ComponentProps): string => {
            if (props.indicatorPosition == "top") return "top-0";
            return "bottom-0";
        },
        indicatorItemClass:
            "indicator-style block outline-none transition duration-200 ease-in-out border border-white hover:bg-white",
        indicatorItemActiveClass: "is-active bg-white",
        indicatorItemStyleClass: "is-",
        itemClass:
            "carousel-item flex-shrink-0 w-full border-b-2 border-transparent",
        itemActiveClass: "is-active",
    },
    checkbox: {
        override: true,
        rootClass:
            "checkbox flex items-center align-top inline-flex [&_.check]:w-5 [&_.check]:h-5",
        disabledClass:
            "is-disabled pointer-events-none cursor-not-allowed opacity-50",
        inputClass: (): string => {
            const classes = [
                "check ",
                "rounded ",
                "outline-none",
                "text-inherit",
                "flex-shrink-0",
                "border-2",
                "border-gray-500",
                "bg-transparent",
                "transition-colors",
                "duration-150",
                "ease-in",
                "focus:ring-2",
                "focus:ring-brand-soft",
                "appearance-none ",
                "[-webkit-appearance:none]",
                "[-moz-appearance:none]",
            ];
            return classes.join(" ");
        },
        labelClass:
            "control-label select-none font-medium text-heading ml-2 mr-4",
        variantClass: "is-",
        sizeClass: (_: string, props: ComponentProps): string => {
            if (props.size == "small")
                return "is-small [&_.check]:!w-3 [&_.check]:!h-3 [&_.control-label]:text-xs";
            if (props.size == "medium")
                return "is-medium [&_.check]:!w-4 [&_.check]:!h-4 [&_.control-label]:text-sm";
            return "is-large [&_.check]:!w-6 [&_.check]:!h-6 [&_.control-label]:text-xl";
        },
    },
    collapse: {
        override: true,
        rootClass: "collapse-component rounded-lg my-4",
        triggerClass:
            "collapse-component-trigger cursor-pointer inline-block w-full",
        contentClass: "collapse-component-content [display:inherit]",
    },
    datepicker: {
        override: true,
        rootClass: "datepicker",
        headerClass:
            "datepicker-header flex justify-center pb-4 border-b border-gray-200",
        footerClass: "datepicker-footer pt-4 border-t border-gray-200",
        boxClass: "dropdown-item m-4",
        tableClass: "datepicker-table py-4",
        tableHeadClass: "datepicker-header",
        tableHeadCellClass:
            "datepicker-cell relative hover:bg-gray-100 rounded",
        prevButtonClass: "pagination-previous",
        nextButtonClass: "pagination-next",
        listsClass: "pagination-list flex [&_.select-component]:mr-2",
        tableBodyClass: (_: string, props: ComponentProps) => {
            const classes = ["datepicker-body"];
            if (props.events) classes.push(`has-events`);
            return classes.join(" ");
        },
        tableRowClass: "datepicker-row",
        tableCellClass: "datepicker-cell relative hover:bg-gray-100 rounded",
        tableCellSelectableClass: "is-selectable",
        tableCellUnselectableClass:
            "is-unselectable opacity-50 cursor-not-allowed",
        tableCellTodayClass: "is-today bg-blue-100 text-blue-500",
        tableCellSelectedClass: "is-selected bg-blue-500 text-white",
        //
        tableCellWithinHoveredClass:
            "is-within-hovered bg-gray-100 rounded-none",
        tableCellFirstHoveredClass:
            "is-first-hovered bg-gray-100 rounded-r-none",
        tableCellLastHoveredClass: "is-last-hovered bg-gray-100 rounded-l-none",
        tableCellFirstSelectedClass: "is-first-selected rounded-r-none",
        tableCellLastSelectedClass: "is-last-selected rounded-l-none",
        tableCellWithinSelectedClass: "is-within-selected rounded-none",
        tableCellInvisibleClass: "",
        tableCellNearbyClass: "is-nearby",
        tableCellEventsClass: "has-event",
        tableEventIndicatorClass: (type: string): string => {
            if (type == "dots") return "is-dots rounded-lg w-1.5 h-1.5 mx-0.5";
            return "is-bars w-2 h-1";
        },

        tableEventVariantClass: "is-",
        tableEventsClass:
            "events absolute buttom-0.5 left-0 flex justify-center w-full",
        tableEventClass: "event",
        monthBodyClass: "datepicker-body",
        monthCellClass: "datepicker-cell",
        monthCellFirstHoveredClass:
            "is-first-hovered bg-gray-100 rounded-r-none",
        monthCellFirstSelectedClass: "is-first-selected rounded-r-none",
        monthCellLastHoveredClass: "is-last-hovered bg-gray-100 rounded-l-none",
        monthCellLastSelectedClass: "is-last-selected rounded-l-none",
        monthCellSelectableClass: "is-selectable",
        monthCellSelectedClass: "is-selected text-white",
        monthCellTodayClass: "is-today text-blue-500",
        monthCellUnselectableClass:
            "is-unselectable opacity-50 cursor-not-allowed",
        monthCellWithinHoveredClass:
            "is-within-hovered bg-gray-100 rounded-none",
        monthCellWithinSelectedClass: "is-within-selected rounded-none",
        monthClass: "datepicker-table",
        monthTableClass: "datepicker-months",
    },
    datetimepicker: {
        override: true,
        datepickerWrapperClass: "datepicker-wrapper",
        timepickerWrapperClass:
            "timepicker-wrapper [&_.dropdown]:w-full [&_.dropdown-menu]:!shadow-sm [&_.dropdown-menu]:!w-full",
    },
    dialog: {
        override: true,
        rootClass:
            "dialog modal is-active absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-lg border-gray-200 shadow-sm",
        activeClass: "is-active",
        mobileClass: undefined,
        teleportClass: "is-teleported",
        fullscreenClass: "is-full-screen",
        // backdropClass: "modal-background", @WIP in Oruga's 0.14.pre
        wrapperClass: "modal-content h-full flex flex-col rounded-lg",
        textPositionClass: (position: string) => {
            if (position === "left") return "[&_.modal-card-body]:text-left";
            else if (position === "center")
                return "[&_.modal-card-body]:text-center";
            else if (position === "right")
                return "[&_.modal-card-body]:text-right";
        },
        headerClass: "modal-card-head p-4 border-b border-gray-200",
        titleClass: "modal-card-title text-xl font-bold text-gray-700",
        closeClass:
            "modal-close is-large absolute top-4 right-4 cursor-pointer",
        closeIconSize: "medium",
        subtitleClass: "modal-card-subtitle text-sm text-gray-500",
        bodyClass: "modal-card-body flex-1 overflow-y-auto p-4",
        contentClass: "modal-content",
        figureClass: "image",
        footerClass: "modal-card-foot flex p-4 border-t border-gray-200",
        footerPositionClass: (position: string) => {
            if (position === "left") return "[&_.modal-card-foot]:justify-content-flex-start";
            if (position === "center") return "[&_.modal-card-foot]:justify-content-center";
            if (position === "right") return "[&_.modal-card-foot]:justify-content-flex-end";
        },
        scrollClipClass: "is-clipped overflow-auto",
    },
    dropdown: {
        override: true,
        rootClass: "dropdown relative btn-group inline-block align-middle",
        triggerClass: "dropdown-trigger",
        disabledClass: "is-disabled opacity-50 cursor-not-allowed",
        expandedClass: "w-full [&_.dropdown-menu]:w-full",
        inlineClass:
            "is-inline [&_.dropdown-menu]:static [&_.dropdown-menu]:inline-block [&_.dropdown-menu]:overflow-auto [&_.dropdown-menu]:z-0",
        overlayClass:
            "dropdown-backdrop fixed top-0 left-0 w-full h-full z-40 bg-black/80 backdrop-blur-sm",
        menuClass: (): string => {
            const classes = [
                "dropdown-menu",
                "absolute",
                "z-10",
                "bg-white",
                "divide-y",
                "divide-gray-100",
                "rounded-lg",
                "shadow-lg",
                "min-w-48",
                "p-2",
                "text-gray-600",
                "border border-gray-100",
            ];
            return classes.join(" ");
        },
        menuPositionClass: "position-",
        menuActiveClass: "show",
        itemTag: "a",
        itemClass:
            "dropdown-item rounded-lg block px-4 py-2 font-medium hover:bg-gray-100 cursor-pointer",
        itemSelectedClass: "is-active text-white",
        itemFocusedClass: "is-focused bg-gray-100",
        itemDisabledClass: "is-disabled opacity-50 cursor-not-allowed",
        modalClass: "is-mobile-modal",
        teleportClass: "teleported",
    },
    field: {
        override: true,
        rootClass: "field",
        labelClass: "field-label block text-gray-500 mb-2",
        labelSizeClass: "is-",
        messageClass: "help block text-xs my-2",
        messageVariantClass: "is-",
        bodyClass: "field-body",
        addonsClass: "has-addons flex justify-start",
        groupedClass:
            "is-grouped flex gap-3 justify-start [&_input]:m-0 [&_select]:m-0 [&_button]:m-0",
        groupMultilineClass: "is-grouped-multiline flex-wrap",
        horizontalClass: "is-horizontal flex",
        horizontalLabelClass:
            "field-label flex-grow-1 flex-shrink-0 basis-0 mr-6 text-right",
        horizontalBodyClass: "field-body basis-0 flex-grow-5",
    },
    icon: {
        override: true,
        rootClass: "icon inline-flex justify-center items-center",
        variantClass: "text-",
        sizeClass: (position: string): string => {
            if (position == "small") return "text-sm";
            else if (position == "medium") return "text-md";
            else if (position == "large") return "text-lg";
            return "";
        },
        clickableClass: "clickable cursor-pointer pointer-events-auto",
        spinClass: "animate-spin",
    },
    input: {
        override: true,
        rootClass: (_: string, props: ComponentProps): string => {
            const classes = [
                "input-component",
                "inline-block",
                "relative",
                "[&_.icon]:text-gray-500",
            ];
            if (isTrueish(props.icon)) classes.push("has-icons-left");
            return classes.join(" ");
        },
        inputClass: (_: string, props: ComponentProps): string => {
            const classes = [
                "input",
                "rounded-lg",
                "shadow-xs",
                "focus:ring-2",
                "w-full",
                "!bg-gray-50",
                "border border-gray-200",
            ];

            if (props.icon) classes.push("icon-left");
            if (props.iconRight) classes.push("icon-right");
            return classes.join(" ");
        },
        sizeClass: (_: string, props: ComponentProps): string => {
            if (props.size == "small") return "input-small";
            else if (props.size == "medium") return "input-medium";
            else if (props.size == "large") return "input-large";
            return "input-medium";
        },
        variantClass: "border-",
        expandedClass: "w-full",
        disabledClass:
            "is-disabled pointer-events-none cursor-not-allowed opacity-50",
        roundedClass: "!rounded-3xl",
        iconLeftClass: "icon-left",
        iconRightClass: "icon-right",
        hasIconRightClass: "has-icons-right",
        counterClass: "help counter",
    },
    listbox: {
        override: true,
        rootClass: (): string => {
            const classes = [
                "listbox",
                "panel",
                "z-10",
                "bg-white",
                "rounded-lg",
                "shadow-sm",
                "min-w-48",
                "p-2",
                "text-gray-600",
                "border border-gray-100",
                "overflow-auto",
            ];
            return classes.join(" ");
        },
        selectableClass: "selectable",
        multipleClass: "multiple",
        disabledClass: "is-disabled", // @Duplicate element
        listClass: "panel-list divide-y divide-gray-100 overflow-auto",
        itemClass:
            "list-item panel-block rounded-lg block px-4 py-2 font-medium hover:bg-gray-100 cursor-pointer",
        itemDisabledClass:
            "is-disabled pointer-events-none cursor-not-allowed opacity-50",
        itemFocusedClass: "is-focused ",
        itemSelectedClass: "is-active",
        filterClass: "list-item panel-block px-4 py-2 border-b border-gray-200",
        emptyClass: "list-item panel-block is-disabled",
        headerClass:
            "list-item panel-block px-4 py-2 text-gray-500 border-b border-gray-200",
        footerClass:
            "list-item panel-block px-4 py-2 text-gray-500 border-t border-gray-200 ",
    },
    loading: {
        override: true,
        rootClass: (): string => {
            const classes = [
                "loading",
                "flex",
                "justify-center",
                "items-center",
                "absolute",
                "top-0",
                "right-0",
                "bottom-0",
                "left-0",
                "overflow-hidden",
                "[&_.loading-overlay]:z-40",
                "[&_span]:z-50",
            ];
            return classes.join(" ");
        },
        fullPageClass: "is-full-page fixed",
        overlayClass:
            "loading-overlay absolute top-0 right-0 bottom-0 left-0 bg-white/10 backdrop-blur-sm ",
        iconClass: "icon",
        scrollClipClass: "is-clipped",
    },
    menu: {
        override: true,
        rootClass:
            "menu text-sm font-medium text-heading [&_button]:text-left [&_button]:w-full [&_button]:rounded [&_button]:p-4",
        listClass: "menu-list",
        listLabelClass: "menu-label my-2 text-gray-500",
        itemButtonClass:
            "menu-item text-left w-full rounded [&_.icon]:mr-2 [&_.icon]:ml-1",
        itemButtonActiveClass: "active",
        itemButtonDisabledClass:
            "disabled pointer-events-none cursor-not-allowed opacity-50",
        itemSubmenuClass: "submenu ml-5 pl-1 border-l border-gray-200",
    },
    modal: {
        override: true,
        rootClass:
            "modal flex flex-col justify-center items-center w-full h-full relative top-0 left-0",
        activeClass: "is-active",
        overlayClass:
            "modal-background w-full h-full bg-black/80 backdrop-blur-sm",
        contentClass:
            "modal-content bg-white w-auto absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 border border-gray-200 rounded-lg shadow-sm",
        closeClass: "modal-close absolute top-0 left-0",
        fullScreenClass: "is-full-screen",
        scrollClipClass: "is-clipped overflow-auto",
    },
    notification: {
        override: true,
        rootClass:
            "notification alert relative flex items-center px-4 py-3 my-3 rounded-lg space-x-2 duration-100 ease-in",
        variantClass: "is-",
        wrapperClass:
            "notifictation-wrapper flex items-center max-w-[95%] text-left [&_.icon]:h-full [&_.icon]:mr-2",
        contentClass: "notifictation-content",
        positionClass: "position-",
        iconClass: "media mr-3 ",
        closeClass: "close",
        noticeClass:
            "notifictations fixed top-0 right-0 bottom-0 left-0 overflow-hidden flex items-center pointer-events-none p-8 z-40",
        noticePositionClass: "position-",
    },
    pagination: {
        override: true,
        rootClass: (_: string, props: ComponentProps): string => {
            const classes = [
                "pagination",
                "text-gray-400",
                "text-center",
                "flex",
                "justify-between",
                "items-center",
                "mb-4",
            ];
            if (props.rounded) classes.push("rounded");
            return classes.join(" ");
        },
        sizeClass: "is-",
        simpleClass: "is-simple",
        orderClass: "is-",
        positionClass: (_: string, props: ComponentProps): string => {
            if (props.position == "right")
                return "[&_.pagination-list]:justify-end";
            if (props.position == "centered")
                return "[&_.pagination-list]:justify-center";
            return "[&_.pagination-list]:justify-start";
        },
        listClass:
            "pagination-list text-center flex justify-start items-center flex-wrap grow shrink list-none m-0 p-0",
        mobileClass: "is-mobile flex-wrap",
        buttonClass: "pagination-link mr-2",
        buttonCurrentClass: "is-current pointer-events-none cursor-not-allowed",
        buttonDisabledClass:
            "disabled pointer-events-none cursor-not-allowed opacity-5",
        buttonNextClass: "pagination-next",
        buttonPrevClass: "pagination-previous",
        infoClass: "info",
    },
    // popover: { TODO: Add popover component classes
    //     rootClass: "popover",
    //     triggerClass: "popover-trigger",
    //     contentClass: "popover-content",
    //     backdropClass: "popover-backdrop",
    //     scrollClipClass: "is-clipped",
    // },
    radio: {
        override: true,
        rootClass: "radio flex justify-start items-center relative inline-flex",
        disabledClass:
            "is-disabled pointer-events-none cursor-not-allowed opacity-50",
        inputClass: (): string => {
            const classes = [
                "check",
                "rounded-full",
                "outline-none",
                "text-inherit",
                "flex-shrink-0",
                "border-2",
                "border-gray-700",
                "focus:ring-2",
                "focus:ring-brand-soft",
                "appearance-none",
                "[-webkit-appearance:none]",
                "[-moz-appearance:none]",
            ];
            return classes.join(" ");
        },
        labelClass:
            "control-label select-none font-medium text-heading ml-2 mr-4",
        variantClass: "is-",
        sizeClass: (_: string, props: ComponentProps): string => {
            if (props.size == "small")
                return "is-small [&_.control-label]:text-xs";
            if (props.size == "medium")
                return "is-medium [&_.control-label]:text-sm";
            return "is-large [&_.control-label]:text-xl";
        },
    },
    select: {
        override: true,
        rootClass: (_: string, props: ComponentProps): string => {
            const classes = [
                "select-component",
                "control",
                "relative",
                "inline-block",
            ];
            if (isTrueish(props.icon)) classes.push("has-icons-left");
            if (isTrueish(props.iconRight)) classes.push("has-icons-right");
            return classes.join(" ");
        },
        selectClass: (_: string, props: ComponentProps): string => {
            const classes = [
                "select",
                "rounded-lg",
                "shadow-xs",
                "focus:ring-2",
                "w-full",
                "!bg-gray-50",
                "border border-gray-200",
            ];
            if (isTrueish(props.size)) classes.push(`input-${props.size}`);
            if (isTrueish(props.rounded)) classes.push("!rounded-3xl");
            if (isTrueish(props.multiple)) classes.push("is-multiple");
            if (isTrueish(props.disabled))
                classes.push(
                    "is-disabled pointer-events-none cursor-not-allowed opacity-50",
                );
            return classes.join(" ");
        },
        rootVariantClass: "border-",
        expandedClass: "w-full",
        iconLeftClass: "icon-left",
        iconRightClass: "icon-right",
        placeholderClass: "is-empty",
        iconRightSpaceClass: "has-icons-right appearance-none",
        iconLeftSpaceClass: "has-icons-left",
        arrowClass: "has-arrow",
    },
    sidebar: {
        override: true,
        rootClass: "sidebar absolute",
        overlayClass:
            "sidebar-background relative top-0 left-0 w-full h-full z-40 bg-black/80 backdrop-blur-sm",
        contentClass: "sidebar-content shadow-sm bg-white !w-auto !h-auto z-41",
        activeClass: "is-active",
        positionClass: (_: string, props: ComponentProps): string => {
            if (props.position == "top") return "w-full top-0 right-0 left-0";
            if (props.position == "right")
                return "h-full top-0 right-0 bottom-0";
            if (props.position == "bottom")
                return "w-full right-0 left-0 bottom-0";
            return "h-full top-0 left-0 bottom-0";
        },
        expandOnHoverClass: "!w-full",
        fullheightClass: "!h-full",
        fullwidthClass: "!w-full",
        reduceClass: "is-mini",
        inlineClass: "is-inline",
        mobileClass: "is-",
        scrollClipClass: "is-clipped",
    },
    skeleton: {
        override: true,
        rootClass: "skeleton flex",
        itemClass: "skeleton-item bg-gray-200 rounded w-full h-4",
        itemRoundedClass: "rounded-full",
        animatedClass: "animate-pulse",
        sizeClass: (position: string): string => {
            if (position == "small") return "h-4";
            else if (position == "medium") return "h-6";
            else if (position == "large") return "h-8";
            return "";
        },
        positionClass: (position: string): string => {
            if (position == "left") return "justify-start";
            else if (position == "centered") return "justify-center";
            else if (position == "right") return "justify-end";
            return "";
        },
    },
    slider: {
        override: true,
        rootClass: "slider",
        disabledClass:
            "is-disabled pointer-events-none cursor-not-allowed opacity-50",
        trackClass: "slider-track relative h-2 w-full rounded",
        fillClass: "slider-fill absolute rounded",
        thumbWrapperClass:
            "slider-thumb-wrapper inline-flex flex-col items-center absolute top-1/2 cursor-grab transform -translate-x-1/2 -translate-y-1/2",
        thumbWrapperDraggingClass:
            "is-dragging [&_.slider-thumb]:cursor-grabbing",
        thumbRoundedClass: "rounded-full",
        variantClass: "is-",
        sizeClass: (position: string): string => {
            if (position == "small")
                return "[&_.slider-track]:h-1.5 [&_.slider-thumb]:w-4 [&_.slider-thumb]:h-4";
            else if (position == "medium")
                return "[&_.slider-track]:h-2.5 [&_.slider-thumb]:w-5 [&_.slider-thumb]:h-5";
            else if (position == "large")
                return "[&_.slider-track]:h-5 [&_.slider-thumb]:w-7.5 [&_.slider-thumb]:h-7.5";
            return "default";
        },
        thumbClass:
            "slider-thumb bg-white cursor-grab w-5 h-5 border border-gray-200 rounded",
        tickLabelClass:
            "slider-tick-label absolute top-1/2 left-1/2 pt-2 transform -translate-x-1/2",
        tickHiddenClass: "is-tick-hidden",
        tickClass:
            "slider-tick absolute top-0 w-0.5 transform -translate-x-1/2 rounded-full",
    },
    steps: {
        override: true,
        rootClass: "steps-wrapper",
        listClass: "steps flex flex-wrap font-medium",
        verticalClass:
            "is-vertical flex flex-wrap [&_.steps]:flex-col [&_.step-content]:grow [&_.step-navigation]:basis-full",
        animatedClass: "is-animated",
        positionClass: (position: string): string => {
            if (position == "left") return "is-left";
            else if (position == "right") return "is-right flex-row-reverse";
            return "is-left";
        },
        sizeClass: (size: string): string => {
            if (size == "small")
                return "[&_.step-marker]:w-8 [&_.step-marker]:h-8 [&_.step-title]:text-sm";
            else if (size == "medium")
                return "[&_.step-marker]:w-12 [&_.step-marker]:h-12 [&_.step-title]:text-md";
            else if (size == "large")
                return "[&_.step-marker]:w-17 [&_.step-marker]:h-17 [&_.step-title]:text-lg";
            return "";
        },
        stepClass: "step relative flex-1 flex items-center text-gray-700",
        stepVariantClass: "is-",
        stepActiveClass: "is-active",
        stepPreviousClass: "is-previous",
        stepNextClass: "is-next",
        stepLabelClass: "step-title mt-[4px]",
        stepPositionClass: (position: string): string => {
            if (position == "left") return "flex-row-reverse";
            else if (position == "right") return "";
            else if (position == "bottom") return "flex-col";
            return "";
        },
        stepClickableClass: "is-clickable cursor-pointer",
        markerClass:
            "step-marker m-2 flex justify-center items-center w-10 h-10 rounded-4xl",
        contentClass: "step-content p-4",
        transitioningClass: "is-transitioning",
        stepPanelClass: "step-item",
        navigationClass: "step-navigation",
    },
    switch: {
        override: true,
        rootClass: "switch flex items-center align-top inline-flex",
        inputClass: (): string => {
            const classes = [
                "check",
                "flex",
                "items-center",
                "flex-shrink-0",
                "cursor-pointer",
                "h-auto",
                "bg-gray-200",
                "text-inherit",
                "rounded-md",
                "[.check]:before:rounded-md",
                "focus:ring-2",
                "focus:ring-brand-soft",
                "appearance-none",
                "[-webkit-appearance:none]",
                "[-moz-appearance:none]",
            ];
            return classes.join(" ");
        },
        positionClass: (position: string): string => {
            if (position == "left") return "flex-row-reverse";
            else if (position == "right") return "";
            return "";
        },
        roundedClass: "[&_.check]:rounded-full [&_.check:before]:rounded-full",
        labelClass:
            "control-label select-none text-sm font-medium text-heading ml-2 mr-4",
        sizeClass: "is-",
        variantClass: "is-",
        passiveVariantClass: "is-",
        disabledClass:
            "is-disabled pointer-events-none cursor-not-allowed opacity-50",
    },
    table: {
        override: true,
        rootClass: "table-wrapper",
        wrapperClass: "table-inner v relative",
        tableClass: (): string => {
            const classes = [
                "table",
                "min-w-full",
                "divide-y",
                "divide-gray-200",
                "[&_th]:text-left",
                "[&_tr]:border-t",
                "[&_tr]:border-gray-200",
                "[&_td]:px-3",
                "[&_td]:py-2",
                "[&_th]:px-3",
                "[&_th]:py-2",
            ];
            return classes.join(" ");
        },
        borderedClass: "border border-gray-200",
        stripedClass: "[&>tbody>tr:nth-child(even)]:bg-gray-50",
        narrowedClass: "is-narrowed",
        hoverableClass: "[&>tbody>tr:hover]:bg-gray-100",
        emptyClass: "text-center py-8 text-gray-500",
        detailedClass: "bg-gray-50",
        footerClass: "footer bg-gray-50 py-3 border-t",
        paginationWrapperClass: "py-3 border-t",
        scrollableClass: "overflow-scroll",
        stickyHeaderClass:
            "[&_thead]:sticky-header [&_thead]:sticky [&_thead]:top-0 [&_thead]:bg-white [&_thead]:z-99",
        trSelectedClass: "bg-blue-50",
        thSortableClass: "cursor-pointer hover:bg-gray-100",
        thCurrentSortClass: "bg-gray-100 font-semibold",
        thSortIconClass: "ml-1",
        thUnselectableClass: "select-none",
        thStickyClass: "sticky-th sticky left-0",
        tdStickyClass: "sticky-td sticky left-0",
        thCheckboxClass: "w-12",
        thDetailedClass: "w-16",
        tdDetailedChevronClass: "",
        thPositionClass: "left-0",
        tdPositionClass: "left-0",
        mobileClass: "table-mobile block overflow-x-auto",
        mobileSortClass: "",
    },
    tabs: {
        override: true,
        rootClass: "tabs-wrapper",
        contentClass: "tabs-content p-4 flex-1",
        multilineClass: "is-multiline",
        expandedClass: "[&_.tab-link]:flex-1",
        verticalClass: "flex [&_.tabs]:block [&_.tab-link]:w-full",
        positionClass: (position: string): string => {
            if (position == "left") return "is-left [&_.tabs]:justify-start";
            else if (position == "centered")
                return "is-centered [&_.tabs]:justify-center";
            else if (position == "right")
                return "is-right [&_.tabs]:justify-end flex-row-reverse";
            return "is-left";
        },
        listClass: "tabs flex font-medium flex-wrap",
        typeClass: (type: string): string => {
            if (type == "toggle")
                return "toggle text-gray-500 [&_.tab-link]:border-default [&_.tab-link]:border [&_.tab-link]:border-gray-200";
            else if (type == "boxed")
                return "boxed [&_.tab-link]:rounded-t-lg text-gray-500 [&_.tabs]:border-default [&_.tabs]:border-b [&_.tabs]:border-gray-200";
            else if (type == "pills")
                return "pills [&_.tab-link]:rounded-lg text-gray-500";
            else
                return "default text-gray-500 [&_.tabs]:border-default [&_.tabs]:border-b [&_.tabs]:border-gray-200";
        },
        sizeClass: (size: string): string => {
            if (size == "small") return "text-sm";
            else if (size == "medium") return "text-md";
            else if (size == "large") return "text-lg";
            return "text-sm";
        },
        tabPanelClass: "tab-item",
        tabClass: "tab-link p-4 flex items-center",
        tabIconClass: "tab-icon me-2",
        tabLabelClass: "tab-title",
        tabActiveClass: "is-active",
        tabDisabledClass:
            "is-disabled pointer-events-none cursor-not-allowed opacity-50",
        transitioningClass: "is-transitioning",
    },
    // tag: { TODO: Add tag component classes
    //     rootClass: "tag",
    //     variantClass: "is-",
    //     sizeClass: "is-",
    //     roundedClass: "is-rounded",
    //     badgeClass: "badge",
    //     closeClass: "delete is-small",
    // },
    taginput: {
        override: true,
        rootClass: "taginput relative control shadow-xs ",
        containerClass: (): string => {
            const classes = [
                "taginput-container",
                "focus-within:ring-2",
                "cursor-text",
                "bg-gray-50",
                "border border-gray-200",
                "rounded",
                "flex",
                "items-center",
                "justify-start",
                "h-auto",
                "[&_.input]:focus:outline-none",
                "[&_.input]:border-none [&_.input]:shadow-none",
                "[&_.input]:shadow-none",
            ];
            return classes.join(" ");
        },
        closeClass: "delete is-small",
        itemClass: "tag m-1 px-1 rounded bg-gray-100 inline-flex",
        variantClass: "is-",
        expandedClass: "w-full",
    },
    timepicker: {
        override: true,
        rootClass: "timepicker w-auto",
        boxClass:
            "dropdown-item px-4 py-2 cursor-pointer flex justify-center items-center [&_select]:appearance-none font-medium",
        separatorClass: "is-colon control",
        footerClass: "timepicker-footer flex",
        sizeClass: "is-",
        selectClasses: {
            rootClass: "select control",
        },
    },
    tooltip: {
        override: true,
        rootClass: "tooltip relative inline-flex",
        contentClass: (): string => {
            const classes = [
                "tooltip-content",
                "shadow-lg",
                "absolute",
                "w-auto",
                "whitespace-nowrap",
                "font-normal",
                "bg-black",
                "text-white",
                "rounded-sm",
                "px-3",
                "py-1",
                "text-sm",
                "z-[38]",
                "before:absolute",
                "before:content-['']",
                "before:pointer-events-none",
                "before:z-[38]",
            ];
            return classes.join(" ");
        },
        triggerClass: "tooltip-trigger w-full",
        alwaysClass: "is-always opacity-100 visible",
        multilineClass: "is-multiline",
        variantClass: "is-",
        positionClass: "is-",
        teleportClass: "is-teleported",
    },
    // tree: { TODO: Add tree component classes
    //     rootClass: "tree menu",
    //     listClass: "menu-list",
    //     disabledClass: "is-disabled",
    //     emptyClass: "is-empty",
    //     itemClass: "tree-item",
    //     itemLabelClass: "menu-item",
    //     itemIconClass: "tree-icon",
    //     itemToggleIconClass: "tree-toggle-icon",
    //     itemSelectedClass: "is-active",
    //     itemDisabledClass: "is-disabled",
    //     subtreeClass: "submenu",
    // },
    upload: {
        override: true,
        rootClass: (): string => {
            const classes = [
                "upload",
                "[&_input[type='file']]:cursor-pointer",
                "[&_input[type='file']]:absolute",
                "[&_input[type='file']]:top-0",
                "[&_input[type='file']]:left-0",
                "[&_input[type='file']]:w-full",
                "[&_input[type='file']]:h-full",
                "[&_input[type='file']]:opacity-0",
                "[&_input[type='file']]:outline-none",
                "[&_input[type='file']]:z-[-1]",
            ];
            return classes.join(" ");
        },
        draggableClass:
            "upload-draggable w-full bg-transparent cursor-pointer p-12 border border-gray-500 border-dashed rounded-lg",
        variantClass: "is-",
        expandedClass: "w-full",
        disabledClass:
            "is-disabled pointer-events-none cursor-not-allowed opacity-50",
        draggableHoveredClass: "is-hovered",
    },
};

export { tailwindConfig as config };
