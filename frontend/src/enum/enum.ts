export const enum FoodType{
    'MAINFOOD', // 1
    'NOODLE', // 2 
    'VAGETABALE',
    'MEAL',
    'DRINK',
    'SMALLFOOD',
    "FRUIT"
}

export const foodTypeTextMap = {
    [FoodType.MAINFOOD]:'主食',
    [FoodType.NOODLE]:'面条',
    [FoodType.VAGETABALE]:'蔬菜',
    [FoodType.MEAL]:'肉类',
    [FoodType.DRINK]:'饮料',
    [FoodType.SMALLFOOD]:'小吃',
    [FoodType.FRUIT]:'水果'
}