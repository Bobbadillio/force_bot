function new_game() {
}

function make_move() {
   var board = get_board();

   // we found an item! take it!
   let my_x = get_my_x();
   let my_y = get_my_y();

   var best_x = -1;
   var best_y = -1;
   var best_dist  = Number.MAX_SAFE_INTEGER;

   if (board[get_my_x()][get_my_y()] > 0) {
       return TAKE;
   }

   for (var i=0; i<WIDTH; i++) {
      for (var j=0; j<HEIGHT; j++) {
         let new_dist = (Math.abs(i-my_x)+Math.abs(j-my_y))
         if ((board[i][j]>0) & (new_dist < best_dist)){
            best_x = i;
            best_y = j;
            best_dist  = new_dist;
         }
      }
   }

   if ((my_x-best_x)>0) {
      return WEST;
   } else if ((my_x-best_x) < 0) {
      return EAST;
   } else {
     if ((my_y-best_y)>0) {
        return NORTH;
     } else if ((my_y-best_y)<0) {
        return SOUTH;
     } else {
        return TAKE;
     }
   }
}

// Optionally include this function if you'd like to always reset to a 
// certain board number/layout. This is useful for repeatedly testing your
// bot(s) against known positions.
//
//function default_board_number() {
//    return 123;
//}
