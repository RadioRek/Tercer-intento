from django.db import models

# Create your models here.
class Categories(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return 'Code: ' + str(self.id) + ' - Name: ' + self.name
    
class Products(models.Model):
    name = models.CharField(max_length=50)
    price = models.IntegerField()
    description = models.TextField(max_length=500)
    image = models.ImageField(upload_to="vaperShop/products/")
    stock = models.IntegerField()
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)
    def __str__(self):
        return 'Code: ' + str(self.id) + ' - Name: ' + self.name + ' - Price: ' + str(self.price) + ' - Description: ' + self.description + ' - Image: ' + str(self.image) + ' - Stock: ' + str(self.stock) + ' - Category: ' + str(self.category)
