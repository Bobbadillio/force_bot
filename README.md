## Welcome!

This is an attempt at solving an interesting 2 player AI problem of perfect information with simultaneous movement. Two bots attempt to collect rewards in a variable number of categories. Whichever bot has the most rewards in the highest number of categories wins.

###Definitions:
1. Deterministic Policy
    I'm going to use 'deterministic policy' to mean a strategy like 'move to nearest reward' where the AI never really has any options. In fact, I will probably always use deterministic policy to mean 'move to nearest (relevant) reward'

###TODO: Items to implement
1. ``Random Movement``
2. Movement to Nearest
  1. ``Any reward category``
  2. Ignore irrelevant/won categories
3. Agents and Game Simulation
  1. Custom Game Representation
    * Describe game state using type and coordinates of rewards, and coordinates of AI agents
  2. Agents with Goals
    * Create a callable agent that takes a goal coordinate and returns a direction towards that goal, or take if it's at the goal
  3. Game Simulation
    * Update the custom game representation 'warp' that jumps ahead to the next turn when an agent achieves their goal
    * Use some logic to check if the game has terminated with a winner
  4. Move Evaluation
    * Simulate a game for each remaining reward where this agent takes that reward as a target, the opponent uses a deterministic policy, and a random winning target is chosen. 
  5. 1-Player Search
    * Implement a game tree maximization algorithm where the opponent uses a deterministic policy, and player searches over an action space where it chooses available rewards as a target





