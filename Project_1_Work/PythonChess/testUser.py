import lichess.api

userName = input("What is your Lichess username: ")

user = lichess.api.user(userName)

blitz = user.get('perfs', {}).get('blitz', {}).get('rating')
classical = user.get('perfs', {}).get('classical', {}).get('rating')

print('Blitz Rating:', blitz, '|', 'Classical Rating:', classical)