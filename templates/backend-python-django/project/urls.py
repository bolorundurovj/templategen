from django.urls import path
from project.views import (
    root_view,
    health_view,
    info_view,
    items_list,
    item_detail,
)

urlpatterns = [
    path('', root_view, name='root'),
    path('api/health', health_view, name='health'),
    path('api/info', info_view, name='info'),
    path('api/items', items_list, name='items-list'),
    path('api/items/', items_list, name='items-list-slash'),
    path('api/items/<int:item_id>', item_detail, name='item-detail'),
    path('api/items/<int:item_id>/', item_detail, name='item-detail-slash'),
]

handler404 = 'project.views.handler404'
handler500 = 'project.views.handler500'
