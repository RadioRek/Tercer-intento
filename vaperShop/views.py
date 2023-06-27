from django.shortcuts import render
from .models import Categories, Products
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view
from rest_framework.response import Response

import os


# Create your views here.
def index(request):
    if request.method == "POST":
        formType = request.POST.get("formType")
        if formType == "signUp":
            if request.POST["passField"] != request.POST["passField2"]:
                return render(
                    request,
                    "index.html",
                    {
                        "error": "passwordsDontMatch",
                        "message": "Passwords do not match!",
                    },
                )
            else:
                try:
                    hashedPassword = make_password(request.POST["passField"])
                    User.objects.create(
                        username=request.POST["userField"],
                        email=request.POST["emailField"],
                        password=hashedPassword,
                    )
                    return render(
                        request,
                        "index.html",
                        {
                            "success": "user created successfully!",
                        },
                    )
                except:
                    return render(
                        request,
                        "index.html",
                        {
                            "error": "userExists",
                            "message": "User or email already registered!",
                        },
                    )
        if formType == "logIn":
            user = authenticate(
                request,
                username=request.POST["userField"],
                password=request.POST["passField"],
            )
            if user is not None:
                login(request, user)
                return render(
                    request,
                    "index.html",
                    {
                        "success": "user logged in successfully!",
                    },
                )
            else:
                return render(
                    request,
                    "index.html",
                    {"error": "userNotFound", "message": "User not found!"},
                )
        if formType == "logOut":
            logout(request)
            return render(
                request,
                "index.html",
                {
                    "success": "user logged out successfully!",
                },
            )

    if request.method == "GET":
        return render(request, "index.html")


def shop(request):
    categories = Categories.objects.all()
    products = Products.objects.all()
    if request.method == "POST":
        formType = request.POST.get("formType")
        if formType == "signUp":
            if request.POST["passField"] != request.POST["passField2"]:
                return render(
                    request,
                    "shop.html",
                    {
                        "error": "passwordsDontMatch",
                        "message": "Passwords do not match!",
                        "categories": categories,
                        "products": products,
                    },
                )
            else:
                try:
                    hashedPassword = make_password(request.POST["passField"])
                    User.objects.create(
                        username=request.POST["userField"],
                        email=request.POST["emailField"],
                        password=hashedPassword,
                    )
                    return render(
                        request,
                        "shop.html",
                        {
                            "success": "user created successfully!",
                            "categories": categories,
                            "products": products,
                        },
                    )
                except:
                    return render(
                        request,
                        "shop.html",
                        {
                            "error": "userExists",
                            "message": "User or email already registered!",
                            "categories": categories,
                            "products": products,
                        },
                    )
        if formType == "logIn":
            user = authenticate(
                request,
                username=request.POST["userField"],
                password=request.POST["passField"],
            )
            if user is not None:
                login(request, user)
                return render(
                    request,
                    "shop.html",
                    {
                        "success": "user logged in successfully!",
                        "categories": categories,
                        "products": products,
                    },
                )
            else:
                return render(
                    request,
                    "shop.html",
                    {
                        "error": "userNotFound",
                        "message": "User not found!",
                        "categories": categories,
                        "products": products,
                    },
                )
        if formType == "logOut":
            logout(request)
            return render(
                request,
                "shop.html",
                {
                    "success": "user logged out successfully!",
                    "categories": categories,
                    "products": products,
                },
            )
    if request.method == "GET":
        return render(
            request, "shop.html", {"categories": categories, "products": products}
        )


def cart(request):
    if request.method == "POST":
        formType = request.POST.get("formType")
        if formType == "signUp":
            if request.POST["passField"] != request.POST["passField2"]:
                return render(
                    request,
                    "cart.html",
                    {
                        "error": "passwordsDontMatch",
                        "message": "Passwords do not match!",
                    },
                )
            else:
                try:
                    hashedPassword = make_password(request.POST["passField"])
                    User.objects.create(
                        username=request.POST["userField"],
                        email=request.POST["emailField"],
                        password=hashedPassword,
                    )
                    return render(
                        request,
                        "cart.html",
                        {
                            "success": "user created successfully!",
                        },
                    )
                except:
                    return render(
                        request,
                        "cart.html",
                        {
                            "error": "userExists",
                            "message": "User or email already registered!",
                        },
                    )
        if formType == "logIn":
            user = authenticate(
                request,
                username=request.POST["userField"],
                password=request.POST["passField"],
            )
            if user is not None:
                login(request, user)
                return render(
                    request,
                    "cart.html",
                    {
                        "success": "user logged in successfully!",
                    },
                )
            else:
                return render(
                    request,
                    "cart.html",
                    {"error": "userNotFound", "message": "User not found!"},
                )
        if formType == "logOut":
            logout(request)
            return render(
                request,
                "cart.html",
                {
                    "success": "user logged out successfully!",
                },
            )
        if formType == "buy":
            return render(
                request,
                "cart.html",
                {
                    "success": "purchase successful!",
                },
            )
    return render(request, "cart.html")


