let worktime=30, breaktime=5;


console.log("hei");
document.getElementById("workPlus").addEventListener("click", function(){
  worktime++;
  document.getElementById("workTime").innerHTML = worktime;
  console.log("click");
}); 

document.getElementById("workMinus").addEventListener("click", function(){
  worktime--;
  document.getElementById("workTime").innerHTML = worktime;
  console.log("click");
}); 

document.getElementById("breakPlus").addEventListener("click", function(){
  breaktime++;
  document.getElementById("breakTime").innerHTML = breaktime;
  console.log("click");
}); 

document.getElementById("breakMinus").addEventListener("click", function(){
  breaktime--;
  document.getElementById("breakTime").innerHTML = breaktime;
  console.log("click");
}); 






/* leftovers from mozilla example */

/**
 * CSS to hide everything on the page,
 * except for elements that have the "beastify-image" class.
 */
/*const hidePage = `body > :not(.choose_number) {
                    display: none;
                  }`;

/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
*/ 


/*
function listenForClicks() {
  document.addEventListener("click", (e) => {
    function test(tabs) {
      browser.tabs.insertCSS({code: hidePage}).then(() => {
        let url = foxifyNameToURL(e.target.textContent);
        browser.tabs.sendMessage(tabs[0].id, {
          command: "foxify",
          foxifyURL: url
        });
      });
    }
    
    /*  
    document.getElementById("workPlus").addEventListener("click", function(){
      document.getElementById("workTime").innerHTML = "X";
      console.log("click");
    ; 


  }); 
*/
    /**
     * Remove the page-hiding CSS from the active tab,
     * send a "reset" message to the content script in the active tab.
     */
/*
     function reset(tabs) {
      browser.tabs.removeCSS({code: hidePage}).then(() => {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "reset",
        });
      });
    }
 });

}

*/