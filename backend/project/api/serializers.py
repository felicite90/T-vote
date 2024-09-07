from rest_framework import serializers

from api.models import ElectionType

class ElectionTypeSerializer(serializers.ModelSerializer):
    """Serialisation de la classe ElectionType"""
    class Meta:
        model = ElectionType
        fields = '__all__'
