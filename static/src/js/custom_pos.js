/** @odoo-module */

import { ProductScreen } from "@point_of_sale/app/screens/product_screen/product_screen";
import { patch } from "@web/core/utils/patch";
import { _t } from "@web/core/l10n/translation";

patch(ProductScreen.prototype, {
    //@Override
    getNumpadButtons() {
        // Call the original getNumpadButtons method
        const buttons = super.getNumpadButtons(...arguments);
		
		console.log("\n\n\n getNumpadButtons ======buttons==========",buttons)
        // Add custom color classes based on button value
        return buttons.map((button) => {
            if (button.value === "quantity") {
                button.class = "button-qty"; // Blue for Qty
            } else if (button.value === "discount") {
                button.class = "button-discount"; // Orange for Discount
            } else if (button.value === "price") {
                button.class = "button-price"; // Green for Price
            } else if (button.value === "Backspace") {
                button.class = "button-delete"; // Red for Backspace (Delete)
            } else if (button.value === "-") {
                button.class = "button-plus-minus"; // Gray for +/-
            }
            return button;
        });
    },
});
