import random

# Generate a key stream of provided length in the form of a binary string
# eg. '10011010'
# Using the seed value (an integer) as the starting value of our LFSR.
# The seed is acting as the encryption key in this case.
def lfsr(length, seed):
	state = seed
	result = ''
	for i in range(length):
		result += str(state & 0b0001)

		new_digit = (state & 0b1) ^ ((state >> 1) & 0b1) ^ ((state >> 2) & 0b1) ^ ((state >> 7) & 0b1)

		state = (state >> 1) | (new_digit << 127)

	return result

def encrypt(message, secret_num):
	# Output encrypted message as a list of numbers
	key_stream = lfsr(len(message) * 8, secret_num)

	result = []
	for (i, char) in enumerate(list(message)):
		char_bin = ord(char)
		key = int(key_stream[(8 * i):(8 * i) + 8], 2)
		encrypted_char = char_bin ^ key
		result.append(encrypted_char)

	return result

def decrypt(message, secret_num):
	# Output decrypted message as a string
	key_stream = lfsr(len(message) * 8, secret_num)

	result = ''
	for (i, encrypted_char) in enumerate(message):
		key = int(key_stream[(8 * i):(8 * i) + 8], 2)
		char = encrypted_char ^ key
		result += chr(char)

	return result

# Run the code!
password = random.randint(0, 0b1 << 127)
print("Password:\t", password)
message = "My secret text"
print("Message:\t", message)

encrypted_message = encrypt(message, password)
print("Encrypted message:\t", encrypted_message)
print("Decrypted message:\t", decrypt(encrypted_message, password))