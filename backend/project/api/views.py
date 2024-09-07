from rest_framework import viewsets

from api.models import ElectionType
from api.serializers import ElectionTypeSerializer


class ElectionTypeViewSet(viewsets.ModelViewSet):
    '''
        Pour les viewsets de TypeElection
    '''
    queryset = ElectionType.objects.all()
    serializer_class = ElectionTypeSerializer
