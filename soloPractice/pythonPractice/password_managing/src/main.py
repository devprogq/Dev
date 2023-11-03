def createPassword():
    password = input("Insert your password to start: ")
    print("This is your new password: " + password)    

def deletePassword():
    password = ""
    print("Now you don't have a password and have to create it again.")
    createPassword()

def changePassword():
    newPassword = input("Write your new password: ")
    if (newPassword == password):
        print("That is the same password you had before, try again.")
        
    else:
        print("This is the edited password: " + password)

print("Hello to my password managing program, to start, save a first password")
createPassword()

print("Now that you have your first password, we can change it or delete it.")

while True:
    action = input("Press 1 to edit a password, press 2 to delete a password, press q to quit the program.")

    if action == 'q':
        break

    elif (action == '1'):
        changePassword()
    elif (action == '2'):
        deletePassword()