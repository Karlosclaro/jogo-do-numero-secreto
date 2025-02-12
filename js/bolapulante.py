# Suggested code may be subject to a license. Learn more: ~LicenseLog:2160624617.
# Suggested code may be subject to a license. Learn more: ~LicenseLog:2304840519.
# Suggested code may be subject to a license. Learn more: ~LicenseLog:3101255522.
import pygame
import math
import random

# Initialize Pygame
pygame.init()

# --- Constants ---
WIDTH, HEIGHT = 800, 600
FPS = 60
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
GRAVITY = 0.2
FRICTION = 0.01
BALL_RADIUS = 20
HEXAGON_SIDES = 6
HEXAGON_RADIUS = 200
HEXAGON_CENTER = (WIDTH // 2, HEIGHT // 2)
ROTATION_SPEED = 0.01

# --- Setup ---
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Bouncing Ball in Rotating Hexagon")
clock = pygame.time.Clock()

# --- Classes ---
class Ball:
    def __init__(self, x, y, radius, color):
        self.x = x
        self.y = y
        self.radius = radius
        self.color = color
        self.vel_x = random.uniform(-5, 5)  # Initial horizontal velocity
        self.vel_y = 0  # Initial vertical velocity

    def draw(self, surface):
        pygame.draw.circle(surface, self.color, (int(self.x), int(self.y)), self.radius)

    def update(self, walls):
        # Apply gravity
        self.vel_y += GRAVITY


        # Apply friction (only on horizontal component)
        if self.vel_x != 0:
            self.vel_x -= FRICTION * (self.vel_x / abs(self.vel_x))

        if abs(self.vel_x) < 0.1:
            self.vel_x = 0

        # Move the ball
        self.x += self.vel_x
        self.y += self.vel_y

        # Check for collisions with walls
        for wall in walls:
            self.check_collision(wall)

    def check_collision(self, wall):






        # Line segment endpoints
        x1, y1 = wall.start
        x2, y2 = wall.end



        dx = x2 - x1
        dy = y2 - y1
        line_length_sq = dx * dx + dy * dy
        if line_length_sq == 0:
            return


        # Find t for projecting ball's center onto the wall segment
        t = ((self.x - x1) * dx + (self.y - y1) * dy) / line_length_sq
        t = max(0, min(1, t))
        proj_x = x1 + t * dx
        proj_y = y1 + t * dy








        # Distance from ball center to projection point
        diff_x = self.x - proj_x
        diff_y = self.y - proj_y
        distance = math.hypot(diff_x, diff_y)

        if distance < self.radius:
            # Collision occurred; compute the normal.
            if distance == 0:
                # Avoid division by zero; choose arbitrary normal.
                n_x, n_y = 0, 1
            else:



                n_x = diff_x / distance
                n_y = diff_y / distance








            # Push the ball out of the wall
            penetration = self.radius - distance
            self.x += n_x * penetration
            self.y += n_y * penetration




            # Reflect the velocity using the normal.
            dot = self.vel_x * n_x + self.vel_y * n_y
            self.vel_x = self.vel_x - 2 * dot * n_x
            self.vel_y = self.vel_y - 2 * dot * n_y
























class Wall:

    def __init__(self, start, end):
        self.start = start
        self.end = end






    def draw(self, surface):
        pygame.draw.line(surface, RED, self.start, self.end, 2)

# --- Helper Functions ---
def get_hexagon_points(angle):
    points = []
    for i in range(HEXAGON_SIDES):
        theta = (2 * math.pi / HEXAGON_SIDES) * i + angle
        x = HEXAGON_CENTER[0] + HEXAGON_RADIUS * math.cos(theta)
        y = HEXAGON_CENTER[1] + HEXAGON_RADIUS * math.sin(theta)
        points.append((x, y))
    return points

# --- Main Code ---
def main():
    running = True
    angle = 0
    ball = Ball(HEXAGON_CENTER[0], HEXAGON_CENTER[1], BALL_RADIUS, WHITE)

    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        # Update the rotation angle
        angle += ROTATION_SPEED

        # Compute hexagon vertices from the rotated angle.
        hex_points = get_hexagon_points(angle)

        # Build walls from consecutive vertices
        walls = []
        for i in range(len(hex_points)):
            start = hex_points[i]
            end = hex_points[(i + 1) % len(hex_points)]
            walls.append(Wall(start, end))

        # Update ball physics with collisions
        ball.update(walls)

        # Draw everything
        screen.fill(BLACK)
        # Draw hexagon walls
        for wall in walls:
            wall.draw(screen)
        ball.draw(screen)

        pygame.display.flip()
        clock.tick(FPS)

    pygame.quit()

if __name__ == "__main__":
    main()
