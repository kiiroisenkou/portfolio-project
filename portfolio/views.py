from django.shortcuts import render, redirect
from .models import Profile, Skill, Project
from .forms import ContactForm

def home(request):
    profile = Profile.objects.first()
    skills = Skill.objects.all()
    projects = Project.objects.all()
    return render(request, 'portfolio/home.html', {
        'profile': profile,
        'skills': skills,
        'projects': projects,
    })

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ContactForm()
    
    return render(request, 'portfolio/contact.html', {'form': form})

def about(request):
    profile = Profile.objects.first()
    return render(request, 'portfolio/about.html', {'profile': profile})

def skills(request):
    skills = Skill.objects.all()
    return render(request, 'portfolio/skills.html', {'skills': skills})

def projects(request):
    projects = Project.objects.all()
    return render(request, 'portfolio/projects.html', {'projects': projects})
