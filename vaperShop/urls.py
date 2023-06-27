from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("shop/", views.shop, name="shop"),
    path("cart/", views.cart, name="cart"),
    path("aboutUs/", views.aboutUs, name="aboutUs"),
    path("contactUs/", views.contactUs, name="contactUs"),
    path("admin/", views.admin, name="admin"),
    path("products/", views.products, name="products"),
]
