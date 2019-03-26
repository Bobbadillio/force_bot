function new_game() {
}

function make_move() {
   var board = get_board();

   // we found an item! take it!
   var my_x = get_my_x();
   var my_y = get_my_y();

   var best_x = -1;
   var best_y = -1;
   var best_dist  = 1024;

   if (board[get_my_x()][get_my_y()] > 0) {
       return TAKE;
   }

   for (var i=0; i<WIDTH; i++) {
      for (var j=0; j<HEIGHT; j++) {
         var new_dist = (Math.abs(i-my_x)+Math.abs(j-my_y))
         if ((board[i][j]>0) & (new_dist < best_dist)){
            best_x = i;
            best_y = j;
            best_dist  = new_dist;
         }
      }
   }

   var x_diff = my_x - best_x;
   var y_diff = my_y - best_y;

   if (x_diff>0) {
      return WEST;
   } else if (x_diff < 0) {
      return EAST;
   } else {
     if (y_diff>0) {
        return NORTH;
     } else if (y_diff<0) {
        return SOUTH;
     } else {
        return TAKE;
     }
   }
}
