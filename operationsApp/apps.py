from django.apps import AppConfig


class OperationsappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'operationsApp'
    def ready(self):
        import operationsApp.signals