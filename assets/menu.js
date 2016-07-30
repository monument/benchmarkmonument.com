var C_MENU_BORDER = 2
var C_MENU_SPACING = 0
var C_MENU_BGCOLOR = ""
var C_MENU_AUTO_CLOSE = true

var hoursBtn = new NOF_Menu_Button('html/hours.html', 'assets/images/auto_generated_images/Hours_Np4.gif', 'assets/images/auto_generated_images/Hours_NRp2.gif')
var gravesBtn = new NOF_Menu_Button('html/famous_graves.html', 'assets/images/auto_generated_images/Famous_Graves_Np4.gif', 'assets/images/auto_generated_images/Famous_Graves_NRp2.gif')
new NOF_Menu(
  new NOF_Main_Menu(new NOF_Menu_Item('NavigationBar4_1', 'vertical', 'right', 130, 0, hoursBtn)),
  new NOF_Main_Menu(new NOF_Menu_Item('NavigationBar4_2', 'vertical', 'right', 130, 0, gravesBtn))
)
