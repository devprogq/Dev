import random

moves = ['rock', 'paper', 'scissors']

user_wins = 0
user_loss = 0
user_tie = 0

while True:
    # Initialize the program with the question "Choose between rock, paper, and scissors to play, q to quit"
    user_pick = input("Choose between rock, paper, and scissors to play, q to quit: ")

    # Check if the user wants to quit
    if user_pick == 'q':
        break

    # Make a random choice for the computer
    pc_pick = random.choice(moves)

    # Compare the user_pick and pc_pick to know who won
    if (user_pick == 'rock' and pc_pick == 'scissors') or (user_pick == 'paper' and pc_pick == 'rock') or (user_pick == 'scissors' and pc_pick == 'paper'):
        user_wins += 1
        print("You won!")
        print("The rival picked " + pc_pick)
    elif (user_pick == 'rock' and pc_pick == 'paper') or (user_pick == 'paper' and pc_pick == 'scissors') or (user_pick == 'scissors' and pc_pick == 'rock'):
        user_loss += 1
        print("You lost!")
        print("The rival picked " + pc_pick)
    elif (user_pick == 'rock' and pc_pick == 'rock') or (user_pick == 'paper' and pc_pick == 'paper') or (user_pick == 'scissors' and pc_pick == 'scissors'):
        user_tie += 1
        print("You got a draw!")
        print("The rival picked " + pc_pick)
    else:
        print("You didn't put a valid choice")

# Display the final results
# print(f"\nResults: Wins - {user_wins}, Losses - {user_loss}, Draws - {user_tie}")