def aboutUs(request):
    if request.method == "POST":
        formType = request.POST.get("formType")
        if formType == "signUp":
            if request.POST["passField"] != request.POST["passField2"]:
                return render(
                    request,
                    "aboutUs.html",
                    {
                        "error": "passwordsDontMatch",
                        "message": "Passwords do not match!",
                    },
                )
            else:
                try:
                    hashedPassword = make_password(request.POST["passField"])
                    User.objects.create(
                        username=request.POST["userField"],
                        email=request.POST["emailField"],
                        password=hashedPassword,
                    )
                    return render(
                        request,
                        "aboutUs.html",
                        {
                            "success": "user created successfully!",
                        },
                    )
                except:
                    return render(
                        request,
                        "aboutUs.html",
                        {
                            "error": "userExists",
                            "message": "User or email already registered!",
                        },
                    )
        if formType == "logIn":
            user = authenticate(
                request,
                username=request.POST["userField"],
                password=request.POST["passField"],
            )
            if user is not None:
                login(request, user)
                return render(
                    request,
                    "aboutUs.html",
                    {
                        "success": "user logged in successfully!",
                    },
                )
            else:
                return render(
                    request,
                    "aboutUs.html",
                    {"error": "userNotFound", "message": "User not found!"},
                )
        if formType == "logOut":
            logout(request)
            return render(
                request,
                "aboutUs.html",
                {
                    "success": "user logged out successfully!",
                },
            )
    return render(request, "aboutUs.html")


def contactUs(request):
    if request.method == "POST":
        formType = request.POST.get("formType")
        if formType == "signUp":
            if request.POST["passField"] != request.POST["passField2"]:
                return render(
                    request,
                    "contactUs.html",
                    {
                        "error": "passwordsDontMatch",
                        "message": "Passwords do not match!",
                    },
                )
            else:
                try:
                    hashedPassword = make_password(request.POST["passField"])
                    User.objects.create(
                        username=request.POST["userField"],
                        email=request.POST["emailField"],
                        password=hashedPassword,
                    )
                    return render(
                        request,
                        "contactUs.html",
                        {
                            "success": "user created successfully!",
                        },
                    )
                except:
                    return render(
                        request,
                        "contactUs.html",
                        {
                            "error": "userExists",
                            "message": "User or email already registered!",
                        },
                    )
        if formType == "logIn":
            user = authenticate(
                request,
                username=request.POST["userField"],
                password=request.POST["passField"],
            )
            if user is not None:
                login(request, user)
                return render(
                    request,
                    "contactUs.html",
                    {
                        "success": "user logged in successfully!",
                    },
                )
            else:
                return render(
                    request,
                    "contactUs.html",
                    {"error": "userNotFound", "message": "User not found!"},
                )
        if formType == "logOut":
            logout(request)
            return render(
                request,
                "contactUs.html",
                {
                    "success": "user logged out successfully!",
                },
            )
    return render(request, "contactUs.html")


def admin(request):
    if request.method == "GET":
        categories = Categories.objects.all()
        products = Products.objects.all()
        return render(
            request, "admin.html", {"categories": categories, "products": products}
        )
    elif request.method == "POST":
        form_type = request.POST.get("formType")
        if form_type == "category":
            Categories.objects.create(name=request.POST["categoryName"])
        elif form_type == "item":
            category_id = request.POST["categoryID"]
            category = Categories.objects.get(id=category_id)
            Products.objects.create(
                name=request.POST["productName"],
                price=request.POST["price"],
                description=request.POST["description"],
                image=request.FILES.get("image"),
                stock=request.POST["stock"],
                category=category,
            )
        elif form_type == "change":
            product_id = request.POST["productID"]
            product = Products.objects.get(id=product_id)
            if "update" in request.POST:
                product.name = request.POST["nameChange"]
                product.price = request.POST["priceChange"]
                product.description = request.POST["descriptionChange"]
                if request.FILES.get("imageChange") != None:
                    os.remove(product.image.path)
                    product.image = request.FILES.get("imageChange")
                product.stock = request.POST["stockChange"]
                product.category = Categories.objects.get(
                    id=request.POST["categoryChange"]
                )
                product.save()
            elif "delete" in request.POST:
                product_image_path = product.image.path
                product.delete()
                if os.path.exists(product_image_path):
                    os.remove(product_image_path)
        elif form_type == "logOut":
            logout(request)
            return render(
                request,
                "index.html",
                {
                    "success": "user logged out successfully!",
                },
            )
        categories = Categories.objects.all()
        products = Products.objects.all()
        return render(
            request, "admin.html", {"categories": categories, "products": products}
        )

@api_view(['GET'])
def products(request):
    products = list(Products.objects.values())
    return Response(products)