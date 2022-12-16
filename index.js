function receivesAFunction (runFiveMiles) {
    runFiveMiles();
}

function returnsANamedFunction() {
   function shoot(){
    console.log("Kill.")
   }
   return shoot;
};
    
function returnsAnAnonymousFunction() {
     return () => `Fire ten rounds of ${ammo} at the target.` ;

    
}
