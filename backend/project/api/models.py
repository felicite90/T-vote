from django.db import models


class ElectionType(models.Model):
    """Classe ElectionType"""
    code = models.CharField('code', max_length=10)
    name = models.CharField('libellé', max_length=64)

    def save(self, *args, **kwargs):
        # Avant d'enregistrer, on met les deux champs en gras
        self.code = self.code.upper()
        self.name = self.name.upper()
        super(ElectionType, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
