from django.contrib import admin

# Register your models here.
from .models import Profile, Skill, Project, Contact

admin.site.register(Profile)
admin.site.register(Skill)
admin.site.register(Project)
admin.site.register(Contact)
