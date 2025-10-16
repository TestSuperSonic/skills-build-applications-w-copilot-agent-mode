from django.test import TestCase
from .models import User, Team, Workout, Activity, Leaderboard

class UserModelTest(TestCase):
    def test_create_user(self):
        team = Team.objects.create(name='Test Team')
        user = User.objects.create(name='Test User', email='test@example.com', team=team)
        self.assertEqual(user.name, 'Test User')
        self.assertEqual(user.team.name, 'Test Team')

class WorkoutModelTest(TestCase):
    def test_create_workout(self):
        workout = Workout.objects.create(name='Pushups', description='Do pushups', difficulty='Easy')
        self.assertEqual(workout.name, 'Pushups')

class ActivityModelTest(TestCase):
    def test_create_activity(self):
        team = Team.objects.create(name='Test Team')
        user = User.objects.create(name='Test User', email='test2@example.com', team=team)
        workout = Workout.objects.create(name='Situps', description='Do situps', difficulty='Medium')
        activity = Activity.objects.create(user=user, workout=workout, duration_minutes=30)
        self.assertEqual(activity.user.name, 'Test User')
        self.assertEqual(activity.workout.name, 'Situps')

class LeaderboardModelTest(TestCase):
    def test_create_leaderboard_entry(self):
        team = Team.objects.create(name='Test Team')
        user = User.objects.create(name='Test User', email='test3@example.com', team=team)
        entry = Leaderboard.objects.create(user=user, score=100, rank=1)
        self.assertEqual(entry.user.name, 'Test User')
        self.assertEqual(entry.rank, 1)
