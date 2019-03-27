function new_game() {
}

function make_move() {
   let board = get_board();
   let remaining_fruit = [];
   let item_types = get_number_of_item_types();

   for (let k=1; k <= item_types; k++) {
     let opp_count = get_opponent_item_count(k);
     let my_count = get_my_item_count(k);
     let total_count = get_total_item_count(k);
     let decisive_count = total_count/2;
     if ((opp_count <= decisive_count) && (my_count <= decisive_count)) {
        remaining_fruit.push(k);
     }
   }

   // we found an item! take it!
   let my_x = get_my_x();
   let my_y = get_my_y();
   let best_x = -1;
   let best_y = -1;
   let best_dist  = 1024;

   if (remaining_fruit.indexIf(board[get_my_x()][get_my_y()] )>=0) {
       return TAKE;
   }

   for (let i=0; i<WIDTH; i++) {
      for (let j=0; j<HEIGHT; j++) {
         let new_dist = (Math.abs(i-my_x)+Math.abs(j-my_y));
         if (remaining_fruit.includes(board[i][j]) && (new_dist < best_dist)){
            best_x = i;
            best_y = j;
            best_dist  = new_dist;
         }
      }
   }

   let x_diff = my_x - best_x;
   let y_diff = my_y - best_y;

   // Move east or west to approach destination
   if (x_diff>0) {
      return WEST;
   } else if (x_diff < 0) {
      return EAST;
   } else {
     // move north or south to approach destination
     if (y_diff>0) {
        return NORTH;
     } else if (y_diff<0) {
        return SOUTH;
     } else {
        // previous checks should guarantee this take is never returned
        // still, better safe than sorry
        return TAKE;
     }
   }
}
