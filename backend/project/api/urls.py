from rest_framework import routers

from api import views as api_views

router = routers.DefaultRouter()
router.register('electiontype', api_views.ElectionTypeViewSet,
                basename="electiontype"),

urlpatterns = [
]

urlpatterns += router.urls
