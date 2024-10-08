import uuid
from django.db import models


class User(models.Model):
    user_id = models.UUIDField()
    full_name = models.CharField(max_length=250)
    profile_pic = models.URLField(max_length=1000, null=True, blank=True)

    class Meta:
        indexes = [
            models.Index(fields=["user_id"]),
        ]


class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    content = models.TextField()
    like_count = models.PositiveIntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
