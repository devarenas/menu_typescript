"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const Input_1 = require("./Input");
const MenuElement_1 = require("./MenuElement");
class Menu {
    constructor() {
        this.mainMenu = [];
        this.soupMenu = [];
        this.chefSpecialsMenu = [];
        this.chickenMenu = [];
        this.beefMenu = [];
        this.beveragesMenu = [];
        this.soupOptions = [];
        this.chefSpecialsOptions = [];
        this.chickenOptions = [];
        this.beefOptions = [];
        this.beveragesOptions = [];
    }
    fillMainMenu() {
        this.mainMenu = [
            { option: 1, message: 'Soup' },
            { option: 2, message: 'Chef\'s Specials' },
            { option: 3, message: 'Chicken' },
            { option: 4, message: 'Beef' },
            { option: 5, message: 'Beverages' },
            { option: 6, message: 'exit' },
        ];
        this.fillOptions();
    }
    fillOptions() {
        this.soupOptions.push(new MenuElement_1.MenuElement('Wonton Soup (Chicken)', 2.25, '🥟'));
        this.soupOptions.push(new MenuElement_1.MenuElement('Chicken Corn Soup', 1.95, '🍗'));
        this.soupOptions.push(new MenuElement_1.MenuElement('Vegetable Corn Soup', 2.25, '🌽'));
        this.chefSpecialsOptions.push(new MenuElement_1.MenuElement('Orange Beef', 8.95, '🍊'));
        this.chefSpecialsOptions.push(new MenuElement_1.MenuElement('Kung Pao Shrimp', 8.50, '🍤'));
        this.chickenOptions.push(new MenuElement_1.MenuElement('Lemon Chicken', 9.95, '🍋'));
        this.chickenOptions.push(new MenuElement_1.MenuElement('Sesame Chicken', 9.95, '🥜'));
        this.chickenOptions.push(new MenuElement_1.MenuElement('Hunan Chicken', 10.50, '🌱'));
        this.beefOptions.push(new MenuElement_1.MenuElement('Pepper Steak', 9.95, '🌶'));
        this.beefOptions.push(new MenuElement_1.MenuElement('Manchurian Beef', 11.95, '🥩'));
        this.beveragesOptions.push(new MenuElement_1.MenuElement('Piña Colada', 3.00, '🍍'));
        this.beveragesOptions.push(new MenuElement_1.MenuElement('Spanish Coffee', 5.50, '☕'));
        this.fillSubMenus();
    }
    fillSubMenus() {
        this.soupOptions.forEach((item) => {
            this.soupMenu.push({ name: item.id, message: item.printOptions() });
        });
        this.chefSpecialsOptions.forEach((item) => {
            this.chefSpecialsMenu.push({ name: item.id, message: item.printOptions() });
        });
        this.chickenOptions.forEach((item) => {
            this.chickenMenu.push({ name: item.id, message: item.printOptions() });
        });
        this.beefOptions.forEach((item) => {
            this.beefMenu.push({ name: item.id, message: item.printOptions() });
        });
        this.beveragesOptions.forEach((item) => {
            this.beveragesMenu.push({ name: item.id, message: item.printOptions() });
        });
    }
    showMainMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            this.fillMainMenu();
            let input = yield Input_1.Input.getSelect('Select a Menu option', this.mainMenu);
            switch (input.data) {
                case 1:
                    this.showSubMenuOption('Select your Soup', this.soupMenu, this.soupOptions);
                    break;
                case 2:
                    this.showSubMenuOption('Select your Chef\'s Special', this.chefSpecialsMenu, this.chefSpecialsOptions);
                    break;
                case 3:
                    this.showSubMenuOption('Select your Chicken', this.chickenMenu, this.chickenOptions);
                    break;
                case 4:
                    this.showSubMenuOption('Select your Beef', this.beefMenu, this.beefOptions);
                    break;
                case 5:
                    this.showSubMenuOption('Select your Beverage', this.beveragesMenu, this.beveragesOptions);
                    break;
                case 6:
                    console.log(`
                    ===============================================
                    ===============================================
                            Enjoy your meal 😃🍴 !!!!
                    ===============================================
                    ===============================================
                `);
                    break;
                default:
                    console.log('no se selecciono ninguna opcion');
            }
            if (input.data === 1) {
            }
        });
    }
    showSubMenuOption(message, subMenu, subMenuOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            let input = yield Input_1.Input.getSelectById(message, subMenu);
            subMenuOptions.forEach((option) => {
                if (input.data === option.id) {
                    console.log(`
                =================================================================================
                Here is your ${option.emoji}  at a $${option.price} cost
                =================================================================================
                
                `);
                }
            });
            this.removeAll();
            this.showMainMenu();
        });
    }
    removeAll() {
        this.soupOptions = [];
        this.chefSpecialsOptions = [];
        this.chickenOptions = [];
        this.beefOptions = [];
        this.beveragesOptions = [];
        this.soupMenu = [];
        this.chefSpecialsMenu = [];
        this.chickenMenu = [];
        this.beefMenu = [];
        this.beveragesMenu = [];
    }
}
exports.Menu = Menu;
