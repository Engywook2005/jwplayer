export default (dockButtons = []) => {
    const buttonsHtml = dockButtons
        .map(button => {
            return dockButton(button.btnClass, button.id, button.img, button.tooltip);
        }).join('');

    return (
        `<div class="jw-dock jw-reset">` +
            `${buttonsHtml}` +
        `</div>`
    );
};


const dockButton = (buttonClass, buttonId, image, tooltipText) => {
    const style = image ? `style='background-image: url("${image}")` : '';
    const aria = tooltipText? `aria-label="{{tooltip}}" role="button" tabindex="0"` : '';
    const tooltipHtml = tooltipText ? tooltip(tooltipText) : '';
    return (
        `<div class="jw-dock-button jw-background-color jw-reset ${buttonClass || ''}" button="${buttonId}">` +
            `<div class="jw-icon jw-dock-image jw-reset" ${style} ${aria}</div>` +
            `<div class="jw-arrow jw-reset"></div>` +
            `${tooltipHtml}` +
        `</div>`
    );
};

const tooltip = (text) => {
    return (
        `<div class="jw-overlay jw-background-color jw-reset">` +
            `<span class="jw-text jw-dock-text jw-reset">${text}</span>` +
        `</div>`
    );
};
