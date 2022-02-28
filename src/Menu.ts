import { Choice, Input, SelectChoice } from './Input';
import { MenuElement } from './MenuElement';

export class Menu {
    mainMenu: SelectChoice[] = [];
    soupMenu: Choice[] = [];
    chefSpecialsMenu: Choice[] = [];
    chickenMenu: Choice[] = [];
    beefMenu: Choice[] = [];
    beveragesMenu: Choice[] = [];
    soupOptions: MenuElement[] = [];
    chefSpecialsOptions: MenuElement[] = [];
    chickenOptions: MenuElement[] = [];
    beefOptions: MenuElement[] = [];
    beveragesOptions: MenuElement[] = [];


    fillMainMenu(){

        this.mainMenu = [
            { option: 1, message: 'Soup' },
            { option: 2, message: 'Chef\'s Specials' },
            { option: 3, message: 'Chicken' },
            { option: 4, message: 'Beef' },
            { option: 5, message: 'Beverages' },
            { option: 6, message: 'exit'},
          ];
          this.fillOptions();

    }

    fillOptions(){
        
        this.soupOptions.push(new MenuElement('Wonton Soup (Chicken)',2.25,'🥟'))
        this.soupOptions.push(new MenuElement('Chicken Corn Soup',1.95,'🍗'))
        this.soupOptions.push(new MenuElement('Vegetable Corn Soup',2.25,'🌽'))

        this.chefSpecialsOptions.push(new MenuElement('Orange Beef',8.95,'🍊'))
        this.chefSpecialsOptions.push(new MenuElement('Kung Pao Shrimp',8.50,'🍤'))

        this.chickenOptions.push(new MenuElement('Lemon Chicken',9.95,'🍋'))
        this.chickenOptions.push(new MenuElement('Sesame Chicken',9.95,'🥜'))
        this.chickenOptions.push(new MenuElement('Hunan Chicken',10.50,'🌱'))

        this.beefOptions.push(new MenuElement('Pepper Steak',9.95,'🌶'))
        this.beefOptions.push(new MenuElement('Manchurian Beef',11.95,'🥩'))

        this.beveragesOptions.push(new MenuElement('Piña Colada',3.00,'🍍'))
        this.beveragesOptions.push(new MenuElement('Spanish Coffee',5.50,'☕'))

        this.fillSubMenus();

    }

    fillSubMenus(){
       
        this.soupOptions.forEach((item) => {
            this.soupMenu.push({name: item.id, message: item.printOptions()})
        })       

        this.chefSpecialsOptions.forEach((item) => {
            this.chefSpecialsMenu.push({name: item.id, message: item.printOptions()})
        })  

        this.chickenOptions.forEach((item) => {
            this.chickenMenu.push({name: item.id, message: item.printOptions()})
        })  

        this.beefOptions.forEach((item) => {
            this.beefMenu.push({name: item.id, message: item.printOptions()})
        })  

        this.beveragesOptions.forEach((item) => {
            this.beveragesMenu.push({name: item.id, message: item.printOptions()})
        })  



    }


    async showMainMenu(){
        this.fillMainMenu();
        let input = await Input.getSelect('Select a Menu option', this.mainMenu);
        switch (input.data) {
            case 1:
                this.showSubMenuOption('Select your Soup', this.soupMenu, this.soupOptions)
                break;
            case 2:
                this.showSubMenuOption('Select your Chef\'s Special', this.chefSpecialsMenu, this.chefSpecialsOptions)
                break;
            case 3:
                this.showSubMenuOption('Select your Chicken', this.chickenMenu, this.chickenOptions)
                break;
            case 4:
                this.showSubMenuOption('Select your Beef', this.beefMenu, this.beefOptions)
                break;
            case 5:
                this.showSubMenuOption('Select your Beverage', this.beveragesMenu, this.beveragesOptions)
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
        if(input.data === 1){
            
        }
        
    }

    async showSubMenuOption(message: string, subMenu: Choice[], subMenuOptions: MenuElement[]){
        let input = await Input.getSelectById(message, subMenu);
        subMenuOptions.forEach ((option) =>{
            if(input.data === option.id){
                console.log(`
                =================================================================================
                Here is your ${option.emoji}  at a $${option.price} cost
                =================================================================================
                
                `);
            }
        });    
        this.removeAll();
        this.showMainMenu();  
            
    }

    removeAll(){
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
