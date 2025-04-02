import pygame
import numpy as np
import math

class Asteroid:
    def __init__(self, x, y, radius, surface):
        # Position of the tip of the asteroid
        self.pos = np.array([x, y])
        # Additional properties goes here:


        # Leave the rest of these properties
        self.surface = surface
        self.radius = radius

    def update(self, asteroids):
        # Action required!

        # Set position of asteroid based on given parameter
        self.pos = self.pos

        # Leave the rest of the code
        # Wrap asteroid around the edges so it always stay on screen
        if self.pos[0] > self.surface.get_width():
            self.pos[0] = 0
        elif self.pos[0] < 0:
            self.pos[0] = self.surface.get_width()

        if self.pos[1] > self.surface.get_height():
            self.pos[1] = 0
        elif self.pos[1] < 0:
            self.pos[1] = self.surface.get_height()

    # Draw the asteroid onto the canvas
    def draw(self):
        pygame.draw.circle(self.surface, (0, 0, 255), (self.pos[0], self.pos[1]), self.radius)
