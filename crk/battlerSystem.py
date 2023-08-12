from django.http import HttpResponse

class battleSystem():
    def __init__(self, cookie):
        self.cookie = cookie

    def battleRun(self):
        return HttpResponse(self.cookie)


