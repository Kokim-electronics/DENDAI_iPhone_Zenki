﻿// ==UserScript==
// @name         電大スマホUNIPA_前期非表示
// @namespace    https://twitter.com/kk_electro_0303
// @version      0.1.0
// @description  後期中は前期邪魔
// @author       @kk_electro_0303
// @match        https://portal.sa.dendai.ac.jp/*
// @icon         https://www.dendai.ac.jp/common/images/global/favicon.ico
// @updateURL    
// @downloadURL  
// ==/UserScript==

document.querySelectorAll("table")[0].remove();
document.querySelectorAll(".gakkiNendoArea")[0].remove();
document.getElementById('pmPage:funcForm:j_idt88:0:j_idt127').remove();
document.getElementById('pmPage:funcForm:j_idt88:0:j_idt128').remove();
document.getElementById('pmPage:funcForm:j_idt88:0:j_idt156').remove();
document.getElementById('pmPage:funcForm:j_idt88:1:j_idt89').remove();