from typing import Any

from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.exceptions import AuthenticationFailed


class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request: Request, *args: Any, **kwargs: Any) -> Response:
        try:
            response: Response = super().post(request, *args, **kwargs)
            tokens: dict[str, str] = response.data

            access_token: str = tokens['access']
            refresh_token: str = tokens['refresh']

            res: Response = Response()

            res.data = {'Successful login': True}
            res.set_cookie(
                key='access_token',
                value=access_token,
                httponly=True,
                secure=True,
                samesite='None',
                path='/'
            )
            res.set_cookie(
                key='refresh_token',
                value=refresh_token,
                httponly=True,
                secure=True,
                samesite='None',
                path='/'
            )

            return res
        except AuthenticationFailed:
            return Response(data={'Successful login': False})
